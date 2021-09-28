<center><h1>更好的草地</h1><p>Better Grass</p></center>

## 概述丨Overview

让低坡度草地的侧面覆盖上草方块顶部的纹理，可以在视频设置里开启或关闭。



## 属性文件丨bettergrass.properties

位置：/assets/minecraft/optifine/bettergrass.properties

**方块**

设置特定方块是否启用更好的草地功能

```properties
grass=true
grass_path=true
mycelium=true
podzol=true
```



**积雪方块**

设置特定积雪方块是否启用更好的草地功能

```properties
grass.snow=true
mycelium.snow=true
podzol.snow=true
```



**多层草地侧面**

> layer 1 = grass_side
>
> layer 2 = grass（由生物群系着色）

允许用透明草地纹理做草地侧面的覆盖层

```properties
grass.multilayer=false
```



**纹理**

设置更好的草地使用的纹理。
"texture.grass" 由生物群系着色。

```properties
texture.grass=block/grass_block_top
texture.grass_side=block/grass_block_side
texture.grass_path=block/grass_path_top
texture.grass_path_side=block/grass_path_side
texture.mycelium=block/mycelium_top
texture.podzol=block/podzol_top
texture.snow=block/snow
```

