package view

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func BadRequest(c *gin.Context, msg any) {
	c.JSON(http.StatusBadRequest, gin.H{
		"error": msg,
	})
}
