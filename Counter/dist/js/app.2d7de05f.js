(function(e){function t(t){for(var a,l,s=t[0],i=t[1],u=t[2],m=0,p=[];m<s.length;m++)l=s[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("0fae");var a=n("9e2f"),r=n.n(a),o=n("2b0e"),l=n("8c4f"),s=n("2f62"),i={toggleCollapse:function(e){e.isCollapse=!e.isCollapse},setToken:function(e,t){e.token=t.token}},u=n("bc3a"),c=n.n(u),m=n("a7fe"),p=n.n(m);o["default"].use(p.a,c.a);var d="http://127.0.0.1:1337",f={userLogin:function(e,t){return o["default"].axios.post("".concat(d,"/users/login"),{username:e,password:t}).then(function(e){var t=e.data;return t}).catch(function(e){})}},b={toggleCollapse:function(e){var t=e.commit;t("toggleCollapse")},userLogin:function(e,t){var n=e.commit,a=t.username.trim();return new Promise(function(e,r){f.userLogin(a,t.password).then(function(t){n("setToken",{token:t.token}),e()}).catch(function(e){r(e)})})}};o["default"].use(s["a"]);var h=new s["a"].Store({state:{isCollapse:!1,menus:[{title:"aa",children:[{title:"aaa",name:"foo"},{title:"aaa1",name:"bar"},{title:"aaa2",name:"foo1"}]},{title:"bb",children:[{title:"bbba",name:"foo2"},{title:"bbb1",name:"bar3"},{title:"bbb2",name:"foo4"}]}],token:""},mutations:i,actions:b}),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},_=[],g={name:"App"},w=g,x=n("2877"),y=Object(x["a"])(w,v,_,!1,null,null,null),O=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",[n("NavMenu")],1),n("el-container",[n("el-header",[n("el-button",{attrs:{type:"primary",icon:e.collapseIcon},on:{click:e.toggleCollapse}}),n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("处理中心")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("\n                        我的工作台\n                    ")]),n("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),n("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")]),n("el-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[e._v("\n                            选项4\n                        ")]),n("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),n("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),n("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2)],1)],1),n("el-main",[n("router-view")],1)],1)],1)},C=[],j=n("5530"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.menus,function(e,t){return n("El_Submenu",{key:t+1,attrs:{menu:e,index:""+(t+1)}})}))},$=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-submenu",{attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title))])]),e._l(e.menu.children,function(e){return n("El_Menu_Item",{key:e.name,attrs:{menu:e}})})],2)},M=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu-item",{attrs:{index:e.menu.name},on:{click:e.handleClick}},[n("i",{staticClass:"el-icon-setting"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title))])])},I=[],P={name:"El_Menu_Item",props:{menu:Object},methods:{handleClick:function(e){return e.$router.push(e.index)}}},D=P,T=Object(x["a"])(D,z,I,!1,null,"688c9884",null),L=T.exports,N={name:"El_Submenu",props:{menu:Object,index:String},components:{El_Menu_Item:L}},q=N,J=Object(x["a"])(q,S,M,!1,null,"145cdaa2",null),A=J.exports,B={name:"NavMenu",computed:Object(j["a"])({},Object(s["c"])(["isCollapse","menus"])),methods:{handleOpen:function(){},handleClose:function(){}},components:{El_Submenu:A}},F=B,G=Object(x["a"])(F,E,$,!1,null,"c18f86d8",null),H=G.exports,K={name:"Container",computed:Object(j["a"])({},Object(s["c"])({collapseIcon:function(e){return e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"}})),methods:Object(j["a"])({},Object(s["b"])(["toggleCollapse"])),components:{NavMenu:H}},Q=K,R=Object(x["a"])(Q,k,C,!1,null,"7f0f98ec",null),U=R.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"250"}},[n("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),n("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),n("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),n("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),n("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}})],1)},W=[],X={name:"Foo",data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}},Y=X,Z=Object(x["a"])(Y,V,W,!1,null,"eacfe0c6",null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("bar")])},ne=[],ae={name:"Bar"},re=ae,oe=Object(x["a"])(re,te,ne,!1,null,"53535541",null),le=oe.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("h3",{staticClass:"title"},[e._v("系统登录")]),n("el-form-item",{attrs:{label:"用户名",prop:"username"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{"show-password":"",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("登录")])],1)],1)},ie=[],ue=(n("28a5"),{data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur"}]}}},methods:{submit:function(){var e=this;e.$refs["form"].validate(function(t){t?e.$store.dispatch("userLogin",e.form).then(function(){sessionStorage.setItem("user",e.form.username),e.$router.push({path:"/"})}).catch(function(e){alert(e)}):alert("error submit!")})},setCookie:function(e,t,n){var a=new Date;a.setDate(a.getDate()+n),document.cookie="C-username=".concat(e,";expires=").concat(a),document.cookie="C-password=".concat(t,";expires=").concat(a)},getCookie:function(){if(document.cookie.length)for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t].split("=");switch(n[0]){case"C-username":this.form.username=n[1];break;case"C-password":this.form.password=n[1];break}}}}}),ce=ue,me=Object(x["a"])(ce,se,ie,!1,null,"2606dafa",null),pe=me.exports;o["default"].config.productionTip=!0,o["default"].use(l["a"]),o["default"].use(r.a);var de=[{path:"/",component:U,children:[{path:"/foo",component:ee,name:"foo"},{path:"/bar",component:le,name:"bar"}]},{path:"/login",component:pe,name:"login"}],fe=new l["a"]({routes:de});fe.beforeEach(function(e,t,n){"login"===e.name&&sessionStorage.removeItem("user");var a=sessionStorage.getItem("user");a||"login"===e.name?n():n("login")}),new o["default"]({router:fe,store:h,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.2d7de05f.js.map