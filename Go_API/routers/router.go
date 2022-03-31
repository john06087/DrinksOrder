package routers

import (
	"github.com/BcYe/blog-api/routers/api/drinks_controller"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.Default() // get gin engine with Logger attached

	// 1. 設定跨域
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowAllOrigins = true
	router.Use(cors.New(corsConfig))

	// 2. 設定 API
	apiDrinks := router.Group("/drinksController")
	apiDrinks.POST("/drinksOrderList", drinks_controller.DrinksOrderList)
	apiDrinks.POST("/saveDrinksOrder", drinks_controller.SaveDrinksOrder)

	return router
}
