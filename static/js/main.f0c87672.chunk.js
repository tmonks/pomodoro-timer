(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{17:function(e,t,r){e.exports=r.p+"static/media/beep-beep-bopbop-bop-bop.b9db14af.mp3"},21:function(e,t,r){e.exports=r(41)},26:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},34:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(8),c=r.n(i),l=(r(26),r(27),r(4)),o=(r(28),r(5)),u=r(3);function s(e){var t,r=200*Math.PI,n=r-r*(1-e.percent);return a.a.createElement("div",{className:"timer-container"},a.a.createElement("svg",{className:"progress",width:200,height:200,viewBox:"0 0 200 200"},a.a.createElement("circle",{className:"progress-meter",cx:100,cy:100,r:94,fill:"none",strokeWidth:10}),a.a.createElement("circle",{className:"progress-value",cx:100,cy:100,r:94,fill:"none",strokeWidth:12,strokeDasharray:r,strokeDashoffset:n.toString()})),a.a.createElement("div",{className:"timer-display"},a.a.createElement("div",{id:"timer-label"},e.label),a.a.createElement("div",{id:"time-left"},e.timeLeft),a.a.createElement("div",(t={id:"start_stop"},Object(l.a)(t,"id","start_stop"),Object(l.a)(t,"onClick",e.toggle),t),a.a.createElement(o.a,{icon:e.running?u.c:u.d}))))}r(34);function m(e){var t={cursor:"default"};return a.a.createElement("div",{className:"preset-container",style:e.active?{borderBottom:"4px solid #29a4b5"}:null},a.a.createElement("div",{className:"arrow",onClick:e.active?null:e.decrement,id:e.id+"-decrement",style:e.active?t:null},a.a.createElement(o.a,{icon:u.a})),a.a.createElement("div",{className:"values"},a.a.createElement("div",{id:e.id+"-length",className:"preset-value"},e.value),a.a.createElement("div",{id:e.id+"-label",className:"preset-label"},e.label)),a.a.createElement("div",{className:"arrow",onClick:e.active?null:e.increment,id:e.id+"-increment",style:e.active?t:null},a.a.createElement(o.a,{icon:u.b})))}var p=r(9),f=r(17),d=r.n(f),v=r(18),b=null,E=null,g=function(e){var t=Math.floor(e/60),r=e%60;return r=r.toString().padStart(2,"0"),(t=t.toString().padStart(2,"0"))+":"+r};var y=function(){return function(e,t){if(t().timer.timeLeft<=0){var r=t(),n=r.timer,a=r.presets,i=(n.currentPreset+1)%a.length,c=E.play();void 0!==c&&c.then((function(){console.log("RIIIINGG!")})).catch((function(e){console.log("audio playback failed: "+e)})),e({type:"NEXT_PRESET",index:i,timeLeft:60*a[i].value,label:a[i].label})}else e({type:"TICK"})}},O=Object(p.b)((function(e){return{label:e.presets[e.timer.currentPreset].label,startTime:60*e.presets[e.timer.currentPreset].value,timeLeft:e.timer.timeLeft,running:e.timer.running,presets:e.presets,currentPreset:e.timer.currentPreset}}),(function(e){return{tick:function(){return e(y())},toggle:function(){return e((function(e,t){t().timer.running?(clearInterval(b),e({type:"STOP"})):(b=setInterval((function(){e(y())}),1e3),e({type:"START"}))}))},reset:function(){return e((function(e,t){var r=t().timer,n=E.pause();void 0!==n&&n.then((function(){console.log("stopping audio")})).catch((function(e){console.log("error stopping audio: "+e)})),E.currentTime=0,r.running&&clearInterval(b),e({type:"RESET"})}))},nextPreset:function(){return e((function(e,t){var r=t(),n=r.timer,a=r.presets,i=(n.currentPreset+1)%a.length;e({type:"NEXT_PRESET",index:i,timeLeft:60*a[i].value,label:a[i].label})}))},increment:function(t){return e(function(e){return function(t,r){var n=r(),a=n.presets,i=n.timer;a[e].value<60&&(e===i.currentPreset&&t({type:"SET_TIME",payload:60*(a[e].value+1)}),t({type:"INCREMENT",id:e}))}}(t))},decrement:function(t){return e(function(e){return function(t,r){var n=r(),a=n.presets,i=n.timer;a[e].value>1&&(e===i.currentPreset&&t({type:"SET_TIME",payload:60*(a[e].value-1)}),t({type:"DECREMENT",id:e}))}}(t))}}}))((function(e){var t=g(e.timeLeft),r=e.timeLeft/e.startTime;return Object(n.useEffect)((function(){return function(){clearInterval(b)}}),[]),a.a.createElement("div",{className:"app"},a.a.createElement(v.Helmet,null,a.a.createElement("title",null,e.running?e.label+": "+t:"Pomodoro Timer")),a.a.createElement("h1",null,"POMODORO TIMER"),a.a.createElement("div",{className:"presets"},a.a.createElement(m,{index:0,id:"session",increment:function(){return e.increment(0)},decrement:function(){return e.decrement(0)},label:e.presets[0].label,value:e.presets[0].value,active:e.running&&0==e.currentPreset}),a.a.createElement(m,{index:1,id:"break",increment:function(){return e.increment(1)},decrement:function(){return e.decrement(1)},label:e.presets[1].label,value:e.presets[1].value,active:e.running&&1==e.currentPreset})),a.a.createElement(s,{label:e.label,timeLeft:t,running:e.running,toggle:e.toggle,reset:e.reset,percent:r}),a.a.createElement("div",{id:"reset",onClick:e.reset},a.a.createElement(o.a,{icon:u.e})),a.a.createElement("audio",{ref:function(e){E=e},src:d.a,id:"beep"}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T={label:"Work",timeLeft:1500,running:!1,currentPreset:0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TIME":return P({},e,{timeLeft:t.payload});case"TICK":return P({},e,{timeLeft:e.timeLeft-1});case"START":return P({},e,{running:!0});case"STOP":return P({},e,{running:!1});case"RESET":return P({},e,{timeLeft:T.timeLeft,running:!1,currentPreset:0,label:T.label});case"NEXT_PRESET":return P({},e,{currentPreset:t.index,timeLeft:t.timeLeft,label:t.label});default:return e}};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=[{label:"Work",value:25},{label:"Break",value:5}],S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e.map((function(e,r){return r===t.id?N({},e,{value:e.value+1}):e}));case"DECREMENT":return e.map((function(e,r){return t.id===r?N({},e,{value:e.value-1}):e}));case"RESET":return e.map((function(e,t){return N({},e,{value:k[t].value})}));default:return e}},I=r(19),L=r(20),R=r(7),D=Object(R.c)({timer:j,presets:S}),x=Object(R.a)(I.logger,L.a),M=Object(R.d)(D,x);c.a.render(a.a.createElement(p.a,{store:M},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f0c87672.chunk.js.map