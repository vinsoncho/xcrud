(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{643:function(e,a,t){"use strict";t.r(a);var n={data:function(){return{loading:!1,tableData:[{name:"张三",sex:"male",phone:13222222222},{name:"李四",sex:"female",phone:13222222222},{name:"王二",sex:"male",phone:13222222222},{name:"麻子",sex:"female",phone:13222222222}],page:{pageSizes:[10,20],pageSize:10,pageNum:1,total:4},searchData:{},configTable:{stripe:!0,labelWidth:"auto",column:[{type:"index"},{label:"名称",name:"name",search:!0,xType:"input"},{label:"名称2",name:"name2",show:!1,search:!0,xType:"input"},{label:"性别",name:"sex",search:!0,xType:"select",dic:[{label:"全部",value:""},{label:"男",value:"male"},{label:"女",value:"female"}]},{label:"手机",name:"phone",formatter:function(e,a,t,n){return"+86 "+t}}],operate:[{text:"编辑",type:"text",show:!0,click:function(){return console.log("编辑")}},{text:"详情",type:"text",show:!0,click:function(){return console.log("详情")}},{text:"更多1",dropdown:!0,type:"text",show:!0,click:function(){return console.log("更多1")}},{text:"更多2",dropdown:!0,type:"text",show:!0,click:function(e){return console.log(e)}},{text:"更多3",dropdown:!0,type:"text",show:!0,click:function(){return console.log("更多3")}}]}}},methods:{getTableList:function(){}}},l=t(2),o=Object(l.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("x-table",{attrs:{config:e.configTable,data:e.tableData,page:e.page,load:e.getTableList},model:{value:e.searchData,callback:function(a){e.searchData=a},expression:"searchData"}})],1)}),[],!1,null,"37d09fc5",null);a.default=o.exports}}]);