<center><h1>自发光纹理</h1><p>Emissive Textures</p></center>

## 概述丨Overview

可以在方块材质上添加永远以最大亮度被渲染的覆盖层，这可以模拟材质的发光部分。
自发光覆盖层具有与基础材质相同的名称和一个自定义的后缀。
例如:
 bedrock.png  - 基础材质
 bedrock_e.png - 自发光覆盖层
除SOLID层之外，自发光覆盖层和基础材质在同一层被渲染，
而SOLID层的覆盖层被渲染为CUTOUT_MIPPED。
覆盖层也可以用于物品、怪物和方块实体。

译者注：虽然自发光纹理很亮堂，但是对光照等级没有任何影响，也不会照亮周围的方块，如果你想让某个怪物或者物品能够照亮周围，你可能需要看看"动态光源"章节



## 属性文件丨emissive.properties

---

此文件应该放在资源包文件夹"assets/minecraft/optifine" 下。
这个属性文件内只有一个属性，表示自发光覆盖层的自定义后缀。

```
suffix.emissive=_e
```

