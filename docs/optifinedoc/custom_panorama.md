<center><h1>自定义全景图</h1><p>Custom Panorama</p></center>

## 概述丨Overview

译注：这个全景图指的就是 Minecraft 主菜单背景的全景图



## 属性文件丨background.properties

文件 "/assets/minecraft/optifine/gui/background.properties" 控制主菜单全景图（panorama）的行为。

备选全景图文件夹：

> /assets/minecraft/optifine/gui/background1
>
> /assets/minecraft/optifine/gui/background2
>
> /assets/minecraft/optifine/gui/background3
>
> ...

译注：当你打开主菜单时，OptiFine 会随机选取一个备选文件夹，播放里面的全景图。（这个功能从1.13开始就坏了，截至目前直到 1.18.1-OptiFine_H5_pre4 都没修）

备选全景图文件夹应该包含以下纹理：

> panorama_0.png
>
> panorama_1.png
>
> panorama_2.png
>
> panorama_3.png
>
> panorama_4.png
>
> panorama_5.png

备选全景图文件夹内可以创建 "background.properties" 来定义此全景图的自定义属性。

**权重（可选）**

权重越高，越容易被选中，默认为 1。

```properties
weight=<权重> 
```



**模糊等级（可选）**

主菜单背景使用三种模糊，模糊等级过高可能会降低主菜单FPS。

```properties
blur1=<1-64>
blur2=<1-3>
blur3=<1-3>
```



**覆盖层颜色（可选）**

在全景图上有两个渐变覆盖层，当 top 和 bottom 颜色都为 0 时，覆盖层被禁用。

颜色格式为 ARGB （十六进制）

默认值如下：

```properties
overlay1.top=80FFFFFF
overlay1.bottom=00FFFFFF
overlay2.top=00000000
overlay2.bottom=80000000
```

