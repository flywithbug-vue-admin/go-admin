(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5c89"],{QkXv:function(t,e,n){},Va2t:function(t,e,n){},"g/YV":function(t,e,n){"use strict";n.r(e);var a=n("P2sY"),i=n.n(a),r=n("jXb0"),s=n("tWJv"),o=n("xGbm"),l={name:"MetaData",components:{fixedButton:r.a},data:function(){return{listLoading:!0,list:null,total:10,dialogFormVisible:!1,dialogStatus:"create",textMap:{update:this.$t("application.table_edit"),create:this.$t("application.table_add")},rules:{},temp:{id:0,version:"",parent_version:"",platform:"",approval_time:"",lock_time:"",gray_time:"",create_time:"",status:0,app_status:"",app_id:0},listQuery:{page:0,limit:10,name:"",owner:"",sort:"-id"}}},created:function(){this.getList()},methods:{formatDate:function(t){if(!t||0===t)return"-";var e=new Date(1e3*t);return Object(o.a)(e,"yyyy-MM-dd hh:mm")},handleCreate:function(){var t=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleUpdate:function(t){var e=this;this.temp=i()({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},getList:function(){var t=this;this.listLoading=!0,Object(s.b)(this.listQuery).then(function(e){t.list=e.list,t.total=e.total,t.listLoading=!1}).catch(function(){t.listLoading=!1})},sortChange:function(t){var e=t.prop,n=t.order;"id"===e&&this.sortByID(n)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+_id":"-_id",this.handleFilter()},handleFilter:function(){this.listQuery.page=1,this.getList()}}},c=(n("vWiQ"),n("KHd+")),u=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("section",{staticClass:"content"},[n("fixed-button",{staticClass:"fixed-container",attrs:{bottom:3},on:{clickEvent:t.handleCreate}},[n("svg-icon",{staticClass:"icon-add",attrs:{"icon-class":"add"}})],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":"","header-row-class-name":"center"},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{label:t.$t("table.id"),prop:"id",sortable:"custom",align:"center",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.versionN"),align:"center","min-width":"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.version))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.parentVN"),align:"center","min-width":"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.parent_version))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.platform"),align:"center","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.platform))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.approvalTime"),align:"center","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.formatDate(e.row.approval_time)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.lockTime"),align:"center","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.formatDate(e.row.lock_time)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.grayTime"),align:"center","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.formatDate(e.row.gray_time)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.status"),align:"center","min-width":"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.app_status))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("appVersion.createTime"),align:"center","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.formatDate(e.row.create_time)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("application.table_action"),align:"center",width:"100px","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){t.handleUpdate(e.row)}}},[t._v("\n          "+t._s(t.$t("application.table_edit"))+"\n        ")])]}}])})],1),t._v(" "),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[n("el-form-item")],1)],1)],1)},[],!1,null,"08d7ae5f",null);u.options.__file="version.vue";e.default=u.exports},jXb0:function(t,e,n){"use strict";var a={name:"fixedButton",props:{bottom:{type:Number,default:3}},data:function(){return{transition:!0,timer:null}},methods:{event:function(){this.$emit("clickEvent")},handleScroll:function(){var t=this;this.transition=!1,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.transition=!0},1400)}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},i=(n("lOda"),n("KHd+")),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"fixed-button",class:[this.transition?"":"fixed-transition"],style:{bottom:this.bottom+"rem"},on:{click:this.event}},[this._t("default")],2)},[],!1,null,"4f67669e",null);r.options.__file="index.vue";e.a=r.exports},lOda:function(t,e,n){"use strict";var a=n("Va2t");n.n(a).a},tWJv:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return o});var a=n("bNJ/");function i(t,e,n,i){var r={bundle_id:t,icon:e,name:n,desc:i};return Object(a.a)({url:"/app/add",method:"post",data:r})}function r(t){return Object(a.a)({url:"/app/list",method:"get",params:t})}function s(t,e,n,i){var r={icon:t,name:e,desc:n,id:i};return Object(a.a)({url:"/app/update",method:"post",data:r})}function o(t){return Object(a.a)({url:"/app/version/list",method:"get",params:t})}},vWiQ:function(t,e,n){"use strict";var a=n("QkXv");n.n(a).a},xGbm:function(t,e,n){"use strict";function a(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in n)if(new RegExp("("+a+")").test(e)){var r=n[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:i(r))}return e}function i(t){return("00"+t).substr(t.length)}n.d(e,"a",function(){return a})}}]);