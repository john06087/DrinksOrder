package models

import (
	"database/sql"
	"fmt"

	"github.com/BcYe/blog-api/setting"
	_ "github.com/go-sql-driver/mysql"
)

var Db *sql.DB

func Setup() {
	// 取得 DB 連線
	conn := fmt.Sprintf("%s:%s@%s(%s:%s)/%s", setting.DatabaseSetting.User, setting.DatabaseSetting.Password, setting.DatabaseSetting.Network, setting.DatabaseSetting.Server, setting.DatabaseSetting.Port, setting.DatabaseSetting.Name)
	var err error
	Db, err = sql.Open(setting.DatabaseSetting.Type, conn)
	if err != nil {
		fmt.Println("開啟 MySQL 連線發生錯誤，原因為：", err)
		return
	}
	if err := Db.Ping(); err != nil {
		fmt.Println("資料庫連線錯誤，原因為：", err.Error())
		return
	}

	Db.SetMaxIdleConns(10)  // 設置連線池維持的數量
	Db.SetMaxOpenConns(100) // 設置最多可以開幾條連線
}
