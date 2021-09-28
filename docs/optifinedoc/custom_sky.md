<center><h1>自定义天空</h1><p>Custom Sky</p></center>

## 概述丨Overview

这是OptiFine的自定义天空功能的配置模板，基于MCPatcher的Better Skies mod的配置。

将属性文件放置在纹理包的如下位置

> ~/sky/world0/sky0.properties
>
> ~/sky/world0/sky1.properties
>
> ... 诸如此类.

每个文件都表示天空的一层。

OptiFine将持续加载直到找不到属性文件为止。属性文件的加载顺序是它们在游戏中被渲染的顺序。

此外，两个特殊的属性文件将会应用于太阳和月亮（如果它们存在的话）。这主要是为了让你能够覆盖太阳和月亮的混合方法。

> ~/sky/world0/sun.properties （取代 sun.png）
>
> ~/sky/world0/moon_phases.properties （取代 moon_phases.png）

替换纹理应该和 sun.png 或 moon_phases.png 相对应，而不是一个完整的天空盒。

所有的属性名都区分大小写。

在属性文件中可以使用下列任何一种语法来指定一个纹理文件的路径：

相对于 assets/minecraft：

> 路径/文件名 -> assets/minecraft/路径/文件名

相对于 assets/minecraft/optifine：

> ~/路径/文件名 -> assets/minecraft/optifine/路径/文件名

相对于属性文件的位置：

> ./路径/文件名 -> (属性文件的路径)/路径/文件名

标注命名空间的绝对路径：

> 命名空间:路径/文件名 -> assets/命名空间/路径/文件名

注：路径中的 "world0" 指的是主世界。如果存在其他世界的天空（下界和末地不使用标准天空渲染方法），它们的文件应该在 ~/sky/world<世界序号> 内。

**天空盒模板：**

![img](https://attachment.mcbbs.net/forum/201911/24/184017bjsvkszkiit0ate9.png)



## 天空属性丨Sky properties

**(可选) 替换纹理**

它可以在纹理包的任何位置。

而且多个属性文件可以共用相同的纹理。如果未指定，会使用相同目录下的 sky\<n>.png。

```properties
source=<纹理>
```



**(必需) 淡入/淡出时间**

所有时间都使用小时:分钟的24小时格式。

参考：

> 日出   = 6:00 = /time set 0
>
> 正午   = 12:00 = /time set 6000
>
> 日落   = 18:00 = /time set 12000
>
> 午夜   = 0:00 = /time set 18000

淡出/淡入时间控制混合时的明度。

> 在 startFadeIn 和 endFadeIn 之间:  从0升到1
> 在 endFadeIn 和 startFadeOut 之间: 固定为1
> 在 startFadeOut 和 endFadeOut 之间: 从1降到0
> 在 endFadeOut 和 startFadeIn 之间: 固定为0

注意你不需要指定startFadeOut的值；它是由其他三个值确定的。

```properties
startFadeIn=<小时:分钟>
endFadeIn=<小时:分钟>
endFadeOut=<小时:分钟>
```



**(可选) 混合方法**

这里的 "上一层" 可以指默认的天空，或由 sky\<n-1>.properties 定义的上一个自定义天空。

支持的混合方法有：

| 混合方法 | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| add      | 将天空位图叠加到上一层                                       |
| subtract |                                                              |
| multiply | 将之前的RGBA值乘以当前位图中的RGBA值                         |
| dodge    |                                                              |
| burn     |                                                              |
| screen   |                                                              |
| replace  | 用当前位图完全替换上一层。该方法没有淡入和淡出；如果根据淡入和淡出时间计算的亮度大于0，则使用全像素值。 |
| overlay  | 大于0.5的RGB值会让图片变亮, 小于0.5变暗                      |
| alpha    | 按照alpha值加权平均                                          |

默认方法为add

```properties
blend=add
```

译者注：此处未说明的混合方法参考 "属性文件说明" 中的 "混合方法" 章节。



**(可选) 旋转**

位图是否应该随时间旋转，默认值为true。

旋转的速度和方向也可以控制。

```properties
rotate=true
```



**(可选) 旋转速度**

这里指旋转速度相对于默认的每天旋转360度的倍数。

例如，值为0.5时，每两天旋转一周；而某些不合常理的数值可以让云每天出现在不同位置。

注：这并不影响始终在24小时周期内发生的淡入和淡出。

```properties
speed=1.0
```



**(可选) 旋转轴**

如果玩家朝指定的方向看，天空盒会以顺时针方向围绕视线旋转。

默认的旋转是沿着南方向轴（东升西落）。

便于参考，下面给出六个基本方向对应的向量。但是旋转轴可以是除0 0 0之外的任何向量，也不必刻意使用单位矢量。

| 方向  | 旋转轴 |
| ----- | ------ |
| down  | 0 -1 0 |
| up    | 0 1 0  |
| north | 0 0 -1 |
| south | 0 0 1  |
| west  | -1 0 0 |
| east  | 1 0 0  |

```properties
axis=0.0 0.0 1.0
```



**(可选) 天气**

渲染这一层所需要的天气条件，多个值可用空格键分隔。

例如 "weather=clear rain thunder"

默认为 "clear"

```properties
weather=clear|rain|thunder
```



**(可选) 生物群系和高度范围**

将天空覆盖层限制到特定高度范围和生物群系。

这里列出了原版生物群系：[https://minecraft.gamepedia.com/Biome#Biome_IDs](https://minecraft.gamepedia.com/Biome#Biome_IDs)。

也可以使用模组添加的生物群系。

```properties
biomes=<生物群系列表>
heights=<高度范围>
```



**(可选) 过渡时长**

覆盖层亮度的过渡时长 (秒)。

用于平滑急剧的变化，例如不同生物群系之间的天空的替换。

默认为1秒。

```properties
transition=1
```



