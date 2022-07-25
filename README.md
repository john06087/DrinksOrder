> # 飲料訂單系統 DrinksOrder

## 實作動機 - motivation
希望藉由實作專案的方式更熟悉 Golang 語法

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
	* **src**
		* **util**
			* **CallApiUtil.js** - call API 相關的 Util
			* **FormatUtil.js** - 資料格式相關的 Util
			* **ValidationUtil.js** - 驗證相關的 Util
		* **views**
			* **DrinksOrderInfo.js** - 新增訂單頁面
			* **DrinksOrderList.js** - 訂單列表頁面
		* **routes.js** - Url 設定檔
---
* **Document**
	* **飲料訂單_Activity.asta**
	* **飲料訂單_Sequence.asta**
	* **飲料訂單_TableSchema.xlsx**
	* **init_Sql.txt** - MySQL 初始化 DB

## 使用技術 - skill
* 技術使用 Golang、React、MySQL
* 使用 gin 框架搭建後端 api 系統
* 以前後端分離的架構完成專案

## 功能展示 - demo
* **新增訂單** - 用戶可依照欄位填入自己的需求，系統會回傳告知使用者成功失敗並在成功時紀錄 DB： 
  * 情境 1. 驗證資料正確 <br/>
![成功1](https://user-images.githubusercontent.com/47651623/180745088-107aca99-d03c-4885-94a9-00fba0ebffd5.jpg)
  * 紀錄 DB <br/>
![成功2](https://user-images.githubusercontent.com/47651623/180745233-18187884-0065-4ed6-9ec6-3e2ccdf2221a.jpg)
  * 情境 2. 驗證資料錯誤 <br/>
![失敗](https://user-images.githubusercontent.com/47651623/180745265-979ebc83-9fdf-4569-9066-fc8fb1c9118f.jpg)

* **查詢訂單** - 用戶可搜尋特定日期的訂單資訊： 
  * 情境 1. 當日有訂單資訊 <br/>
![0725-1](https://user-images.githubusercontent.com/47651623/180748446-21697e4e-0cc5-4e80-8ebb-1623c07cc1df.jpg)
  * 驗證 DB <br/>
![0725-2](https://user-images.githubusercontent.com/47651623/180748474-24d475b2-0f42-4fef-aad4-73799f693838.jpg)
  * 情境 2. 當日無訂單資訊 <br/>
![無訂單1](https://user-images.githubusercontent.com/47651623/180748496-4d02f667-fca5-49fe-a54b-c5ae4683f374.jpg)
  * 驗證 DB <br/>
![無訂單2](https://user-images.githubusercontent.com/47651623/180748509-80812b08-98de-4936-bdd2-81875dd7d6a4.jpg)


## 結語 - epilogue
經過這個專案有稍微熟悉 Go 這個語言，
但其實還是有些特色沒有運用到，如: goroutine & channel 等等
如果在寫法上有更好的地方，還請多多指教


## 參考資料 - references
* [菜鳥工程師 肉豬 - Golang 全系列文章](https://matthung0807.blogspot.com/p/blog-page.html "link")
* [eddycjy 煎魚 - go-gin-example](https://github.com/eddycjy/go-gin-example "link")
* [React 前端模板](https://www.creative-tim.com/product/light-bootstrap-dashboard-react# "link")




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
	
	
