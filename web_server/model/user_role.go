package model

const (
	userRoleCollection = "user_role"
)

type UserRole struct {
	Id           int64 `json:"id" bson:"_id"`
	UserId       string
	RoleId       string
	CreateUserId string
	RoleName     string
	CreateTime   int64  //时间戳
	Role         int    //角色类型 （枚举表示）
	AppId        string //所属应用
	ModifyUserId string
}
