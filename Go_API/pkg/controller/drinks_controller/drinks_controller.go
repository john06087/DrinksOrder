
package drinks_controller
import (
	"github.com/BcYe/blog-api/pkg/service/drinks_service"
	"github.com/gin-gonic/gin"
)

func SaveDrinksOrder(c *gin.Context) {
	// 1. 取得前端參數

	// 2. 取得用戶個人資料
	drinks_service.SaveDrinksOrder()

	// 3. 回傳結果

}

func DrinksOrderList(c *gin.Context) {
	// 1. 取得前端參數

	// 2. 取得用戶個人資料
	drinks_service.QueryDrinksOrderByDate()

	// 3. 回傳結果

}
