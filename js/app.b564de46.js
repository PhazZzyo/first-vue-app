(function(){"use strict";var t={3942:function(t,e,n){n.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._t("default",(function(){return[t._v("Default value")]}))],2)},r=[],a={name:"ContainerBox"},i=a,s=n(1001),u=(0,s.Z)(i,o,r,!1,null,"a7738bd4",null),c=u.exports},2620:function(t,e,n){var o=n(7195),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NotificationsItem"),e("div",{staticClass:"content"},[e("AppHeader"),e("router-view")],1),e("AppFooter")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"})},s=[],u={name:"FooterItem"},c=u,l=n(1001),f=(0,l.Z)(c,i,s,!1,null,"ed01603e",null),p=f.exports,d=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("Container",[e("div",{staticClass:"header__content"},[e("router-link",{attrs:{to:"/"}},[e("Logo")],1),t.isLoggedIn?e("AccountActions"):e("AuthActions")],1)])],1)},h=[],m=n(3942),g=function(){var t=this,e=t._self._c;return e("img",{attrs:{src:n(3925),alt:""}})},v=[],_={name:"LogoItem"},b=_,y=(0,l.Z)(b,g,v,!1,null,"7735e6d9",null),C=y.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-actions"},[e("router-link",{staticClass:"auth-actions__link",attrs:{to:{name:"login-page"}}},[t._v(" Login ")]),t._v(" / "),e("router-link",{staticClass:"auth-actions__link",attrs:{to:{name:"registration-page"}}},[t._v(" Register ")])],1)},A=[],w={},Z=w,O=(0,l.Z)(Z,k,A,!1,null,"5f25b170",null),x=O.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-actions",on:{mouseover:t.open,mouseleave:t.close}},[e("button",{staticClass:"account-actions__btn",on:{click:t.toggle}},[e("span",{staticClass:"account-actions__text"},[t._v("profile")]),e("svg",{staticClass:"account-actions__icon",attrs:{width:"16",height:"18",viewBox:"0 0 16 18",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8 0C5.38286 0 3.25391 2.12896 3.25391 4.74609C3.25391 7.36323 5.38286 9.49219 8 9.49219C10.6171 9.49219 12.7461 7.36323 12.7461 4.74609C12.7461 2.12896 10.6171 0 8 0Z"}}),e("path",{attrs:{d:"M15.8216 14.0161C14.4028 11.8877 12.0282 10.6172 9.4708 10.6172H6.5292C3.9718 10.6172 1.5972 11.8877 0.178438 14.0161L0.0898438 14.1489V18H15.9102H15.9102V14.1489L15.8216 14.0161Z"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"account-actions__list"},[e("li",{staticClass:"account-actions__item"},[e("router-link",{staticClass:"account-actions__link",attrs:{to:{name:"my-orders"}}},[t._v("My orders")])],1),e("li",{staticClass:"account-actions__item"},[e("button",{staticClass:"account-actions__logout",on:{click:t.handleLogout}},[t._v(" Logout ")])])])])},j=[],P=(n(7658),n(408)),E={name:"AccountActions",data(){return{isOpen:!1}},methods:{...(0,P.nv)("auth",["logout"]),open(){this.isOpen=!0},close(){this.isOpen=!1},toggle(){this.isOpen=!this.isOpen},async handleLogout(){try{await this.logout();const{requiresAuth:t}=this.$route.meta;t&&this.$router.push({name:"login-page"})}catch(t){this.$notify({type:"error",title:"Logout error"})}}}},T=E,N=(0,l.Z)(T,L,j,!1,null,"13b27556",null),S=N.exports,F={name:"AppHeader",components:{Container:m.Z,Logo:C,AuthActions:x,AccountActions:S},computed:{...(0,P.Se)("auth",["isLoggedIn"])}},I=F,B=(0,l.Z)(I,d,h,!1,null,"92957bb2",null),D=B.exports,U=function(){var t=this,e=t._self._c;return e("notifications",{attrs:{classes:"vue-notification"}})},q=[],H={name:"NotificationItem"},M=H,$=(0,l.Z)(M,U,q,!1,null,"5ed9d374",null),R=$.exports,V={name:"App",components:{AppFooter:p,AppHeader:D,NotificationsItem:R}},z=V,K=(0,l.Z)(z,r,a,!1,null,"0d7f10d3",null),G=K.exports,J=n(2241),Q=function(){var t=this;t._self._c;return t._m(0)},W=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"error"},[e("h1",{staticClass:"error__title"},[t._v("Page not found")])])}],X={name:"ErrorPage"},Y=X,tt=(0,l.Z)(Y,Q,W,!1,null,"06cf46eb",null),et=tt.exports,nt=n(2509);const ot=()=>n.e(850).then(n.bind(n,5850)),rt=()=>n.e(202).then(n.bind(n,8202)),at=()=>n.e(919).then(n.bind(n,8919)),it=()=>n.e(955).then(n.bind(n,8955)),st=()=>n.e(416).then(n.bind(n,4416)),ut=[{path:"/",component:ot,name:"homepage"},{path:"/apartments/:id",component:rt,name:"apartment",meta:{requiresAuth:!0}},{path:"/my-orders",component:st,name:"my-orders",meta:{requiresAuth:!0}},{path:"/login",component:at,name:"login-page",meta:{hideForAuth:!0}},{path:"/registration",component:it,name:"registration-page",meta:{hideForAuth:!0}},{path:"*",component:et,name:"error-page"}],ct=new J.ZP({routes:ut,mode:"history"});ct.beforeEach(((t,e,n)=>{const o=nt.Z.getters["auth/isLoggedIn"];t.matched.some((t=>t.meta.requiresAuth))&&(o||n({name:"login-page"})),t.matched.some((t=>t.meta.hideForAuth))&&o&&n({name:"homepage"}),n()}));var lt=ct,ft=n(9649),pt=n.n(ft);o["default"].config.productionTip=!1,o["default"].use(J.ZP),o["default"].use(pt()),new o["default"]({render:t=>t(G),router:lt,store:nt.Z}).$mount("#app")},2509:function(t,e,n){n.d(e,{Z:function(){return h}});var o=n(408),r=n(7195),a=n(5999);const i=t=>a.Z.post("/users/login",t),s=t=>a.Z.post("/users/register",t),u=()=>a.Z.post("/users/logout"),c={user:null,token:""};var l={namespaced:!0,state:{...c},getters:{isLoggedIn(t){return Boolean(t.token)}},mutations:{setUserData(t,e){t.user=e},setToken(t,e){t.token=e},clearUserData(t){Object.assign(t,{...c})}},actions:{async login({commit:t},e){const{data:n}=await i(e),{user:o,token:r}=n;t("setUserData",o),t("setToken",r)},async registerUser({commit:t},e){const{data:n}=await s(e),{user:o,token:r}=n;t("setUserData",o),t("setToken",r)},async logout({commit:t}){await u(),t("clearUserData")}}},f=n(6006);r["default"].use(o.ZP);const p=(0,f.Z)({paths:["auth.token"]}),d=new o.ZP.Store({modules:{auth:l},plugins:[p]});var h=d},5999:function(t,e,n){var o=n(6040),r=n(2509);const a=o.Z.create({baseURL:"https://apt-booking-api.herokuapp.com/"});a.interceptors.request.use((t=>{const{token:e}=r.Z.state.auth;return e&&(t.headers.Authorization=`Bearer ${e}`),t}),(t=>Promise.reject(t))),e["Z"]=a},3925:function(t,e,n){t.exports=n.p+"img/logo.bbe07a7a.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{202:"57a8a5f4",416:"201d878a",850:"2d37efb1",919:"1eefc1d0",955:"b59db404"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{202:"ddcbbd4f",416:"6f8a4c27",850:"75ac5885",919:"a0ae9508",955:"794372ac"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="first-vue-app:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(d);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/first-vue-app/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={202:1,416:1,850:1,919:1,955:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkfirst_vue_app"]=self["webpackChunkfirst_vue_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2620)}));o=n.O(o)})();
//# sourceMappingURL=app.b564de46.js.map