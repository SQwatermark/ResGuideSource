<center><h1>随机实体材质</h1><p>Random Entities</p></center>

## 概述丨Overview

随机实体材质基于MCPatcher的 Random Mobs 模组

可以向下兼容随机怪物（Random Mobs），仍然支持在 "assets/minecraft/optifine/mob" 中的材质和配置文件。

你可以把备选材质放在资源包的 "optifine/random" 文件夹下，和 "textures" 文件夹中的原版材质是对应的:

基础材质：

> assets/minecraft/textures/entity/creeper/creeper.png

备选材质：

> assets/minecraft/optifine/random/entity/creeper/creeper2.png
>
> assets/minecraft/optifine/random/entity/creeper/creeper3.png
>
> assets/minecraft/optifine/random/entity/creeper/creeper4.png

诸如此类

属性文件（可选）：

> assets/minecraft/optifine/random/entity/creeper/creeper.properties

基础材质：

> assets/minecraft/textures/painting/paintings_kristoffer_zetterstrand.png

备选材质：

> assets/minecraft/optifine/random/painting/paintings_kristoffer_zetterstrand2.png
>
> assets/minecraft/optifine/random/painting/paintings_kristoffer_zetterstrand3.png
>
> assets/minecraft/optifine/random/painting/paintings_kristoffer_zetterstrand4.png

诸如此类

属性文件（可选）：

> assets/minecraft/optifine/random/painting/paintings_kristoffer_zetterstrand.properties

属性文件由一系列规则组成，这些规则从1开始编号。

每一组规则都指定了一些要使用的实体材质，以及一个或多个使用它们的条件。

单人游戏中怪物生成的坐标或者多人游戏中怪物第一次被玩家发现时的坐标会依次与每一条规则进行匹配，第一个匹配的规则将被使用。

如果没有匹配的规则，将使用默认材质 (例如 creeper.png)。

如果某个实体没有设置 ".properties" 文件，那么所有可以使用的皮肤都将应用于该实体。

有多张材质的实体将使用基础材质的 ".properties" 文件，也就是说，你不需要新建

> wolf.properties
>
> wolf_tame.properties
>
> wolf_angry.properties

如果每张材质都有相同数量的备选材质，只需要 wolf.properties 就可以应用于这三者。

"\_eyes" 和 "\_overlay" 类似。

（译者注：原文写的就不明不白，对此感到困惑的可以看一下[这个帖子](https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=975656&pid=16713190)）

所有的属性名都区分大小写。除非另作说明，所有的路径都相对于assets/minecraft。



## 属性文件丨random_entities.properties

**(必须) 材质的序号**

材质序号 "1" 表示 "assets/minecraft/texture" 中的默认材质。

```properties
textures.<n>=<材质序号列表>
```



也可以使用随机怪物属性 "skins.\<n>"，二者选一。

```properties
skins.<n>=<皮肤列表>
```



**(可选) 随机选项的权重**

权重之和不需要正好为100或者其他特定数字。权重的数量应该和材质的数量一致。

```properties
weights.<n>=<等数量的权重列表>
```



**(可选) 生物群系列表**

这里列出了原版生物群系名：[https://minecraft.gamepedia.com/Biome#Biome_IDs](https://minecraft.gamepedia.com/Biome#Biome_IDs)，也可以使用模组添加的生物群系。

```properties
biomes.<n>=<生物群系列表>
```



**(可选) 高度范围**

取代了旧的 minHeight 和 maxHeight 属性。

```properties
heights.<n>=<高度范围>
```

**(可选) 实体名**

使用和自定义物品材质NBT标签相似的语法。

以 "!" 开头的值表示匹配相反的东西 (非)。

示例：

- 匹配字符串: "name=Pinky"
- 匹配特殊格式: "name=\u00a74\u00a7oPinky"   <br>（为了获得最佳兼容性，请使用转义序列'\u00a7'而不是"§"）
- 使用 "?" 和 "\*" 的通配符: "name=pattern:Pinky*"
- 通配符, 不区分大小写: "name=ipattern:Pinky\*"
- Java正则表达式: "name=regex:Pin(k)+y"  <br>（参考[http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html)）
- Java正则表达式, 不区分大小写: "name=iregex:Pin(k)+y"

匹配字符串中的所有反斜线必须输入两次，正则表达式和通配符中的文字反斜杠必须输入4次。

正确：

> name=regex:\\\\d+
>
> name=regex:\\\\\\\\
>
> name=/\\\\/\\\\

错误：

> name=regex:\\d+
>
> name=regex:\\\\
>
> name=/\\/\\

```properties
name.<n>=<实体名>
```



**职业 (可选)**

列出村民职业，可选填等级。

格式为：

> <职业>[:等级1,等级2,...]

可选的职业：

> none(失业), armorer(盔甲匠), butcher(屠夫), cartographer(制图师), cleric(牧师), farmer(农民),
>
> fisherman(渔夫), fletcher(制箭师), leatherworker(皮匠), librarian(图书管理员), mason(石匠),
>
> nitwit(傻子), shepherd(牧羊人), toolsmith(工具匠), weaponsmith(武器匠)

```properties
professions.<n>=<职业>
```

示例：

```properties
 # 所有等级的农民或等级为1, 3, 4的图书管理员
 professions=farmer librarian:1,3-4
 # 可以使用职业的全名
 professions=minecraft:fisherman minecraft:shepherd minecraft:nitwit
```



**项圈颜色 (可选)**

列出狼/猫的项圈颜色

可选的颜色：

> white orange magenta(品红色) light_blue yellow lime(黄绿色)
>
> pink gray light_gray cyan(青色) purple(紫色) blue brown green red black

```properties
collarColors.<n>=<颜色>
```

示例：

```properties
colarColors=pink magenta purple
```



**是否为幼崽 (可选)**

只对怪物有效

```properties
baby.<n>=<true/false>
```



**生命值（可选）**

生命值的范围，可以以数值或者百分比的形式给出。

只对怪物有效。

示例：

> health.1=10
> health.2=5-8 10-12
> health.3=0-50%

```properties
health.<n>=<list>
```



**月相（可选）**

月相为0-7的整数

示例：

> moonPhase.1=3
> moonPhase.2=0 1 2
> moonPhase.1=0-2 4-7

```properties
moonPhase.<n>=<list>
```



**天气（可选）**

不同值可以用空格分隔

例如 "weather=clear rain thunder"

```properties
weather.<n>=<clear|rain|thunder>
```



## 示例丨Examples

**creeper/creeper.properties:**

将 creeper10.png 到 creeper14.png 应用于所有位于地下的苦力怕。

creeper13.png 当前出现的概率为 7.3% (3/(10+10+10+3+10)).

```properties
skins.1=10-14
weights.1=10 10 10 3 10
heights.1=0-55
```



将 5, 7, 9 应用于高于80的山区地带.

```properties
skins.2=5 7 9
biomes.2=ExtremeHills DesertHills ForestHills ExtremeHillsEdge JungleHills IceMountains
heights.2=80-255
```



没有其他规则匹配这些材质时，需要额外列出剩余的材质，这样他们会等概率地随机出现在上述情况以外的区域。
请记住，如果没有这部分，这些材质就不会被使用，实体材质就只会显示为 creeper/creeper.png。

```properties
skins.3=1-4 6 8 15-20
```



## 译注

绘制实体的材质，推荐使用BlockBench，自带MC原版生物的模型，甚至可以导入模组生物的 .java 格式模型（不过我估计模组生物是不能用随机实体材质的，大概）

