> # Line 團購機器人

## 實作動機 - motivation
家人想要想要建立一個團購群組作為副業，但客人下定商品時總是用私訊或是直接在貼文底下留言，統計起來非常困擾，
於是在想減輕家人負擔的情況下，建立了一支可以自動記錄顧客訂單的「LINE 團購機器人」。

## 檔案簡介 - introduction
* **conf** - 
	* **sapp.ini** - Propertie 檔
* **pkg** - 專案主要邏輯程式瑪放置資料夾
* **routers** - 
* **setting** - 
	* **setting.go** - 
* **smain.go** - 專案進入點

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
	
- 專案希望達成目的
	因目前還未經手過 Golang 的案子，希望藉由此專案更熟悉 Golang 這個語言
	如果在寫法上有更好的地方，還請多多指教

- 專案待開發項目
	修改訂單、刪除訂單
	Jwt
	Loading Page
	
