<center><h1>更好的草地</h1><p>Better Grass</p></center>

## 概述丨Overview

在低坡度草地的侧面覆盖草方块顶部的纹理。可在视频设置里开启或关闭此功能。



## 属性文件丨bettergrass.properties

位置：/assets/minecraft/optifine/bettergrass.properties

**方块**

设置特定方块是否启用更好的草地功能

```properties
grass=true
dirt_path=true
mycelium=true
podzol=true
crimson_nylium=true
warped_nylium=true
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
> layer 2 = grass（由生物群系染色）

允许使用透明草地纹理做草地侧面的覆盖层

```properties
grass.multilayer=false
```



**纹理**

设置更好的草地功能使用的纹理。
"texture.grass" 由生物群系染色。

```properties
texture.grass=block/grass_block_top
texture.grass_side=block/grass_block_side
texture.dirt_path=block/dirt_path_top
texture.dirt_path_side=block/dirt_path_side
texture.mycelium=block/mycelium_top
texture.podzol=block/podzol_top
texture.crimson_nylium=block/crimson_nylium
texture.warped_nylium=block/warped_nylium
texture.snow=block/snow
```



注：1.18起 grass_path 全部被更改为 dirt_path
