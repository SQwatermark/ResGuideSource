<center><h1>自定义GUI</h1><p>Custom GUIs</p></center>

## 概述丨Overview

如果你想制作一个自定义GUI，请在 "assets/minecraft/optifine/GUI/container" 文件夹或者其任意一层子文件夹中创建一个.properties文件，并按照下面的模板编辑属性文件。

不同类型的容器有不同的要求和限制。详见下方。

## 常规属性丨General properties

**容器 (必需)**

这是什么容器的GUI？
可能的值:
 anvil(铁砧) beacon(信标) brewing_stand(酿造台) chest(箱子) crafting(工作台) dispenser(发射器) enchantment(附魔)
 furnace(熔炉) hopper(漏斗) horse(马) villager(村民) shulker_box(潜影盒) creative(创造模式物品栏) inventory(物品栏)

```properties
container=<容器名>
```



**材质 (必需)**

GUI材质的替换。
"texture" 属性替换默认的GUI材质。
"texture.<路径>" 属性可以用于替换任何GUI材质。
<路径> 相对于 "/assets/minecraft/textures/gui"
创造模式物品栏GUI没有默认材质，所以必须使用路径材质。

创造模式物品栏的例子：
 \# 文件 "assets/minecraft/optifine/gui/container/creative/creative_desert.properties
 container=creative
 biomes=desert
 texture.container/creative_inventory/tab_inventory=tab_inventory_desert
 texture.container/creative_inventory/tabs=tabs_desert
 texture.container/creative_inventory/tab_items=tab_items_desert
 texture.container/creative_inventory/tab_item_search=tab_item_search_desert

至少需要一个 "texture" 或者 "texture.<路径>"。

```properties
texture=<材质>
texture.<路径>=<材质>
```



**自定义实体或方块实体名称 (可选)**

也许你想让特定名称的容器显示这个GUI，就需要用到这个属性
该名称使用与自定义物品材质的NBT标签类似的语法。
以 "!" 开头的值表示相反的匹配 (非)。

示例:
\- 匹配名称:
 name=My Sword

\- 使用特殊格式匹配名称:
注: 为了获得最佳兼容性，请使用转义序列 '\u00a7' 而不是§
 name=\u00a74\u00a7oMy Sword

\- 使用 ? 和 * 的通配符
 name=pattern:Letter to *
匹配
 Letter to Herobrine
 Letter to a creeper
不匹配
 letter to Herobrine

\- 通配符, 不区分大小写
 name=ipattern:Letter to *
匹配
 Letter to Herobrine
 Letter to a creeper
 letter to Herobrine

\- Java正则表达式
 (See http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html)
 name=regex:Letter (to|from) .*
匹配
 Letter to Herobrine
 Letter from Herobrine
不匹配
 letter to Herobrine
 A Letter to Herobrine

\- Java正则表达式, 不区分大小写
 name=iregex:Letter (to|from) .*
匹配
 Letter to Herobrine
 Letter from Herobrine
 letter to Herobrine
不匹配
 A Letter to Herobrine

注: 所有反斜线也必须输入两次.
正则表达式和通配符中的文字反斜杠必须输入4次.
正确:
 name=regex:\\d+
 name=regex:\\\\
 name=/\\/\\
错误:
 name=regex:\d+
 name=regex:\\
 name=/\/\

```properties
name=<名称>
```



**生物群系 (可选)**

这里列出了原版生物群系: https://minecraft.gamepedia.com/Biome#Biome_IDs
也可以使用模组添加的生物群系。

```properties
biomes=<生物群系列表>
```



**高度 (可选)**

```properties
heights=<高度范围>
```



## 箱子的特定属性丨Chest specific properties

---

**是否为大箱子 (可选)**

```properties
large=<true|false>
```



**是否为陷阱箱 (可选)**

```properties
trapped=<true|false>
```



**是否为圣诞节箱子 (可选)**

```properties
christmas=<true|false>
```



**是否为末影箱 (可选)**

```properties
ender=<true|false>
```



## 信标的特定属性丨Beacon specific properties

**等级 (可选)**

```properties
levels=<等级>
```



## 村民的特定属性丨Villager specific properties

**职业 (可选)**

列出村民职业，可选填等级

格式
 <职业>[:等级1,等级2,...]

可选择的职业: none(失业), armorer(盔甲匠), butcher(屠夫), cartographer(制图师), cleric(牧师), farmer(农民),
      fisherman(渔夫), fletcher(制箭师), leatherworker(皮匠), librarian(图书管理员), mason(石匠),
      nitwit(傻子), shepherd(牧羊人), toolsmith(工具匠), weaponsmith(武器匠)

示例:
 \# 职业为农民 (所有等级) 或图书管理员 (等级为 1,3,4)
 professions=farmer librarian:1,3-4
 \# 职业全名
 professions=minecraft:fisherman minecraft:shepherd minecraft:nitwit

```properties
professions.<n>=<职业>
```



## 马和发射器的特定属性丨Horse and dispenser specific properties

**变体 (可选)**

马的变体: horse donkey mule llama
发射器的变体: dispenser dropper

```properties
variants=<变体>
```



## 羊驼和潜影盒的特定属性丨Lllama and shulker box specific properties

**颜色 (可选)**

写出潜影盒颜色或羊驼背上的地毯颜色
颜色列表: white orange magenta light_blue yellow lime pink gray light_gray(原为silver) cyan purple blue brown green red black

```properties
colors=<颜色>
```

