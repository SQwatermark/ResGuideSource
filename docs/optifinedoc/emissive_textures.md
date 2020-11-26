# 自发光纹理

Emissive Textures

## 概述|Overview

可以在方块材质上添加永远以最大亮度被渲染的覆盖层，这可以模拟材质的发光部分。

自发光材质的名称是基础材质的名称加上一个自定义的后缀。

例如：<br>	bedrock.png  - 基础材质<br>	bedrock_e.png - 自发光覆盖层

除SOLID层之外，自发光覆盖层和基础材质在同一层被渲染，而SOLID层的覆盖层被渲染为CUTOUT_MIPPED。

自发光覆盖层也可以用于物品、怪物和方块实体。

译注：自发光纹理和动态光源都只是视觉效果，对影响游戏机制的光照等级没有任何影响，自发光纹理不会照亮周围，而动态光源可以照亮周围。

## 属性文件|emissive.properties

此文件应该放在资源包文件夹"assets/minecraft/optifine" 下。

这个属性文件内只有一个属性，表示自发光覆盖层的自定义后缀。

```properties
suffix.emissive=_e
```