(this.webpackJsonpwildlands=this.webpackJsonpwildlands||[]).push([[0],{31:function(e,n,t){e.exports=t(43)},36:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(12),o=t.n(i),c=(t(36),t(21)),l=t.n(c),s=t(11),u=t(24),d=t(25),m=t(15),f=t(26),b=t(27),p=t(29),h=t(19),g=t(68),v=t(70),w=t(71),y=t(67),k=t(65),j=t(66),E=t(72),O=t(69),P=t(73);function N(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function C(e){var n=e.classes,t=e.order,a=e.orderBy,i=e.onRequestSort;return r.a.createElement(k.a,null,r.a.createElement(j.a,null,B.map((function(e){return r.a.createElement(y.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},r.a.createElement(E.a,{active:a===e.id,direction:t,onClick:(o=e.id,function(e){i(e,o)})},e.label,a===e.id?r.a.createElement("span",{className:n.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null));var o}))))}var S=Object(g.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3)},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},tableWrapper:{overflowX:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function W(e){var n=e.rows,t=S(),a=r.a.useState("asc"),i=Object(h.a)(a,2),o=i[0],c=i[1],l=r.a.useState("kph"),s=Object(h.a)(l,2),u=s[0],d=s[1],m=r.a.useState([]),f=Object(h.a)(m,2),b=f[0],p=f[1];return r.a.createElement("div",{className:t.root},r.a.createElement(P.a,{className:t.paper},r.a.createElement(O.a,{component:"h1"},"Wildlands"),r.a.createElement("div",{className:t.tableWrapper},r.a.createElement(v.a,{className:t.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},r.a.createElement(C,{classes:t,numSelected:b.length,order:o,orderBy:u,onSelectAllClick:function(e){if(e.target.checked){var t=n.map((function(e){return e.name}));p(t)}else p([])},onRequestSort:function(e,n){c(u===n&&"desc"===o?"asc":"desc"),d(n)},rowCount:n.length}),r.a.createElement(w.a,null,function(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var a=n(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),t.map((function(e){return e[0]}))}(n,function(e,n){return"desc"===e?function(e,t){return N(e,t,n)}:function(e,t){return-N(e,t,n)}}(o,u)).map((function(e,n){var t,a=(t=e.name,-1!==b.indexOf(t)),i="enhanced-table-checkbox-".concat(n);return r.a.createElement(j.a,{hover:!0,onClick:function(n){return function(e,n){var t=b.indexOf(n),a=[];-1===t?a=a.concat(b,n):0===t?a=a.concat(b.slice(1)):t===b.length-1?a=a.concat(b.slice(0,-1)):t>0&&(a=a.concat(b.slice(0,t),b.slice(t+1))),p(a)}(0,e.name)},role:"checkbox","aria-checked":a,tabIndex:-1,key:e.name,selected:a},r.a.createElement(y.a,{component:"th",id:i},e.name),r.a.createElement(y.a,{align:"right"},e.kph),r.a.createElement(y.a,{align:"right"},e.kills),r.a.createElement(y.a,{align:"right"},e.cqc),r.a.createElement(y.a,{align:"right"},e.timeplayed),r.a.createElement(y.a,{align:"right"},e.rev),r.a.createElement(y.a,{align:"right"},e.noalert),r.a.createElement(y.a,{align:"right"},e.basejumps))})))))))}var B=[{id:"name",numeric:!1,disablePadding:!1,label:"Name"},{id:"kph",numeric:!0,disablePadding:!1,label:"Kph"},{id:"kills",numeric:!0,disablePadding:!1,label:"Kills"},{id:"cqc",numeric:!0,disablePadding:!1,label:"Cqc"},{id:"timeplayed",numeric:!0,disablePadding:!1,label:"Timeplayed"},{id:"revives",numeric:!0,disablePadding:!1,label:"Revives"},{id:"noalert",numeric:!0,disablePadding:!1,label:"Noalert missions"},{id:"basejumps",numeric:!0,disablePadding:!1,label:"Basejump count"}];t(42);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(f.a)(this,Object(b.a)(n).call(this,e))).state={rows:[]},t}return Object(p.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:n=e.sent,t=n.profiles.map((function(e){return console.log(e.stats),A({name:(n=e.profileId,{"88cd2ba8-86ef-49db-9664-b672a6c36519":"st4rbr34k","c6f91dbf-4414-48b9-a9ac-a37d5cf8a2ab":"BBB","87d2039c-5822-4284-8ac6-37fe3f1a2277":"Oleeeeeman","16c30c5f-4e97-455b-8123-3e6743bda427":"Teh viickee"}[n]),profileId:e.profileId},e.stats);var n})).map((function(e){var n=function(e,n){return e[n].value},t=Number(n(e,"KilledEnemiesCount")),a=n(e,"SoloPlaytime")/3600+n(e,"CoopPlaytime")/3600,r=t/a,i=Number(n(e,"KillWithCQCCount")),o=Number(n(e,"CompletedMissionWithNoAlertCount")),c=n(e,"RevivedTeammateCount"),l=Number(n(e,"StealthKillPercentage")),s=Number(n(e,"Basejumpcountcommunautary"));return{name:e.name,kph:r,timeplayed:Number(a),kills:t,cqc:i,rev:Number(c),noalert:Number(o),stealth:l,basejumps:s}})),window.state=t,this.setState({rows:t.map((function(e){return A({},e)}))});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){return console.log("".concat("/grbp-stats/wildlands/build","/olof.json")),fetch("./olof.json").then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this.state.rows;return r.a.createElement("div",{className:"App"},e.length>1&&r.a.createElement(W,{rows:e}))}}]),n}(r.a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/grbp-stats/wildlands/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/grbp-stats/wildlands/build","/service-worker.js");R?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(n,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.19bcfc22.chunk.js.map