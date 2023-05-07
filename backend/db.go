package main

import (
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Conn() (*gorm.DB, error) {
	host := os.Getenv("MYSQL_HOST")
	user := os.Getenv("MYSQL_USER")
	pasw := os.Getenv("MYSQL_PASSWORD")
	database := os.Getenv("MYSQL_DATABASE_NAME")
	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s", user, pasw, host, database)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, err
}
