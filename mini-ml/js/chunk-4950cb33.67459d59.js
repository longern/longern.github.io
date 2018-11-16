(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4950cb33"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,u,"next",t)}function u(t){n(a,o,i,s,u,"throw",t)}s(void 0)})}}r.d(e,"a",function(){return o})},"255f":function(t,e,r){},3835:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}function o(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(r.push(a.value),e&&r.length===e)break}catch(u){o=!0,i=u}finally{try{n||null==s["return"]||s["return"]()}finally{if(o)throw i}}return r}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){return n(t)||o(t,e)||i()}r.d(e,"a",function(){return a})},"7cbb":function(t,e,r){"use strict";var n=r("255f"),o=r.n(n);o.a},8438:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mini-mnist"},[r("canvas",{ref:"mnistDraw",attrs:{id:"mnist-draw",width:"280",height:"280"},on:{mousedown:t.handleDrawMouseDown,mousemove:t.handleDrawMouseMove,mouseup:t.handleDrawMouseUp,mouseout:t.handleDrawMouseUp}}),r("canvas",{ref:"mnistHidden",attrs:{id:"mnist-hidden",width:"28",height:"28"}}),r("div",[r("button",{on:{click:t.handleClear}},[t._v("Clear")])]),r("div",[t._v("\n    "+t._s(t.answer)+"\n  ")])])},o=[],i=r("3835"),a=(r("96cf"),r("1da1")),s=(r("cadf"),r("551c"),r("097d"),r("b994")),u={name:"MiniMnist",data:function(){return{model:null,drawing:!1,lastMousePos:{x:0,y:0},answer:null}},methods:{handleDrawMouseDown:function(t){this.drawing=!0,this.lastMousePos.x=t.offsetX,this.lastMousePos.y=t.offsetY;var e=this.$refs.mnistDraw.getContext("2d");e.lineWidth=15,e.lineCap="round",e.lineJoin="round",e.beginPath()},handleDrawMouseMove:function(t){if(this.drawing){var e=this.$refs.mnistDraw.getContext("2d");e.moveTo(this.lastMousePos.x,this.lastMousePos.y),e.lineTo(t.offsetX,t.offsetY),e.stroke(),this.lastMousePos.x=t.offsetX,this.lastMousePos.y=t.offsetY}},centerImage:function(t){for(var e=0,r=0,n=t.length,o=t[0].length,i=0,a=0;a<n;a++)for(var s=0;s<o;s++){var u=1-t[a][s];i+=u,r+=a*u,e+=s*u}e/=i,r/=i;var c=Math.round(n/2-r),h=Math.round(o/2-e);return{transX:h,transY:c}},getBoundingRectangle:function(t,e){for(var r=t.length,n=t[0].length,o=n,i=r,a=-1,s=-1,u=0;u<r;u++)for(var c=0;c<n;c++)t[u][c]<e&&(o>c&&(o=c),a<c&&(a=c),i>u&&(i=u),s<u&&(s=u));return{minY:i,minX:o,maxY:s,maxX:a}},imageDataToGrayscale:function(t){for(var e=[],r=0;r<t.height;r++){e[r]=[];for(var n=0;n<t.width;n++){var o=4*r*t.width+4*n,i=t.data[o+3];0==i&&(t.data[o]=255,t.data[o+1]=255,t.data[o+2]=255),t.data[o+3]=255,e[r][n]=t.data[4*r*t.width+4*n+0]/255}}return e},handleDrawMouseUp:function(){if(this.drawing){this.drawing=!1;var t=this.$refs.mnistDraw.getContext("2d"),e=t.getImageData(0,0,280,280),r=this.imageDataToGrayscale(e),n=this.getBoundingRectangle(r,.01),o=this.centerImage(r),i=document.createElement("canvas");i.width=e.width,i.height=e.height;var a=i.getContext("2d"),s=n.maxX+1-n.minX,u=n.maxY+1-n.minY,c=190/Math.max(s,u);a.translate(this.$refs.mnistDraw.width/2,this.$refs.mnistDraw.height/2),a.scale(c,c),a.translate(-this.$refs.mnistDraw.width/2,-this.$refs.mnistDraw.height/2),a.translate(o.transX,o.transY),a.drawImage(t.canvas,0,0);var h=this.$refs.mnistHidden.getContext("2d");h.clearRect(0,0,28,28),h.drawImage(i,0,0,28,28),this.makePrediction()}},handleClear:function(){var t=this.$refs.mnistDraw.getContext("2d");t.clearRect(0,0,300,300),this.answer=null},makePrediction:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["tidy"](function(){var t=s["div"](s["fromPixels"](n.$refs.mnistHidden,4).asType("float32"),255),e=t.slice([0,0,3],[28,28,1]).expandDims(),r=n.model.predict(e),o=s["argMax"](r.squeeze());return o}).data();case 2:e=t.sent,r=Object(i["a"])(e,1),this.answer=r[0];case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},created:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["loadModel"]("models/mnist/model.json");case 2:this.model=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},c=u,h=(r("7cbb"),r("2877")),f=Object(h["a"])(c,n,o,!1,null,null,null);f.options.__file="MiniMnist.vue";e["default"]=f.exports},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,h=e.regeneratorRuntime;if(h)c&&(t.exports=h);else{h=e.regeneratorRuntime=c?t.exports:{},h.wrap=x;var f="suspendedStart",l="suspendedYield",d="executing",p="completed",v={},m={};m[a]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(T([])));g&&g!==n&&o.call(g,a)&&(m=g);var y=M.prototype=L.prototype=Object.create(m);E.prototype=y.constructor=M,M.constructor=E,M[u]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},h.awrap=function(t){return{__await:t}},D(_.prototype),_.prototype[s]=function(){return this},h.AsyncIterator=_,h.async=function(t,e,r,n){var o=new _(x(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},D(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function x(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=P(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function E(){}function M(){}function D(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){function e(r,n,i,a){var s=b(t[r],t,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(s.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function P(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return Y()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=b(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:Y}}function Y(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())}}]);
//# sourceMappingURL=chunk-4950cb33.67459d59.js.map