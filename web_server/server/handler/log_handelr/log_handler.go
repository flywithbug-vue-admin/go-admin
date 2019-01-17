package log_handelr

import (
	"net/http"
	"strconv"
	"vue-admin/web_server/common"
	"vue-admin/web_server/model"
	"vue-admin/web_server/model/model_log"
	"vue-admin/web_server/server/handler/handler_common"

	"github.com/flywithbug/log4go"
	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2/bson"
)

func getLogListHandler(c *gin.Context) {
	aRes := model.NewResponse()
	defer func() {
		c.Set(common.KeyContextResponseCode, aRes.Code)
		c.JSON(http.StatusOK, aRes)
	}()
	size, _ := strconv.Atoi(c.Query("size"))
	page, _ := strconv.Atoi(c.Query("page"))
	userId, _ := strconv.Atoi(c.Query("user_id"))
	info := c.Query("info")

	if size == 0 {
		size = 10
	}
	if page != 0 {
		page--
	}
	query := bson.M{}
	if userId > 0 {
		query["user_id"] = userId
	}
	if len(info) > 0 {
		query["info"] = bson.M{"$regex": info, "$options": "i"}
	}
	var l = model_log.Log{}
	totalCount, _ := l.TotalCount(query, nil)
	results, err := l.FindPageFilter(page, size, query, nil, "-_id")
	if err != nil {
		log4go.Error(handler_common.RequestId(c) + err.Error())
		aRes.SetErrorInfo(http.StatusInternalServerError, "list find error"+err.Error())
		return
	}
	aRes.AddResponseInfo("list", results)
	aRes.AddResponseInfo("total", totalCount)
}
