package model

import (
	"doc-manager/web_server/core/mongo"
)

const (
	appCollection = "application"
)

type Application struct {
	Id         int    `json:"id,omitempty" bson:"id,omitempty"`
	AppId      string `json:"app_id,omitempty" bson:"app_id,omitempty"`
	Name       string `json:"name,omitempty" bson:"app_id,omitempty"`        //应用（组件）名称
	Desc       string `json:"desc,omitempty" bson:"app_id,omitempty"`        //项目描述
	CreateTime int64  `json:"create_time,omitempty" bson:"app_id,omitempty"` //创建时间
	Icon       string `json:"icon,omitempty" bson:"app_id,omitempty"`        //icon 地址
	Owner      string `json:"owner,omitempty" json:"owner,omitempty"`        //负责人
}

var (
	app = Application{}
)

func (a Application) Insert(docs ...interface{}) error {
	return mongo.Insert(db, appCollection, docs...)
}

func (a Application) IsExist(query interface{}) bool {
	return mongo.IsExist(db, appCollection, query)
}

func (a Application) FindOne(query, selector interface{}) (*Application, error) {
	ap := new(Application)
	err := mongo.FindOne(db, appCollection, query, selector, ap)
	return ap, err
}

func (a Application) FindAll(query, selector interface{}) (results *[]Application, err error) {
	results = new([]Application)
	err = mongo.FindAll(db, appCollection, query, selector, results)
	return results, err
}

func (a Application) Update(selector, update interface{}) error {
	return mongo.Update(db, userCollection, selector, update, true)
}

func (a Application) Remove(selector interface{}) error {
	return mongo.Remove(db, appCollection, selector)
}

func (a Application) RemoveAll(selector interface{}) error {
	return mongo.RemoveAll(db, appCollection, selector)
}

func (a *Application) ApplicationInsert() error {

	return nil
}
