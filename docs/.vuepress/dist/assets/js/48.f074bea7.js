(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{445:function(t,s,i){"use strict";i.r(s);var a=i(56),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"枯山水-优先级"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#枯山水-优先级"}},[t._v("#")]),t._v(" 枯山水——优先级")]),t._v(" "),i("p",[t._v("之前我们取消了沙子和红沙的随机模型，导致现在它们看上去非常栅格化，缺少随机性：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2020/07/28/DFvn3ZaNBEqLAdu.png",alt:"image-20200708143344382"}})]),t._v(" "),i("p",[t._v("我们要重新为它们设置随机纹理")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2020/07/28/3cq2jGOnAgNFMBi.png",alt:"image-20200708144345874"}})]),t._v(" "),i("p",[t._v("我们看到栅格化的问题确实减轻了不少，但是，我们之前放在这里的枯山水纹理又被覆盖了。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2020/07/28/SDV82uhxlLniKgC.png",alt:"image-20200708144434669"}})]),t._v(" "),i("p",[t._v("这是因为如果不同的属性文件互相冲突，会使用文件路径排序靠前的属性文件。为了凑出这种情况，我做了点小把戏：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2020/07/28/9gkn5yQ3hNUVE4T.png",alt:"image-20200708144853852"}})]),t._v(" "),i("p",[t._v("原本sand文件夹排序在karesansui文件夹之后。我在前面加了个0，使沙子的属性文件排序在枯山水的属性文件之前。")]),t._v(" "),i("p",[t._v("我们把这个0给去掉，让sand排到karesansui的后边去：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2020/07/28/2eSqiN7rc6vVlPX.png",alt:"image-20200708153940316"}})]),t._v(" "),i("p",[t._v("回到游戏重载资源包，我们看到枯山水优先于沙子显示了：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2020/07/28/Kux6MH7qkenR3iB.png",alt:"image-20200708154016153"}})]),t._v(" "),i("p",[t._v("虽然这个案例是凑出来的，但如果碰到出现冲突的情况，我们确实可以通过更改文件夹的名称排序来确立属性文件的优先级。")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("不要使用weight属性，虽然官方帮助文档里写了weight属性可以用于更改权重，但是实际上weight属性根本不会被解析，这是我测试且查看了源码后得出的结论。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);