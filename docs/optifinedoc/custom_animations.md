<center><h1>自定义动态纹理</h1><p>Custom Animations</p></center>

## 概述丨Overview

OptiFine的自定义动画(Custom Animations)的使用说明，
基于McPatcher的自定义动画。

在Minecraft 1.5中，Mojang添加了动态化任何方块或物品纹理的功能(最初是MCPatcher提供的功能)。
然而，还没有办法动态化其他纹理，如生物皮肤和GUI。
OptiFine填补了这一空白，使任何任何矩形区域的纹理都可以被动态化。
这甚至包括OptiFine的其它功能所用到的特殊纹理，比如随机生物皮肤(random mob skins)和天空盒(skyboxes)。

对于方块和物品纹理，包括CTM和CIT，可以继续使用Mojang的mcmeta方法。



## 动态纹理丨Animated textures

要创建一个动画，首先指定纹理，然后指定你想要动态化的区域的x和y坐标以及宽度与高度。
并创建由帧组成的垂直带状图片 (类似于胶卷，下面就用胶卷表述这个东西吧) 作为动画的内容。
胶卷的宽度应该与要动态化的区域的宽度相同，高度应该是动态化区域的高度的整数倍。

创建一个任意名称的属性文件。把它放到assets/minecraft/optifine/anim文件夹，
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



参阅属性文件说明(properties_files.txt)，了解如何指定纹理文件的路径。

每个属性文件创建一个简单的动画，从上到下按顺序每一刻(1/20秒)播放一帧，然后循环。

相同纹理的多个非重叠部分可以通过使用相同的to值和不同的from、x、y、w、h的值进行动画处理。
他们甚至可以有独立的时序和帧序。

为了获得最大的兼容性，最好使x、y、w和h为16的倍数。



## 帧序和时长丨Frame order and timing

每个自定义动画还可以指定其动画速度和帧序。在属性文件中，添加一系列条目

```properties
# 定义帧的时间(Frame timing)
tile.X=Y
duration.X=Z
```



X从0开始，表示帧的顺序。Y表示录像带中的图片序号。第一张图片为0，第二张为1，以此类推。
Z表示这一帧播放的持续时间，按照游戏刻计算 (1刻 = 1/20秒)。
如果省略Z，持续时间为默认的帧时长，如果默认的帧时长也没有设定，则为1。

例如，胶卷的大小为16x48(3帧)。让它进行一个5帧的循环，并在中间插入一个停顿，
属性文件看起来可能像这样:

```properties
# 动态化5帧
tile.0=0
tile.1=1
tile.2=2
duration.2=5
tile.3=1
tile.4=0
```



这个动画将会以如下顺序播放:

> 第0帧: 播放动画图块0持续1刻 (默认时长)
>
> 第1帧: 播放动画图块1持续1刻 (默认时长)
>
> 第2帧: 播放动画图块2持续5刻 (duration=5)
>
> 第3帧: 播放动画图块1持续1刻 (默认时长)
>
> 第4帧: 播放动画图块0持续1刻 (默认时长)
>
> 返回第0帧
>
> 合计5帧，时长9刻



## 参考文献丨References

[https://bitbucket.org/prupe/mcpatcher/wiki/Custom_Animations](https://bitbucket.org/prupe/mcpatcher/wiki/Custom_Animations)