package drinks_controller

import (
	"fmt"
	"strconv"
	"time"

	"github.com/BcYe/blog-api/pkg/error_handler"
	"github.com/BcYe/blog-api/pkg/models"
	"github.com/BcYe/blog-api/pkg/service/drinks_service"
	"github.com/BcYe/blog-api/pkg/util"
	"github.com/BcYe/blog-api/pkg/vo"
	"github.com/gin-gonic/gin"
)

func SaveDrinksOrder(ginContext *gin.Context) {
	// 1. 取得前端參數
	var goNext = true
	var drinks_order_vo vo.Drinks_order_vo
	ginContext.ShouldBindJSON(&drinks_order_vo)

	// 2. 驗證參數
	goNext = validateSaveDrinksOrder(drinks_order_vo)

	// 3. 儲存用戶飲料訂單
	if goNext {
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
		goNext = drinks_service.SaveDrinksOrder(drinks_order)
	}

	// 4. Error Catch
	if goNext {
		var hasError bool = error_handler.CatchErr()
		goNext = !hasError
	}

	// 5. 回傳結果
	ginContext.JSON(200, gin.H{ // response json
		"result": goNext,
	})

}

// 驗證 SaveDrinksOrder 輸入參數是否有誤
func validateSaveDrinksOrder(vin vo.Drinks_order_vo) bool {
	var validateResult = true

	if util.IsEmpty(vin.User_name) || util.IsEmpty(vin.Drinks_name) ||
		!(vin.Sugar >= 0 && vin.Sugar <= 3) || !(vin.Ice >= 0 && vin.Ice <= 3) ||
		!(vin.Price > 0) {
		validateResult = false
	}

	return validateResult
}

func DrinksOrderList(ginContext *gin.Context) {
	// 1. 取得前端參數
	var goNext = true
	var inputs map[string]interface{}
	ginContext.Bind(&inputs)
	var orderDate string = fmt.Sprintf("%v", inputs["orderDate"])

	// 2. 驗證前端參數
	goNext = validateDrinksOrderList(orderDate)

	// 2. 取得用戶個人資料
	var drinks_order_slice []models.Drinks_order
	if goNext {
		drinks_order_slice = drinks_service.QueryDrinksOrderByDate(orderDate)
	}

	// 3. Error Catch
	if goNext {
		var hasError bool = error_handler.CatchErr()
		goNext = !hasError
	}

	// 4. 回傳結果
	ginContext.JSON(200, gin.H{ // response json
		"result":             goNext,
		"drinks_order_slice": drinks_order_slice,
	})
}

// 驗證 DrinksOrderList 輸入參數是否有誤
func validateDrinksOrderList(orderDate string) bool {
	var validateResult = true

	if len(orderDate) != 8 || !util.IsNum(orderDate) {
		validateResult = false
	}

	return validateResult
}
