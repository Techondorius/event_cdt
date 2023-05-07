package main

import (
	"event_cdt/controller"
	"event_cdt/model"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:3000",
		},
		AllowMethods: []string{
			"POST", "GET",
		},
		AllowCredentials: true,
	}))
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.GET("/mock", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"id":         8,
			"name":       "aa",
			"date":       "2023-10-10T23:45:00+09:00",
			"deleted_at": nil,
		})
	})
	r.POST("/events", controller.CreateEvent)
	DB, err := Conn()
	if err != nil {
		panic(err)
	}
	model.DB = model.DataBase{
		DB: DB,
	}
	model.DB.MigrateEvent()
	r.Run()
}
