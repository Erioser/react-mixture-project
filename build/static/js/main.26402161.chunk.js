(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(e,t,a){e.exports=a(246)},163:function(e,t,a){},168:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(162),a(163),a(20)),i=a(21),u=a(24),s=a(22),y=a(23),p=a(115),m=a(46),d=a(141),h=a(142),f=a.n(h),b={lotteryTypes:[]},E=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload,n=f.a.cloneDeep(b);switch(t){case"SET_LOTTERY_TYPES":n.lotteryTypes=a.lotteryTypes}return n},v=Object(m.c)({lottery:E}),g=Object(m.d)(v,Object(m.a)(d.a)),j=(a(168),a(250)),O=a(41),k=a(249),_=a(11),w=a(42),C=k.a.SubMenu,S=j.a.Sider,I=function(e){var t=e.title;return r.a.createElement("span",null,r.a.createElement(_.a,{type:"barcode"}),r.a.createElement("span",null,t))},q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={defaultSelectedKeys:[],refreshKey:0},a}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.defaultSelectedKeys,a=e.refreshKey;return r.a.createElement(S,{trigger:null,collapsible:!0,collapsed:this.props.collapsed},r.a.createElement("div",{className:"logo"},this.props.collapsed?"Murlin":"Murlin's React"),r.a.createElement(k.a,{key:a,theme:"dark",mode:"inline",defaultOpenKeys:["lottery"],defaultSelectedKeys:t},r.a.createElement(C,{key:"lottery",title:r.a.createElement(I,{title:"\u5f69\u7968"})},r.a.createElement(k.a.Item,{key:"lottery-history"},r.a.createElement(O.c,{to:"/lottery/history"},r.a.createElement(_.a,{type:"project"}),r.a.createElement("span",null,"\u5386\u53f2\u4e2d\u5956\u4fe1\u606f"))),r.a.createElement(k.a.Item,{key:"lottery-query"},r.a.createElement(O.c,{to:"/lottery/query"},r.a.createElement(_.a,{type:"calculator"}),r.a.createElement("span",null,"\u4e2d\u5956\u8ba1\u7b97\u5668")))),r.a.createElement(k.a.Item,{key:"beauty-images"},r.a.createElement(O.c,{to:"/beauty-images"},r.a.createElement(_.a,{type:"file-image"}),r.a.createElement("span",null,"\u7f8e\u56fe\u63a8\u8350"))),r.a.createElement(k.a.Item,{key:"space"},r.a.createElement(O.c,{to:"/space"},r.a.createElement(_.a,{type:"border"}),r.a.createElement("span",null,"\u9884\u7559\u7a7a\u4f4d")))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=[],n=e.location.pathname;return a.push(n.replace("/","")),{defaultSelectedKeys:a,refreshKey:t.refreshKey+1}}}]),t}(n.Component),K=Object(w.g)(q),N=r.a.createContext(),T=a(252),B=a(254),P=a(251),x=a(70),z=function(e){var t=e.city,a=e.ganmao,n=e.wendu,r=e.forecast,l=r[0],c=l.date,o=l.type;return{title:" ".concat(t," ").concat(n,"\u2103 ").concat(o," ").concat(c," "),list:r.map(function(e){var t=e.date,a=e.fengli,n=e.fengxiang,r=e.high,l=e.low,c=e.type;return"".concat(t," ").concat(c," ").concat(r," ").concat(l," ").concat(a," ").concat(n)}),description:a}},D=function(e){var t=e.list,a=e.description;return r.a.createElement(T.a,{title:a},r.a.createElement(B.a,{size:"small",bordered:!0,dataSource:t,renderItem:function(e){return r.a.createElement(B.a.Item,null,e)}}))},M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={weather:null},a}return Object(y.a)(t,e),Object(i.a)(t,[{key:"getWeatherByCity",value:function(e){var t=this,a=e?e.city:this.props.city;a&&Object(x.g)({city:a}).then(function(e){var a=e.data;t.setState({weather:z(a.data)})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.getWeatherByCity()}},{key:"shouldComponentUpdate",value:function(e){return e.city!==this.props.city&&this.getWeatherByCity(e),!0}},{key:"render",value:function(){var e=this.state.weather;return e?r.a.createElement("div",{className:"app-layout__header-weather"},r.a.createElement(P.a,{trigger:"hover",content:r.a.createElement(D,e)},e.title)):""}}]),t}(n.Component),W=j.a.Header,G=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(N.Consumer,null,function(t){return r.a.createElement(W,{className:"app-layout__header",style:{background:"#fff",padding:0}},r.a.createElement("div",{className:"app-layout__header-content--left"},r.a.createElement(_.a,{className:"trigger",type:e.props.collapsed?"menu-unfold":"menu-fold",onClick:e.props.toggle})),r.a.createElement("div",{className:"app-layout__header-content--right"},r.a.createElement(M,{city:t.city})))})}}]),t}(n.Component),A=a(138),L=a(253),F=a(248),J=function(e){var t=e.title;return r.a.createElement(L.a,{status:"500",title:"\u4e0d\u597d\u610f\u601d\uff0c\u51fa\u9519\u4e86",subTitle:t||"\u8fd9\u4e2a\u9519\u8bef\u53ef\u80fd\u6765\u81ea\u4e8e\u5185\u90e8\u7684\u67d0\u4e00\u4e2a\u529f\u80fd\u6a21\u5757.",extra:r.a.createElement(F.a,{type:"primary",onClick:function(){window.location.href=window.location.href+""}},"\u91cd\u8bd5\u4e00\u4e0b")})},R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1,error:null},a}return Object(y.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(J,{title:this.state.error}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(n.Component),V=Object(n.lazy)(function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,428))}),Y=Object(n.lazy)(function(){return Promise.all([a.e(0),a.e(1),a.e(11)]).then(a.bind(null,419))}),H=Object(n.lazy)(function(){return Promise.all([a.e(0),a.e(1),a.e(5),a.e(8)]).then(a.bind(null,426))}),U=Object(n.lazy)(function(){return Promise.all([a.e(1),a.e(6),a.e(9)]).then(a.bind(null,427))}),$=Object(n.lazy)(function(){return a.e(10).then(a.bind(null,420))}),Q=j.a.Content,X=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,{className:"app-layout__content"},r.a.createElement(R,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/lottery/history",component:V}),r.a.createElement(w.b,{path:"/lottery/detail/:id/:no",component:Y}),r.a.createElement(w.b,{path:"/lottery/query",component:H}),r.a.createElement(w.b,{path:"/beauty-images",component:U}),r.a.createElement(w.b,{path:"/space",component:$}),r.a.createElement(w.a,{from:"/*",to:"/space"})))))}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1,city:null},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(y.a)(t,e),Object(i.a)(t,[{key:"getCityInfoByIp",value:function(){var e=this;Object(x.b)().then(function(t){var a=t.data;e.setState({city:a.city})}).catch(function(e){return console.lof(e)})}},{key:"getGlobalContextValue",value:function(){var e={};return e.city=this.state.city,e}},{key:"componentDidMount",value:function(){this.getCityInfoByIp()}},{key:"render",value:function(){var e=this.getGlobalContextValue();return r.a.createElement(O.a,null,r.a.createElement(N.Provider,{value:e},r.a.createElement(j.a,{className:"app-layout"},r.a.createElement(K,{collapsed:this.state.collapsed}),r.a.createElement(j.a,null,r.a.createElement(G,{toggle:this.toggle,collapsed:this.state.collapsed}),r.a.createElement(X,null)))))}}]),t}(n.Component),ee=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:g},r.a.createElement(Z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){"use strict";var n=a(148),r=a.n(n).a,l={reason:"\u67e5\u8be2\u6210\u529f",result:[{lottery_id:"ssq",lottery_name:"\u53cc\u8272\u7403",lottery_type_id:"1",remarks:"\u6bcf\u5468\u4e8c\u3001\u56db\u3001\u65e5\u5f00\u5956"},{lottery_id:"dlt",lottery_name:"\u8d85\u7ea7\u5927\u4e50\u900f",lottery_type_id:"2",remarks:"\u6bcf\u5468\u4e00\u3001\u4e09\u3001\u516d\u5f00\u5956"},{lottery_id:"qlc",lottery_name:"\u4e03\u4e50\u5f69",lottery_type_id:"1",remarks:"\u6bcf\u5468\u4e00\u3001\u4e09\u3001\u4e94\u5f00\u5956"},{lottery_id:"fcsd",lottery_name:"\u798f\u5f693D",lottery_type_id:"1",remarks:"\u6bcf\u65e5\u5f00\u5956"},{lottery_id:"qxc",lottery_name:"\u4e03\u661f\u5f69",lottery_type_id:"2",remarks:"\u6bcf\u5468\u4e8c\u3001\u4e94\u3001\u65e5\u5f00\u5956"},{lottery_id:"pls",lottery_name:"\u6392\u52173",lottery_type_id:"2",remarks:"\u6bcf\u65e5\u5f00\u5956"},{lottery_id:"plw",lottery_name:"\u6392\u52175",lottery_type_id:"2",remarks:"\u6bcf\u65e5\u5f00\u5956"}],error_code:0},c="21257cf37e7c106a09fcc5cadd115995",o=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return console.log("request:apiGetLotteryTypes"),new Promise(function(e){e(l)})},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.log("request:apiGetLotteryBonus"),e.key=c,r.get("/api-lottery/bonus",{params:e})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.key=c,r.get("/api-lottery/query",{params:e})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.key=c,r.get("/api-lottery/history",{params:e})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.get("/apiopen/getImages",{params:e})},p=function(){return r.get("http://ip-api.com/json/?lang=zh-CN")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.get("/old-apiopen/weatherApi",{params:e})};a.d(t,"f",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"e",function(){return u}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return y}),a.d(t,"b",function(){return p}),a.d(t,"g",function(){return m})}},[[157,3,4]]]);
//# sourceMappingURL=main.26402161.chunk.js.map