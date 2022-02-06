(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{439:function(t,a,s){"use strict";s.r(a);var e=s(56),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"砂砾-覆盖纹理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#砂砾-覆盖纹理"}},[t._v("#")]),t._v(" 砂砾——覆盖纹理")]),t._v(" "),s("blockquote",[s("p",[t._v("本节前置知识：")]),t._v(" "),s("p",[t._v("​\t"),s("RouterLink",{attrs:{to:"/vanilla/model/tintindex.html"}},[t._v("tintindex")])],1),t._v(" "),s("p",[t._v("​\t"),s("RouterLink",{attrs:{to:"/vanilla/model/rendertype.html"}},[t._v("渲染类型")])],1)]),t._v(" "),s("p",[t._v("覆盖方法乍一看并不容易有直观理解，我们首先以官方的范本为例，制作一个覆盖纹理，看看效果是什么样的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/migUf95u2pIx3qv.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"为砂砾制作覆盖纹理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为砂砾制作覆盖纹理"}},[t._v("#")]),t._v(" 为砂砾制作覆盖纹理")]),t._v(" "),s("p",[t._v("我们要为之前制作的砂砾设置覆盖纹理：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/kIh93e8ur6TzVdY.png",alt:"image-20200710091059701"}})]),t._v(" "),s("p",[t._v("将官方的范本裁切开，放到ctm文件夹下，并新建gravel_overlay.properties")]),t._v(" "),s("p",[s("strong",[t._v("gravel_overlay.properties")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("overlay")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchBlocks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:gravel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-16")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/gtUG58uoKVMaxJl.png",alt:"image-20200710093307312"}})]),t._v(" "),s("p",[t._v("很遗憾，什么都没发生！")]),t._v(" "),s("h2",{attrs:{id:"属性文件的优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性文件的优先级"}},[t._v("#")]),t._v(" 属性文件的优先级")]),t._v(" "),s("p",[t._v("我们已经为砂砾设置了方法为repeat的properties文件，所以在这里产生了冲突。")]),t._v(" "),s("p",[t._v("在枯山水——优先级章节我们已经提到，可以通过修改属性文件的路径，路径排在前面的文件具有更高的优先级，在log文件中，我们也可以清晰看到属性文件的排序：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/GoBz7xldLM49J3A.png",alt:"image-20200710093935385"}})]),t._v(" "),s("p",[t._v("那么问题来了，既然我已经将gravel_overlay.properties设置为第一个加载，为什么它还是被dirt_stone.properties（砂砾——重复图案小节砂砾的属性文件）覆盖了？")]),t._v(" "),s("p",[t._v("这是因为matchTiles具有绝对优先级，任何macthTiles的属性文件都会在matchBlocks的属性文件之前加载。我们在dirt_stone.properties里设置的是macthTiles，而这里我们设置的是matchBlocks。")]),t._v(" "),s("p",[t._v("于是我们修改一下属性文件：")]),t._v(" "),s("p",[s("strong",[t._v("gravel_overlay.properties")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("overlay")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:gravel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-16")]),t._v("\n")])])]),s("p",[t._v("效果：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/xAOj75VClnkdc16.png",alt:"image-20200710094616204"}})]),t._v(" "),s("p",[t._v("至此我们可以看出覆盖纹理出现在了砂砾和其他方块的交界处，适合用于方块间的过渡。")]),t._v(" "),s("h2",{attrs:{id:"草方块的过渡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#草方块的过渡"}},[t._v("#")]),t._v(" 草方块的过渡")]),t._v(" "),s("p",[t._v("因为覆盖纹理是出现在砂砾上，那覆盖纹理本身应该是草皮的纹理，否则无法实现砂砾和草方块之间的过渡。")]),t._v(" "),s("p",[t._v("为什么我说覆盖纹理应该是草皮的纹理而不是砂砾和草皮各占一部分？")]),t._v(" "),s("p",[t._v("这是因为overlay纹理会在cutout_mipped层渲染，这一层是支持透明纹理的，而且这一层会覆盖在solid也就是普通渲染层的上面，形象地说就是草皮蔓延了一部分覆盖在了砂砾上方。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("还不知道渲染层是什么可以看看"),s("RouterLink",{attrs:{to:"/vanilla/model/rendertype.html"}},[t._v("这一节")]),t._v("哦")],1)]),t._v(" "),s("p",[t._v("了解了这一点，我们就可以根据模板，制作草皮覆盖层的纹理了。")]),t._v(" "),s("p",[t._v("闭着眼瞎画的纹理：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/NJ6v8aZmIuMBYWf.png",alt:"image-20200710101824568"}})]),t._v(" "),s("p",[t._v("我们看到虽然体现出草皮和砂砾的过渡了，但是草皮的颜色没了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/an76tdCzbwHFs3T.png",alt:"image-20200710101918143"}})]),t._v(" "),s("p",[t._v("我们需要给属性文件加上tintIndex和tintBlock：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("不了解tintIndex可以看看"),s("RouterLink",{attrs:{to:"/vanilla/model/tintindex.html"}},[t._v("这个小节")]),t._v("。")],1)]),t._v(" "),s("p",[s("strong",[t._v("gravel_overlay.properties")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("overlay")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:gravel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-16")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值为-1，也就是不使用染色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用草方块的染色方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:grass")]),t._v("\n")])])]),s("p",[t._v("很好，我们已经实现草方块和砂砾的过渡了！")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/wu1KoefznONHBlj.png",alt:"image-20200710103126832"}})]),t._v(" "),s("p",[t._v("但现在砂砾不管遇到什么方块都会显示覆盖草方块的样子。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/FzKxkuSeZcPWB2n.png",alt:"image-20200710103331939"}})]),t._v(" "),s("p",[t._v("所以要加上connectBlocks或者connectTiles加以限制，我们选用connectTiles：")]),t._v(" "),s("p",[s("strong",[t._v("gravel_overlay.properties")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("overlay")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:gravel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-16")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connectTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:grass_block_top")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:grass")]),t._v("\n")])])]),s("p",[t._v("我们看到现在只有连接草方块时，砂砾才显示草方块的覆盖纹理：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/36KzfZIQj1cWgNX.png",alt:"image-20200710103611967"}})]),t._v(" "),s("p",[t._v("既然如此，我们为什么不为其他方块也加上草方块的覆盖纹理呢？")]),t._v(" "),s("p",[s("strong",[t._v("gravel_overlay.properties")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("overlay")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 想加多少加多少！")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("matchTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("gravel sand red_sand stone")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-16")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connectTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:grass_block_top")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tintBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:grass")]),t._v("\n")])])]),s("p",[t._v("效果：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2020/07/28/obT8kEvNZlUDIeF.png",alt:"image-20200710104052053"}})]),t._v(" "),s("p",[t._v("现在看来，这个属性文件不是属于gravel的，反而是属于grass的，有了这个属性文件，可以让草方块蔓延到任何固体方块上。")])])}),[],!1,null,null,null);a.default=r.exports}}]);