package controller

import (
	// "time"

	"fmt"
	"time"

	"event_cdt/model"
	"event_cdt/view"

	"github.com/gin-gonic/gin"
)

type createEventReq struct {
	Name string    `json:"name"`
	Date time.Time `json:"date"`
}

func CreateEvent(c *gin.Context) {
	var req createEventReq
	err := c.ShouldBindJSON(&req)
	if err != nil {
		view.BadRequest(c, "invalid request check docs")
		return
	}

	event, err := model.NewEvent(req.Name, req.Date)
	if err != nil {
		view.BadRequest(c, err)
		return
	}

	err = model.DB.InsertEventToDB(event)
	if err != nil {
		view.BadRequest(c, err)
		return
	}

	fmt.Println(*event)
	c.JSON(200, event)
}
