(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{467:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("center",[a("h1",[t._v("高清字体")]),a("p",[t._v("HD Fonts")])]),t._v(" "),a("h2",{attrs:{id:"概述丨overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述丨overview"}},[t._v("#")]),t._v(" 概述丨Overview")]),t._v(" "),a("p",[t._v("从1.6版本开始，Minecraft支持更高分辨率的字体，但自定义的能力仍然是有限的。")]),t._v(" "),a("p",[t._v('OptiFine会首先在 "assets/minecraft/optifine/font" 文件夹下寻找字体。\n这让你可以同时拥有在原版使用的自定义字体以及需要optifine才能显示的更高分辨率的字体。')]),t._v(" "),a("blockquote",[a("p",[t._v("默认字体: assets/minecraft/optifine/font/ascii.png")]),t._v(" "),a("p",[t._v("附魔台字体: assets/minecraft/optifine/font/ascii_sga.png")])]),t._v(" "),a("p",[t._v("注意：不支持unicode字体。")]),t._v(" "),a("p",[t._v("为了能够更好地控制单个字符的宽度，OptiFine提供了一种手动指定它们的方法。\n创建以下属性文件：")]),t._v(" "),a("blockquote",[a("p",[t._v("assets/minecraft/optifine/font/ascii.properties")]),t._v(" "),a("p",[t._v("assets/minecraft/optifine/font/ascii_sga.properties")])]),t._v(" "),a("p",[t._v("对应你想要自定义的字体.")]),t._v(" "),a("h2",{attrs:{id:"属性文件丨bettergrass-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性文件丨bettergrass-properties"}},[t._v("#")]),t._v(" 属性文件丨bettergrass.properties")]),t._v(" "),a("p",[t._v("这个文件中的每一行都指定一个字符的宽度：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义宽度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width.<ascii值")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0-255>=<宽度 0-8>")]),t._v("\n")])])]),a("p",[t._v("例如，为了指定大写字母 A, B, C 的宽度，你可以输入")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ABC")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width.65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5.9")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width.66")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width.67")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5.25")]),t._v("\n")])])]),a("p",[t._v("不管字体的分辨率是多少，值只能是介于0-8之间的浮点数（原版只支持整数宽度）。\n你不需要规定所有字符的宽度，只需要规定你想要覆盖的字符的宽度。")]),t._v(" "),a("p",[t._v('空格字符的默认宽度为4.0。\n你可以以同样的方式覆盖它，将 "width.32" 设置为自定义值。')]),t._v(" "),a("h2",{attrs:{id:"α混合丨alpha-blending"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#α混合丨alpha-blending"}},[t._v("#")]),t._v(" α混合丨Alpha Blending")]),t._v(" "),a("p",[t._v("如果设置为true，字体将会采用α混合")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("blend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<true|false>")]),t._v("\n")])])]),a("h2",{attrs:{id:"粗体偏移丨bold-offset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#粗体偏移丨bold-offset"}},[t._v("#")]),t._v(" 粗体偏移丨Bold offset")]),t._v(" "),a("p",[t._v("粗体字符按照符合字符的笔画宽度的一个微小的x偏移被渲染两次。\n标准8x字体 (texture 128x128) 的默认偏移值为 1.0，更高分辨率的字体的默认偏移值为0.5")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("offsetBold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<值>")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文献丨references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献丨references"}},[t._v("#")]),t._v(" 参考文献丨References")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://bitbucket.org/prupe/mcpatcher/wiki/HD_Fonts",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bitbucket.org/prupe/mcpatcher/wiki/HD_Fonts"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);e.default=r.exports}}]);