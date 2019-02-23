(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5011680e"],{"09b5":function(e,n,i){"use strict";i.d(n,"a",function(){return t}),i.d(n,"c",function(){return l}),i.d(n,"b",function(){return a}),i.d(n,"d",function(){return s});i("551c"),i("8a81");var t={initapp:{}};t.initapp.html='<div id="app">\n  <clipper-basic class="my-clipper" src="example.jpg"></clipper-basic>\n</div>',t.initapp.js="new Vue({\n  el: '#app'\n})",t.initapp.css=".my-clipper {\n  width: 100%;\n  max-width: 700px;\n}",t.upload={},t.upload.html='<div id="app">\n  <input type="file" @change="upload($event)">\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',t.upload.js="new Vue({\n  el: '#app',\n  data: {\n    imgURL: ''\n  },\n  methods: {\n    upload: function(e){\n      if (e.target.files.length !== 0) {\n        if(this.imgURL) URL.revokeObjectURL(this.imgURL)\n        this.imgURL = window.URL.createObjectURL(e.target.files[0]);\n      }\n    }\n  }\n})",t.upload.css=".placeholder {\n  text-align: center;\n  padding: 20px;\n  background-color: lightgray;\n}",t.upload2={},t.upload2.html='<div id="app">\n  <clipper-upload v-model="imgURL">upload image</clipper-upload>\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',t.upload2.js="new Vue({\n    el: '#app',\n    data: {\n      imgURL: ''\n    }\n})",t.result={},t.result.html='<button @click="getResult">clip image</button>\n<clipper-basic class="my-clipper" ref="clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n    <div>result:</div>\n    <img class="result" :src="resultURL" alt="">\n</div>',t.result.js1="data: {\n  imgURL: '',\n  resultURL: ''\n}",t.result.js='getResult: function () {\n  const canvas = this.$refs.clipper.clip();//call component\'s clip method\n  this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n}',t.preview={},t.preview.html='<clipper-basic \n  class="my-clipper" \n  ref="clipper" \n  :src="imgURL" \n  preview="my-preview" >\n  <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n  <div>preview:</div>\n  <clipper-preview name="my-preview" class="my-clipper">\n    <div class="placeholder" slot="placeholder">preview area</div>\n  </clipper-preview>\n</div>',t.full='<meta charset="utf-8">\n<title>vuejs-clipper demo</title>\n<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"><\/script>\n<script src="./vuejs-clipper.umd.js"><\/script>\n<link rel="stylesheet" href="./vuejs-clipper.css">\n<div id="app">\n    <button>\n      <clipper-upload v-model="imgURL">upload image</clipper-upload>\n    </button>\n    <button @click="getResult">clip image</button>\n    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL" preview="my-preview">\n        <div class="placeholder" slot="placeholder">No image</div>\n    </clipper-basic>\n    <div>\n        <div>preview:</div>\n        <clipper-preview name="my-preview" class="my-clipper">\n            <div class="placeholder" slot="placeholder">preview area</div>\n        </clipper-preview>\n    </div>\n    <div>\n        <div>result:</div>\n        <img class="result" :src="resultURL" alt="">\n    </div>\n</div>\n<script>\n    new Vue({\n        el: \'#app\',\n        data: {\n            imgURL: \'\',\n            resultURL: \'\'\n        },\n        methods: {\n            getResult: function () {\n                const canvas = this.$refs.clipper.clip();//call component\'s clip method\n                this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n            }\n        }\n    })\n<\/script>\n<style>\n    .my-clipper {\n        width: 100%;\n        max-width: 700px;\n    }\n\n    .placeholder {\n        text-align: center;\n        padding: 20px;\n        background-color: lightgray;\n    }\n</style>';var l={html:'<clipper-basicref="clipper" \n  ref="clipper"\n  @load="imgLoad" \n  :style="basicStyle" \n  src="long.jpg">\n</clipper-basic>',js:"data: () => {\n  return {\n      maxWidth: 700,\n      maxHeight: 500,\n      based: 850\n  };\n},\nmethods: {\n  imgLoad: function() {\n      const imgRatio = this.$refs.clipper.imgRatio;\n      if(imgRatio < 1) this.based =  this.maxHeight*imgRatio;\n      else this.based = this.maxWidth;\n  },\n},\ncomputed: {\n  basicStyle : function() {\n      return {\n          maxWidth: this.based + 'px'\n      }\n  }\n}"},a={const:"const canvas = this.$refs.clipper.clip();",durl:'const jpgURL = canvas.toDataURL("image/jpeg")//to jpg\nconst pngURL = canvas.toDataURL("image/png", 1)//to png',blob:"canvas.toBlob(function(blob) {\n  //...\n});",url:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    if(vm.resultURL)\n      URL.revokeObjectURL(vm.resultURL)\n    vm.resultURL = URL.createObjectURL(blob)\n})",urles6:"this.$refs.clipper.clip().toBlob(blob=>{\n  if(this.resultURL) URL.revokeObjectURL(this.resultURL)\n  this.resultURL = URL.createObjectURL(blob)\n})",reader:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    const reader = new FileReader()\n    reader.addEventListener('load' ,function(){\n        vm.resultURL = this.result;\n    })\n    reader.readAsDataURL(blob);\n})"},s={ex1:'<clipper-fixed \n  src="ex2.jpg" \n  shadow="transparent" \n  border-color="transparent"\n  :grid="false"></clipper-fixed>'}},4114:function(e,n,i){},"72f4":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"list-content content"},[i("div",{staticClass:"area"},[i("h2",[e._v("Use as an image zoom-in component")]),i("p",[e._v("You can use clipper-fixed as an image zoom-in component since version 0.2.9 has prop border-color.")]),i("p",[e._v("Set the border-color and shadow to transparent and disable the grid.")]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.ex1,expression:"code.ex1"}]},[i("code",{staticClass:"html"})]),i("clipper-fixed",{attrs:{src:"ex2.jpg",shadow:"transparent","border-color":"transparent","bg-color":"lightgray",grid:!1}})],1),e._m(0)])},l=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"area"},[i("p",[e._v("Now it act like an image zoom-in component.")]),i("p",[i("a",{attrs:{href:"https://timtnleeproject.github.io/vuejs-static-blog/#/article/mongodb%20windows",target:"_blank"}},[e._v("Here")]),e._v(" is an example, click the pictures in the article to see the effect.")])])}],a=(i("551c"),i("8a81"),i("09b5")),s=i("ab2a"),c={extends:{mixins:[s["a"]]},data:function(){return{src:"ex1.jpg",clipResult:"",code:a["d"]}},methods:{clip:function(){this.clipToURL()}}},r=c,p=(i("ab3b"),i("2877")),o=Object(p["a"])(r,t,l,!1,null,"aee020e2",null);o.options.__file="Ex-image-zoomin.vue";n["default"]=o.exports},ab2a:function(e,n,i){"use strict";n["a"]={methods:{clipToURL:function(){var e=this;return new Promise(function(n,i){var t=e.$refs.clipper.clip();t.toBlob?t.toBlob(function(i){e.clipResult&&URL.revokeObjectURL(e.clipResult),e.clipResult=URL.createObjectURL(i),e.link=e.clipResult,e.resultDone(),n()},"image/png",1):(e.clipResult=t.toDataURL("image/png",1),e.link=e.clipResult,e.resultDone(),n())})},resultDone:function(){this.done=!0}}}},ab3b:function(e,n,i){"use strict";var t=i("4114"),l=i.n(t);l.a}}]);
//# sourceMappingURL=chunk-5011680e.fbd5c329.js.map