(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d07","chunk-698f"],{"9Wvd":function(t,e,o){"use strict";o.r(e);var i={components:{eForm:o("gAlZ").default},props:{data:{type:Object,required:!0},sup_this:{type:Object,required:!0},menus:{type:Array,required:!0},roles:{type:Array,required:!0}},methods:{to:function(){var t=this.$refs.form;t.roleIds=[],t.form={id:this.data.id,component:this.data.component,name:this.data.name,sort:this.data.sort,pid:this.data.pid,path:this.data.path,iframe:this.data.iframe?"true":"false",roles:[],icon:this.data.icon},this.data.roles||(this.data.roles=[]),this.data.roles.forEach(function(e,o){t.roleIds.push(e.id)}),t.dialog=!0}}},s=(o("PuIr"),o("KHd+")),r=Object(s.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-button",{attrs:{size:"mini",type:"success"},on:{click:this.to}},[this._v("编辑")]),this._v(" "),e("eForm",{ref:"form",attrs:{roles:this.roles,menus:this.menus,sup_this:this.sup_this,"is-add":!1}})],1)},[],!1,null,"7ea7e3d0",null);r.options.__file="edit.vue";e.default=r.exports},HufR:function(t,e,o){"use strict";var i=o("oDta");o.n(i).a},PuIr:function(t,e,o){"use strict";var i=o("uHUm");o.n(i).a},TEuN:function(t,e,o){},dgAR:function(t,e,o){"use strict";var i=o("TEuN");o.n(i).a},gAlZ:function(t,e,o){"use strict";o.r(e);var i=o("Hycs"),s=o("cCY5"),r=o.n(s),n=/\.\/(.*)\.svg/,a=function(t){return t.keys()}(o("Uf/o")).map(function(t){return t.match(n)[1]}),l={name:"IconSelect",data:function(){return{name:"",iconList:a}},methods:{filterIcons:function(){var t=this;this.name?this.iconList=this.iconList.filter(function(e){return e.includes(t.name)}):this.iconList=a},selectedIcon:function(t){this.$emit("selected",t),document.body.click()},reset:function(){this.name="",this.iconList=a}}},c=(o("HufR"),o("KHd+")),u=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"icon-body"},[o("el-input",{staticStyle:{position:"relative"},attrs:{clearable:"",placeholder:"请输入图标名称"},on:{clear:t.filterIcons},nativeOn:{input:function(e){return t.filterIcons(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[o("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})]),t._v(" "),o("div",{staticClass:"icon-list"},t._l(t.iconList,function(e,i){return o("div",{key:i,on:{click:function(o){t.selectedIcon(e)}}},[o("svg-icon",{staticStyle:{height:"30px",width:"16px"},attrs:{"icon-class":e}}),t._v(" "),o("span",[t._v(t._s(e))])],1)}))],1)},[],!1,null,"1628183e",null);u.options.__file="index.vue";var f=u.exports,d=(o("VCwm"),{components:{Treeselect:r.a,IconSelect:f},props:{menus:{type:Array,required:!0},roles:{type:Array,required:!0},isAdd:{type:Boolean,required:!0},sup_this:{type:Object,default:null}},data:function(){return{loading:!1,dialog:!1,form:{name:"",sort:999,path:"",component:"",iframe:"false",roles:[],pid:0,icon:""},roleIds:[],rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],sort:[{required:!0,message:"请输入序号",trigger:"blur",type:"number"}],iframe:[{required:!0,message:"请选择菜单类型",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.form.roles=[];var o=t;t.roleIds.forEach(function(t,e){var i={id:t};o.form.roles.push(i)}),t.isAdd?t.doAdd():t.doEdit()})},doAdd:function(){var t=this;Object(i.a)(this.form).then(function(e){t.resetForm(),t.$notify({title:"添加成功",type:"success",duration:2500}),t.loading=!1,setTimeout(function(){t.$parent.$parent.init(),t.$parent.$parent.getMenus()},200)}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},doEdit:function(){var t=this;Object(i.d)(this.form).then(function(e){t.resetForm(),t.$notify({title:"修改成功",type:"success",duration:2500}),t.loading=!1,setTimeout(function(){t.sup_this.init(),t.sup_this.getMenus()},200)}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={name:"",sort:999,path:"",component:"",iframe:"false",roles:[],pid:0,icon:""},this.roleIds=[]},selected:function(t){this.form.icon=t}}}),m=(o("dgAR"),Object(c.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialog,title:t.isAdd?"新增菜单":"编辑菜单",width:"600px"},on:{"update:visible":function(e){t.dialog=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"80px"}},[o("el-form-item",{attrs:{label:"菜单图标"}},[o("el-popover",{attrs:{placement:"bottom-start",width:"460",trigger:"click"},on:{show:function(e){t.$refs.iconSelect.reset()}}},[o("IconSelect",{ref:"iconSelect",on:{selected:t.selected}}),t._v(" "),o("el-input",{staticStyle:{width:"460px"},attrs:{slot:"reference",placeholder:"点击选择图标",readonly:""},slot:"reference",model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}},[t.form.icon?o("svg-icon",{staticClass:"el-input__icon",staticStyle:{height:"32px",width:"16px"},attrs:{slot:"prefix","icon-class":t.form.icon},slot:"prefix"}):o("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[o("el-input",{staticStyle:{width:"460px"},attrs:{placeholder:"名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"菜单排序",prop:"sort"}},[o("el-input",{staticStyle:{width:"460px"},attrs:{placeholder:"序号越小越靠前"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",t._n(e))},expression:"form.sort"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"内部菜单",prop:"iframe"}},[o("el-radio",{attrs:{label:"false"},model:{value:t.form.iframe,callback:function(e){t.$set(t.form,"iframe",e)},expression:"form.iframe"}},[t._v("是")]),t._v(" "),o("el-radio",{attrs:{label:"true"},model:{value:t.form.iframe,callback:function(e){t.$set(t.form,"iframe",e)},expression:"form.iframe"}},[t._v("否")])],1),t._v(" "),o("el-form-item",{attrs:{label:"链接地址"}},[o("el-input",{staticStyle:{width:"460px"},attrs:{placeholder:"菜单路径"},model:{value:t.form.path,callback:function(e){t.$set(t.form,"path",e)},expression:"form.path"}})],1),t._v(" "),"false"===t.form.iframe?o("el-form-item",{attrs:{label:"组件路径"}},[o("el-input",{staticStyle:{width:"460px"},attrs:{placeholder:"菜单路径"},model:{value:t.form.component,callback:function(e){t.$set(t.form,"component",e)},expression:"form.component"}})],1):t._e(),t._v(" "),o("el-form-item",{attrs:{label:"上级类目"}},[o("treeselect",{staticStyle:{width:"460px"},attrs:{options:t.menus,placeholder:"选择上级类目"},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-top":"-10px","margin-bottom":"0px"},attrs:{label:"选择角色"}},[o("treeselect",{staticStyle:{width:"460px"},attrs:{multiple:!0,options:t.roles,placeholder:"请选择角色"},model:{value:t.roleIds,callback:function(e){t.roleIds=e},expression:"roleIds"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)},[],!1,null,"24bb4c8e",null));m.options.__file="form.vue";e.default=m.exports},oDta:function(t,e,o){},uHUm:function(t,e,o){}}]);