(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3ca7","chunk-21cf"],{"2rBi":function(t,e,i){"use strict";var s=i("o8SM");i.n(s).a},UDTr:function(t,e,i){},dS7j:function(t,e,i){"use strict";i.r(e);var s=i("zF5t"),o=i("cCY5"),n=i.n(o),r=(i("VCwm"),{components:{TreeSelect:n.a},props:{permissions:{type:Array,required:!0},isAdd:{type:Boolean,required:!0},sup_this:{type:Object,default:null}},data:function(){return{loading:!1,dialog:!1,form:{name:"",permissions:[],note:""},permissionIds:[],rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.form.permissions=[];var i=t;t.permissionIds.forEach(function(t,e){var s={id:t};i.form.permissions.push(s)}),t.isAdd?t.doAdd():t.doEdit()})},doAdd:function(){var t=this;Object(s.a)(this.form).then(function(e){t.resetForm(),t.$notify({title:"添加成功",type:"success",duration:1500}),t.loading=!1,t.$parent.$parent.init()}).catch(function(e){t.loading=!1,console.log(e.msg)})},doEdit:function(){var t=this;Object(s.c)(this.form).then(function(e){t.resetForm(),t.$notify({title:"修改成功",type:"success",duration:1500}),t.loading=!1,t.sup_this.init()}).catch(function(e){t.loading=!1,console.log(e.msg)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.permissionIds=[],this.form={name:"",permissions:[],note:""}}}}),a=(i("vjPW"),i("KHd+")),l=Object(a.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialog,title:t.isAdd?t.$t("actions.add"):t.$t("actions.edit"),width:"500px"},on:{"update:visible":function(e){t.dialog=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"66px"}},[i("el-form-item",{attrs:{label:t.$t("table.name"),prop:"name"}},[i("el-input",{staticStyle:{width:"370px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("table.permission")}},[i("TreeSelect",{staticStyle:{width:"370px"},attrs:{multiple:!0,options:t.permissions,placeholder:t.$t("placeholder.permission")},model:{value:t.permissionIds,callback:function(e){t.permissionIds=e},expression:"permissionIds"}})],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-top":"-10px"},attrs:{label:t.$t("table.desc")}},[i("el-input",{staticStyle:{width:"370px"},attrs:{rows:"5",type:"textarea"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("actions.cancel")))]),t._v(" "),i("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v(t._s(t.$t("actions.confirm")))])],1)],1)},[],!1,null,"1e176271",null);l.options.__file="form.vue";e.default=l.exports},o8SM:function(t,e,i){},q9oO:function(t,e,i){"use strict";i.r(e);var s={components:{eForm:i("dS7j").default},props:{data:{type:Object,required:!0},sup_this:{type:Object,required:!0},permissions:{type:Array,required:!0}},methods:{to:function(){console.log("permissions:",this.permissions);var t=this.$refs.form;t.permissionIds=[],t.form={id:this.data.id,name:this.data.name,note:this.data.note,permissions:[]},this.data.permissions||(this.data.permissions=[]),this.data.permissions.forEach(function(e,i){t.permissionIds.push(e.id)}),t.dialog=!0}}},o=(i("2rBi"),i("KHd+")),n=Object(o.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1e4!=t.data.id?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:t.to}},[t._v("\n    "+t._s(t.$t("actions.edit"))+"\n  ")]):t._e(),t._v(" "),1e4===t.data.id?i("el-tag",{staticStyle:{color:"#666666","font-weight":"bolder"}},[t._v("不可编辑")]):t._e(),t._v(" "),i("eForm",{ref:"form",attrs:{permissions:t.permissions,sup_this:t.sup_this,"is-add":!1}})],1)},[],!1,null,"d1e820ca",null);n.options.__file="edit.vue";e.default=n.exports},vjPW:function(t,e,i){"use strict";var s=i("UDTr");i.n(s).a},zF5t:function(t,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"a",function(){return r}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return l});var s=i("bNJ/"),o=i("8SHQ");function n(){return Object(s.a)({url:o.a.PathRoleTree,method:"get"})}function r(t){return Object(s.a)({url:"/role",method:"post",data:t})}function a(t){var e={id:t};return Object(s.a)({url:"/role",method:"delete",data:e})}function l(t){return Object(s.a)({url:"/role",method:"put",data:t})}}}]);