"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_slicedToArray=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof e.define&&e.define.amd?e.define(t):e.requestFn=t()}(window,function(){function e(e,t){var n=this.events[e];return n||(n=this.events[e]=[]),n.push(t),this}function t(e,t){if(!e)return this.events={},this;if(!t)return delete this.events[e],this;var n=this.events[e];if(!n)return this;var r=n.indexOf(t);return r>=0&&n.splice(r,1),this}function n(e,t,n){if(e&&e.length)for(var r=0;r<e.length;r+=1)e[r].apply(t,n);return n}function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return j(n,function(t){j(t,function(t,n){t&&"object"==(void 0===t?"undefined":_typeof(t))?(null!=e[n]&&x.call(e[n])==x.call(t)||(e[n]=t instanceof Array?[]:{}),r(e[n],t)):e[n]=t})}),e}function o(e,t){var n=document.createElement("script");return n.setAttribute("type","text/javascript"),n.onload=n.onerror=function(){n.onload=n.onerror=null,t&&t(),setTimeout(function(){n&&(n.parentNode.removeChild(n),n=null)},2e3)},n.async=!0,q.appendChild(n),n.src=e,n}function i(){return k+=1,Number(Math.round(1e6*(Math.random()+1))+((new Date).getTime()-R)+""+k).toString(36)}function a(e){return _.setAttribute("href",e),_.href}function s(e,t){return t&&e&&t.split(".").forEach(function(t){if(null==(e=e[t]))return!1}),e}function u(e,t){return t?e+(e.indexOf("?")>-1?"&":"?")+t:e}function c(e,t){return e instanceof window.FormData?e:e&&"string"!=typeof e?"json"==t?JSON.stringify(e):D.stringify(e):e||""}function l(e){return"json"==e?"application/json":"application/x-www-form-urlencoded"}function h(e){if(!e.json&&e.text)try{e.json=JSON.parse(e.text)}catch(t){e.json={}}e.json&&(e.result=e.json);var t=e.getHeader("Date");t&&this.root.setDate(t),delete this._req,this.emit("verify",e),!0!==e.cancel&&this.emit("callback",e)}function f(e){var t=this,n=e.withReq,r=n.param,a=n.jsonpKey,s=r[a];s||(r[a]=s="jsonp_"+i());var l=void 0,f=function(r){l||(l=!0,e.json=r,e.text="",e.err=r?null:"http error",n.outFlag||h.call(t,e))};window[s]=f;var p=u(n.url,c(r,n.dataType));this.emit("send",n),o(p,function(){f()})}function p(e){function t(t){if(!r.outFlag){e.getHeader=function(e){try{return t.headers.get(e)}catch(e){return""}},e.status=t.status,e.text="",e.err=t.ok?null:"http error ["+e.status+"]";var n=["",null];try{n[0]=t.text()}catch(e){}if(["json","text"].indexOf(r.resType)<0)try{n[1]=t[r.resType]()}catch(e){}Promise.all(n).then(f,f)}delete r.outFlag}var n=this,r=e.withReq,o=String(r.method||"GET").toUpperCase(),i=r.param,a={method:o,headers:r.header},s=c(i,r.dataType);"GET"==o?(r.url=u(r.url,s),a.body=i=null):(a.body=s||null,void 0!==r.header["Content-Type"]||r.isFormData||(r.header["Content-Type"]=l(r.dataType))),void 0!==r.header["X-Requested-With"]||r.isCross||(r.header["X-Requested-With"]="XMLHttpRequest"),r.isCross?(a.mode="cors",r.withCredentials&&(a.credentials="include")):a.credentials="same-origin";var f=function(t){var r=_slicedToArray(t,2),o=r[0],i=r[1];e.text=o,e.result=i,h.call(n,e)};this.emit("send",r),window.fetch(r.url,a).then(t,t)}function d(e){return window.XDomainRequest&&e?new window.XDomainRequest:new window.XMLHttpRequest}function y(e){var t=e.withReq,n=t.xhr;if(n&&!t.outFlag){var r="";try{r=n.getAllResponseHeaders()}catch(e){}e.headers={get:function(e){return new RegExp("(?:"+e+"):[ \t]*([^\r\n]*)\r").test(r)?RegExp.$1:""}},e.text="";try{e.text=n.responseText}catch(e){}e.result=null;try{e.result=n.response}catch(e){}e.status=0;try{e.status=n.status}catch(e){}var o=e.status;e.err=o>=200&&o<300||304===o||1223===o?null:"http error ["+o+"]",h.call(this,e)}delete t.xhr,delete t.outFlag}function v(e){var t=this,n=e.withReq;n.xhr=d(n.isCross);var r=n.isXDR=n.xhr.constructor==window.XDomainRequest,o=String(n.method||"GET").toUpperCase();n.withCredentials&&(n.xhr.withCredentials=!0);var i=c(n.param,n.dataType);if("GET"==o?(n.xhr.open(o,u(n.url,i),!0),i=null):(r&&(n.url=u(n.url,i),i=null),n.xhr.open(o,n.url,!0),void 0!==n.header["Content-Type"]||n.isFormData||(n.header["Content-Type"]=l(n.dataType))),void 0!==n.header["X-Requested-With"]||n.isCross||(n.header["X-Requested-With"]="XMLHttpRequest"),r||j(n.header,function(e,t){n.xhr.setRequestHeader(t,e)}),e.status=0,this.hasEvent("progress"))try{n.xhr.upload.onprogress=function(){t.emit("progress",event)}}catch(e){}n.xhr.onload=y.bind(this,e),this.emit("send",n),["arrayBuffer","blob"].indexOf(n.resType)>=0&&(n.xhr.responseType=n.resType),i&&(i=i.replace(/[\x00-\x08\x11-\x12\x14-\x20]/g,"*")),n.xhr.send(i)}function m(e,t){if(!t.outFlag){t.method=String(t.method||"get").toUpperCase();var n=t.dataType=String(t.dataType||"").toLowerCase(),o=Object.create(S);o.withReq=t,o.root=this,this.emit("before",t);var s=!1;window.FormData&&e instanceof window.FormData&&(s=!0),t.isFormData=s,s?(j(t.param,function(t,n){e.has(n)&&e.append(n,t)}),t.param=e):("string"==typeof e&&(e="json"==t.dataType?JSON.parse(e):D.parse(e)),r(t.param,e||{})),this.emit("open",t),t.isFormData=s,t.dataType=n;var u=String(t.method||"get").toUpperCase();return"GET"==u&&(!1!==t.cache||t.param._r_||(t.param._r_=i())),(t.url=t.url.replace(/^(\w+):\/*/,function(e,n){return t.paths[n]||e}),t.baseURL&&!/^(:?http(:?s)?:)?\/\//.test(t.url)&&(t.url=t.baseURL+t.url),t.isCross=!/:\/\/$/.test(a(t.url).split(T)[0]||""),"JSONP"==u)?void f.call(this,o):C&&t.useFetch&&!this.hasEvent("progress")?void p.call(this,o):void v.call(this,o)}}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseURL,n=e.paths,r=e.useFetch,o=e.url,i=e.method,a=e.dataType,s=e.resType,u=e.param,c=void 0===u?{}:u,l=e.header,h=void 0===l?{}:l,f=e.jsonpKey,p=arguments[1],d=arguments[2],y={};return t&&(y.baseURL=t),n&&(y.paths=n),"boolean"==typeof r&&(y.useFetch=r),o&&(y.url=o),i&&(y.method=i.toUpperCase()),c&&(y.param=c),h&&(y.header=h),a&&(y.dataType=a),s&&(y.resType=s),f&&(y.jsonpKey=f),"boolean"==typeof p&&(y.cache=p),"boolean"==typeof d&&(y.withCredentials=d),y}function w(e){var t=this._req;t&&(t.outFlag=!0,t.xhr&&(t.xhr.abort(),t.xhr=null),delete this._req,e&&this.emit("abort",t))}function b(e){return U.prototype[e]=function(t,n,r){var o=new F(this,{url:t,method:e});return n&&o.on("callback",n),o.send(r),o}}var x=Object.prototype.toString,T=window.location.host,C=!!window.fetch,j=function(){function e(e,t){return e.push(t),t}function t(e,t,n){e[n]=t}function n(){return arguments[1]}return function(r,o,i,a){if(a||(a=this),r){var s=function(){l=!0},u=i?i.push?e:t:n,c=r.length,l=!1;if("-[object array]-[object nodelist]-[object htmlcollection]-[object arguments]-".indexOf("-"+x.call(r).toLowerCase()+"-")>-1||"[object htmlcollection]"==String(r).toLowerCase())for(var h=0;h<c;h+=1){var f=o.call(a,r[h],h,s);if(l)break;u(i,f,h)}else for(var p in r)if(!r.hasOwnProperty||r.hasOwnProperty(p)){var d=o.call(a,r[p],p,s);if(l)break;u(i,d,p)}}return i||a}}(),D={parse:function(e,t){var n=t&&t.sep||"&",r=t&&t.eq||"=",o=t&&t.unescape||window.decodeURIComponent,i={};return e.replace(/^[\s#?]+/,"").split(n).forEach(function(e){if(e){var t=e.split(r),n=t[0];if(n){var a=o(t[1]||"");void 0===i[n]?i[n]=a:i[n].push?i[n].push(a):i[n]=[i[n],a]}}}),i},stringify:function(e,t){var n=t&&t.sep||"&",r=t&&t.eq||"=",o=t&&t.escape||window.encodeURIComponent,i=[];return j(e,function(e,t){null==e&&(e="");var n=o(t);e&&e.constructor==Array?e.forEach(function(e){i.push(n+r+o(e))}):i.push(n+r+o(e))}),i.join(n)}},q=document.head||document.getElementsByTagName("head")[0]||document.documentElement,R=(new Date).getTime()-1e6,k=1e3,_=document.createElement("a"),S={getDate:function(){return this.root.root.getDate()},getData:function(e,t){return void 0===t&&(t=this[this.jsonKey||"json"]),s(t,e)},getHeader:function(e){var t="";if(this.headers)try{t=this.headers.get(e)}catch(e){}return t}},E={useFetch:!0,resType:"json",jsonpKey:"callback",cache:!0},F=function(){function e(t,n){_classCallCheck(this,e),this.root=t,this.events={},this.conf=r({},t.conf,g(n))}return _createClass(e,[{key:"setConf",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(this.conf,g(e)),this}},{key:"assign",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return"string"==typeof t[0]?this.assign(_defineProperty({},t[0],t[1])):(t.unshift(this),r.apply(Object,t)),this}},{key:"abort",value:function(){return w.call(this,!0),this}},{key:"timeout",value:function(e,t){var n=this;return setTimeout(function(){var e=n._req;e&&(w.call(n),n.emit("timeout",e))},e),t&&this.on("timeout",t),this}},{key:"send",value:function(e,t){var n=this;if(this._req){if(!t)return this;this.abort()}var o={};return o.root=this,this._req=o,setTimeout(function(){r(o,n.conf),m.call(n,e||{},o)},1),this}},{key:"emit",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n(this.root.events[e],this,r),n(this.events[e],this,r),this}},{key:"hasEvent",value:function(e){var t=this.events[e];return!!(t&&t.length>0)||((t=this.root.events[e])&&t.length>0||!1)}}]),e}();F.prototype.on=e,F.prototype.off=t;var O=0,U=function(){function e(t){_classCallCheck(this,e),this.dateDiff=O,this.conf=r({},E),this.events={},t&&this.setConf(t)}return _createClass(e,[{key:"setConf",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this.conf,g(e))}},{key:"create",value:function(e){return new F(this,e)}},{key:"fetch",value:function(e){var t=new F(this,e);return new Promise(function(e,n){t.on("callback",function(t){t.err?n(t):e(t)}),t.on("timeout",function(){n({err:"访问超时"})}),t.on("abort",function(){n({err:"访问中止"})}),t.send()})}},{key:"setDate",value:function(e){"string"==typeof e&&(e=new Date(e.replace(/T/," ").replace(/\.\d+$/,""))),e&&e.getTime()&&(this.dateDiff=O=e.getTime()-(new Date).getTime())}},{key:"getDate",value:function(){return new Date(this.dateDiff+(new Date).getTime())}}],[{key:"setConf",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(E,g(e))}}]),e}();U.prototype.on=e,U.prototype.off=t,b("get"),b("post"),b("put"),b("jsonp");var A=new U;return A.Request=U,A.util={assign:r,forEach:j,qs:D,loadJS:o,getUUID:i,getFullUrl:a,getSafeData:s},A});