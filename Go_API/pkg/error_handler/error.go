package error_handler

import (
	"log"
)

func CheckErr(err error) {
	if err != nil {
		log.Println(err.Error())
		panic(err)
	}
}

func CatchErr() bool {
	var hasError bool = false
	if err := recover(); err != nil {
		hasError = true
		log.Println(err)
	}

	return hasError
}
