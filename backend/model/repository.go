package model

import "gorm.io/gorm"

type DataBase struct {
	DB *gorm.DB
}

var DB DataBase

func(db *DataBase) MigrateEvent() error{
	e := Event{}
	err := db.DB.AutoMigrate(e)
	if err != nil {
		return err
	}
	return nil
}

func (db *DataBase) InsertEventToDB(e *Event) error{
	result := db.DB.Create(e)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
