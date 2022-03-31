package main

import (
	"github.com/BcYe/blog-api/pkg/models"
	"github.com/BcYe/blog-api/routers"
	"github.com/BcYe/blog-api/setting"
)

// 初始化設定
func init() {
	setting.Setup() // 設定 properties
	models.Setup()  // 設定 DB
}

func main() {
	router := routers.InitRouter()
	router.Run(":8000")
}
