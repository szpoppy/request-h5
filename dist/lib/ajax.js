"use strict";function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_slicedToArray=function(){function t(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof t.define&&t.define.amd?t.define(e):t.requestFn=e()}(window,function(){function t(t,e){var r=this.events[t];return r||(r=this.events[t]=[]),r.push(e),this}function e(t,e){if(!t)return this.events={},this;if(!e)return delete this.events[t],this;var r=this.events[t];if(!r)return this;var n=r.indexOf(e);return n>=0&&r.splice(n,1),this}function r(t,e,r){if(t&&t.length)for(var n=0;n<t.length;n+=1)t[n].apply(e,r);return r}function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return R(r,function(e){R(e,function(e,r){if(e){var o=C.call(e).toLowerCase();if("[object date]"==o)return void(t[r]=new Date(e.getTime()));var i=C.call(t[r]).toLowerCase();if("[object array]"==o)return i!=o&&(t[r]=[]),void n(t[r],e);if("[object object]"==o)return i!=o&&(t[r]={}),void n(t[r],e)}t[r]=e})}),t}function o(t,e){var r=document.createElement("script");return r.setAttribute("type","text/javascript"),r.onload=r.onerror=function(){r.onload=r.onerror=null,e&&e(),setTimeout(function(){r&&(r.parentNode.removeChild(r),r=null)},2e3)},r.async=!0,D.appendChild(r),r.src=t,r}function i(){return _+=1,Number(Math.round(1e6*(Math.random()+1))+((new Date).getTime()-q)+""+_).toString(36)}function a(t){return E.setAttribute("href",t),E.href}function s(t,e){return e&&t&&e.split(".").forEach(function(e){if(null==(t=t[e]))return!1}),t}function u(t,e){return e?t+(t.indexOf("?")>-1?"&":"?")+e:t}function c(t,e){return t instanceof window.FormData?t:t&&"string"!=typeof t?"json"==e?JSON.stringify(t):k.stringify(t):t||""}function l(t){return"json"==t?"application/json":"application/x-www-form-urlencoded"}function f(t){var e=t.withReq;if(!t.json&&t.text)try{t.json=JSON.parse(t.text)}catch(e){t.json={}}"json"==e.resType&&(t.result=t.json);var r=t.getHeader("Date");r&&this.root.setDate(r),delete this._req,this.emit("verify",t),!0!==t.cancel&&this.emit("callback",t)}function h(t){var e=this,r=t.withReq,n=r.param,a=r.jsonpKey,s=n[a];s||(n[a]=s="jsonp_"+i());var l=void 0,h=function(n){l||(l=!0,t.json=n,t.text="",t.err=n?null:"http error",r.outFlag||f.call(e,t))};window[s]=h;var p=u(r.url,c(n,r.dataType));this.emit("send",r),o(p,function(){h()})}function p(t){function e(e){if(!n.outFlag){t.getHeader=function(t){try{return e.headers.get(t)}catch(t){return""}},t.status=e.status,t.text="",t.err=e.ok?null:"http error ["+t.status+"]";var r=["",null];try{r[0]=e.text()}catch(t){}if(["json","text"].indexOf(n.resType)<0)try{r[1]=e[n.resType]()}catch(t){}Promise.all(r).then(h,h)}delete n.outFlag}var r=this,n=t.withReq,o=String(n.method||"GET").toUpperCase(),i=n.param,a={method:o,headers:n.header},s=c(i,n.dataType);"GET"==o?(n.url=u(n.url,s),a.body=i=null):(a.body=s||null,void 0!==n.header["Content-Type"]||n.isFormData||(n.header["Content-Type"]=l(n.dataType))),void 0!==n.header["X-Requested-With"]||n.isCross||(n.header["X-Requested-With"]="XMLHttpRequest"),n.isCross?(a.mode="cors",n.withCredentials&&(a.credentials="include")):a.credentials="same-origin";var h=function(e){var n=_slicedToArray(e,2),o=n[0],i=n[1];t.text=o,t.result=i,f.call(r,t)};this.emit("send",n),window.fetch(n.url,a).then(e,e)}function d(){return new window.XMLHttpRequest}function y(t){var e=t.withReq,r=e.xhr;if(r&&!e.outFlag){var n="";try{n=r.getAllResponseHeaders()}catch(t){}t.headers={get:function(t){return new RegExp("(?:"+t+"):[ \t]*([^\r\n]*)\r").test(n)?RegExp.$1:""}},t.text="";try{t.text=r.responseText}catch(t){}t.result=null;try{t.result=r.response}catch(t){}t.status=0;try{t.status=r.status}catch(t){}var o=t.status;t.err=o>=200&&o<300||304===o||1223===o?null:"http error ["+o+"]",f.call(this,t)}delete e.xhr,delete e.outFlag}function v(t){var e=this,r=t.withReq;r.xhr=d(r.isCross);var n=String(r.method||"GET").toUpperCase();r.withCredentials&&(r.xhr.withCredentials=!0);var o=c(r.param,r.dataType);if("GET"==n?(r.xhr.open(n,u(r.url,o),!0),o=null):(r.xhr.open(n,r.url,!0),void 0!==r.header["Content-Type"]||r.isFormData||(r.header["Content-Type"]=l(r.dataType))),void 0!==r.header["X-Requested-With"]||r.isCross||(r.header["X-Requested-With"]="XMLHttpRequest"),R(r.header,function(t,e){r.xhr.setRequestHeader(e,t)}),t.status=0,this.hasEvent("progress"))try{r.xhr.upload.onprogress=function(){e.emit("progress",event)}}catch(t){}r.xhr.onload=y.bind(this,t),this.emit("send",r),["arrayBuffer","blob"].indexOf(r.resType)>=0&&(r.xhr.responseType=r.resType),o&&(o=o.replace(/[\x00-\x08\x11-\x12\x14-\x20]/g,"*")),r.xhr.send(o)}function m(t,e){if(!e.outFlag){e.method=String(e.method||"get").toUpperCase();var r=Object.create(S);r.withReq=e,r.root=this,this.emit("before",e),e.path="",e.orginURL=e.url,e.formatURL=e.orginURL.replace(/^<([\w,:]*)>/,function(t,r){return r.split(/,+/).forEach(function(t){var r=t.toLowerCase().split(/:+/),n=_slicedToArray(r,2),o=n[0],i=n[1];void 0===i&&(i=o,o="method"),e[o]=i}),""}).replace(/^(\w+):(?!\/\/)/,function(t,r){return e.path=t,e.paths[r]||t}),e.baseURL&&!/^(:?http(:?s)?:)?\/\//i.test(e.url)&&(e.formatURL=e.baseURL+e.formatURL),this.emit("path",e);var o=!1;window.FormData&&t instanceof window.FormData&&(o=!0),e.isFormData=o;var s=e.dataType=String(e.dataType||"").toLowerCase();o?(R(e.param,function(e,r){t.has(r)&&t.append(r,e)}),e.param=t):("string"==typeof t&&(t="json"==s?JSON.parse(t):k.parse(t)),n(e.param,t||{})),this.emit("open",e),e.isFormData=o,e.dataType=s;var u=String(e.method||"get").toUpperCase();return"GET"==u&&(!1!==e.cache||e.param._r_||(e.param._r_=i())),(e.isCross=!/:\/\/$/.test(a(e.formatURL).split(x)[0]||""),e.url=e.formatURL,"JSONP"==u)?void h.call(this,r):j&&e.useFetch&&!this.hasEvent("progress")?void p.call(this,r):void v.call(this,r)}}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.baseURL,r=t.paths,n=t.useFetch,o=t.url,i=t.method,a=t.dataType,s=t.resType,u=t.param,c=void 0===u?{}:u,l=t.header,f=void 0===l?{}:l,h=t.jsonpKey,p=t.cache,d=t.withCredentials,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&(y.baseURL=e),r&&(y.paths=r),"boolean"==typeof n&&(y.useFetch=n),o&&(y.url=o),i&&(y.method=i.toUpperCase()),c&&(y.param=c),f&&(y.header=f),a&&(y.dataType=a),s&&(y.resType=s),h&&(y.jsonpKey=h),"boolean"==typeof p&&(y.cache=p),"boolean"==typeof d&&(y.withCredentials=d),y}function w(t){var e=this._req;e&&(e.outFlag=!0,e.xhr&&(e.xhr.abort(),e.xhr=null),delete this._req,t&&this.emit("abort",e))}function b(t){t.dateDiff=L,t.conf={},t.events={}}function T(t){return O.prototype[t]=function(){return this.load.apply(this,arguments).setConf({method:t})}}var C=Object.prototype.toString,x=window.location.host,j=!!window.fetch,R=function(){function t(t,e){return t.push(e),e}function e(t,e,r){t[r]=e}function r(){return arguments[1]}return function(n,o,i){if(n){var a=function(){c=!0},s=i?i.push?t:e:r,u=n.length,c=!1;if("-[object array]-[object nodelist]-[object htmlcollection]-[object arguments]-".indexOf("-"+C.call(n).toLowerCase()+"-")>-1||"[object htmlcollection]"==String(n).toLowerCase())for(var l=0;l<u;l+=1){var f=o(n[l],l,a);if(c)break;s(i,f,l)}else for(var h in n)if(!n.hasOwnProperty||n.hasOwnProperty(h)){var p=o(n[h],h,a);if(c)break;s(i,p,h)}}return i}}(),k={parse:function(t,e){var r=e&&e.sep||"&",n=e&&e.eq||"=",o=e&&e.unescape||window.decodeURIComponent,i={};return t.replace(/^[\s#?]+/,"").split(r).forEach(function(t){if(t){var e=t.split(n),r=e[0];if(r){var a=o(e[1]||"");void 0===i[r]?i[r]=a:i[r].push?i[r].push(a):i[r]=[i[r],a]}}}),i},stringify:function(t,e){var r=e&&e.sep||"&",n=e&&e.eq||"=",o=e&&e.escape||window.encodeURIComponent,i=[];return R(t,function(t,e){null==t&&(t="");var r=o(e);t&&t.constructor==Array?t.forEach(function(t){i.push(r+n+o(t))}):i.push(r+n+o(t))}),i.join(r)}},D=document.head||document.getElementsByTagName("head")[0]||document.documentElement,q=(new Date).getTime()-1e6,_=1e3,E=document.createElement("a"),S={getDate:function(){return this.root.root.getDate()},getData:function(t,e){return void 0===e&&(e=this[this.jsonKey||"json"]),s(e,t)},getHeader:function(t){var e="";if(this.headers)try{e=this.headers.get(t)}catch(t){}return e}},U={conf:{useFetch:!0,resType:"json",jsonpKey:"callback",cache:!0},events:{},on:t,off:e,setConf:function(){g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},U.conf)}},F=function(){function t(e,r){_classCallCheck(this,t),this.root=e,this.events={},this.conf=n({},U.conf,e.conf,g(r))}return _createClass(t,[{key:"setConf",value:function(){return g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},this.conf),this}},{key:"assign",value:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return"string"==typeof e[0]?this.assign(_defineProperty({},e[0],e[1])):(e.unshift(this),n.apply(Object,e)),this}},{key:"abort",value:function(){return w.call(this,!0),this}},{key:"timeout",value:function(t,e){var r=this;return setTimeout(function(){var t=r._req;t&&(w.call(r),r.emit("timeout",t))},t),e&&this.on("timeout",e),this}},{key:"send",value:function(t,e){var r=this;if(this._req){if(!e)return this;this.abort()}var o={};return o.root=this,this._req=o,setTimeout(function(){n(o,r.conf),m.call(r,t||{},o)},1),this}},{key:"then",value:function(t){var e=this,r=new Promise(function(t,r){e.on("callback",function(e){e.err?r(e):t(e)}),e.on("timeout",function(){r({err:"访问超时",errType:1})}),e.on("abort",function(){r({err:"访问中止",errType:2})})});return t&&r.then(t)||r}},{key:"emit",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return r(U.events[t],this,n),r(this.root.events[t],this,n),r(this.events[t],this,n),this}},{key:"hasEvent",value:function(t){var e=this.events[t];return!!(e&&e.length>0)||((e=this.root.events[t])&&e.length>0||!1)}}]),t}();F.prototype.on=t,F.prototype.off=e;var L=0,O=function(){function t(e){_classCallCheck(this,t),b(this),e&&this.setConf(e)}return _createClass(t,[{key:"setConf",value:function(){return g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},this.conf),this}},{key:"create",value:function(t){return new F(this,t)}},{key:"load",value:function(t,e,r){var n=t;"string"==typeof t&&(n={url:t}),e&&"function"!=typeof e&&(r=e,e=null);var o=new F(this,n);return e&&o.on("callback",e),o.send(r),o}},{key:"fetch",value:function(t){return this.create(t).send().then()}},{key:"setDate",value:function(t){"string"==typeof t&&(t=new Date(t.replace(/T/," ").replace(/\.\d+$/,""))),t&&t.getTime()&&(this.dateDiff=L=t.getTime()-(new Date).getTime())}},{key:"getDate",value:function(){return new Date(this.dateDiff+(new Date).getTime())}}],[{key:"create",value:function(e){return e||(e=function(){var t;return(t=e).load.apply(t,arguments)}),Object.setPrototypeOf(e,t.prototype),b(e),e}}]),t}();O.prototype.on=t,O.prototype.off=e,T("get"),T("post"),T("put"),T("jsonp");var A=O.create();return A.global=U,A.Request=O,A.util={assign:n,forEach:R,qs:k,loadJS:o,getUUID:i,getFullUrl:a,getSafeData:s},A});