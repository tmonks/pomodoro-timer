(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{18:function(e,t,r){e.exports=r.p+"static/media/beep-beep-bopbop-bop-bop.b9db14af.mp3"},21:function(e,t,r){e.exports=r(41)},26:function(e,t,r){},27:function(e,t,r){},36:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),i=r.n(c),l=(r(26),r(27),r(3)),o=r(17),u=(r(36),r(5)),s=r(4);var p=Object(l.b)((function(e){return{timeLeft:e.timer.timeLeft,running:e.timer.running,audioRef:e.timer.audioRef}}),(function(e,t){return{toggle:function(){return e((function(e,t){t().timer.running?e({type:"STOP"}):e({type:"START"})}))}}}))((function(e){var t=200*Math.PI,r=t*(e.timeLeft/e.startTime),n=function(e){var t=Math.floor(e/60),r=e%60;return r=r.toString().padStart(2,"0"),(t=t.toString().padStart(2,"0"))+":"+r}(e.timeLeft);return a.a.createElement("div",{className:"timer-container"}," ",a.a.createElement(o.Helmet,null,a.a.createElement("title",null,e.running?e.label+": "+n:"Pomodoro Timer")),a.a.createElement("svg",{className:"progress",width:200,height:200,viewBox:"0 0 200 200"},a.a.createElement("circle",{className:"progress-meter",cx:100,cy:100,r:94,fill:"none",strokeWidth:10}),a.a.createElement("circle",{className:"progress-value",cx:100,cy:100,r:94,fill:"none",strokeWidth:12,strokeDasharray:t,strokeDashoffset:r.toString()})),a.a.createElement("div",{className:"timer-display"},a.a.createElement("div",{id:"timer-label"},e.label),a.a.createElement("div",{id:"time-left"},n),a.a.createElement("div",{id:"start_stop",onClick:e.toggle},a.a.createElement(u.a,{icon:e.running?s.c:s.d}))))}));r(40);var f=Object(l.b)((function(e,t){return{label:e.presets[t.index].label,value:e.presets[t.index].value,id:e.presets[t.index].id}}),(function(e,t){return{increment:function(){return e((r=t.index,function(e,t){var n=t().presets;n[r].value<60&&e({type:"INCREMENT",id:r,label:n[r].label,newValue:n[r].value+1})}));var r},decrement:function(){return e((r=t.index,function(e,t){var n=t().presets;n[r].value>1&&e({type:"DECREMENT",id:r,label:n[r].label,newValue:n[r].value-1})}));var r}}}))((function(e){var t={cursor:"default"};return a.a.createElement("div",{className:"preset-container",style:e.active?{borderBottom:"4px solid #29a4b5"}:null},a.a.createElement("div",{className:"arrow",onClick:e.active?null:e.decrement,id:e.id+"-decrement",style:e.active?t:null},a.a.createElement(u.a,{icon:s.a})),a.a.createElement("div",{className:"values"},a.a.createElement("div",{id:e.id+"-length",className:"preset-value"},e.value),a.a.createElement("div",{id:e.id+"-label",className:"preset-label"},e.label)),a.a.createElement("div",{className:"arrow",onClick:e.active?null:e.increment,id:e.id+"-increment",style:e.active?t:null},a.a.createElement(u.a,{icon:s.b})))})),d=r(18),m=r.n(d);var b=Object(l.b)((function(e){return{label:e.presets[e.app.currentPreset].label,startTime:60*e.presets[e.app.currentPreset].value,running:e.timer.running,presets:e.presets,currentPreset:e.app.currentPreset}}),(function(e){return{reset:function(){return e((function(e,t){e({type:"RESET"})}))},setAudioRef:function(t){return e(function(e){return{type:"SET_AUDIO_REF",payload:e}}(t))}}}))((function(e){return Object(n.useEffect)((function(){return function(){e.running&&e.toggle()}}),[]),a.a.createElement("div",{className:"app"},a.a.createElement("h1",null,"POMODORO TIMER"),a.a.createElement("div",{className:"presets"},a.a.createElement(f,{index:0,active:e.running&&0===e.currentPreset}),a.a.createElement(f,{index:1,active:e.running&&1===e.currentPreset})),a.a.createElement(p,{label:e.label,startTime:e.startTime,reset:e.reset}),a.a.createElement("div",{id:"reset",onClick:function(){return e.reset()}},a.a.createElement(u.a,{icon:s.e})),a.a.createElement("audio",{ref:e.setAudioRef,src:m.a,id:"beep"}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=r(7);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={label:"Work",timeLeft:1500,running:!1,intervalID:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TICK":return g({},e,{timeLeft:e.timeLeft-1});case"START":return g({},e,{running:!0});case"STOP":return g({},e,{running:!1});case"INCREMENT":case"DECREMENT":return t.label!==e.label||e.running?e:g({},e,{timeLeft:60*t.newValue});case"RESET":return O;case"NEXT_PRESET":return g({},e,{timeLeft:t.timeLeft,label:t.label});case"SET_INTERVAL":return g({},e,{intervalID:t.payload});default:return e}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=[{id:"session",label:"Work",value:25},{id:"break",label:"Break",value:5}],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e.map((function(e,r){return r===t.id?P({},e,{value:e.value+1}):e}));case"DECREMENT":return e.map((function(e,r){return t.id===r?P({},e,{value:e.value-1}):e}));case"RESET":return e.map((function(e,t){return P({},e,{value:T[t].value})}));default:return e}};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={currentPreset:0,audioRef:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_PRESET":return S({},e,{currentPreset:t.newPreset});case"SET_AUDIO_REF":return S({},e,{audioRef:t.payload});case"RESET":return S({},e,{currentPreset:R.currentPreset});default:return e}},k=r(19),D=r(20),I=r(8),L=Object(I.c)({timer:y,presets:w,app:N}),x=Object(I.a)(D.a,(function(e){return function(t){return function(r){var n=e.getState().app;switch(r.type){case"NEXT_PRESET":var a=n.audioRef.play();void 0!==a&&a.catch((function(e){console.log("audio playback failed: "+e)}));break;case"RESET":case"STOP":n.audioRef.pause(),n.audioRef.currentTime=0}t(r)}}}),(function(e){return function(t){return function(r){var n=e.getState().timer;switch(r.type){case"START":var a=setInterval((function(){e.dispatch({type:"TICK"})}),1e3);e.dispatch({type:"SET_INTERVAL",payload:a}),t(r);break;case"RESET":case"STOP":clearInterval(n.intervalID),t(r);break;case"TICK":if(n.timeLeft<=0){var c=e.getState(),i=c.app,l=c.presets,o=(i.currentPreset+1)%l.length;e.dispatch({type:"NEXT_PRESET",newPreset:o,timeLeft:60*l[o].value,label:l[o].label})}else t(r);break;default:t(r)}}}}),k.logger),C=Object(I.d)(L,x);i.a.render(a.a.createElement(l.a,{store:C},a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b71f2d7c.chunk.js.map