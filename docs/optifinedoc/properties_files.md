<center><h1>属性文件说明</h1><p>Properties Files</p></center>

## 概述丨Overview

OptiFine的许多功能需要用到属性文件（Properties Files），它们控制 OptiFine 调用资源包中的图片。

属性文件是与 Windows 的 ".ini" 格式相似的简单文本文件，它的文件扩展名为 properties。除了注释行之外，文件中的每一行都表示一个属性，格式为 "属性名=值"。

译注：建议使用 notepad++ 之类的代码编辑器来编辑属性文件，确认编码为UTF-8格式，不建议使用记事本。

```properties
# 这里是一个注释
属性1=值
属性2=某个其他值

# 属性文件是可以空行的
属性3=另一个其他值
```

所有属性名都区分大小写，例如 "renderpass" 与 "renderPass" 是不相同的。
同一个文件中，属性排列的顺序没有影响。
许多属性有默认值，你可以省略它们，而有些情况下你甚至不必使用属性文件。详见每个属性文件的各个小节。

很多属性文件中有一些相同类型的属性。下面对它们作出说明，在其余章节中就不再赘述了。

## 纹理丨Textures

OptiFine 常常会要求你填写一个路径，指向某个图形文件或者其他资源。这指的是纹理包的 zip 文件（或者文件夹）中的路径。

纹理包中的文件夹结构可以多层嵌套。所以 OptiFine 提供了一些便捷的方法来简化操作。
如果OptiFine要求你提供一个文件路径，你可以使用下列任意一种方法：

> 直接的方法是指出文件相对于 assets/minecraft 的路径：
>
> ```properties
> # 完整路径
> texture=textures/entity/creeper/creeper.png
> ```
>
> 这表示在纹理包的 zip 文件或文件夹中的 "assets/minecraft/textures/entity/creeper/creeper.png"。
>
> 请始终使用斜杠 "/" 分隔文件夹。无论你的操作系统是什么，都不要使用反斜杠 "\\"，否则 OptiFine 将无法正确识别路径。
>
> <br>
>
> 你可以添加一个 "命名空间（namespace）" 前缀。下面的例子表示和上例完全一样的 "creeper.png" ：
>
> ```properties
> # 带有命名空间的完整路径
> texture=minecraft:textures/entity/creeper/creeper.png
> ```
>
> <br>
>
> 模组的命名空间通常不是 "minecraft"，在这种情况下你必须写出命名空间：
>
> ```  properties
> # 带有模组命名空间的完整路径
> texture=herobrine:textures/entity/him.png
> ```
>
> 这表示 "assets/herobrine/textures/entity/him.png"，而不是 "assets/minecraft/textures/entity/him.png"。
>
> <br>
>
> 仅用于 OptiFine 的纹理应该放在 "assets/minecraft/optifine" 文件夹中。
> 由于被频繁使用，它可以被波浪号 "~" 表示。
>
> 下面两个表示同一文件：
>
> ```properties
> # 相对于 "assets/minecraft/optifine"
> texture=~/dial/clock0.png
> texture=minecraft:optifine/dial/clock0.png
> ```
>
> ::: warning
>
> 在1.12之前的版本中，~表示mcpatcher文件夹，下面不再赘述。
>
> :::
>
> <br>
>
> 也可以使用属性文件的相对路径。
>
> 例如，在 "~/dial/clock.properties" 中（记住 "~" = "assets/minecraft/optifine"）
>
> ```properties
> # 相对路径: 没有斜线的单独文件名
> texture=clock0.png
> # 相对路径: 使用 "./" 来表示当前目录
> texture=./clock0.png
> # 绝对路径: 使用 "~"
> texture=~/dial/clock0.png
> # 绝对路径: 无命名空间
> texture=optifine/dial/clock0.png
> # 绝对路径: 有命名空间
> texture=minecraft:optifine/dial/clock0.png
> ```
> 上面四个都表示同一个路径："assets/minecraft/optifine/dial/clock0.png"。
>
> 如果属性文件在另一个位置，例如 ~/misc，那么相对路径将基于该文件夹，但是绝对路径仍然指向dial文件夹。

总而言之，请尽量把属性文件和它所用到的纹理放在同一个路径下。你需要写的路径会更短，当你需要移动文件时，也更容易维持结构。

## 方块丨Blocks

从1.7开始，Minecraft可以用字符串ID表示方块。从1.13起方块的数字ID被移除，只能使用字符串ID。

虽然数字ID仍然存在于游戏内部，但由于它们不稳定，所以不能在配置文件中使用。（译注：1.13版本前可以，用法参考 conquest 之类的资源包）

