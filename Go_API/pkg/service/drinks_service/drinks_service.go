package drinks_service

import "github.com/BcYe/blog-api/pkg/models"

func SaveDrinksOrder() {
	// 1. 取得前端參數

	// 2. 取得用戶個人資料
	models.Db.Exec("insert into bc_db.drinks_order (user_name, drinks_name, sugar, ice, price, note, order_date) values ('葉','茉香綠茶',0,2,30,'',1959565656)")

	// 3. 回傳結果

}

func QueryDrinksOrderByDate() {
	// 1. 取得前端參數

	// 2. 取得用戶個人資料

	// 3. 回傳結果

}
