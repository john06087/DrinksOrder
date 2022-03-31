package main

import "github.com/BcYe/blog-api/routers"

func main() {
	router := routers.InitRouter()
	router.Run() // 原本 8080 改成 8081
}
