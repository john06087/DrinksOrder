package drinks_service

import (
	"github.com/BcYe/blog-api/pkg/error_handler"
	"github.com/BcYe/blog-api/pkg/models"
)

func SaveDrinksOrder(drinks_order models.Drinks_order) bool {
	// 1. 新增飲料訂單
	var result bool = true
	execResult, err := models.Db.Exec("insert into bc_db.drinks_order (user_name, drinks_name, sugar, ice, price, note, order_date) values (?,?,?,?,?,?,?)",
		drinks_order.User_name,
		drinks_order.Drinks_name,
		drinks_order.Sugar,
		drinks_order.Ice,
		drinks_order.Price,
		drinks_order.Note,
		drinks_order.Order_date)
	error_handler.CheckErr(err)

	if execNum, _ := execResult.RowsAffected(); execNum != 1 {
		result = false
	}

	// 2. 回傳結果
	return result

}

func QueryDrinksOrderByDate(orderDate string) []models.Drinks_order {
	// 1. 以日期取得飲料訂單
	var drinks_order_slice []models.Drinks_order
	rows, err := models.Db.Query("select id, user_name, drinks_name, sugar, ice, price, note, order_date from bc_db.drinks_order where order_date = ? order by drinks_name, sugar, ice", orderDate)
	error_handler.CheckErr(err)

	// 2. 整理回傳格式
	for rows.Next() {
		drinks_order := models.Drinks_order{}
		err := rows.Scan(&drinks_order.Id, &drinks_order.User_name, &drinks_order.Drinks_name, &drinks_order.Sugar, &drinks_order.Ice, &drinks_order.Price, &drinks_order.Note, &drinks_order.Order_date)
		error_handler.CheckErr(err)
		drinks_order_slice = append(drinks_order_slice, drinks_order)
	}

	// 3. 回傳結果
	return drinks_order_slice
}
