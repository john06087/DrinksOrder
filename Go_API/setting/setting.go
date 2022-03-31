package setting

import (
	"log"

	"github.com/go-ini/ini"
)

type Database struct {
	Type     string
	Network  string
	User     string
	Password string
	Server   string
	Port     string
	Name     string
}

var DatabaseSetting = &Database{}

var cfg *ini.File

func Setup() {
	// 1. 讀取 ini 檔
	var err error
	cfg, err = ini.Load("conf/app.ini")
	if err != nil {
		log.Fatalf("app.ini 讀取失敗 'conf/app.ini': %v", err)
	}

	// 2. mapping struts & ini 檔
	mapTo("database", DatabaseSetting)
}

func mapTo(section string, v interface{}) {
	err := cfg.Section(section).MapTo(v)
	if err != nil {
		log.Fatalf("Cfg.MapTo %s err: %v", section, err)
	}
}
