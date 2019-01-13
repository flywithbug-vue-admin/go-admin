package menu_handler

import (
	"net/http"
	"strconv"
	"strings"
	"vue-admin/web_server/model"
	"vue-admin/web_server/model/check_permission"
	"vue-admin/web_server/model/model_menu"

	"gopkg.in/mgo.v2/bson"

	"github.com/flywithbug/log4go"
	"github.com/gin-gonic/gin"
)

func addMenuHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	if check_permission.CheckNoPermission(c, model_menu.MenuPermissionSelect) {
		log4go.Info("has no permission")
		aRes.SetErrorInfo(http.StatusForbidden, "has no permission")
		return
	}

	para := model_menu.Menu{}
	err := c.BindJSON(&para)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "para invalid"+err.Error())
		return
	}
	_, err = para.Insert()
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusInternalServerError, "server invalid"+err.Error())
		return
	}
	aRes.SetSuccess()
}

func getMenuHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	if check_permission.CheckNoPermission(c, model_menu.MenuPermissionSelect) {
		log4go.Info("has no permission")
		aRes.SetErrorInfo(http.StatusForbidden, "has no permission")
		return
	}

	ids := c.Query("id")
	var menu = model_menu.Menu{}
	id, _ := strconv.Atoi(ids)
	menu.Id = int64(id)
	menu, err := menu.FindOneTree()
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "invalid: "+err.Error())
		return
	}
	aRes.AddResponseInfo("menu", menu)
}

func updateMenuHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	if check_permission.CheckNoPermission(c, model_menu.MenuPermissionEdit) {
		log4go.Info("has no permission")
		aRes.SetErrorInfo(http.StatusForbidden, "has no permission")
		return
	}

	para := model_menu.Menu{}
	err := c.BindJSON(&para)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "para invalid"+err.Error())
		return
	}
	err = para.Update()
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "invalid: "+err.Error())
		return
	}
}

func removeMenuHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	if check_permission.CheckNoPermission(c, model_menu.MenuPermissionDelete) {
		log4go.Info("has no permission")
		aRes.SetErrorInfo(http.StatusForbidden, "has no permission")
		return
	}
	//need id
	para := model_menu.Menu{}
	err := c.BindJSON(&para)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "para invalid"+err.Error())
		return
	}
	err = para.Remove()
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusBadRequest, "invalid: "+err.Error())
		return
	}
}

func getRoleListHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()

	if check_permission.CheckNoPermission(c, model_menu.MenuPermissionSelect) {
		log4go.Info("has no permission")
		aRes.SetErrorInfo(http.StatusForbidden, "has no permission")
		return
	}

	var role = model_menu.Menu{}
	limit, _ := strconv.Atoi(c.Query("limit"))
	page, _ := strconv.Atoi(c.Query("page"))
	sort := c.Query("sort")
	name := c.Query("name")
	if strings.EqualFold(sort, "-id") {
		sort = "-_id"
	} else if strings.EqualFold(sort, "+id") {
		sort = "+_id"
	} else if len(sort) == 0 {
		sort = "+_id"
	}
	if page != 0 {
		page--
	}
	query := bson.M{}
	if len(name) > 0 {
		query["name"] = bson.M{"$regex": name, "$options": "i"}
	}
	totalCount, _ := role.TotalCount(query, nil)
	list, err := role.FindPageTreeFilter(page, limit, query, nil, sort)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusUnauthorized, "apps find error"+err.Error())
		return
	}
	aRes.AddResponseInfo("list", list)
	aRes.AddResponseInfo("total", totalCount)
}

func getRoleTreeHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.JSON(http.StatusOK, aRes)
	}()
	if check_permission.CheckNoPermission(c, model_menu.MenuPermissionSelect) {
		log4go.Info("has no permission")
		aRes.SetErrorInfo(http.StatusForbidden, "has no permission")
		return
	}
	var role = model_menu.Menu{}
	selector := bson.M{"_id": 1, "name": 1}
	list, err := role.FindPageFilter(0, 0, nil, selector)
	if err != nil {
		log4go.Info(err.Error())
		aRes.SetErrorInfo(http.StatusUnauthorized, "app version list find error"+err.Error())
		return
	}
	aRes.AddResponseInfo("list", list)
}