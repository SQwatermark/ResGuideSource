(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{462:function(t,e,a){"use strict";a.r(e);var r=a(56),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("center",[a("h1",[t._v("自定义GUI")]),a("p",[t._v("Custom GUIs")])]),t._v(" "),a("h2",{attrs:{id:"概述丨overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述丨overview"}},[t._v("#")]),t._v(" 概述丨Overview")]),t._v(" "),a("p",[t._v('如果你想制作一个自定义 GUI，请在 "assets/minecraft/optifine/gui/container" 文件夹或者其任意一层子文件夹中创建一个 .properties 文件，并按照下面的模板编辑属性文件。')]),t._v(" "),a("p",[t._v("不同类型的容器有不同的要求和限制。详见下方。")]),t._v(" "),a("h2",{attrs:{id:"常规属性丨general-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常规属性丨general-properties"}},[t._v("#")]),t._v(" 常规属性丨General properties")]),t._v(" "),a("p",[a("strong",[t._v("容器（必需）")])]),t._v(" "),a("p",[t._v("这是什么容器的GUI？")]),t._v(" "),a("p",[t._v("可能的值：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("容器名")]),t._v(" "),a("th",[t._v("中文译名")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("anvil")]),t._v(" "),a("td",[t._v("铁砧")])]),t._v(" "),a("tr",[a("td",[t._v("beacon")]),t._v(" "),a("td",[t._v("信标")])]),t._v(" "),a("tr",[a("td",[t._v("brewing_stand")]),t._v(" "),a("td",[t._v("酿造台")])]),t._v(" "),a("tr",[a("td",[t._v("chest")]),t._v(" "),a("td",[t._v("箱子")])]),t._v(" "),a("tr",[a("td",[t._v("crafting")]),t._v(" "),a("td",[t._v("工作台")])]),t._v(" "),a("tr",[a("td",[t._v("dispenser")]),t._v(" "),a("td",[t._v("发射器")])]),t._v(" "),a("tr",[a("td",[t._v("enchantment")]),t._v(" "),a("td",[t._v("附魔")])]),t._v(" "),a("tr",[a("td",[t._v("furnace")]),t._v(" "),a("td",[t._v("熔炉")])]),t._v(" "),a("tr",[a("td",[t._v("hopper")]),t._v(" "),a("td",[t._v("漏斗")])]),t._v(" "),a("tr",[a("td",[t._v("horse")]),t._v(" "),a("td",[t._v("马")])]),t._v(" "),a("tr",[a("td",[t._v("villager")]),t._v(" "),a("td",[t._v("村民")])]),t._v(" "),a("tr",[a("td",[t._v("shulker_box")]),t._v(" "),a("td",[t._v("潜影盒")])]),t._v(" "),a("tr",[a("td",[t._v("creative")]),t._v(" "),a("td",[t._v("创造模式物品栏")])]),t._v(" "),a("tr",[a("td",[t._v("inventory")]),t._v(" "),a("td",[t._v("物品栏")])])])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<容器名>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("纹理（必需）")])]),t._v(" "),a("p",[t._v("GUI 纹理的替换。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v('"texture" 属性替换默认的 GUI 纹理。')])]),t._v(" "),a("li",[a("p",[t._v('"texture.<路径>" 属性可以用于替换任何 GUI 纹理。')]),t._v(" "),a("p",[t._v('<路径> 相对于 "/assets/minecraft/textures/gui"')])])]),t._v(" "),a("p",[t._v("创造模式物品栏 GUI 没有默认纹理，所以必须使用路径纹理。")]),t._v(" "),a("p",[t._v("创造模式物品栏的例子：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v(' # 文件 "assets/minecraft/optifine/gui/container/creative/creative_desert.properties')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("creative")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" biomes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("desert")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" texture.container/creative_inventory/tab_inventory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("tab_inventory_desert")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" texture.container/creative_inventory/tabs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("tabs_desert")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" texture.container/creative_inventory/tab_items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("tab_items_desert")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" texture.container/creative_inventory/tab_item_search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("tab_item_search_desert")]),t._v("\n")])])]),a("p",[t._v('至少需要一个 "texture" 或者 "texture.<路径>"。')]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<纹理>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("texture.<路径>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<纹理>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("自定义实体或方块实体名称 (可选)")])]),t._v(" "),a("p",[t._v("如果你想让特定名称的容器显示这个 GUI，就需要用到这个属性。")]),t._v(" "),a("p",[t._v("该名称使用与自定义物品纹理的 NBT 标签类似的语法。")]),t._v(" "),a("p",[t._v('以 "!" 开头的值表示匹配相反的东西（非）。')]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("p",[a("big",[t._v("匹配名称：")])],1),t._v(" "),a("blockquote",[a("p",[t._v("name=My Sword")])]),t._v(" "),a("p",[a("big",[t._v("使用特殊格式匹配名称：")]),t._v("\n注: 为了获得最佳兼容性，请使用转义序列 '\\u00a7' 而不是§")],1),t._v(" "),a("blockquote",[a("p",[t._v("name=\\u00a74\\u00a7oMy Sword")])]),t._v(" "),a("p",[a("strong",[t._v("使用 ? 和 * 的通配符")])]),t._v(" "),a("blockquote",[a("p",[t._v("name=pattern:Letter to *")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine")]),t._v(" "),a("p",[t._v("Letter to a creeper")])]),t._v(" "),a("p",[t._v("不匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("letter to Herobrine")])]),t._v(" "),a("p",[a("strong",[t._v("通配符, 不区分大小写")])]),t._v(" "),a("blockquote",[a("p",[t._v("name=ipattern:Letter to *")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine")]),t._v(" "),a("p",[t._v("Letter to a creeper")]),t._v(" "),a("p",[t._v("letter to Herobrine")])]),t._v(" "),a("p",[a("strong",[t._v("Java 正则表达式")])]),t._v(" "),a("p",[t._v("（参阅 "),a("a",{attrs:{href:"http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("blockquote",[a("p",[t._v("name=regex:Letter (to|from) .*")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine")]),t._v(" "),a("p",[t._v("Letter from Herobrine")])]),t._v(" "),a("p",[t._v("不匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("letter to Herobrine")]),t._v(" "),a("p",[t._v("A Letter to Herobrine")])]),t._v(" "),a("p",[a("strong",[t._v("Java 正则表达式, 不区分大小写")])]),t._v(" "),a("blockquote",[a("p",[t._v("name=iregex:Letter (to|from) .*")])]),t._v(" "),a("p",[t._v("匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("Letter to Herobrine\nLetter from Herobrine\nletter to Herobrine")])]),t._v(" "),a("p",[t._v("不匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("A Letter to Herobrine")])]),t._v(" "),a("p",[t._v("注: 所有反斜线也必须输入两次。")]),t._v(" "),a("p",[t._v("正则表达式和通配符中的文字反斜杠必须输入4次。")]),t._v(" "),a("p",[t._v("正确：")]),t._v(" "),a("blockquote",[a("p",[t._v("name=regex:\\\\d+\nname=regex:\\\\\\\\\nname=/\\\\/\\\\")])]),t._v(" "),a("p",[t._v("错误：")]),t._v(" "),a("blockquote",[a("p",[t._v("name=regex:\\d+\nname=regex:\\\\\nname=//\\")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<名称>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("生物群系（可选）")])]),t._v(" "),a("p",[t._v("这里列出了原版生物群系："),a("a",{attrs:{href:"https://minecraft.gamepedia.com/Biome#Biome_IDs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://minecraft.gamepedia.com/Biome#Biome_IDs"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("也可以使用模组添加的生物群系。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("biomes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<生物群系列表>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("高度（可选）")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("heights")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<高度范围>")]),t._v("\n")])])]),a("h2",{attrs:{id:"箱子的特定属性丨chest-specific-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#箱子的特定属性丨chest-specific-properties"}},[t._v("#")]),t._v(" 箱子的特定属性丨Chest specific properties")]),t._v(" "),a("p",[a("strong",[t._v("是否为大箱子（可选）")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("large")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<true|false>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("是否为陷阱箱（可选）")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("trapped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<true|false>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("是否为圣诞节箱子（可选）")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("christmas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<true|false>")]),t._v("\n")])])]),a("p",[a("strong",[t._v("是否为末影箱（可选）")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ender")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<true|false>")]),t._v("\n")])])]),a("h2",{attrs:{id:"信标的特定属性丨beacon-specific-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信标的特定属性丨beacon-specific-properties"}},[t._v("#")]),t._v(" 信标的特定属性丨Beacon specific properties")]),t._v(" "),a("p",[a("strong",[t._v("等级（可选）")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("levels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<等级>")]),t._v("\n")])])]),a("h2",{attrs:{id:"村民的特定属性丨villager-specific-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#村民的特定属性丨villager-specific-properties"}},[t._v("#")]),t._v(" 村民的特定属性丨Villager specific properties")]),t._v(" "),a("p",[a("strong",[t._v("职业（可选）")])]),t._v(" "),a("p",[t._v("列出村民职业，可选填等级")]),t._v(" "),a("p",[t._v("格式")]),t._v(" "),a("blockquote",[a("p",[t._v("<职业>[:等级1,等级2,...]")])]),t._v(" "),a("p",[t._v("可选择的职业：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("职业")]),t._v(" "),a("th",[t._v("中文译名")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("none")]),t._v(" "),a("td",[t._v("失业")])]),t._v(" "),a("tr",[a("td",[t._v("armorer")]),t._v(" "),a("td",[t._v("盔甲匠")])]),t._v(" "),a("tr",[a("td",[t._v("butcher")]),t._v(" "),a("td",[t._v("屠夫")])]),t._v(" "),a("tr",[a("td",[t._v("cartographer")]),t._v(" "),a("td",[t._v("制图师")])]),t._v(" "),a("tr",[a("td",[t._v("cleric")]),t._v(" "),a("td",[t._v("牧师")])]),t._v(" "),a("tr",[a("td",[t._v("farmer")]),t._v(" "),a("td",[t._v("农民")])]),t._v(" "),a("tr",[a("td",[t._v("fisherman")]),t._v(" "),a("td",[t._v("渔夫")])]),t._v(" "),a("tr",[a("td",[t._v("fletcher")]),t._v(" "),a("td",[t._v("制箭师")])]),t._v(" "),a("tr",[a("td",[t._v("leatherworker")]),t._v(" "),a("td",[t._v("皮匠")])]),t._v(" "),a("tr",[a("td",[t._v("librarian")]),t._v(" "),a("td",[t._v("图书管理员")])]),t._v(" "),a("tr",[a("td",[t._v("mason")]),t._v(" "),a("td",[t._v("石匠")])]),t._v(" "),a("tr",[a("td",[t._v("nitwit")]),t._v(" "),a("td",[t._v("傻子")])]),t._v(" "),a("tr",[a("td",[t._v("shepherd")]),t._v(" "),a("td",[t._v("牧羊人")])]),t._v(" "),a("tr",[a("td",[t._v("toolsmith")]),t._v(" "),a("td",[t._v("工具匠")])]),t._v(" "),a("tr",[a("td",[t._v("weaponsmith")]),t._v(" "),a("td",[t._v("武器匠")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("p",[t._v("职业为农民（所有等级）或图书管理员（等级为 1,3,4）")]),t._v(" "),a("blockquote",[a("p",[t._v("professions=farmer librarian:1,3-4")])]),t._v(" "),a("p",[t._v("职业全名")]),t._v(" "),a("blockquote",[a("p",[t._v("professions=minecraft:fisherman minecraft:shepherd minecraft:nitwit")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("professions.<n>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<职业>")]),t._v("\n")])])]),a("h2",{attrs:{id:"马和发射器的特定属性丨horse-and-dispenser-specific-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#马和发射器的特定属性丨horse-and-dispenser-specific-properties"}},[t._v("#")]),t._v(" 马和发射器的特定属性丨Horse and dispenser specific properties")]),t._v(" "),a("p",[a("strong",[t._v("变体（可选）")])]),t._v(" "),a("p",[t._v("马的变体：horse donkey mule llama")]),t._v(" "),a("p",[t._v("发射器的变体：dispenser dropper")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("variants")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<变体>")]),t._v("\n")])])]),a("h2",{attrs:{id:"羊驼和潜影盒的特定属性丨lllama-and-shulker-box-specific-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#羊驼和潜影盒的特定属性丨lllama-and-shulker-box-specific-properties"}},[t._v("#")]),t._v(" 羊驼和潜影盒的特定属性丨Lllama and shulker box specific properties")]),t._v(" "),a("p",[a("strong",[t._v("颜色（可选）")])]),t._v(" "),a("p",[t._v("列出潜影盒颜色或羊驼背上的地毯颜色。")]),t._v(" "),a("p",[t._v("颜色列表：white orange magenta light_blue yellow lime pink gray light_gray cyan purple blue brown green red black")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<颜色>")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);