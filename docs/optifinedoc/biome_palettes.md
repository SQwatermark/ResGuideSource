<center><h1>生物群系调色板</h1><p>Biome Palettes</p></center>

## 概述丨Overview

OptiFine的自定义生物群系调色板的说明
基于McPatcher的自定义生物群系调色板

在原版Minecraft中，草和树叶的材质根据所处生物群系的气候显示不同颜色。
这是由两个文件控制的，

 assets/minecraft/textures/colormap/grass.png
 assets/minecraft/textures/colormap/foliage.png

每个文件都是一张 256x256 的颜色映射图，应用于基础的草和树叶材质 (通常是灰色的)。

OptiFine将这个功能极大地扩展到其它方块以及环境天空和迷雾的颜色。
艺术家们可以将这一功能发挥到极致，让每个生物群系拥有独特的感觉。

这个页面被分为两个部分，第一部分描述颜色映射格式本身，
第二部分展示如何将它们应用于Minecraft中的各种元素。



## 颜色映射格式

---

**原版颜色映射格式**
原版Minecraft使用的格式是一张256x256的颜色映射，两个轴分别表示温度和湿度。
每个生物群系都有固定的基础温度和湿度，其值对应颜色映射中的一个像素。
随着y轴坐标的增大，它在颜色映射中的位置缓慢地向右下方移动。
一个由khanador撰写的论坛帖子阐述了这是如何工作的:
http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/resource-pack-discussion/1256322-new-biome?comment=124

原版格式将应用于所有的自定义颜色映射，除非你在属性文件中覆盖这个行为。

**OptiFine "网格" 格式**
一种可以更好地控制每个生物群系的替代格式。它在这个网页上有详细说明：
https://bitbucket.org/prupe/mcpatcher/wiki/Biome_Palettes_(Grid)

**其他格式**
此外，OptiFine提供了一种简单的 "固定" 颜色映射格式。这种格式不需要图片；
它只是应用于所有方块的单一颜色，不考虑位置。
它的主要目的是覆盖某些硬编码方块的颜色，如芦苇(甘蔗)。



## 属性文件丨colormap.properties

---

自定义颜色映射可以包含 ".png" 文件或者属性文件，或者两者都有，这取决于你要做什么。
所有属性都是可选的，实际上，如果不需要更改任何属性，可以省略整个属性文件。

**(可选) 调色板格式**

```
# 调色板格式
format=<vanilla | grid | fixed>
```



如果省略，默认格式为vanilla(原版)。如果你想要默认使用网格格式。
你可以在 "assets/minecraft/optifine/color.properties" 文件中进行全局设置:



```
# 网格格式
palette.format=grid
```



注意，此设置不影响在 "assets/minecraft/textures/colormap" 中的原版 "grass.png" 和 "foliage.png" 文件。
为了保持非optifine用户的兼容性，它们总是以原版格式解释执行。
参阅下面的 "Grass and foliage"，了解如何使用网格格式和它使用的材质。



**(可选) 列出方块和可选属性**



```
# 列出方块和可选属性
blocks=<列表>
```



对于应用于地形的颜色映射 (与迷雾, 天空和水下相对)，这是这个映射将要
应用于的方块和可选的属性值列表。如果未指定此属性，则方块名称会采用文件名。
(例如, "cobblestone.properties" -> "blocks=minecraft:cobblestone").

有关语法，请参阅属性文件说明 (properties_files.txt)。

 \# 例如:
 blocks=stone minecraft:sand minecraft:lever:face=wall:facing=east,west

**(可选) 颜色映射图片**



```
# 颜色映射图片
source=<图片>
```



只适用于原版和网格颜色映射。包含颜色映射的图片的路径。
如果省略此属性，它默认为与属性文件具有相同名称和目录的png，
例如, "stone.properties" -> "source=stone.png".



**(可选) 默认颜色**



```
# 默认颜色
color=<rgb值>
```



对于 "format=fixed"，这只是应用于所有匹配的方块块的固定颜色。
如果没有给出值，默认值是白色"ffffff"。

对于 "format=vanilla" 或 "format=grid"，此颜色用于手持或掉落的方块。
如果没有指定值，则根据格式从固定位置取默认颜色:

 \# 格式
 format=vanilla: x=127,y=127 (位图的正中心)
 format=grid: x=1,y=64 (海平面的平原生物群系)



## 应用自定义颜色映射

---

自定义颜色映射可以应用于任何方块或一组方块。
它们也可以应用于环境的迷雾，天空和水下的颜色。

基于方块的颜色映射可按照以下方式被应用:
\- 作为 "assets/minecraft/optifine/color.properties" 中的列表
\- 作为 "assets/minecraft/optifine/colormap/blocks" 下分开的文件

