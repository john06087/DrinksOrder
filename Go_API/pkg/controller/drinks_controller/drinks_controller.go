package drinks_controller

import (
	"fmt"
	"strconv"
	"time"

	"github.com/BcYe/blog-api/pkg/error_handler"
	"github.com/BcYe/blog-api/pkg/models"
	"github.com/BcYe/blog-api/pkg/service/drinks_service"
	"github.com/BcYe/blog-api/pkg/vo"
	"github.com/gin-gonic/gin"
)

func SaveDrinksOrder(ginContext *gin.Context) {
	// 1. 取得前端參數
	var drinks_order_vo vo.Drinks_order_vo
	ginContext.ShouldBindJSON(&drinks_order_vo) // pass as pointer

	// 2. 取得用戶個人資料
	nowTime := time.Now()
	nowTimeInt, _ := strconv.Atoi(nowTime.Format("20060102"))
	drinks_order := models.Drinks_order{
		User_name:   drinks_order_vo.User_name,
		Drinks_name: drinks_order_vo.Drinks_name,
		Sugar:       drinks_order_vo.Sugar,
		Ice:         drinks_order_vo.Ice,
		Price:       drinks_order_vo.Price,
		Note:        drinks_order_vo.Note,
		Order_date:  nowTimeInt,
	}
	execResult := drinks_service.SaveDrinksOrder(drinks_order)

	// 3. Error Catch
	var hasError bool = error_handler.CatchErr()

	// 4. 回傳結果
	ginContext.JSON(200, gin.H{ // response json
		"result": !hasError && execResult,
	})

}

func DrinksOrderList(ginContext *gin.Context) {
	// 1. 取得前端參數
	var inputs map[string]interface{}
	ginContext.Bind(&inputs)
	var orderDate string = fmt.Sprintf("%v", inputs["orderDate"])

	// 2. 取得用戶個人資料
	drinks_order_slice := drinks_service.QueryDrinksOrderByDate(orderDate)

	// 3. Error Catch
	var hasError bool = error_handler.CatchErr()

	// 4. 回傳結果
	ginContext.JSON(200, gin.H{ // response json
		"result":             !hasError,
		"drinks_order_slice": drinks_order_slice,
	})
}
