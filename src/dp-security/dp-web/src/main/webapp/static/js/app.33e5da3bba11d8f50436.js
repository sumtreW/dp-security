webpackJsonp([10],{"4C3y":function(t,e,n){"use strict";var a=n("bOdI"),o=n.n(a),c=(n("sf/l"),n("meMj")),i={token:0},r=o()({},c.a,function(t,e){t.token=e});e.a={state:i,mutations:r}},AoU9:function(t,e,n){"use strict";var a=n("bOdI"),o=n.n(a),c=(n("sf/l"),n("meMj")),i={tabIndex:0},r=o()({},c.b,function(t,e){t.tabIndex=e});e.a={state:i,mutations:r}},M8GW:function(t,e,n){"use strict";e.a={}},M93x:function(t,e,n){"use strict";function a(t){n("i2gX")}var o=n("xJD8"),c=n("k2Pj"),i=n("VU/8"),r=a,u=i(o.a,c.a,r,null,null);e.a=u.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=(n("NYxO"),n("M93x")),c=n("YaEn"),i=n("YtJ0"),r=n("m4jk"),u=n("nrAE"),s=(n.n(u),n("Au9i")),l=n.n(s),f=n("d8/S");n.n(f);a.default.use(l.a),a.default.config.productionTip=!1,a.default.prototype.$api=r.a,c.a.beforeEach(function(t,e,n){t.meta.requireAuth?i.a.state.login.token?n():n({path:"/login"}):n()}),new a.default({el:"#app",router:c.a,store:i.a,template:"<App/>",components:{App:o.a}})},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),o=n("/ocq");a.default.use(o.a);var c=function(t){return n.e(0).then(function(){var e=[n("mlqX")];t.apply(null,e)}.bind(this)).catch(n.oe)},i=function(t){return n.e(4).then(function(){var e=[n("fXvj")];t.apply(null,e)}.bind(this)).catch(n.oe)},r=function(t){return n.e(8).then(function(){var e=[n("9KMJ")];t.apply(null,e)}.bind(this)).catch(n.oe)},u=function(t){return n.e(1).then(function(){var e=[n("SeH+")];t.apply(null,e)}.bind(this)).catch(n.oe)},s=function(t){return n.e(3).then(function(){var e=[n("i/Eh")];t.apply(null,e)}.bind(this)).catch(n.oe)},l=function(t){return n.e(2).then(function(){var e=[n("/pee")];t.apply(null,e)}.bind(this)).catch(n.oe)},f=function(t){return n.e(7).then(function(){var e=[n("G7FF")];t.apply(null,e)}.bind(this)).catch(n.oe)},d=function(t){return n.e(6).then(function(){var e=[n("mZRd")];t.apply(null,e)}.bind(this)).catch(n.oe)},p=function(t){return n.e(5).then(function(){var e=[n("tMRG")];t.apply(null,e)}.bind(this)).catch(n.oe)};e.a=new o.a({routes:[{path:"/",name:"首页",component:c},{path:"/category",name:"分类页",redirect:"/category/all",component:i,children:[{path:"/category/:tab",component:r}]},{path:"/car",name:"购物车页",component:u},{path:"/car/pay",name:"支付页",component:d},{path:"/user",name:"用户页",component:s,meta:{requireAuth:!0}},{path:"/detail",name:"详情页",component:l},{path:"/search",name:"搜索页",component:f},{path:"/login",name:"登录页",component:p}]})},YtJ0:function(t,e,n){"use strict";var a=n("7+uW"),o=n("NYxO"),c=n("yW3m"),i=n("AoU9"),r=n("4C3y");a.default.use(o.a),e.a=new o.a.Store({modules:{detail:c.a,category:i.a,login:r.a}})},"d8/S":function(t,e){},i2gX:function(t,e){},k2Pj:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("v-loading",{directives:[{name:"show",rawName:"v-show",value:t.fetchLoading,expression:"fetchLoading"}]})],1)},o=[],c={render:a,staticRenderFns:o};e.a=c},m4jk:function(t,e,n){"use strict";var a=n("//Fk"),o=n.n(a),c=n("mtWM"),i=n.n(c),r=n("YtJ0"),u=n("YaEn"),s=i.a.create();s.defaults.baseURL="http://api.com",s.defaults.timeout=5e3,s.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.defaults.headers.post["X-Requested-With"]="XMLHttpRequest",s.interceptors.request.use(function(t){return r.a.commit("SET_LOADING",!0),console.log(r.a.state.login),r.a.state.login.token&&(t.headers.Authorization="token "+r.a.state.login.token),t},function(t){return alert("网络错误,请稍后再试"),r.a.commit("SET_LOADING",!1),o.a.reject(t)}),s.interceptors.response.use(function(t){return setTimeout(function(){r.a.commit("SET_LOADING",!1)},300),t},function(t){return r.a.commit("SET_LOADING",!1),errore.response&&401==t.response.status&&(r.a.commit("CHANGE_TOKEN",0),alert("请重新登录"),u.a.replace({path:"login",query:{redirect:u.a.currentRoute.fullPath}})),o.a.reject(t)}),e.a=s},meMj:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return i}),n.d(e,"g",function(){return r}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return s}),n.d(e,"j",function(){return l}),n.d(e,"a",function(){return f}),n.d(e,"b",function(){return d});var a="SET_DATAS",o="CHANGE_COL_SELECTED",c="CHANGE_SIZE_SELECTED",i="ADD_PRODUCT",r="CHANGE_COUNT",u="RESET_CARLIST",s="RESET_COUNT",l="SET_LOADING",f="CHANGE_TOKEN",d="CHANGE_TABINDEX"},o7HA:function(t,e){},"sf/l":function(t,e,n){"use strict";var a=n("mvHQ"),o=n.n(a);e.a={getLocal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"STORAGE_USER_KEY";return JSON.parse(window.localStorage.getItem(t))},setLocal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"STORAGE_USER_KEY";if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&this.getLocal(e)){var n=this.getLocal(e);return window.localStorage.setItem(e,o()(n.concat(t)))}return window.localStorage.setItem(e,o()(t))}}},uRZK:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"double-bounce1"}),t._v(" "),n("div",{staticClass:"double-bounce2"})]),t._v(" "),n("p",[t._v("正在拼命加载中.....")])])}],c={render:a,staticRenderFns:o};e.a=c},xJD8:function(t,e,n){"use strict";var a=n("y+dn");e.a={components:{"v-loading":a.a},computed:{fetchLoading:function(){return this.$store.state.detail.fetchLoading}}}},"y+dn":function(t,e,n){"use strict";function a(t){n("o7HA")}var o=n("M8GW"),c=n("uRZK"),i=n("VU/8"),r=a,u=i(o.a,c.a,r,"data-v-727eda80",null);e.a=u.exports},yW3m:function(t,e,n){"use strict";var a,o=n("bOdI"),c=n.n(o),i=n("sf/l"),r=n("meMj"),u=n("7+uW"),s={productDatas:"",colSelected:0,sizeSelected:0,count:0,carList:"",fetchLoading:!1,selectedList:"",unSelectedList:""},l=(a={},c()(a,r.c,function(t,e){t.productDatas=e}),c()(a,r.d,function(t,e){t.colSelected=e}),c()(a,r.e,function(t,e){t.sizeSelected=e}),c()(a,r.f,function(t){t.carList=i.a.getLocal("carList")}),c()(a,r.g,function(t){t.count=i.a.getLocal("count")}),c()(a,r.h,function(t){t.carList=i.a.getLocal("carList")}),c()(a,r.i,function(t){t.count=i.a.getLocal("carList").length}),c()(a,r.j,function(t,e){t.fetchLoading=e}),c()(a,"SET_SELECTEDLIST",function(t,e){t.selectedList=i.a.getLocal("selectedList")}),c()(a,"SET_UNSELECTEDLIST",function(t){t.unSelectedList=i.a.getLocal("unSelectedList")}),a),f=new u.default({}),d={setDatas:function(t){var e=t.commit;f.$api({method:"post",url:"/detail"}).then(function(t){e("SET_DATAS",t.data)})},setLocalCount:function(t){var e=t.commit,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=i.a.getLocal("count")||0;n?i.a.setLocal(++a,"count"):i.a.setLocal(--a,"count"),e(r.g)},addCarList:function(t,e){var n=t.commit;i.a.setLocal(e,"carList",!0),n(r.f)},resetCarList:function(t){var e=t.commit,n=(t.getters,i.a.getLocal("unSelectedList"));i.a.setLocal(n,"carList"),e(r.h)},resetCount:function(t){var e=t.commit,n=(t.getters,i.a.getLocal("unSelectedList").length);i.a.setLocal(n,"count"),e(r.i)},cutCarList:function(t,e){var n=t.commit;i.a.setLocal(e,"carList"),n(r.h)},setSelectedList:function(t){var e=t.commit,n=t.getters;i.a.setLocal(n.selectedList,"selectedList"),e("SET_SELECTEDLIST"),i.a.setLocal(n.unSelectedList,"unSelectedList"),e("SET_UNSELECTEDLIST")}},p={selectedList:function(t){if(""!==t.carList){return t.carList.filter(function(t){return 1==t.choseBool})}},unSelectedList:function(t){if(""!==t.carList){return t.carList.filter(function(t){return 0==t.choseBool})}}};e.a={state:s,actions:d,getters:p,mutations:l}}},["NHnr"]);
//# sourceMappingURL=app.33e5da3bba11d8f50436.js.map