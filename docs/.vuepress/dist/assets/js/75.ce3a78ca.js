(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{470:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("center",[e("h1",[t._v("属性文件说明")]),e("p",[t._v("Properties Files")])]),t._v(" "),e("h2",{attrs:{id:"概述丨overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述丨overview"}},[t._v("#")]),t._v(" 概述丨Overview")]),t._v(" "),e("p",[t._v("OptiFine的许多功能需要用到属性文件（Properties Files），它们控制 OptiFine 调用资源包中的图片。")]),t._v(" "),e("p",[t._v('属性文件是与 Windows 的 ".ini" 格式相似的简单文本文件，它的文件扩展名为 properties。除了注释行之外，文件中的每一行都表示一个属性，格式为 "属性名=值"。')]),t._v(" "),e("p",[t._v("译注：建议使用 notepad++ 之类的代码编辑器来编辑属性文件，确认编码为UTF-8格式，不建议使用记事本。")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里是一个注释")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("属性1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("属性2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("某个其他值")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 属性文件是可以空行的")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("属性3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("另一个其他值")]),t._v("\n")])])]),e("p",[t._v('所有属性名都区分大小写，例如 "renderpass" 与 "renderPass" 是不相同的。\n同一个文件中，属性排列的顺序没有影响。\n许多属性有默认值，你可以省略它们，而有些情况下你甚至不必使用属性文件。详见每个属性文件的各个小节。')]),t._v(" "),e("p",[t._v("很多属性文件中有一些相同类型的属性。下面对它们作出说明，在其余章节中就不再赘述了。")]),t._v(" "),e("h2",{attrs:{id:"纹理丨textures"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#纹理丨textures"}},[t._v("#")]),t._v(" 纹理丨Textures")]),t._v(" "),e("p",[t._v("OptiFine 常常会要求你填写一个路径，指向某个图形文件或者其他资源。这指的是纹理包的 zip 文件（或者文件夹）中的路径。")]),t._v(" "),e("p",[t._v("纹理包中的文件夹结构可以多层嵌套。所以 OptiFine 提供了一些便捷的方法来简化操作。\n如果OptiFine要求你提供一个文件路径，你可以使用下列任意一种方法：")]),t._v(" "),e("blockquote",[e("p",[t._v("直接的方法是指出文件相对于 assets/minecraft 的路径：")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完整路径")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("textures/entity/creeper/creeper.png")]),t._v("\n")])])]),e("p",[t._v('这表示在纹理包的 zip 文件或文件夹中的 "assets/minecraft/textures/entity/creeper/creeper.png"。')]),t._v(" "),e("p",[t._v('请始终使用斜杠 "/" 分隔文件夹。无论你的操作系统是什么，都不要使用反斜杠 "\\"，否则 OptiFine 将无法正确识别路径。')]),t._v(" "),e("br"),t._v(" "),e("p",[t._v('你可以添加一个 "命名空间（namespace）" 前缀。下面的例子表示和上例完全一样的 "creeper.png" ：')]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 带有命名空间的完整路径")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:textures/entity/creeper/creeper.png")]),t._v("\n")])])]),e("br"),t._v(" "),e("p",[t._v('模组的命名空间通常不是 "minecraft"，在这种情况下你必须写出命名空间：')]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 带有模组命名空间的完整路径")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("herobrine:textures/entity/him.png")]),t._v("\n")])])]),e("p",[t._v('这表示 "assets/herobrine/textures/entity/him.png"，而不是 "assets/minecraft/textures/entity/him.png"。')]),t._v(" "),e("br"),t._v(" "),e("p",[t._v('仅用于 OptiFine 的纹理应该放在 "assets/minecraft/optifine" 文件夹中。\n由于被频繁使用，它可以被波浪号 "~" 表示。')]),t._v(" "),e("p",[t._v("下面两个表示同一文件：")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 相对于 "assets/minecraft/optifine"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("~/dial/clock0.png")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:optifine/dial/clock0.png")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("在1.12之前的版本中，~表示mcpatcher文件夹，下面不再赘述。")])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("也可以使用属性文件的相对路径。")]),t._v(" "),e("p",[t._v('例如，在 "~/dial/clock.properties" 中（记住 "~" = "assets/minecraft/optifine"）')]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相对路径: 没有斜线的单独文件名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("clock0.png")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 相对路径: 使用 "./" 来表示当前目录')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("./clock0.png")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 绝对路径: 使用 "~"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("~/dial/clock0.png")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绝对路径: 无命名空间")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("optifine/dial/clock0.png")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绝对路径: 有命名空间")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:optifine/dial/clock0.png")]),t._v("\n")])])]),e("p",[t._v('上面四个都表示同一个路径："assets/minecraft/optifine/dial/clock0.png"。')]),t._v(" "),e("p",[t._v("如果属性文件在另一个位置，例如 ~/misc，那么相对路径将基于该文件夹，但是绝对路径仍然指向dial文件夹。")])]),t._v(" "),e("p",[t._v("总而言之，请尽量把属性文件和它所用到的纹理放在同一个路径下。你需要写的路径会更短，当你需要移动文件时，也更容易维持结构。")]),t._v(" "),e("h2",{attrs:{id:"方块丨blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方块丨blocks"}},[t._v("#")]),t._v(" 方块丨Blocks")]),t._v(" "),e("p",[t._v("从1.7开始，Minecraft可以用字符串ID表示方块。从1.13起方块的数字ID被移除，只能使用字符串ID。")]),t._v(" "),e("p",[t._v("虽然数字ID仍然存在于游戏内部，但由于它们不稳定，所以不能在配置文件中使用。（译注：1.13版本前可以，用法参考 conquest 之类的资源包）")]),t._v(" "),e("p",[t._v('例如，以前你可以用1指代石头方块，但现在你得用 "minecraft:stone"。和纹理一样，前缀 "minecraft:" 是可省略的，所以只有 "stone" 也是可以的。模组的命名空间并非 "minecraft"，在这种情况下需要前缀。参阅'),e("a",{attrs:{href:"http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dinnerbone的方块、物品ID和名称列表"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v('在1.13中，许多有复杂变体的方块被 "扁平化" 为几个简单方块，方块的元数据（metadata）被删除。参阅'),e("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/1.13/%E6%89%81%E5%B9%B3%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft Wiki 的有关条目"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v('方块名的格式为 "<命名空间:>名称<:属性1=值1,...:属性2=值1,...>"。\n尖角括号 "<>" 中为可选部分。默认命名空间为 "minecraft"。')]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简称")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("blocks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("oak_stairs")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完整名称")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("blocks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:oak_stairs")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模组方块要求使用带命名空间的完整名称")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("blocks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("botania:crate")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 属性")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("blocks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:oak_stairs:facing=east,west:half=bottom")]),t._v("\n")])])]),e("p",[t._v('前缀 "minecraft:" 是可省略的，所以这也可以写为:')]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 属性")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("blocks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("oak_stairs:facing=east,west:half=bottom")]),t._v("\n")])])]),e("h2",{attrs:{id:"物品丨items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物品丨items"}},[t._v("#")]),t._v(" 物品丨Items")]),t._v(" "),e("p",[t._v("从1.7开始物品可以用名称（字符串ID）表示。\n参阅"),e("a",{attrs:{href:"http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dinnerbone的方块、物品ID和名称列表"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("从1.13开始物品只能用名称（字符串ID）表示。\n参阅"),e("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/1.13/%E6%89%81%E5%B9%B3%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft Wiki 的有关条目"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v('重申，前缀 "minecraft:" 是可省略的。')]),t._v(" "),e("h2",{attrs:{id:"生物群系丨biomes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生物群系丨biomes"}},[t._v("#")]),t._v(" 生物群系丨Biomes")]),t._v(" "),e("p",[t._v("需要列出生物群系时，请使用"),e("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/%E7%94%9F%E7%89%A9%E7%BE%A4%E7%B3%BB#%E7%94%9F%E7%89%A9%E7%BE%A4%E7%B3%BBID",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft wiki"),e("OutboundLink")],1),t._v("给出的名称。\n也可以使用由模组添加的生物群系。")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生物群系简称")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ocean deep_ocean river beach")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生物群系全称")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("minecraft:ocean biomesoplenty:highland")]),t._v("\n")])])]),e("p",[t._v("从1.13起，许多生物群系被重命名了。\n参阅"),e("a",{attrs:{href:"https://minecraft-zh.gamepedia.com/1.13/%E6%89%81%E5%B9%B3%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minecraft Wiki 的有关条目"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"混合方法丨blending-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#混合方法丨blending-methods"}},[t._v("#")]),t._v(" 混合方法丨Blending methods")]),t._v(" "),e("p",[t._v("当两个或多个纹理组合在一起时，OptiFine提供了几种混合方法。")]),t._v(" "),e("p",[t._v('下面描述了有效的混合方法。"当前纹理" 表示正在使用这个混合方法的纹理。\n"原纹理" 表示到目前为止已经渲染出的东西，可能是原始的纹理，也可能是之前的混合操作得到的结果。')]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("混合方法")]),t._v(" "),e("th",[t._v("效果")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("replace")]),t._v(" "),e("td",[t._v("用当前纹理完全替换原纹理。没有任何混合，只有透明与不透明的选项。")])]),t._v(" "),e("tr",[e("td",[t._v("alpha")]),t._v(" "),e("td",[t._v("按照当前纹理的透明度混合纹理。这是最常见的混合方法。")])]),t._v(" "),e("tr",[e("td",[t._v("overlay")]),t._v(" "),e("td",[t._v("RGB 值大于0.5 时，会使原图片变亮，小于0.5时变暗。这个方法别名为color。")])]),t._v(" "),e("tr",[e("td",[t._v("add")]),t._v(" "),e("td",[t._v("将当前纹理的RGB值乘alpha值，将所得的结果加到原纹理上。")])]),t._v(" "),e("tr",[e("td",[t._v("subtract")]),t._v(" "),e("td",[t._v("从原纹理减去当前纹理的RGB值。")])]),t._v(" "),e("tr",[e("td",[t._v("multiply")]),t._v(" "),e("td",[t._v("将当前纹理和原纹理的RGB值相乘。")])]),t._v(" "),e("tr",[e("td",[t._v("dodge")]),t._v(" "),e("td",[t._v("将当前纹理的RGB值直接加到原纹理上。")])]),t._v(" "),e("tr",[e("td",[t._v("burn")]),t._v(" "),e("td",[t._v("新RGB = (1 - 当前RGB) * 原RGB")])]),t._v(" "),e("tr",[e("td",[t._v("screen")]),t._v(" "),e("td",[t._v("新RGB = 1 - (1 - 当前RGB) * (1 - 原RGB)")])])])]),t._v(" "),e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Blend_modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科的Blend modes词条"),e("OutboundLink")],1),t._v("获取一些参考图片。")]),t._v(" "),e("h2",{attrs:{id:"数字列表丨number-lists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字列表丨number-lists"}},[t._v("#")]),t._v(" 数字列表丨Number lists")]),t._v(" "),e("p",[t._v("有时你需要填写一个数字列表。OptiFine可以识别范围和单个数值：")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个数值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分别列出的多个数值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1 2 3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用范围表示的相同数值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1-3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多个范围")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1-3 6 8 10-15")]),t._v("\n\n从1.18开始高度可以使用负值。用于范围时需要用括号括起来。\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个数值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("-1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分别列出的多个数值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("-3 -2 -1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用范围表示的相同数值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("(-3)-(-1)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多个范围")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("(-3)-(-1) 6 8 (-10)-15")]),t._v("\n")])])]),e("h2",{attrs:{id:"rgb颜色丨rgb-colors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rgb颜色丨rgb-colors"}},[t._v("#")]),t._v(" RGB颜色丨RGB colors")]),t._v(" "),e("p",[t._v("颜色可以用16进制RGB值表示：")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 白色")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ffffff")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 黑色")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("000000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 红色")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ff0000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绿色")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("00ff00")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 蓝色")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0000ff")]),t._v("\n")])])]),e("h2",{attrs:{id:"参考文献丨references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献丨references"}},[t._v("#")]),t._v(" 参考文献丨References")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://bitbucket.org/prupe/mcpatcher/wiki/About_Properties_Files",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bitbucket.org/prupe/mcpatcher/wiki/About_Properties_Files"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11315",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11315"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11128",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11128"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://minecraft.gamepedia.com/1.13/Flattening",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://minecraft.gamepedia.com/1.13/Flattening"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);