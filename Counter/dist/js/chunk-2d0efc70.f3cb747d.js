(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efc70"],{"9a0b":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-aside",[a("el-tree",{attrs:{data:e.menus,props:e.treeProps}})],1),a("el-container",[a("el-header",[e._v("Header")]),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentChildren,border:"",stripe:"","max-height":"250"}},[a("el-table-column",{attrs:{fixed:"",prop:"code",label:"编码",width:"150"}}),a("el-table-column",{attrs:{fixed:"",prop:"name",label:"菜单名",width:"120"}}),a("el-table-column",{attrs:{prop:"parent",label:"父菜单",width:"120"}}),a("el-table-column",{attrs:{prop:"url",label:"地址",width:"120"}}),a("el-table-column",{attrs:{prop:"icon",label:"图标",width:"300"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序",width:"120"}})],1)],1)],1)],1)},r=[],n=a("5530"),o=a("2f62"),s=Object(o["a"])("menu"),c=s.mapState,i=s.mapGetters,p=s.mapActions,d={computed:Object(n["a"])(Object(n["a"])({},c(["menus","treeProps"])),i(["currentChildren"])),methods:Object(n["a"])({},p(["getMenus"])),created:function(){this.$store.dispatch("menu/getMenus")}},u=d,b=a("2877"),m=Object(b["a"])(u,l,r,!1,null,"47b6bf23",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0efc70.f3cb747d.js.map