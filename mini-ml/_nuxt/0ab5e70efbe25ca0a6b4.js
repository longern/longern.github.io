(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{290:function(e,t,n){"use strict";n(291)("sub",function(e){return function(){return e(this,"sub","","")}})},291:function(e,t,n){var r=n(7),i=n(11),a=n(22),s=/"/g,o=function(e,t,n,r){var i=String(a(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},292:function(e,t,n){var r=n(306);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(47).default)("61354c9a",r,!0,{})},305:function(e,t,n){"use strict";var r=n(292);n.n(r).a},306:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,".deblur-gan .el-row{margin-bottom:16px}.deblur-gan .image-block{display:inline-block}",""])},332:function(e,t,n){"use strict";n.r(t);n(39),n(104),n(290),n(65);var r=n(5),i=n.n(r),a={name:"DeblurGAN",data:function(){return{model:null,processing:!1}},mounted:function(){var e=i()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tf.loadLayersModel("models/deblur_gan/model.json");case 2:this.model=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{handleFileChange:function(){var e=this;if(this.$refs.uploader.files.length){var t=this.$refs.uploader.files[0],n=URL.createObjectURL(t),r=new Image;r.onload=function(){r.width=224*Math.ceil((r.width-32)/224)+32,r.height=224*Math.ceil((r.height-32)/224)+32,e.makePrediction(r)},r.src=n,this.$refs.deblurGANInput.src=n}},handleSampleClick:function(){var e=this,t=new Image;t.onload=function(){t.width=224*Math.ceil((t.width-32)/224)+32,t.height=224*Math.ceil((t.height-32)/224)+32,e.makePrediction(t)},t.src=this.$refs.sample.src,this.$refs.deblurGANInput.src=this.$refs.sample.src},makePrediction:function(){var e=i()(regeneratorRuntime.mark(function e(t){var n,r,a,s,o,u,c,l=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=i()(regeneratorRuntime.mark(function e(){var t,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u>=o.length)){e.next=8;break}return t=tf.tidy(function(){for(var e=c.map(function(e){var t=tf.tensor(e,[256,256,3]).slice([16,16],[224,224]);return tf.clipByValue(tf.add(t,.5),0,1)}),t=[],n=0;n<r;n+=1)t[n]=tf.concat(e.slice(n*a,(n+1)*a),1);return tf.concat(t)}),i=document.createElement("canvas"),e.next=5,tf.toPixels(t,i);case 5:return i.toBlob(function(e){l.$refs.deblurGANResult.src=URL.createObjectURL(e),l.processing=!1}),t.dispose(),e.abrupt("return");case 8:return l.processing=!0,s=tf.tidy(function(){return l.model.predict(tf.tensor(o[u],[1,256,256,3]))}),e.next=12,s.data();case 12:return c[u]=e.sent,s.dispose(),u+=1,e.next=17,tf.nextFrame();case 17:setTimeout(n,0);case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),r=Math.ceil((t.height-32)/224),a=Math.ceil((t.width-32)/224),s=tf.tidy(function(){for(var e=tf.fromPixels(t).asType("float32"),n=tf.sub(tf.div(e,255),.5),i=[],s=0;s<r;s+=1)for(var o=0;o<a;o+=1)i.push(n.slice([224*s,224*o],[256,256]));return i}),e.next=6,Promise.all(s.map(function(e){return e.data()}));case 6:return o=e.sent,s.forEach(function(e){return e.dispose()}),u=0,c=[],e.next=12,tf.nextFrame();case 12:n();case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},s=(n(305),n(23)),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.model,expression:"!model"}],staticClass:"deblur-gan"},[n("el-row",[n("div",{staticClass:"image-block"},[n("img",{ref:"deblurGANInput",attrs:{id:"deblur-gan-input",width:"360",height:"360"}})]),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.processing,expression:"processing"}],staticClass:"image-block"},[n("img",{ref:"deblurGANResult",attrs:{id:"deblur-gan-result",width:"360",height:"360"}})])]),e._v(" "),n("el-row",[n("el-button",{on:{click:function(t){e.$refs.uploader.click()}}},[e._v("\n      打开图片\n    ")]),e._v(" "),n("input",{ref:"uploader",attrs:{type:"file",hidden:""},on:{change:e.handleFileChange}})],1),e._v(" "),n("el-row",[n("img",{ref:"sample",attrs:{src:"static/sample1.png",width:"64",height:"64"},on:{click:e.handleSampleClick}})]),e._v(" "),n("el-row",[n("a",{attrs:{href:"https://arxiv.org/abs/1711.07064",target:"_blank"}},[e._v("\n      DeblurGAN: Blind Motion Deblurring Using Conditional Adversarial Networks\n    ")])])],1)},[],!1,null,null,null);o.options.__file="deblurgan.vue";t.default=o.exports}}]);