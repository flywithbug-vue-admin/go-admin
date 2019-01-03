package app_handler

import (
	"net/http"
	"strconv"
	"strings"
	"vue-admin/web_server/common"
	"vue-admin/web_server/model"

	"gopkg.in/mgo.v2/bson"

	"github.com/flywithbug/log4go"
	"github.com/gin-gonic/gin"
)

type appPara struct {
	model.Application
}

func addApplicationHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	app := new(appPara)
	err := c.BindJSON(app)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "para invalid: "+err.Error())
		return
	}
	if app.BundleId == "" {
		aRes.SetErrorInfo(http.StatusBadRequest, "BundleId must fill")
		return
	}
	if app.Icon == "" {
		aRes.SetErrorInfo(http.StatusBadRequest, "Icon must fill")
		return
	}
	if app.Name == "" {
		aRes.SetErrorInfo(http.StatusBadRequest, "Name must fill")
		return
	}
	if len(app.Desc) < 10 {
		aRes.SetErrorInfo(http.StatusBadRequest, "Desc must fill")
		return
	}
	app.Owner = common.Account(c)
	err = app.Insert()
	if err != nil {
		log4go.Error(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, err.Error())
		return
	}
	aRes.AddResponseInfo("app", app)
}

func getApplicationsHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	limit, _ := strconv.Atoi(c.Query("limit"))
	page, _ := strconv.Atoi(c.Query("page"))
	sort := c.Query("sort")
	name := c.Query("name")
	owner := c.Query("owner")
	if strings.EqualFold(sort, "-id") {
		sort = "-_id"
	} else if strings.EqualFold(sort, "+id") {
		sort = "+_id"
	} else if len(sort) == 0 {
		sort = "+_id"
	}
	if limit == 0 {
		limit = 10
	}
	if page != 0 {
		page--
	}
	userId := common.UserId(c)
	if userId <= 0 {
		aRes.SetErrorInfo(http.StatusUnauthorized, "user not found")
		return
	}
	query := bson.M{}
	if len(name) > 0 {
		query["name"] = bson.M{"$regex": name}
	}
	if len(owner) > 0 {
		query["owner"] = bson.M{"$regex": owner}
	}

	var app = model.Application{}
	totalCount, _ := app.TotalCount(query, nil)
	appList, err := app.FindPageFilter(page, limit, query, nil, sort)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusUnauthorized, "apps find error"+err.Error())
		return
	}
	aRes.AddResponseInfo("list", appList)
	aRes.AddResponseInfo("total", totalCount)
}

func updateApplicationHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	app := new(model.Application)
	err := c.BindJSON(app)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "para invalid: "+err.Error())
		return
	}
	err = app.Update()
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "update failed: "+err.Error())
		return
	}
	aRes.SetSuccessInfo(http.StatusOK, "success")
}

func getAllSimpleAppHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	var app = model.Application{}

	arrList, err := app.FindAll(nil, bson.M{"_id": 1, "name": 1, "icon": 1, "owner": 1, "editable": 1})
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "update failed: "+err.Error())
		return
	}
	//user ,ok := common.User(c)
	//if !ok {
	//	aRes.SetErrorInfo(http.StatusBadRequest, "user not  found: "))
	//	return
	//}
	//for i := 0; i < len(arrList); i++ {
	//
	//	arrList[i].Editable = true
	//}
	aRes.AddResponseInfo("list", arrList)
}