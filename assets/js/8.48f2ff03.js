(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{505:function(t,i,n){},548:function(t,i,n){"use strict";n(505)},556:function(t,i,n){"use strict";n.r(i);var e={name:"Valine",mounted:function(){var t=n(259);"undefined"!=typeof window&&(this.window=window),this.valine=new t,this.initValine()},watch:{$route:function(t,i){i.path!=t.path&&this.initValine()}},methods:{initValine:function(){var t=location.origin+location.pathname;this.valine.init({el:"#vcomments",appId:"1c6rLC7CBnPfFWTR90knE7gO-gzGzoHsz",appKey:"emDFIauXHQk3XUNubnVhNqli",notify:!1,verify:!1,path:t,visitor:!0,avatar:"retro",placeholder:"write here"})}}},a=(n(548),n(12)),o=Object(a.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"page p-valine"},[i("section",{staticClass:"page-edit"},[i("div",{attrs:{id:"vcomments"}})])])}],!1,null,"3a2a2cc6",null);i.default=o.exports}}]);