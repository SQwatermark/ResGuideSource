(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{454:function(t,e,a){"use strict";a.r(e);var p=a(56),s=Object(p.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("center",[a("h1",[t._v("自定义物品纹理")]),a("p",[t._v("Custom Item Textures")])]),t._v(" "),a("h2",{attrs:{id:"全局属性丨cit-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局属性丨cit-properties"}},[t._v("#")]),t._v(" 全局属性丨cit.properties")]),t._v(" "),a("p",[t._v("cit.properties 用于设置自定义物品纹理的全局属性，它应该被放在纹理包的 optifine/cit 文件夹下。\n关于单个物品的纹理，参阅 cit_single.properties。")]),t._v(" "),a("p",[t._v("所有的属性名都区分大小写。\n除非另作说明，所有的路径都相对于 assets/minecraft。")]),t._v(" "),a("p",[a("strong",[t._v("(可选) 如何对同一物品应用多个效果")])]),t._v(" "),a("p",[t._v("根据所选择的方法，可以使用从 0（不可见）到 1（完全可见）的不同强度呈现多个效果。")]),t._v(" "),a("blockquote",[a("p",[t._v("average: 根据附魔等级加权平均。")]),t._v(" "),a("p",[t._v("    强度 = 附魔等级 / 总的附魔等级")]),t._v(" "),a("p",[t._v("layered: 类似于average，但使用的是最大值而不是总和。")]),t._v(" "),a("p",[t._v("    强度 = 附魔等级 / 所有附魔中最高的等级")]),t._v(" "),a("p",[t._v("cycle:  轮流显示每种效果，每种效果的持续时间都可以通过duration属性(在cit_single.properties中)")]),t._v(" "),a("p",[t._v("    设置。如果存在[group]值，则可以独立循环多个效果。")])]),t._v(" "),a("p",[t._v('注意 average 和 cap=1 的 layered 是等效的，两者都只显示物品上 "占主导地位" 的附魔。')]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<average | layered | cycle>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) average/layered方法可以渲染多少层")])]),t._v(" "),a("p",[t._v("根据每种效果位于的层数（layer value），上面的层比下面的层具有更高的优先级。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<count>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 在cycle方法中一种效果转变为另一种效果的速度")])]),t._v(" "),a("p",[t._v("对于有持续时间属性的效果，这并不影响实际效果的持续时间。")]),t._v(" "),a("p",[t._v("默认值为5秒。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<seconds>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 是否使用默认的glink.png附魔效果")])]),t._v(" "),a("p",[t._v("如果设置为 true，则在没有自定义附魔效果时使用 glink.png。如果设置为 false，默认的 glink.png 附魔效果将完全停止渲染。")]),t._v(" "),a("p",[t._v("这对没有特定附魔但有附魔效果的物品很重要——比如药水和金苹果。")]),t._v(" "),a("p",[t._v("默认值为true。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("useGlint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<true | false>")]),t._v("\n")])])]),a("h2",{attrs:{id:"单个物品纹理丨cit-single-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个物品纹理丨cit-single-properties"}},[t._v("#")]),t._v(" 单个物品纹理丨cit_single.properties")]),t._v(" "),a("p",[t._v("对于每一个想要使用自定义纹理的物品，参照此模板在资源包的 optifine/cit 文件夹下创建一个 .properties 文件。属性（properties）文件可以放在 optifine/cit 的任意一层子文件夹下。")]),t._v(" "),a("p",[t._v("每个属性文件都指定一个匹配的物品ID或物品名列表，一个替换纹理，和一系列可选的用于指定伤害、堆叠数或NBT标签的规则。")]),t._v(" "),a("p",[t._v("所有的属性名都区分大小写。除非另作说明，所有的路径都相对于assets/minecraft。")]),t._v(" "),a("h3",{attrs:{id:"通用属性丨general-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用属性丨general-properties"}},[t._v("#")]),t._v(" 通用属性丨General properties")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("(可选) 纹理替换类型")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("item:     简单的物品纹理替换。适用于GUI中的物品，手持的物品，和世界中的物品。\n如果多个属性文件匹配相同的物品，只会使用第一个匹配的属性文件。\n(先按照权重排序，在权重相同的情况下按照物品名排序)")])]),t._v(" "),a("li",[a("p",[t._v("enchantment: 附魔的覆盖纹理（替换 misc/glint.png）。\n如果多个属性文件匹配相同的物品，\n它们将按照全局属性 cit.properties 文件中指定的规则来进行混合。")])]),t._v(" "),a("li",[a("p",[t._v("armor:    盔甲纹理替换，应用于玩家和怪物穿戴的盔甲模型。\n如果多个属性文件匹配相同的物品，只有第一个属性文件会被使用。\n(先按照权重排序，在权重相同的情况下按照物品名排序)")])]),t._v(" "),a("li",[a("p",[t._v("elytra:    鞘翅纹理替换，应用于玩家和怪物穿戴的鞘翅模型。\n如果多个属性文件匹配相同的物品，只有第一个属性文件会被使用。\n(先按照权重排序，在权重相同的情况下按照物品名排序)")])])]),t._v(" "),a("p",[t._v("默认类型为item。每种类型都有附加属性，它们将会在接下来的小节中提及。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<item | enchantment | armor | elytra>")]),t._v("\n")])])]),a("p",[t._v("使用替换纹理的物品列表（对于 type=enchantment 类型可选，对于其他类型是必需的）")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<物品ID列表>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 替换纹理")])]),t._v(" "),a("p",[t._v("可以是完整路径也可以只是文件名：")]),t._v(" "),a("blockquote",[a("p",[t._v("mytextures/excalibur.png   -> mytextures/excalibur.png")]),t._v(" "),a("p",[t._v("excalibur                  -> optifine/cit/excalibur.png")])]),t._v(" "),a("p",[t._v('根据种类，包括动画在内的纹理格式被通过不同方式处理。详见下面的 "特定种类属性" 章节。')]),t._v(" "),a("p",[t._v("如果不提供任何纹理，OptiFine将按照属性文件名在属性文件所在的同一层文件夹中寻找纹理，")]),t._v(" "),a("blockquote",[a("p",[t._v("optifine/cit/excalibur.properties -> optifine/cit/excalibur.png")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<替换纹理>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 损害值")])]),t._v(" "),a("p",[t._v("仅当物品损害值是特定值或者在特定区间内时使用替换纹理。")]),t._v(" "),a("p",[t._v("对于有耐久度的新物品，损害值从零开始，当使用它时损害值升高（和耐久度相反且一一对应）。\n物品能承受的最大损害值各不相同，参阅 "),a("a",{attrs:{href:"http://www.minecraftwiki.net/wiki/Item_durability",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.minecraftwiki.net/wiki/Item_durability"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("对于其它物品，损害值表示不同属性，例如药水类型或羊毛的颜色。详细信息请参阅 "),a("a",{attrs:{href:"http://www.minecraftwiki.net/wiki/Data_values",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.minecraftwiki.net/wiki/Data_values"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("damage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<损害值 0-65535>")]),t._v("\n")])])]),a("p",[t._v("损害值也可以以百分比形式给出：")]),t._v(" "),a("blockquote",[a("p",[t._v("damage=0-50%")])]),t._v(" "),a("p",[t._v("在按照符合条件的损害值列表对物品检查前应用于物品损害值的一个可选的位元掩码，例如，")]),t._v(" "),a("p",[t._v("匹配任何抗火药水:")]),t._v(" "),a("blockquote",[a("p",[t._v("damage=3")]),t._v(" "),a("p",[t._v("damageMask=15")])]),t._v(" "),a("p",[t._v("匹配任何饮用的抗火药水：")]),t._v(" "),a("blockquote",[a("p",[t._v("damage=3")]),t._v(" "),a("p",[t._v("damageMask=16399")])]),t._v(" "),a("p",[t._v("只匹配饮用的抗火药水I：")]),t._v(" "),a("blockquote",[a("p",[t._v("damage=3")]),t._v(" "),a("p",[t._v("damageMask=16447")])]),t._v(" "),a("p",[t._v("只匹配喷溅型抗火药水II：")]),t._v(" "),a("blockquote",[a("p",[t._v("damage=16403")]),t._v(" "),a("p",[t._v("damageMask=16447")])]),t._v(" "),a("p",[t._v("有关更简单的设置药水的方法，请参见本文件末尾的部分。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("damageMask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<位元掩码>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 堆叠数")])]),t._v(" "),a("p",[t._v("仅当堆叠数是特定值或在特定范围内时使用备选纹理。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("stackSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<堆叠数 0-65535>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 附魔名称")])]),t._v(" "),a("p",[t._v('附魔名称可以是简称 ("flame") 或全名 ("minecraft:flame")。')]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("blockquote",[a("p",[t._v("enchantments=minecraft:silk_touch sharpness smite")])]),t._v(" "),a("p",[t._v('1.13版本后被废除的属性 "enchantmentIDs" 也可以被识别。')]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enchantments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<附魔名称>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 附魔等级")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enchantmentLevels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<附魔等级 0-255>")]),t._v("\n")])])]),a("p",[t._v("示例：")]),t._v(" "),a("p",[t._v("匹配任意等级的精准采集：")]),t._v(" "),a("blockquote",[a("p",[t._v("enchantmentIDs=33")])]),t._v(" "),a("p",[t._v("匹配等级3或更高等级的火矢或火焰附加：")]),t._v(" "),a("blockquote",[a("p",[t._v("enchantmentIDs=flame minecraft:fire_aspect")]),t._v(" "),a("p",[t._v("enchantmentLevels=3-")])]),t._v(" "),a("p",[t._v("匹配任何附魔，所有附魔的总等级为8-10：")]),t._v(" "),a("blockquote",[a("p",[t._v("enchantmentLevels=8-10")])]),t._v(" "),a("p",[a("strong",[t._v("(可选) 物品在那只手中会被渲染")])]),t._v(" "),a("p",[t._v('物品在GUI中显示时，被认为是在主手，默认值为 "any"')]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("any|main(主手)|off(副手)")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 基于NBT的规则")])]),t._v(" "),a("p",[t._v("只有当NBT标签具有特定值时才使用替换纹理。如果提供了多个规则，则所有规则都必须匹配。")]),t._v(" "),a("p",[t._v("可以使用像NBTExplorer这样的实用程序来查看不同物品的NBT标签。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("nbt.<tag>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<值>")]),t._v("\n")])])]),a("p",[t._v("目前只支持以下NBT类型：")]),t._v(" "),a("blockquote",[a("p",[t._v("String, Integer, Short, Long, Double, Float - 仅匹配特定值")]),t._v(" "),a("p",[t._v("Compound - 匹配特定标签或任何标签 (*).")]),t._v(" "),a("p",[t._v("List - 匹配特定序号 (从0开始) 或任何序号 (*).")])]),t._v(" "),a("p",[t._v('以 "!" 开头的值表示匹配相反的东西（非）。')]),t._v(" "),a("p",[t._v("整数类型也可以指定为十六进制颜色，例如#ff99cc。")]),t._v(" "),a("p",[t._v('列表大小被命名为 "count"。')]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("p",[t._v("匹配物品显示名：")]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Name=My Sword")])]),t._v(" "),a("p",[t._v("使用特殊格式匹配物品显示名：")]),t._v(" "),a("p",[t._v("注: 为了获得最佳兼容性，请使用转义序列 '\\u00a7' 而不是§")]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Name=\\u00a74\\u00a7oMy Sword")])]),t._v(" "),a("p",[t._v("匹配物品的lore标签 (仅首行)：")]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Lore.0=My Lore Text")])]),t._v(" "),a("p",[t._v("匹配物品的lore标签 (所有行)：")]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Lore.*=My Lore Text")])]),t._v(" "),a("p",[a("big",[t._v("字符串可以用多种方式匹配：")])],1),t._v(" "),a("p",[a("strong",[t._v("精确值")])]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Name=Letter to Herobrine")])]),t._v(" "),a("p",[t._v('精确匹配字符串 "Letter to Herobrine" 而不会匹配其他的。')]),t._v(" "),a("p",[a("strong",[t._v("使用通配符 ? 和 *")])]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Name=pattern:Letter to *")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine")]),t._v(" "),a("p",[t._v("Letter to a creeper")])]),t._v(" "),a("p",[t._v("不匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("letter to Herobrine")])]),t._v(" "),a("p",[a("strong",[t._v("通配符，不区分大小写")])]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Name=ipattern:Letter to *")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine")]),t._v(" "),a("p",[t._v("Letter to a creeper")]),t._v(" "),a("p",[t._v("letter to Herobrine")])]),t._v(" "),a("p",[a("strong",[t._v("Java正则表达式")])]),t._v(" "),a("p",[t._v("（参考 "),a("a",{attrs:{href:"http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Name=regex:Letter (to|from) .*")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine")]),t._v(" "),a("p",[t._v("Letter from Herobrine")])]),t._v(" "),a("p",[t._v("不匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("letter to Herobrine")]),t._v(" "),a("p",[t._v("A Letter to Herobrine")])]),t._v(" "),a("p",[a("strong",[t._v("Java正则表达式，不区分大小写")])]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.Name=iregex:Letter (to|from) .*")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine")]),t._v(" "),a("p",[t._v("Letter from Herobrine")]),t._v(" "),a("p",[t._v("letter to Herobrine")])]),t._v(" "),a("p",[t._v("不匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("A Letter to Herobrine")])]),t._v(" "),a("p",[t._v("注: 任何反斜杠都必须写两遍。在正则表达式或通配符中的反斜杠必须写四遍。")]),t._v(" "),a("p",[t._v("正确：")]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.name=regex:\\\\d+")]),t._v(" "),a("p",[t._v("nbt.display.name=regex:\\\\\\\\")]),t._v(" "),a("p",[t._v("nbt.display.name=/\\/\\\\")])]),t._v(" "),a("p",[t._v("错误：")]),t._v(" "),a("blockquote",[a("p",[t._v("nbt.display.name=regex:\\d+")]),t._v(" "),a("p",[t._v("nbt.display.name=regex:\\\\")]),t._v(" "),a("p",[t._v("nbt.display.name=/\\/\\")])]),t._v(" "),a("p",[t._v('你可以用 "damage=0" 和NBT规则匹配有自定义效果的药水：')]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("potion")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" damage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" nbt.CustomPotionEffects.0.Id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("20")]),t._v("\n")])])]),a("p",[t._v("要覆盖默认的药水颜色，可以使用 CustomPotionColor 标记：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" /give @p minecraft:potion 1 0 {CustomPotionEffects:[{Id:20,Amplifier:0,Duration:20}],CustomPotionColor:-1}\n")])])]),a("h3",{attrs:{id:"特定种类属性丨type-specific-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特定种类属性丨type-specific-properties"}},[t._v("#")]),t._v(" 特定种类属性丨Type-specific properties")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("物品丨type=item")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("纹理格式:")])]),t._v(" "),a("p",[t._v("物品的替换纹理是覆盖到原始的items.png上的，因此遵循与正常物品纹理相同的规则。")]),t._v(" "),a("p",[t._v("尤其是，这意味着动画必须使用 Mojang 的 .mcmeta 文件系统来实现正常播放。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<替换纹理>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 多张纹理的替换")])]),t._v(" "),a("p",[t._v("对于有多张纹理的物品，这允许你为每张纹理指定替换纹理。")]),t._v(" "),a("p",[t._v("例如，根据其状态，原版弓有四种可能的纹理：")]),t._v(" "),a("blockquote",[a("p",[t._v("bow_standby, bow_pulling_0, bow_pulling_1, bow_pulling_2.")])]),t._v(" "),a("p",[t._v("要替换全部四张，你可以使用")]),t._v(" "),a("blockquote",[a("p",[t._v("texture.bow_standby=my_special_bow_standby")]),t._v(" "),a("p",[t._v("texture.bow_pulling_0=my_special_bow_pulling_0")]),t._v(" "),a("p",[t._v("texture.bow_pulling_1=my_special_bow_pulling_1")]),t._v(" "),a("p",[t._v("texture.bow_pulling_2=my_special_bow_pulling_2")])]),t._v(" "),a("p",[t._v("药水也有两张纹理，要替换它们，使用")]),t._v(" "),a("blockquote",[a("p",[t._v("texture.potion_bottle_drinkable=...")])]),t._v(" "),a("p",[t._v("或者")]),t._v(" "),a("blockquote",[a("p",[t._v("texture.potion_bottle_splash=...")]),t._v(" "),a("p",[t._v("texture.potion_overlay=...")])]),t._v(" "),a("p",[t._v("如果没有匹配的texture.<name>属性，则使用通用的texture属性。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture.<name>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<替换纹理>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 替换模型")])]),t._v(" "),a("p",[t._v("一个原版格式的Json物品模型（"),a("a",{attrs:{href:"http://minecraft.gamepedia.com/Model#Item_models",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://minecraft.gamepedia.com/Model#Item_models"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("blockquote",[a("p",[t._v("item/mymodel -> assets/minecraft/models/item/mymodel.json")]),t._v(" "),a("p",[t._v("./mymodel  -> 和属性文件相同文件夹下的mymodel.json")])]),t._v(" "),a("p",[t._v('模型可以从相同文件夹下引用纹理，例如: "./mytexture"')]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<替换模型>  ")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 多个模型的替换")])]),t._v(" "),a("p",[t._v("对于拥有多个模型的物品，这允许你为每个模型指定替换模型，例如：")]),t._v(" "),a("blockquote",[a("p",[t._v("model.bow_standby=my_special_bow_standby")]),t._v(" "),a("p",[t._v("model.bow_pulling_0=my_special_bow_pulling_0")]),t._v(" "),a("p",[t._v("model.bow_pulling_1=my_special_bow_pulling_1")]),t._v(" "),a("p",[t._v("model.bow_pulling_2=my_special_bow_pulling_2")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("model.<name>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<替换模型>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 权重")])]),t._v(" "),a("p",[t._v("如果多个属性文件匹配相同的物品，会使用拥有最高权重的属性文件。")]),t._v(" "),a("p",[t._v("如果权重相同，会比较它们的属性文件名。默认权重为0。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<整型>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("附魔丨type=enchantment")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("纹理格式:")])]),t._v(" "),a("p",[t._v("附魔纹理可以是任何分辨率。")]),t._v(" "),a("p",[t._v("想要动态化一个附魔效果，则在anim/*.properties中使用如下方法")]),t._v(" "),a("blockquote",[a("p",[t._v("to=<附魔纹理的完整路径>")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<附魔纹理>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 将纹理覆盖到底层纹理时使用的混合方法")])]),t._v(" "),a("p",[t._v("查看Better Skies(sky.properties)来获取有效的方法列表。默认为add。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("blend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<混合方法>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 纹理的滚动速度")])]),t._v(" "),a("p",[t._v("默认值为0 (无滚动)。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("speed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<值>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 附魔纹理相对于物品的角度")])]),t._v(" "),a("p",[t._v("如果speed不为0，纹理会沿这个方向滚动。")]),t._v(" "),a("p",[t._v("默认值为0。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<0-360 度>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 层")])]),t._v(" "),a("p",[t._v("指定这个附魔效果在哪一层，以及层之间互相重叠时层的排序。")]),t._v(" "),a("p",[t._v("如果两个或更多效果使用同一层，权重决定那个效果会被渲染 (另一个不渲染)。")]),t._v(" "),a("p",[t._v("默认层为0 (最底层)。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("layer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<整型>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 权重")])]),t._v(" "),a("p",[t._v("同一层内多种附魔效果的相对权重。")]),t._v(" "),a("p",[t._v("在所有符合条件的效果中，只有在同一层内拥有最高权重的附魔效果才会被渲染。")]),t._v(" "),a("p",[t._v("换言之，")]),t._v(" "),a("blockquote",[a("p",[t._v("layer属性决定效果被渲染的"),a("strong",[t._v("顺序")]),t._v("(ORDER)。")]),t._v(" "),a("p",[t._v("weight属性决定每一层的"),a("strong",[t._v("哪一个")]),t._v("(WHICH)效果会被渲染。")])]),t._v(" "),a("p",[t._v("如果两个效果有相同的weight和layer，将会比较它们的文件名。")]),t._v(" "),a("p",[t._v("默认权重为0.")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<整型>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选，仅用于cycles方法的附魔) 持续时间")])]),t._v(" "),a("p",[t._v("附魔效果在一个周期内的持续时间，按秒计算。")]),t._v(" "),a("p",[t._v("默认值为1秒。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<秒>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("盔甲丨type=armor")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("纹理格式:")])]),t._v(" "),a("p",[t._v("替换纹理应该符合对应的盔甲纹理格式。")]),t._v(" "),a("p",[t._v("对于动态纹理，则在 anim/*.properties 中使用如下方法")]),t._v(" "),a("blockquote",[a("p",[t._v("to=<替换纹理的路径>")])]),t._v(" "),a("p",[a("strong",[t._v("(必需) 替换纹理")])]),t._v(" "),a("p",[t._v("你需要为textures/models/armor中该类型盔甲的所有纹理创建替换纹理。")]),t._v(" "),a("p",[t._v("对于钻石盔甲，")]),t._v(" "),a("blockquote",[a("p",[t._v("texture.diamond_layer_1=my_diamond_armor_1")]),t._v(" "),a("p",[t._v("texture.diamond_layer_2=my_diamond_armor_2")])]),t._v(" "),a("p",[t._v("对于有四层的皮革盔甲:")]),t._v(" "),a("blockquote",[a("p",[t._v("texture.leather_layer_1=...")]),t._v(" "),a("p",[t._v("texture.leather_layer_1_overlay=...")]),t._v(" "),a("p",[t._v("texture.leather_layer_2=...")]),t._v(" "),a("p",[t._v("texture.leather_layer_2_overlay=...")])]),t._v(" "),a("p",[t._v("如果没有匹配的texture.<name>属性，则使用通用的texture属性。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture.<name>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<替换纹理>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("(可选) 权重")])]),t._v(" "),a("p",[t._v("如果多个属性文件匹配相同的盔甲，则使用拥有最大权重的那个。\n权重相同的情况下，会比较属性文件名，默认权重为0。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<整数>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("药水丨potion")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("http://www.minecraftwiki.net/wiki/Data_values#Potions")]),t._v(" "),a("p",[t._v("你可以不指定药水损害值，而使用一种基于文件名的系统为药水指定替换纹理。")]),t._v(" "),a("p",[t._v("注意这里描述的每一件事"),a("strong",[t._v("都可以")]),t._v("(CAN)通过cit属性文件实现。")]),t._v(" "),a("p",[t._v("这只是一个快捷方式。")]),t._v(" "),a("p",[t._v("药水有三个目录：")]),t._v(" "),a("blockquote",[a("p",[t._v("optifine/cit/potion/normal - 非喷溅药水")]),t._v(" "),a("p",[t._v("optifine/cit/potion/splash - 喷溅药水")]),t._v(" "),a("p",[t._v("optifine/cit/potion/linger - 滞留药水")])]),t._v(" "),a("p",[t._v("在任一目录下，创建<药水效果名称>.png文件。")]),t._v(" "),a("p",[t._v("不需要属性文件。")]),t._v(" "),a("blockquote",[a("p",[t._v("absorption.png")]),t._v(" "),a("p",[t._v("blindness.png")]),t._v(" "),a("p",[t._v("confusion.png")]),t._v(" "),a("p",[t._v("damageboost.png  (*)")]),t._v(" "),a("p",[t._v("digslowdown.png")]),t._v(" "),a("p",[t._v("digspeed.png")]),t._v(" "),a("p",[t._v("fireresistance.png (*)")]),t._v(" "),a("p",[t._v("harm.png       (*)")]),t._v(" "),a("p",[t._v("heal.png       (*)")]),t._v(" "),a("p",[t._v("healthboost.png")]),t._v(" "),a("p",[t._v("hunger.png")]),t._v(" "),a("p",[t._v("invisibility.png  (*)")]),t._v(" "),a("p",[t._v("jump.png")]),t._v(" "),a("p",[t._v("moveslowdown.png  (*)")]),t._v(" "),a("p",[t._v("movespeed.png    (*)")]),t._v(" "),a("p",[t._v("nightvision.png  (*)")]),t._v(" "),a("p",[t._v("poison.png      (*)")]),t._v(" "),a("p",[t._v("regeneration.png  (*)")]),t._v(" "),a("p",[t._v("resistance.png")]),t._v(" "),a("p",[t._v("saturation.png")]),t._v(" "),a("p",[t._v("waterbreathing.png")]),t._v(" "),a("p",[t._v("weakness.png    (*)")]),t._v(" "),a("p",[t._v("wither.png")])]),t._v(" "),a("p",[t._v("文件名与自定义颜色的color.properties文件中的 potion.* 属性相同。注意区分大小写。")]),t._v(" "),a("p",[t._v("只有标记了(*)的药水可以在游戏中直接获得。其他只能通过编辑器获得。")]),t._v(" "),a("p",[t._v("替换的png文件将会自动用于这种药水类型；不需要任何属性文件。")]),t._v(" "),a("p",[t._v("注意这替换了基础药水渲染中的 potion.png/potion_splash.png 和 potion_contents.png 两者(BOTH)。")]),t._v(" "),a("p",[t._v("所以替换图像中一定要包括有颜色的液体。")]),t._v(" "),a("p",[t._v('类似地，你可以替换各种 "无效果" 药水的纹理。')]),t._v(" "),a("p",[t._v("它们只有非喷溅版本，同样只有标记(*)的版本在游戏中实际存在。")]),t._v(" "),a("p",[t._v("其余的都在代码中，这里列出只是为了完整起见。")]),t._v(" "),a("blockquote",[a("p",[t._v("artless.png")]),t._v(" "),a("p",[t._v("awkward.png     (*)")]),t._v(" "),a("p",[t._v("bland.png")]),t._v(" "),a("p",[t._v("bulky.png")]),t._v(" "),a("p",[t._v("bungling.png")]),t._v(" "),a("p",[t._v("buttered.png")]),t._v(" "),a("p",[t._v("charming.png")]),t._v(" "),a("p",[t._v("clear.png")]),t._v(" "),a("p",[t._v("cordial.png")]),t._v(" "),a("p",[t._v("dashing.png")]),t._v(" "),a("p",[t._v("debonair.png")]),t._v(" "),a("p",[t._v("elegant.png")]),t._v(" "),a("p",[t._v("fancy.png")]),t._v(" "),a("p",[t._v("flat.png")]),t._v(" "),a("p",[t._v("foul.png")]),t._v(" "),a("p",[t._v("gross.png")]),t._v(" "),a("p",[t._v("harsh.png")]),t._v(" "),a("p",[t._v("milky.png")]),t._v(" "),a("p",[t._v("mundane.png     (*)")]),t._v(" "),a("p",[t._v("odorless.png")]),t._v(" "),a("p",[t._v("potent.png")]),t._v(" "),a("p",[t._v("rank.png")]),t._v(" "),a("p",[t._v("sparkling.png")]),t._v(" "),a("p",[t._v("stinky.png")]),t._v(" "),a("p",[t._v("suave.png")]),t._v(" "),a("p",[t._v("thick.png      (*)")]),t._v(" "),a("p",[t._v("thin.png")]),t._v(" "),a("p",[t._v("uninteresting.png")])]),t._v(" "),a("p",[t._v('如果你宁愿所有的 "无效果" 药水都用一张单独的纹理，')]),t._v(" "),a("p",[t._v("这个文件可用于任何没有设置上列指定的替换纹理的药水：")]),t._v(" "),a("blockquote",[a("p",[t._v("optifine/cit/potion/normal/other.png")])]),t._v(" "),a("p",[t._v("另外两个纹理(非喷溅型)也可以设置：")]),t._v(" "),a("blockquote",[a("p",[t._v("optifine/cit/potion/normal/water.png - 水瓶 (item 373:0)")]),t._v(" "),a("p",[t._v("optifine/cit/potion/normal/empty.png - 玻璃瓶 (item 374)")])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);