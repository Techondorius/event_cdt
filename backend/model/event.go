package model

import (
	"fmt"
	"time"
)

type Event struct {
	ID        uint       `gorm:"primaryKey" json:"id"`
	Name      string     `gorm:"not null" json:"name"`
	Date      *time.Time `gorm:"not null" json:"date"`
	DeletedAt *time.Time `gorm:"default null" json:"deleted_at"`
}

var EVENT_MIN_LEN int = 1
var EVENT_MAX_LEN int = 20

type EventConstructorError struct {
	msg string
}

func NewEventConstructorError(msg string) EventConstructorError {
	return EventConstructorError{
		msg: msg,
	}
}

func (e EventConstructorError) Error() string {
	return e.msg
}

func NewEvent(name string, date time.Time) (*Event, error) {
	if len(name) <= EVENT_MIN_LEN || len(name) >= EVENT_MAX_LEN {
		err := NewEventConstructorError(fmt.Sprintf("name length error(%d to %d)", EVENT_MIN_LEN, EVENT_MAX_LEN))
		return nil, &err
	}

	now := time.Now()
	fmt.Println(now, date)
	if now.After(date) {
		err := NewEventConstructorError("日付は現在より後でないといけません")
		return nil, &err
	}

	event := Event{
		Name: name,
		Date: &date,
	}
	return &event, nil

}
