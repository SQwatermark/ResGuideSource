<center><h1>自定义动画</h1><p>Custom Animations</p></center>

## 概述丨Overview

在 Minecraft 1.5 中，Mojang 添加了给任何方块或物品纹理添加动画的功能（此功能最初由 MCPatcher 提供）。
然而，无法为其他纹理添加动画，如生物皮肤和 GUI。
OptiFine 填补了这一空白，使任何任何矩形区域的纹理都可添加动画。
甚至包含 OptiFine 的其它功能所用到的特殊纹理，例如随机生物皮肤（random mob skins）和天空盒（skyboxes）。

方块和物品的纹理，包括 CTM 和 CIT，可以继续使用 Mojang 的 mcmeta 方法。



## 动态纹理丨Animated textures

要添加一个动画，首先要指定纹理，然后明确你想要添加动画的区域的 x 和 y 坐标以及宽度与高度。
并创建由帧组成的垂直带状图片（类似于胶卷，下面就用胶卷表述这个东西吧）作为动画的内容。
胶卷的宽度应该与选中区域的宽度相同，高度应该是选中区域的高度的整数倍。

新建一个属性文件，文件名随意。把它放到 assets/minecraft/optifine/anim 文件夹
或其任何子文件夹中。并将这些属性添加到文件中。



```properties
# 自定义动画
from=<动画的路径>
to=<想要动态化的纹理的路径>
x=<动态化区域的x坐标>
y=<动态化区域的y坐标>
w=<动态化区域的宽度>
h=<动态化区域的高度>
# 下面三项可选
duration=<按照刻计算的默认帧时长>
interpolate=<true|false>
skip=<要跳过的插入刻>
```



参阅[属性文件说明](./properties_files.md)，了解如何指定纹理的文件路径。

每个属性文件定义了一个简单的动画，每游戏刻（1/20秒）从上到下依次播放一帧，重复循环。

相同纹理的多个非重叠部分可以通过使用相同的 to 值和不同的 from、x、y、w、h 的值进行动画处理。
其时长以及帧序互相独立。

为获得最大的兼容性，最好令 x、y、w 和 h 为 16 的倍数。



## 帧序和时长丨Frame order and timing

每个自定义动画还可以指定其动画速度和帧序。在属性文件中，添加一系列条目

```properties
# 定义帧的时序（Frame timing）
# 第X帧使用胶卷中的第Y张图片
tile.X=Y
# 第X帧时长为Z游戏刻
duration.X=Z
```



X 从 0 开始，表示帧的顺序。Y 表示胶卷中的图片序号。第一张图片为 0，第二张为 1，以此类推。
Z 表示这一帧播放的持续时间，按照游戏刻计算（1游戏刻 = 1/20秒）。
如果省略 Z，持续时间为默认的帧时长，如未设置默认的帧时长，则为 1。

例如，胶卷的尺寸为 16x48（3帧）。让它进行一个 5 帧的循环，并在中间插入一个停顿，
属性文件看起来可能像这样：

```properties
# 播放5帧的动画
tile.0=0
tile.1=1
tile.2=2
duration.2=5
tile.3=1
tile.4=0
```



这个动画将会以如下顺序播放:

> 第 0 帧: 播放 0 号图片，持续 1 刻（默认时长）
>
> 第 1 帧: 播放 1 号图片，持续 1 刻（默认时长）
>
> 第 2 帧: 播放 2 号图片，持续 5 刻（duration=5）
>
> 第 3 帧: 播放 1 号图片，持续 1 刻（默认时长）
>
> 第 4 帧: 播放 0 号图片，持续 1 刻（默认时长）
>
> 返回第 0 帧
>
> 合计 5 帧，时长 9 游戏刻



## 参考文献丨References

[https://bitbucket.org/prupe/mcpatcher/wiki/Custom_Animations](https://bitbucket.org/prupe/mcpatcher/wiki/Custom_Animations)