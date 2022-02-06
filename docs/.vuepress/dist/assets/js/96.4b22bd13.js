(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{491:function(t,e,r){"use strict";r.r(e);var a=r(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"渲染类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染类型"}},[t._v("#")]),t._v(" 渲染类型")]),t._v(" "),r("p",[t._v("除了不透明方块之外，替换原版模型/纹理还容易遇到的一个问题就是渲染类型（Render Type）。")]),t._v(" "),r("p",[t._v("在旧版本中，渲染类型被称为渲染层（Render Layer），而渲染类型这个词表示另外的东西。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/10/12/cN5B4wGMqUyRSvm.png",alt:"image-20200707133756597"}})]),t._v(" "),r("p",[t._v("我们看到竹叶原本是透明的，但是在这个例子里，透明的部分被渲染为白色了。这是方块的渲染类型导致的。")]),t._v(" "),r("p",[t._v("方块有五种渲染类型：")]),t._v(" "),r("ul",[r("li",[t._v("SOLID - 绝大部分完整不透明方块是这个渲染类型，不支持alpha通道，即透明度，即便原纹理有透明部分，也会被渲染为白色。")]),t._v(" "),r("li",[t._v("CUTOUT - 绝大部分非完整方块是这个渲染类型，它支持完全透明，但不支持半透明。")]),t._v(" "),r("li",[t._v("CUTOUT_MIPPED - 带"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Mipmap",target:"_blank",rel:"noopener noreferrer"}},[t._v("多级纹理"),r("OutboundLink")],1),t._v("的CUTOUT。")]),t._v(" "),r("li",[t._v("TRANSLUCENT - 支持半透明纹理，冰块就是这个渲染类型。")]),t._v(" "),r("li",[t._v("TRANSLUCENT_NO_CRUMBLING - 高版本新增的半透明的变种。")])]),t._v(" "),r("p",[t._v("下图来源于一个"),r("a",{attrs:{href:"https://greyminecraftcoder.blogspot.com/2020/04/block-rendering-1144.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blog"),r("OutboundLink")],1),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/10/12/9siTnYzXqSgeJVb.png",alt:"img"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("通常情况下渲染类型也是资源包所无能为力的，总而言之，尽量不要用原版方块的模型做一些奇奇怪怪的东西，很容易出现渲染问题。")])]),t._v(" "),r("h2",{attrs:{id:"用optifine修改渲染类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用optifine修改渲染类型"}},[t._v("#")]),t._v(" 用OptiFine修改渲染类型")]),t._v(" "),r("p",[t._v("上面说了通常情况下资源包对渲染类型无能为力，但我们还是有个更改方块的渲染类型的方法的，那就是OptiFine的"),r("a",{attrs:{href:"../../optifinedoc/custom_blocks"}},[t._v("自定义方块")]),t._v("。但是对固体不透明方块，此方法无效。这个方法比较明显的用途，也就是在仅支持纯透明的方块中实现半透明纹理。")]),t._v(" "),r("p",[t._v("举个例子，我想让末地烛变成半透明的，先调整纹理的不透明度，查看效果：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/10/12/4eBF2LkGsZNlvKw.png",alt:"image-20200715142808173"}})]),t._v(" "),r("p",[t._v("由于其渲染类型为CUTOUT，理所当然没有显示出半透明纹理，现在我们在optifine文件夹下直接新建文件名为block.properties：")]),t._v(" "),r("p",[r("strong",[t._v("block.properties")])]),t._v(" "),r("div",{staticClass:"language-properties extra-class"},[r("pre",{pre:!0,attrs:{class:"language-properties"}},[r("code",[r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("layer.translucent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("end_rod")]),t._v("\n")])])]),r("p",[t._v("现在它的确是半透明的了：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/10/12/8JAxnTOsGbXlN6q.png",alt:"image-20200715143211150"}})]),t._v(" "),r("h2",{attrs:{id:"拓展阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/%E6%95%99%E7%A8%8B/%E4%B8%8D%E9%80%8F%E6%98%8E%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft中文wiki：不透明度"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);