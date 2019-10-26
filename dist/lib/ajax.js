"use strict";function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_slicedToArray=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof t.define&&t.define.amd?t.define(e):t.requestFn=e()}(window,function(){function t(t,e){var n=this.events[t];return n||(n=this.events[t]=[]),n.push(e),this}function e(t,e){if(!t)return this.events={},this;if(!e)return delete this.events[t],this;var n=this.events[t];if(!n)return this;var r=n.indexOf(e);return r>=0&&n.splice(r,1),this}function n(t,e,n){if(t&&t.length)for(var r=0;r<t.length;r+=1)t[r].apply(e,n);return n}function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return j(n,function(e){j(e,function(e,n){e&&"object"==(void 0===e?"undefined":_typeof(e))?(null!=t[n]&&T.call(t[n])==T.call(e)||(t[n]=e instanceof Array?[]:{}),r(t[n],e)):t[n]=e})}),t}function o(t,e){var n=document.createElement("script");return n.setAttribute("type","text/javascript"),n.onload=n.onerror=function(){n.onload=n.onerror=null,e&&e(),setTimeout(function(){n&&(n.parentNode.removeChild(n),n=null)},2e3)},n.async=!0,D.appendChild(n),n.src=t,n}function i(){return _+=1,Number(Math.round(1e6*(Math.random()+1))+((new Date).getTime()-q)+""+_).toString(36)}function a(t){return k.setAttribute("href",t),k.href}function s(t,e){return e&&t&&e.split(".").forEach(function(e){if(null==(t=t[e]))return!1}),t}function u(t,e){return e?t+(t.indexOf("?")>-1?"&":"?")+e:t}function c(t,e){return t instanceof window.FormData?t:t&&"string"!=typeof t?"json"==e?JSON.stringify(t):R.stringify(t):t||""}function l(t){return"json"==t?"application/json":"application/x-www-form-urlencoded"}function h(t){if(!t.json&&t.text)try{t.json=JSON.parse(t.text)}catch(e){t.json={}}t.json&&(t.result=t.json);var e=t.getHeader("Date");e&&this.root.setDate(e),delete this._req,this.emit("verify",t),!0!==t.cancel&&this.emit("callback",t)}function f(t){var e=this,n=t.withReq,r=n.param,a=n.jsonpKey,s=r[a];s||(r[a]=s="jsonp_"+i());var l=void 0,f=function(r){l||(l=!0,t.json=r,t.text="",t.err=r?null:"http error",n.outFlag||h.call(e,t))};window[s]=f;var p=u(n.url,c(r,n.dataType));this.emit("send",n),o(p,function(){f()})}function p(t){function e(e){if(!r.outFlag){t.getHeader=function(t){try{return e.headers.get(t)}catch(t){return""}},t.status=e.status,t.text="",t.err=e.ok?null:"http error ["+t.status+"]";var n=["",null];try{n[0]=e.text()}catch(t){}if(["json","text"].indexOf(r.resType)<0)try{n[1]=e[r.resType]()}catch(t){}Promise.all(n).then(f,f)}delete r.outFlag}var n=this,r=t.withReq,o=String(r.method||"GET").toUpperCase(),i=r.param,a={method:o,headers:r.header},s=c(i,r.dataType);"GET"==o?(r.url=u(r.url,s),a.body=i=null):(a.body=s||null,void 0!==r.header["Content-Type"]||r.isFormData||(r.header["Content-Type"]=l(r.dataType))),void 0!==r.header["X-Requested-With"]||r.isCross||(r.header["X-Requested-With"]="XMLHttpRequest"),r.isCross?(a.mode="cors",r.withCredentials&&(a.credentials="include")):a.credentials="same-origin";var f=function(e){var r=_slicedToArray(e,2),o=r[0],i=r[1];t.text=o,t.result=i,h.call(n,t)};this.emit("send",r),window.fetch(r.url,a).then(e,e)}function d(){return new window.XMLHttpRequest}function y(t){var e=t.withReq,n=e.xhr;if(n&&!e.outFlag){var r="";try{r=n.getAllResponseHeaders()}catch(t){}t.headers={get:function(t){return new RegExp("(?:"+t+"):[ \t]*([^\r\n]*)\r").test(r)?RegExp.$1:""}},t.text="";try{t.text=n.responseText}catch(t){}t.result=null;try{t.result=n.response}catch(t){}t.status=0;try{t.status=n.status}catch(t){}var o=t.status;t.err=o>=200&&o<300||304===o||1223===o?null:"http error ["+o+"]",h.call(this,t)}delete e.xhr,delete e.outFlag}function v(t){var e=this,n=t.withReq;n.xhr=d(n.isCross);var r=String(n.method||"GET").toUpperCase();n.withCredentials&&(n.xhr.withCredentials=!0);var o=c(n.param,n.dataType);if("GET"==r?(n.xhr.open(r,u(n.url,o),!0),o=null):(n.xhr.open(r,n.url,!0),void 0!==n.header["Content-Type"]||n.isFormData||(n.header["Content-Type"]=l(n.dataType))),void 0!==n.header["X-Requested-With"]||n.isCross||(n.header["X-Requested-With"]="XMLHttpRequest"),j(n.header,function(t,e){n.xhr.setRequestHeader(e,t)}),t.status=0,this.hasEvent("progress"))try{n.xhr.upload.onprogress=function(){e.emit("progress",event)}}catch(t){}n.xhr.onload=y.bind(this,t),this.emit("send",n),["arrayBuffer","blob"].indexOf(n.resType)>=0&&(n.xhr.responseType=n.resType),o&&(o=o.replace(/[\x00-\x08\x11-\x12\x14-\x20]/g,"*")),n.xhr.send(o)}function m(t,e){if(!e.outFlag){e.method=String(e.method||"get").toUpperCase();var n=e.dataType=String(e.dataType||"").toLowerCase(),o=Object.create(S);o.withReq=e,o.root=this,this.emit("before",e),e.path="",e.orginURL=e.url,e.formatURL=e.orginURL.replace(/^(\w+):\/*/,function(t,n){return e.path=t,e.paths[n]||t}),e.baseURL&&!/^(:?http(:?s)?:)?\/\//.test(e.url)&&(e.formatURL=e.baseURL+e.formatURL),this.emit("path",e);var s=!1;window.FormData&&t instanceof window.FormData&&(s=!0),e.isFormData=s,s?(j(e.param,function(e,n){t.has(n)&&t.append(n,e)}),e.param=t):("string"==typeof t&&(t="json"==e.dataType?JSON.parse(t):R.parse(t)),r(e.param,t||{})),this.emit("open",e),e.isFormData=s,e.dataType=n;var u=String(e.method||"get").toUpperCase();return"GET"==u&&(!1!==e.cache||e.param._r_||(e.param._r_=i())),(e.isCross=!/:\/\/$/.test(a(e.formatURL).split(x)[0]||""),e.url=e.formatURL,"JSONP"==u)?void f.call(this,o):C&&e.useFetch&&!this.hasEvent("progress")?void p.call(this,o):void v.call(this,o)}}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.baseURL,n=t.paths,r=t.useFetch,o=t.url,i=t.method,a=t.dataType,s=t.resType,u=t.param,c=void 0===u?{}:u,l=t.header,h=void 0===l?{}:l,f=t.jsonpKey,p=t.cache,d=t.withCredentials,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&(y.baseURL=e),n&&(y.paths=n),"boolean"==typeof r&&(y.useFetch=r),o&&(y.url=o),i&&(y.method=i.toUpperCase()),c&&(y.param=c),h&&(y.header=h),a&&(y.dataType=a),s&&(y.resType=s),f&&(y.jsonpKey=f),"boolean"==typeof p&&(y.cache=p),"boolean"==typeof d&&(y.withCredentials=d),y}function w(t){var e=this._req;e&&(e.outFlag=!0,e.xhr&&(e.xhr.abort(),e.xhr=null),delete this._req,t&&this.emit("abort",e))}function b(t){return L.prototype[t]=function(e,n,r){var o=new E(this,{url:e,method:t});return n&&o.on("callback",n),o.send(r),o}}var T=Object.prototype.toString,x=window.location.host,C=!!window.fetch,j=function(){function t(t,e){return t.push(e),e}function e(t,e,n){t[n]=e}function n(){return arguments[1]}return function(r,o,i,a){if(a||(a=this),r){var s=function(){l=!0},u=i?i.push?t:e:n,c=r.length,l=!1;if("-[object array]-[object nodelist]-[object htmlcollection]-[object arguments]-".indexOf("-"+T.call(r).toLowerCase()+"-")>-1||"[object htmlcollection]"==String(r).toLowerCase())for(var h=0;h<c;h+=1){var f=o.call(a,r[h],h,s);if(l)break;u(i,f,h)}else for(var p in r)if(!r.hasOwnProperty||r.hasOwnProperty(p)){var d=o.call(a,r[p],p,s);if(l)break;u(i,d,p)}}return i||a}}(),R={parse:function(t,e){var n=e&&e.sep||"&",r=e&&e.eq||"=",o=e&&e.unescape||window.decodeURIComponent,i={};return t.replace(/^[\s#?]+/,"").split(n).forEach(function(t){if(t){var e=t.split(r),n=e[0];if(n){var a=o(e[1]||"");void 0===i[n]?i[n]=a:i[n].push?i[n].push(a):i[n]=[i[n],a]}}}),i},stringify:function(t,e){var n=e&&e.sep||"&",r=e&&e.eq||"=",o=e&&e.escape||window.encodeURIComponent,i=[];return j(t,function(t,e){null==t&&(t="");var n=o(e);t&&t.constructor==Array?t.forEach(function(t){i.push(n+r+o(t))}):i.push(n+r+o(t))}),i.join(n)}},D=document.head||document.getElementsByTagName("head")[0]||document.documentElement,q=(new Date).getTime()-1e6,_=1e3,k=document.createElement("a"),S={getDate:function(){return this.root.root.getDate()},getData:function(t,e){return void 0===e&&(e=this[this.jsonKey||"json"]),s(e,t)},getHeader:function(t){var e="";if(this.headers)try{e=this.headers.get(t)}catch(t){}return e}},U={conf:{useFetch:!0,resType:"json",jsonpKey:"callback",cache:!0},events:{},on:t,off:e,setConf:function(){g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},U.conf)}},E=function(){function t(e,n){_classCallCheck(this,t),this.root=e,this.events={},this.conf=r({},U.conf,e.conf,g(n))}return _createClass(t,[{key:"setConf",value:function(){return g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},this.conf),this}},{key:"assign",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return"string"==typeof e[0]?this.assign(_defineProperty({},e[0],e[1])):(e.unshift(this),r.apply(Object,e)),this}},{key:"abort",value:function(){return w.call(this,!0),this}},{key:"timeout",value:function(t,e){var n=this;return setTimeout(function(){var t=n._req;t&&(w.call(n),n.emit("timeout",t))},t),e&&this.on("timeout",e),this}},{key:"send",value:function(t,e){var n=this;if(this._req){if(!e)return this;this.abort()}var o={};return o.root=this,this._req=o,setTimeout(function(){r(o,n.conf),m.call(n,t||{},o)},1),this}},{key:"emit",value:function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return n(U.events[t],this,r),n(this.root.events[t],this,r),n(this.events[t],this,r),this}},{key:"hasEvent",value:function(t){var e=this.events[t];return!!(e&&e.length>0)||((e=this.root.events[t])&&e.length>0||!1)}}]),t}();E.prototype.on=t,E.prototype.off=e;var F=0,L=function(){function t(e){_classCallCheck(this,t),this.dateDiff=F,this.conf={},this.events={},e&&this.setConf(e)}return _createClass(t,[{key:"setConf",value:function(){return g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},this.conf),this}},{key:"create",value:function(t){return new E(this,t)}},{key:"fetch",value:function(t){var e=new E(this,t);return new Promise(function(t,n){e.on("callback",function(e){e.err?n(e):t(e)}),e.on("timeout",function(){n({err:"访问超时"})}),e.on("abort",function(){n({err:"访问中止"})}),e.send()})}},{key:"setDate",value:function(t){"string"==typeof t&&(t=new Date(t.replace(/T/," ").replace(/\.\d+$/,""))),t&&t.getTime()&&(this.dateDiff=F=t.getTime()-(new Date).getTime())}},{key:"getDate",value:function(){return new Date(this.dateDiff+(new Date).getTime())}}]),t}();L.prototype.on=t,L.prototype.off=e,b("get"),b("post"),b("put"),b("jsonp");var O=new L;return O.global=U,O.Request=L,O.util={assign:r,forEach:j,qs:R,loadJS:o,getUUID:i,getFullUrl:a,getSafeData:s},O});