例如，以前你可以用1指代石头方块，但现在你得用 "minecraft:stone"。和纹理一样，前缀 "minecraft:" 是可省略的，所以只有 "stone" 也是可以的。模组的命名空间并非 "minecraft"，在这种情况下需要前缀。参阅[Dinnerbone的方块、物品ID和名称列表](http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt)。

在1.13中，许多有复杂变体的方块被 "扁平化" 为几个简单方块，方块的元数据（metadata）被删除。参阅[Minecraft Wiki 的有关条目](https://minecraft-zh.gamepedia.com/1.13/扁平化)。

方块名的格式为 "<命名空间:>名称\<:属性1=值1,...:属性2=值1,...>"。
尖角括号 "<>" 中为可选部分。默认命名空间为 "minecraft"。

```properties
# 简称
blocks=oak_stairs

# 完整名称
blocks=minecraft:oak_stairs

# 模组方块要求使用带命名空间的完整名称
blocks=botania:crate

# 属性
blocks=minecraft:oak_stairs:facing=east,west:half=bottom
```


前缀 "minecraft:" 是可省略的，所以这也可以写为:

```  properties
# 属性
blocks=oak_stairs:facing=east,west:half=bottom
```

## 物品丨Items

从1.7开始物品可以用名称（字符串ID）表示。
参阅[Dinnerbone的方块、物品ID和名称列表](http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt)。

从1.13开始物品只能用名称（字符串ID）表示。
参阅[Minecraft Wiki 的有关条目](https://minecraft-zh.gamepedia.com/1.13/扁平化)。

重申，前缀 "minecraft:" 是可省略的。

## 生物群系丨Biomes

需要列出生物群系时，请使用[Minecraft wiki](https://minecraft-zh.gamepedia.com/生物群系#生物群系ID)给出的名称。
也可以使用由模组添加的生物群系。

```properties
# 生物群系简称
biomes=ocean deep_ocean river beach
# 生物群系全称
biomes=minecraft:ocean biomesoplenty:highland
```

从1.13起，许多生物群系被重命名了。
参阅[Minecraft Wiki 的有关条目](https://minecraft-zh.gamepedia.com/1.13/扁平化)。

## 混合方法丨Blending methods

当两个或多个纹理组合在一起时，OptiFine提供了几种混合方法。

下面描述了有效的混合方法。"当前纹理" 表示正在使用这个混合方法的纹理。
"原纹理" 表示到目前为止已经渲染出的东西，可能是原始的纹理，也可能是之前的混合操作得到的结果。

| 混合方法 | 效果                                                         |
| -------- | ------------------------------------------------------------ |
| replace  | 用当前纹理完全替换原纹理。没有任何混合，只有透明与不透明的选项。 |
| alpha    | 按照当前纹理的透明度混合纹理。这是最常见的混合方法。         |
| overlay  | RGB 值大于0.5 时，会使原图片变亮，小于0.5时变暗。这个方法别名为color。 |
| add      | 将当前纹理的RGB值乘alpha值，将所得的结果加到原纹理上。       |
| subtract | 从原纹理减去当前纹理的RGB值。                                |
| multiply | 将当前纹理和原纹理的RGB值相乘。                              |
| dodge    | 将当前纹理的RGB值直接加到原纹理上。                          |
| burn     | 新RGB = (1 - 当前RGB) * 原RGB                                |
| screen   | 新RGB = 1 - (1 - 当前RGB) * (1 - 原RGB)                      |

你可以从[维基百科的Blend modes词条](https://en.wikipedia.org/wiki/Blend_modes)获取一些参考图片。

## 数字列表丨Number lists

有时你需要填写一个数字列表。OptiFine可以识别范围和单个数值：

```properties
# 单个数值
list=1
# 分别列出的多个数值
list=1 2 3
# 用范围表示的相同数值
list=1-3
# 多个范围
list=1-3 6 8 10-15
# 开放式范围
damage=100-
```

## RGB颜色丨RGB colors

颜色可以用16进制RGB值表示：

```properties
# 白色
color=ffffff
# 黑色
color=000000
# 红色
color=ff0000
# 绿色
color=00ff00
# 蓝色
color=0000ff
```

## 参考文献丨References

1. [https://bitbucket.org/prupe/mcpatcher/wiki/About_Properties_Files](https://bitbucket.org/prupe/mcpatcher/wiki/About_Properties_Files)
2. [http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt](http://media.dinnerbone.com/uploads/2013-09/files/28_00-44-23_YfmAkomVI.txt)
3. [http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11315](http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11315)
4. [http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11128](http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/1226351-1?comment=11128)
5. [https://minecraft.gamepedia.com/1.13/Flattening](https://minecraft.gamepedia.com/1.13/Flattening)