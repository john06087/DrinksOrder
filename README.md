# DrinksOrder
My First Golang Project

MySQL 新建資料表
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


因目前還沒有實際經手過 Golang 的案子，如果在寫法或架構上有不對的地方，麻煩多多指教

待開發項目:
	Loading Page
	Jwt
	修改訂單、刪除訂單
	依照日期查詢訂單
	
	
	
npm install react-datepicker --save
npm install axios