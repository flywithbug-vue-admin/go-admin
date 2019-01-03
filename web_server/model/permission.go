package model

import (
	"doc-manager/web_server/core/mongo"
	"encoding/json"
	"errors"
	"fmt"

	"gopkg.in/mgo.v2/bson"
)

const (
	permissionCollection            = "permission"
	PermissionTypeCURD   typeStatus = iota //增删改查
	PermissionTypeUR                       //改查
	PermissionTypeR                        //查看
	PermissionTypeNone                     //无权限
)

//权限表 type
//1. Delete ReadWrite
//2. Read
//3. NoRight

type Permission struct {
	Id          int64  `json:"id,omitempty" bson:"_id,omitempty"`
	Type        int    `json:"type,omitempty" bson:"type,omitempty"`         //
	Name        string `json:"name,omitempty" bson:"name,omitempty"`         //
	Code        string `json:"code,omitempty" bson:"code,omitempty"`         //
	DelFlag     bool   `json:"del_flag,omitempty" bson:"del_flag,omitempty"` //
	Description string `json:"description,omitempty" bson:"description,omitempty"`
}

func (p Permission) ToJson() string {
	js, _ := json.Marshal(p)
	return string(js)
}

func (p Permission) isExist(query interface{}) bool {
	return mongo.IsExist(db, permissionCollection, query)
}

func (p Permission) insert(docs ...interface{}) error {
	return mongo.Insert(db, permissionCollection, docs...)
}

func (p Permission) update(selector, update interface{}) error {
	return mongo.Update(db, permissionCollection, selector, update, true)
}

func (p Permission) findOne(query, selector interface{}) (interface{}, error) {
	ap := Permission{}
	err := mongo.FindOne(db, permissionCollection, query, selector, &ap)
	return ap, err
}
func (p Permission) findAll(query, selector interface{}) (results []Permission, err error) {
	results = []Permission{}
	err = mongo.FindAll(db, permissionCollection, query, selector, &results)
	return results, err
}

func (p Permission) remove(selector interface{}) error {
	return mongo.Remove(db, permissionCollection, selector)
}

func (p Permission) removeAll(selector interface{}) error {
	return mongo.RemoveAll(db, permissionCollection, selector)
}

func (p Permission) totalCount(query, selector interface{}) (int, error) {
	return mongo.TotalCount(db, permissionCollection, query, selector)
}

func (p Permission) findPage(page, limit int, query, selector interface{}, fields ...string) (results []Permission, err error) {
	results = []Permission{}
	err = mongo.FindPage(db, permissionCollection, page, limit, query, selector, &results, fields...)
	return
}

func (p Permission) Insert() error {
	p.Id, _ = mongo.GetIncrementId(permissionCollection)
	if p.isExist(bson.M{"code": p.Code}) {
		return fmt.Errorf("code exist")
	}

	if p.isExist(bson.M{"name": p.Name}) {
		return fmt.Errorf("name exist")
	}
	return p.insert(p)
}

func (p Permission) Update() error {
	return p.update(bson.M{"_id": p.Id}, p)
}

func (p Permission) Remove() error {
	if p.Id == 0 {
		return errors.New("id is 0")
	}
	return p.remove(bson.M{"_id": p.Id})
}