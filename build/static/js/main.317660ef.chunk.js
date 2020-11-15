(this["webpackJsonpweather-service-dashboard"]=this["webpackJsonpweather-service-dashboard"]||[]).push([[0],{133:function(e,a,t){e.exports={Dashboard:"Dashboard_Dashboard__3gHbj",Grid:"Dashboard_Grid__aWkAY"}},202:function(e,a,t){e.exports={SliderContainer:"Slider_SliderContainer__FlHms"}},212:function(e,a,t){e.exports={Header:"Header_Header__214zg"}},213:function(e,a,t){e.exports={Footer:"Footer_Footer__1V-Tq"}},214:function(e,a,t){e.exports={Loader:"Loader_Loader__RZZ4L",load7:"Loader_load7__3iLce"}},247:function(e,a,t){e.exports=t(532)},252:function(e,a,t){},253:function(e,a,t){},532:function(e,a,t){"use strict";t.r(a),t.d(a,"store",(function(){return X}));var n=t(1),r=t.n(n),c=t(37),o=t.n(c),l=(t(252),t(253),t(13));function i(e){return{payload:e,type:"SET_RAIN"}}var u=t(219),s=t(202),d=t.n(s);var m=function(e){var a=e.name,t=e.min,c=e.max,o=e.units,i=Object(l.c)((function(e){return e[a]})),s=Object(n.useState)(i),m=Object(u.a)(s,2),f=m[0],p=m[1],E=Object(l.b)(),b=Object(n.useCallback)((function(e){return E({payload:e,type:"SET_SLIDER_VALUE"})}),[E]);return r.a.createElement("div",{className:d.a.SliderContainer},r.a.createElement("label",null,a),r.a.createElement("p",null,f," ",o),r.a.createElement("input",{type:"range",name:a,min:t,max:c,value:f,onChange:function(e){return function(e){p(parseInt(e.target.value)),b(e.target)}(e)}}))},f=t(11);var p=function(){var e=Object(l.c)((function(e){return e.nextDaysOfRain[0].days}));return e.forEach((function(e){return e.day="day "+e.day})),r.a.createElement("div",{className:"Chart"},r.a.createElement("h2",null,"Amount of rainfall chart"),r.a.createElement(f.b,{width:500,height:250,data:e},r.a.createElement(f.c,{strokeDasharray:"3 3"}),r.a.createElement(f.h,{dataKey:"day"}),r.a.createElement(f.i,{label:{value:"Amount (L/m2)",angle:-90,position:"insideLeft",dy:50}}),r.a.createElement(f.g,null),r.a.createElement(f.a,{dataKey:"amount",fill:"#0575ff"})))};var E=function(){var e=Object(l.c)((function(e){return e})),a=e.nextDaysOfRain[0].days,t=e.Pressure,n=e.Temperature,c=[];function o(e,a,t){var n=Math.log(t+1)*Math.log(e-929)*Math.log(a-9),r=parseFloat(Math.min(Math.max(n,0),100).toFixed(3)),c=parseFloat(Math.min(1.5*r,100).toFixed(3));return[parseFloat(Math.max(.5*r,0).toFixed(3)),r,c]}for(var i=0;i<7;i++){var u,s=o(t,n,null===(u=a[i])||void 0===u?void 0:u.amount),d={day:"day "+(i+1),lower:s[0],mean:s[1],upper:s[2]};c.push(d)}return r.a.createElement("div",{className:"Chart"},r.a.createElement("h2",null,"Chance of rain chart"),r.a.createElement(f.f,{width:500,height:250,data:c},r.a.createElement(f.c,{strokeDasharray:"3 3"}),r.a.createElement(f.h,{dataKey:"day"}),r.a.createElement(f.i,{label:{value:"Probability (%)",angle:-90,position:"insideLeft",dy:50},domain:[0,100]}),r.a.createElement(f.g,null),r.a.createElement(f.d,null),r.a.createElement(f.e,{type:"monotone",dataKey:"lower",stroke:"#8884d8"}),r.a.createElement(f.e,{type:"monotone",dataKey:"mean",stroke:"#82ca9d"}),r.a.createElement(f.e,{type:"monotone",dataKey:"upper",stroke:"#ffca9d"})))},b=t(133),h=t.n(b),y=t(212),v=t.n(y);var O=function(){return r.a.createElement("div",{className:v.a.Header},r.a.createElement("h1",null,"Awesome New Weather Dashboard"))},j=t(213),_=t.n(j);var g=function(){return r.a.createElement("div",{className:_.a.Footer},r.a.createElement("p",null,"Made with lots of love and care by FARID HOSMAN"))},x=t(214),R=t.n(x);var D=function(){return r.a.createElement("div",{className:R.a.Loader})};var N=function(){var e=Object(l.b)();Object(n.useEffect)((function(){e({type:"GET_RAIN"})}),[e]);var a=Object(l.c)((function(e){return e.nextDaysOfRain[0].days})).length>0;function t(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{name:"Pressure",min:970,max:1030,units:"hPa."}),r.a.createElement(E,null),r.a.createElement(m,{name:"Temperature",min:10,max:35,units:"\xb0C."}),r.a.createElement(p,null))}return r.a.createElement("div",{className:h.a.Dashboard},r.a.createElement(O,null),r.a.createElement("div",{className:h.a.Grid},a?r.a.createElement(t,null):r.a.createElement(D,null)),r.a.createElement(g,null))};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null))},A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))},F=t(43),L=t(538),k=t(539),S=t(217),T=t(215),I=t(220),C=t(76),M=t(77),H=t(216),G=t(218),K=t(89),P=t(537),V=t(536),q=t(92),J=function(){function e(){Object(C.a)(this,e)}return Object(M.a)(e,[{key:"processResponse",value:function(e){return e.ok?Object(K.a)(e.json()).pipe(Object(T.a)((function(e){return Object(q.right)(e)}))):Object(H.a)(Object(q.left)({message:"Error: ".concat(e.status),code:e.status}))}},{key:"findNextDaysOfRain",value:function(){var e=this;return Object(V.a)("http://private-4945e-weather34.apiary-proxy.com/weather34/rain").pipe(Object(S.a)((function(a){return e.processResponse(a)})),Object(P.a)((function(e){return Object(H.a)(Object(q.left)({message:"Error: ".concat(e),code:0}))})))}}]),e}(),U=new(function(){function e(){Object(C.a)(this,e),this.rainAdapter=new J}return Object(M.a)(e,[{key:"findNextDaysOfRain",value:function(){return this.rainAdapter.findNextDaysOfRain().pipe(Object(S.a)((function(e){return"Right"===e._tag?Object(H.a)(e.right):Object(G.a)(e.left)})))}}]),e}()),W=Object(k.a)((function(e){return e.pipe(Object(I.a)("GET_RAIN"),Object(S.b)((function(e){return U.findNextDaysOfRain().pipe(Object(T.a)(i))})))})),Z=t(88),z=t(93),B={Pressure:1e3,Temperature:23,nextDaysOfRain:[{request:"",days:[]}]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_RAIN":return Object(z.a)({},e);case"SET_RAIN":var t=a.payload;return Object(z.a)({},e,{nextDaysOfRain:t});case"SET_SLIDER_VALUE":var n=a.payload,r=n.name,c=n.value;return Object(z.a)({},e,{},Object(Z.a)({},r,c));default:return B}},Q=Object(L.a)();var X=function(){var e=F.c,a=[Object(F.a)(Q)],t=Object(F.d)(Y,e.apply(void 0,a));return Q.run(W),t}();o.a.render(r.a.createElement(l.a,{store:X},r.a.createElement(A,null)),document.getElementById("root"))}},[[247,1,2]]]);