对于第一种方法，使用语法

```
# 自定义颜色映射
palette.block.<颜色映射图片>=<列出方块+属性>
```



例如，这赋予了四种基本类型的叶子它们自己的颜色映射:

```
# 自定义颜色映射
palette.block.~/colormap/oak.png=oak_leaves
palette.block.~/colormap/tall_grass_up.png=tall_grass:half=upper
palette.block.~/colormap/tall_grass_low.png=tall_grass:half=lower
```

译者注：OptiFine作者在修改文档时只修改了一部分，列出的实际上是橡树树叶和高草丛的上下两段，
早期版本的文档列出的确实是四种叶子

这种方法的两个局限:
\- source和blocks属性可以被设置；其余为默认。
\- 如果玩家在使用多个资源包，只有第一个color.properties文件会被游戏读取。

另一种方法是在 "assets/minecraft/optifine/colormap/blocks" 下使用单独的文件。
允许使用子文件夹，这会方便文件的管理。上面的例子也可以这样做:
在 "assets/minecraft/optifine/colormap/blocks/oak.properties":

```
# 橡树颜色映射
blocks=oak_leaves
```

在 "assets/minecraft/optifine/colormap/blocks/tall_grass_up.properties":

```
# 高草丛的上部颜色映射
blocks=tall_grass:half=upper
```

在 "assets/minecraft/optifine/colormap/blocks/tall_grass_low.properties":

```
# 高草丛的下部颜色映射
blocks=tall_grass:half=lower
```

这假定 "oak.png", "tall_grass_up.png" 和 "tall_grass_low.png" 在相同的文件夹下。

**单个方块**
最简单的情况是，自定义颜色映射应用于没有属性值的单个方块类型，它不需要属性文件。
例如，"assets/minecraft/optifine/colormap/blocks/sand.png" 应用于沙子方块而不需要声明"blocks=sand"。

**多个方块**
要对所有石头和矿石应用相同的颜色映射，请使用属性文件
在 "assets/minecraft/optifine/colormap/blocks/stone_and_ore.properties"中:

```
# 石头和矿石颜色映射
blocks=stone gold_ore iron_ore 诸如此类
```

如果使用新格式，则添加 "format=grid"。如果颜色映射图片也被命名为 "stone_and_ore.png"，则source属性是不必要的。
在 "color.properties" 中这也可以写成:

```
# 石头和矿石颜色映射
palette.block.~/colormap/custom/stone.png=stone gold_ore iron_ore 诸如此类
```

添加 "palette.format=grid" 让所有自定义颜色映射使用网格格式 (除了原版的 "grass.png" 和 "foliage.png")。

**草和树叶**
自定义颜色映射将会覆盖原版的grass.png和foliage.png。
这意味着你可以保留原版映射以保持兼容性，并为OptiFine用户创建自定义映射:
在 "assets/minecraft/optifine/colormap/blocks/grass.properties"中:

```
# 草颜色映射
format=grid
# 注: 不需要 "blocks=grass"，因为这已经在文件名中了。
yVariance=2
```

在 "assets/minecraft/optifine/colormap/blocks/oak.properties":中

```
# 橡树颜色映射
format=grid
blocks=oak_leaves
```



**1.7中的固定reeds(甘蔗)**
从1.7开始，Minecraft将 "grass.png" 应用于甘蔗颜色，给很多艺术创作者造成了困扰。
一张 "fixed" "ffffff"(白色) 颜色映射可以将这个行为恢复到版本1.6。
一个256x256全白色的颜色映射当然可以完成同样的事情，但是这种方法更有效。
最简单的方法是创建一个只包含一行的属性文件:
在 "assets/minecraft/optifine/colormap/blocks/reeds.properties"中：

```
# 甘蔗颜色映射
format=fixed
```

这样就可以生效，因为blocks属性默认为文件名(reeds)，而color属性默认为固定颜色映射的 "ffffff"。

**环境迷雾、天空和水下颜色**
这些特别命名的颜色映射覆盖默认的固定环境颜色:

  主世界迷雾: "assets/minecraft/optifine/colormap/fog0.png"
  主世界天空: "assets/minecraft/optifine/colormap/sky0.png"
  水下: "assets/minecraft/optifine/colormap/underwater.png"

每一个都可以有对应的属性文件来指定格式或其他设置。
这些颜色映射与基于地形的颜色映射一样，只是它们不关心方块属性。



## 参考文献

---

https://bitbucket.org/prupe/mcpatcher/wiki/Biome_Palettes
http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/resource-pack-discussion/1256322-new-biome?comment=124