package model_log

import (
	"testing"
	"vue-admin/web_server/config"
	"vue-admin/web_server/core/mongo"
)

func TestLog_Insert(t *testing.T) {
	mongo.RegisterMongo(config.Conf().LogDBConfig.Url, config.Conf().LogDBConfig.DBName)

	log := new(Log)
	log.Code = "23232"
	log.Insert()
}
