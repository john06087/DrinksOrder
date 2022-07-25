> # 飲料訂單系統

## 實作動機 - motivation
希望藉由實作專案的方式更熟悉 Golang

## 檔案簡介 - introduction
* **Go_API** - Golang 專案資料夾
	* **conf**
		* **sapp.ini** - Propertie 設定檔
	* **pkg**
		* **controller**
			* **drinks_controller.go** - 飲料 controller
		* **error_handler**
			* **error.go** - 錯誤處理
		* **models**
			* **database_model.go** - 資料庫 model
			* **drinks_order.go** - 訂單 model
		* **service**
			* **drinks_service.go** - 飲料 service
		* **util**
			* **validateUtil.go** - 驗證相關的 Util
		* **vo**
			* **drinks_order_vo.go** - 訂單顯示資訊
	* **routers**
		* **router.go** - 設定要接收的 request
	* **setting** - 
		* **setting.go** - 初始化 Properties 設定
	* **main.go** - 專案啟動檔
---
* **React_Template** - React 專案資料夾

## 使用技術 - skill
* 使用 Golang、React、MySQL 以前後端分離的模式來完成專案
* 後端撰寫搭配 Golang 

## 功能展示 - demo
* **新增訂單** - 偵測用戶私訊內容，若符合訂單格式，機器人會自動記錄，並回傳告知使用者成功失敗： 
  * 情境 1. 驗證資料正確 <br/>

  * 情境 2. 驗證資料錯誤 <br/>


## 結語 - epilogue
經過這個專案有稍微熟悉 Go 這個語言，
但其實還是有些特色沒有運用到，如: goroutine & channel 等等
如果在寫法上有更好的地方，還請多多指教


## 參考資料 - references
* [菜鳥工程師 肉豬 - Golang 全系列文章](https://matthung0807.blogspot.com/p/blog-page.html "link")
* [eddycjy 煎魚 - go-gin-example](https://github.com/eddycjy/go-gin-example "link")
* [React 前端模板](https://www.creative-tim.com/product/light-bootstrap-dashboard-react# "link")




# DrinksOrder
- 專案使用技術
	React、Golang、MySQL

- 專案啟動流程
	1. MySQL 新建資料表
	CREATE DATABASE `bc_db`;

	DROP TABLE IF EXISTS `bc_db`.`drinks_order`;
	CREATE TABLE `bc_db`.`drinks_order` (
	  `id` int unsigned NOT NULL AUTO_INCREMENT,
	  `user_name` varchar(30) NOT NULL COMMENT '訂購者姓名',
	  `drinks_name` varchar(30) NOT NULL COMMENT '飲料名稱',
	  `sugar` int NOT NULL COMMENT '甜度',
	  `ice` int NOT NULL COMMENT '冰量',
	  `price` int NOT NULL COMMENT '金額',
	  `note` varchar(100) DEFAULT '' COMMENT '加料，備註事項',
	  `order_date` int COMMENT '訂購日期',
	  PRIMARY KEY (`id`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='飲料訂單';

	2. 前端 npm install -> npm start
			npm install react-datepicker --save
			npm install axios
	
	3. 後端 go mod tidy -> go run .
	


- 專案待開發項目
	修改訂單、刪除訂單
	Jwt
	Loading Page
	
