package model_permission

import (
	"encoding/json"
	"errors"
	"fmt"
	"vue-admin/web_server/core/mongo"
	"vue-admin/web_server/model/shareDB"

	"gopkg.in/mgo.v2/bson"
)

const (
	permissionCollection = "permission"
)

type Permission struct {
	Id       int64        `json:"_id" bson:"_id"`
	PId      int64        `json:"pid,omitempty" bson:"pid"`
	Name     string       `json:"name"`
	Alias    string       `json:"alias"`
	Note     string       `json:"note,omitempty"`
	Children []Permission `json:"children,omitempty" bson:"children,omitempty"`
}

func (p Permission) ToJson() string {
	js, _ := json.Marshal(p)
	return string(js)
}

func (p Permission) isExist(query interface{}) bool {
	return mongo.IsExist(shareDB.DBName(), permissionCollection, query)
}

func (p Permission) insert(docs ...interface{}) error {
	return mongo.Insert(shareDB.DBName(), permissionCollection, docs...)
}

func (p Permission) update(selector, update interface{}) error {
	return mongo.Update(shareDB.DBName(), permissionCollection, selector, update, true)
}

func (p Permission) findOne(query, selector interface{}) (Permission, error) {
	ap := Permission{}
	err := mongo.FindOne(shareDB.DBName(), permissionCollection, query, selector, &ap)
	return ap, err
}
func (p Permission) findAll(query, selector interface{}) (results []Permission, err error) {
	results = []Permission{}
	err = mongo.FindAll(shareDB.DBName(), permissionCollection, query, selector, &results)
	return results, err
}

func (p Permission) remove(selector interface{}) error {
	return mongo.Remove(shareDB.DBName(), permissionCollection, selector)
}

func (p Permission) removeAll(selector interface{}) error {
	return mongo.RemoveAll(shareDB.DBName(), permissionCollection, selector)
}

func (p Permission) totalCount(query, selector interface{}) (int, error) {
	return mongo.TotalCount(shareDB.DBName(), permissionCollection, query, selector)
}

func (p Permission) findPage(page, limit int, query, selector interface{}, fields ...string) (results []Permission, err error) {
	results = []Permission{}
	err = mongo.FindPage(shareDB.DBName(), permissionCollection, page, limit, query, selector, &results, fields...)
	return
}

func (p Permission) pipeAll(pipeline, result interface{}, allowDiskUse bool) error {
	return mongo.PipeAll(shareDB.DBName(), permissionCollection, pipeline, result, allowDiskUse)
}

func (p Permission) pipeOne(pipeline, result interface{}, allowDiskUse bool) error {
	return mongo.PipeOne(shareDB.DBName(), permissionCollection, pipeline, result, allowDiskUse)
}

func (p Permission) Insert() error {
	if p.isExist(bson.M{"name": p.Name}) {
		return fmt.Errorf("code exist")
	}
	if p.isExist(bson.M{"alias": p.Alias}) {
		return fmt.Errorf("name exist")
	}
	if p.PId != 0 && !p.isExist(bson.M{"pid": p.PId}) {
		return fmt.Errorf("pid  not exist")
	}
	p.Id, _ = mongo.GetIncrementId(permissionCollection)
	p.Children = nil
	return p.insert(p)
}

func (p Permission) FindOne() (Permission, error) {
	pipeline := []bson.M{
		{"$match": bson.M{"_id": p.Id}},
		{"$lookup": bson.M{"from": permissionCollection, "localField": "_id", "foreignField": "pid", "as": "children"}},
	}
	err := p.pipeOne(pipeline, &p, true)
	return p, err
}

func (p Permission) Update() error {
	if p.PId != 0 && !p.isExist(bson.M{"pid": p.PId}) {
		return fmt.Errorf("pid  not exist")
	}
	p.Children = nil
	return p.update(bson.M{"_id": p.Id}, p)
}

func (p Permission) Remove() error {
	if p.Id == 0 {
		return errors.New("id needed ")
	}
	return p.remove(bson.M{"_id": p.Id})
}

func (p Permission) TotalCount(query, selector interface{}) (int, error) {
	return p.totalCount(query, selector)
}
func (p Permission) FindPageFilter(page, limit int, query, selector interface{}, fields ...string) (apps []Permission, err error) {
	return p.findPage(page, limit, query, selector, fields...)
}

func (p Permission) FindPipeAll() (results []Permission, err error) {
	results = make([]Permission, 0)
	pipeline := []bson.M{
		{"$match": bson.M{"pid": 0}},
		{"$lookup": bson.M{"from": permissionCollection, "localField": "_id", "foreignField": "pid", "as": "children"}},
	}
	err = p.pipeAll(pipeline, &results, true)
	return
}
func (p Permission) createUniqueIndex() error {

	return nil
}
