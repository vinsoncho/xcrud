(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{632:function(e,a,t){"use strict";t.r(a);t(12);var n={data:function(){return{loading:0,formData:{status:"enable"}}},computed:{formConfig:function(){var e=this;return{inline:!1,item:[{xType:"select",name:"sex",label:"性别",dic:[{label:"男",value:"male"},{label:"女",value:"female"}]},{xType:"select",name:"status",label:"状态",dic:{data:[{key:"激活",value:"enable"},{key:"锁定",value:"disable"}],label:"key",value:"value"}}],operate:[{text:"保存",show:!0,click:e.save},{text:"取消",show:!0,click:function(){e.$message.info("cancel")}}]}}},methods:{save:function(){var e=this;this.loading++,this.$refs.xForm.validate().then((function(){e.$message.success("save data: "+JSON.stringify(e.formData,null,2))})).catch((function(e){return console.error(e)})).finally((function(){return e.loading--}))}}},l=t(2),o=Object(l.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container",attrs:{"v-loading":e.loading}},[t("x-form",{ref:"xForm",attrs:{config:e.formConfig},model:{value:e.formData,callback:function(a){e.formData=a},expression:"formData"}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);