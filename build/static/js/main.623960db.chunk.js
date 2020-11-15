(this["webpackJsonpweather-service-dashboard"]=this["webpackJsonpweather-service-dashboard"]||[]).push([[0],{133:function(e,a,t){e.exports={Dashboard:"Dashboard_Dashboard__3gHbj",Grid:"Dashboard_Grid__aWkAY"}},202:function(e,a,t){e.exports={SliderContainer:"Slider_SliderContainer__FlHms"}},212:function(e,a,t){e.exports={Header:"Header_Header__214zg"}},213:function(e,a,t){e.exports={Footer:"Footer_Footer__1V-Tq"}},246:function(e,a,t){e.exports=t(531)},251:function(e,a,t){},252:function(e,a,t){},531:function(e,a,t){"use strict";t.r(a),t.d(a,"store",(function(){return Y}));var n=t(1),r=t.n(n),c=t(37),o=t.n(c),i=(t(251),t(252),t(14));function l(e){return{payload:e,type:"SET_RAIN"}}var u=t(218),s=t(202),m=t.n(s);var d=function(e){var a=e.name,t=e.min,c=e.max,o=e.units,l=Object(i.c)((function(e){return e[a]})),s=Object(n.useState)(l),d=Object(u.a)(s,2),f=d[0],p=d[1],b=Object(i.b)(),h=Object(n.useCallback)((function(e){return b({payload:e,type:"SET_SLIDER_VALUE"})}),[b]);return r.a.createElement("div",{className:m.a.SliderContainer},r.a.createElement("label",null,a),r.a.createElement("p",null,f," ",o),r.a.createElement("input",{type:"range",name:a,min:t,max:c,value:f,onChange:function(e){return function(e){p(parseInt(e.target.value)),h(e.target)}(e)}}))},f=t(11);var p=function(){var e=Object(i.c)((function(e){return e.nextDaysOfRain[0].days}));return e.forEach((function(e){return e.day="day "+e.day})),r.a.createElement("div",{className:"Chart"},r.a.createElement("h2",null,"Amount of rainfall chart"),r.a.createElement(f.b,{width:500,height:250,data:e},r.a.createElement(f.c,{strokeDasharray:"3 3"}),r.a.createElement(f.h,{dataKey:"day"}),r.a.createElement(f.i,{label:{value:"Amount (L/m2)",angle:-90,position:"insideLeft",dy:50}}),r.a.createElement(f.g,null),r.a.createElement(f.a,{dataKey:"amount",fill:"#0575ff"})))};var b=function(){var e=Object(i.c)((function(e){return e})),a=e.nextDaysOfRain[0].days,t=e.Pressure,n=e.Temperature,c=[];function o(e,a,t){var n=Math.log(t+1)*Math.log(e-929)*Math.log(a-9),r=parseFloat(Math.min(Math.max(n,0),100).toFixed(3)),c=parseFloat(Math.min(1.5*r,100).toFixed(3));return[parseFloat(Math.max(.5*r,0).toFixed(3)),r,c]}for(var l=0;l<7;l++){var u,s=o(t,n,null===(u=a[l])||void 0===u?void 0:u.amount),m={day:"day "+(l+1),lower:s[0],mean:s[1],upper:s[2]};c.push(m)}return r.a.createElement("div",{className:"Chart"},r.a.createElement("h2",null,"Chance of rain chart"),r.a.createElement(f.f,{width:500,height:250,data:c},r.a.createElement(f.c,{strokeDasharray:"3 3"}),r.a.createElement(f.h,{dataKey:"day"}),r.a.createElement(f.i,{label:{value:"Probability (%)",angle:-90,position:"insideLeft",dy:50},domain:[0,100]}),r.a.createElement(f.g,null),r.a.createElement(f.d,null),r.a.createElement(f.e,{type:"monotone",dataKey:"lower",stroke:"#8884d8"}),r.a.createElement(f.e,{type:"monotone",dataKey:"mean",stroke:"#82ca9d"}),r.a.createElement(f.e,{type:"monotone",dataKey:"upper",stroke:"#ffca9d"})))},h=t(133),E=t.n(h),y=t(212),v=t.n(y);var O=function(){return r.a.createElement("div",{className:v.a.Header},r.a.createElement("h1",null,"Awesome New Weather Dashboard"))},j=t(213),g=t.n(j);var _=function(){return r.a.createElement("div",{className:g.a.Footer},r.a.createElement("p",null,"Made with lots of love and care by FARID HOSMAN"))};var x=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){e({type:"GET_RAIN"})}),[e]),r.a.createElement("div",{className:E.a.Dashboard},r.a.createElement(O,null),r.a.createElement("div",{className:E.a.Grid},r.a.createElement(d,{name:"Pressure",min:970,max:1030,units:"hPa."}),r.a.createElement(b,null),r.a.createElement(d,{name:"Temperature",min:10,max:35,units:"\xb0C."}),r.a.createElement(p,null)),r.a.createElement(_,null))};var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null))},N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))},R=t(43),w=t(537),A=t(538),k=t(216),F=t(214),S=t(219),T=t(76),I=t(77),C=t(215),M=t(217),H=t(89),L=t(536),G=t(535),K=t(92),P=function(){function e(){Object(T.a)(this,e)}return Object(I.a)(e,[{key:"processResponse",value:function(e){return e.ok?Object(H.a)(e.json()).pipe(Object(F.a)((function(e){return Object(K.right)(e)}))):Object(C.a)(Object(K.left)({message:"Error: ".concat(e.status),code:e.status}))}},{key:"findNextDaysOfRain",value:function(){var e=this;return Object(G.a)("http://private-4945e-weather34.apiary-proxy.com/weather34/rain").pipe(Object(k.a)((function(a){return e.processResponse(a)})),Object(L.a)((function(e){return Object(C.a)(Object(K.left)({message:"Error: ".concat(e),code:0}))})))}}]),e}(),V=new(function(){function e(){Object(T.a)(this,e),this.rainAdapter=new P}return Object(I.a)(e,[{key:"findNextDaysOfRain",value:function(){return this.rainAdapter.findNextDaysOfRain().pipe(Object(k.a)((function(e){return"Right"===e._tag?Object(C.a)(e.right):Object(M.a)(e.left)})))}}]),e}()),q=Object(A.a)((function(e){return e.pipe(Object(S.a)("GET_RAIN"),Object(k.b)((function(e){return V.findNextDaysOfRain().pipe(Object(F.a)(l))})))})),J=t(88),U=t(93),W={Pressure:1e3,Temperature:23,nextDaysOfRain:[{request:"",days:[]}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_RAIN":return Object(U.a)({},e);case"SET_RAIN":var t=a.payload;return Object(U.a)({},e,{nextDaysOfRain:t});case"SET_SLIDER_VALUE":var n=a.payload,r=n.name,c=n.value;return Object(U.a)({},e,{},Object(J.a)({},r,c));default:return W}},B=Object(w.a)();var Y=function(){var e=R.c,a=[Object(R.a)(B)],t=Object(R.d)(z,e.apply(void 0,a));return B.run(q),t}();o.a.render(r.a.createElement(i.a,{store:Y},r.a.createElement(N,null)),document.getElementById("root"))}},[[246,1,2]]]);