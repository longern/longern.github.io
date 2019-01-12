(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{299:function(t,e,n){var a=n(326);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(47).default)("000dfb0c",a,!0,{})},325:function(t,e,n){"use strict";var a=n(299);n.n(a).a},326:function(t,e,n){(t.exports=n(46)(!1)).push([t.i,"#mnist-draw{border:1px solid #000}#mnist-hidden{display:none}.mini-mnist .el-row{margin-bottom:16px}",""])},330:function(t,e,n){"use strict";n.r(e);n(65);var a=n(5),s=n.n(a),r={name:"MiniMnist",data:function(){return{model:null,drawing:!1,lastMousePos:{x:0,y:0},answer:null}},created:function(){var t=s()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tf.loadModel("models/mnist/model.json");case 2:this.model=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{handleDrawMouseDown:function(t){var e=t.offsetX||t.touches[0].pageX-this.$refs.mnistDraw.offsetLeft,n=t.offsetY||t.touches[0].pageY-this.$refs.mnistDraw.offsetTop;this.drawing=!0,this.lastMousePos.x=e,this.lastMousePos.y=n;var a=this.$refs.mnistDraw.getContext("2d");a.lineWidth=15,a.lineCap="round",a.lineJoin="round",a.beginPath()},handleDrawMouseMove:function(t){if(this.drawing){var e=t.offsetX||t.touches[0].pageX-this.$refs.mnistDraw.offsetLeft,n=t.offsetY||t.touches[0].pageY-this.$refs.mnistDraw.offsetTop,a=this.$refs.mnistDraw.getContext("2d");a.moveTo(this.lastMousePos.x,this.lastMousePos.y),a.lineTo(e,n),a.stroke(),this.lastMousePos.x=e,this.lastMousePos.y=n}},centerImage:function(t){for(var e=0,n=0,a=t.length,s=t[0].length,r=0,i=0;i<a;i++)for(var o=0;o<s;o++){var u=1-t[i][o];r+=u,n+=i*u,e+=o*u}e/=r,n/=r;var d=Math.round(a/2-n);return{transX:Math.round(s/2-e),transY:d}},getBoundingRectangle:function(t,e){for(var n=t.length,a=t[0].length,s=a,r=n,i=-1,o=-1,u=0;u<n;u++)for(var d=0;d<a;d++)t[u][d]<e&&(s>d&&(s=d),i<d&&(i=d),r>u&&(r=u),o<u&&(o=u));return{minY:r,minX:s,maxY:o,maxX:i}},imageDataToGrayscale:function(t){for(var e=[],n=0;n<t.height;n++){e[n]=[];for(var a=0;a<t.width;a++){var s=4*n*t.width+4*a;0==t.data[s+3]&&(t.data[s]=255,t.data[s+1]=255,t.data[s+2]=255),t.data[s+3]=255,e[n][a]=t.data[4*n*t.width+4*a+0]/255}}return e},handleDrawMouseUp:function(){if(this.drawing){this.drawing=!1;var t=this.$refs.mnistDraw.getContext("2d"),e=t.getImageData(0,0,280,280),n=this.imageDataToGrayscale(e),a=this.getBoundingRectangle(n,.01),s=this.centerImage(n),r=document.createElement("canvas");r.width=e.width,r.height=e.height;var i=r.getContext("2d"),o=a.maxX+1-a.minX,u=a.maxY+1-a.minY,d=190/Math.max(o,u);i.translate(this.$refs.mnistDraw.width/2,this.$refs.mnistDraw.height/2),i.scale(d,d),i.translate(-this.$refs.mnistDraw.width/2,-this.$refs.mnistDraw.height/2),i.translate(s.transX,s.transY),i.drawImage(t.canvas,0,0);var h=this.$refs.mnistHidden.getContext("2d");h.clearRect(0,0,28,28),h.drawImage(r,0,0,28,28),this.makePrediction()}},handleClear:function(){this.$refs.mnistDraw.getContext("2d").clearRect(0,0,300,300),this.answer=null},makePrediction:function(){var t=s()(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=tf.tidy(function(){var t=tf.div(tf.fromPixels(a.$refs.mnistHidden,4).asType("float32"),255).slice([0,0,3],[28,28,1]).expandDims(),e=a.model.predict(t);return tf.argMax(e.squeeze())}),n=e.data(),t.next=4,n;case 4:this.answer=t.sent[0];case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},i=(n(325),n(23)),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.model,expression:"!model"}],staticClass:"mini-mnist"},[n("el-row",[n("canvas",{ref:"mnistDraw",attrs:{id:"mnist-draw",width:"280",height:"280"},on:{mousedown:t.handleDrawMouseDown,mousemove:t.handleDrawMouseMove,mouseup:t.handleDrawMouseUp,mouseout:t.handleDrawMouseUp,touchstart:function(e){return e.preventDefault(),t.handleDrawMouseDown(e)},touchmove:t.handleDrawMouseMove,touchend:t.handleDrawMouseUp}}),t._v(" "),n("canvas",{ref:"mnistHidden",attrs:{id:"mnist-hidden",width:"28",height:"28"}})]),t._v(" "),n("el-row",[n("el-button",{on:{click:t.handleClear}},[t._v("Clear")])],1),t._v(" "),n("el-row",[t._v("\n    "+t._s(t.answer)+"\n  ")])],1)},[],!1,null,null,null);o.options.__file="mnist.vue";e.default=o.exports}}]);