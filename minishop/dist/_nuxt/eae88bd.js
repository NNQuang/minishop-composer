(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{620:function(e,t,r){"use strict";r.r(t);r(17),r(11),r(12),r(7),r(16),r(18);var n=r(4),c=r(2),o=r(5);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d,h={data:function(){return{redirect:""}},computed:l({},Object(o.c)("auth",["isRegister","redirectUrl"])),watch:{isRegister:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,this.sleep(250);case 3:document.getElementById("iframe_order").src="".concat(this.$crmUrlHome,"/register");case 4:this.$store.commit("auth/SET_IS_REGISTER",!1);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)}),redirectUrl:function(e){e&&(this.redirect=e)}},mounted:function(){var e=this;window.onmessage=function(t){var data=t.data;data&&(data=JSON.parse(t.data),e.handleDataEvent(data))}},methods:l(l(l(l({},Object(o.b)("auth",["getProfile"])),Object(o.d)("auth",["SET_TOKEN"])),Object(o.d)("auth",["LOGOUT"])),{},{handleDataEvent:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data,n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(data=e.length>0&&void 0!==e[0]?e[0]:{},n=data.channel,!(c=data.token)){r.next=9;break}return t.SET_TOKEN(c),r.next=6,t.sleep(50);case 6:return r.next=8,t.getProfile();case 8:t.redirect&&(t.$store.commit("auth/SET_REDIRECT_URL",""),window.location.href=t.redirect);case 9:"Logout"==n&&t.LOGOUT();case 10:case"end":return r.stop()}}),r)})))()}})},O=r(6),component=Object(O.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"main"},[t("div",{staticClass:"pa-0 ma-0",staticStyle:{padding:"0px",width:"100%","text-align":"center"}},[t("iframe",{staticClass:"account_iframe",attrs:{id:"iframe_order",src:this.$crmUrlHome}})])])}),[],!1,null,null,null);t.default=component.exports}}]);