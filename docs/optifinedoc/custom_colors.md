<center><h1>自定义颜色</h1><p>Custom Colors</p></center>

## 综述丨Overview

OptiFine的自定义颜色功能的配置模板，基于MCPatcher的自定义颜色模组的配置。

**完整文件列表**

以下是自定义颜色使用的所有文件的完整列表：

注: ~ 是optifine文件夹 (assets/minecraft/optifine) 的速记

| 文件路径                        | 分辨率       | 作用                              |
| ------------------------------- | ------------ | --------------------------------- |
| ~/color.properties              | /            | 定义了一些单值颜色                |
| ~/colormap/redstone.png         | 16x1         | 红石颜色 (0=未充能, 15=完全充能)  |
| ~/colormap/pumpkinstem.png      | 8x1          | 南瓜梗颜色 (0=芽, 7=完全成熟)     |
| ~/colormap/melonstem.png        | 8x1          | 西瓜梗颜色 (0=芽, 7=完全成熟)     |
| ~/colormap/lavadrop.png         | Nx1          | 熔岩滴颜色 (x=粒子按刻计算的年龄) |
| ~/colormap/myceliumparticle.png | 任何尺寸     | 随机菌丝体粒子颜色                |
| ~/colormap/xporb.png            | 任何尺寸     | 经验球颜色阵列                    |
| ~/colormap/durability.png       | 任何尺寸     | 物品耐久度颜色阵列                |
| ~/colormap/swampgrass.png       | 256x256      | 沼泽草调色板                      |
| ~/colormap/swampfoliage.png     | 256x256      | 沼泽树叶调色板                    |
| ~/colormap/pine.png             | 256x256      | 松树调色板                        |
| ~/colormap/birch.png            | 256x256      | 白桦调色板                        |
| ~/colormap/water.png            | 256x256      | 水调色板                          |
| ~/colormap/underwater.png       | 256x256      | 水中颜色                          |
| ~/colormap/underlava.png        | 256x256      | 熔岩中颜色                        |
| ~/colormap/fog0.png             | 256x256      | 主世界迷雾颜色                    |
| ~/colormap/sky0.png             | 256x256      | 主世界天空颜色                    |
| ~/lightmap/world0.png           | Nx32 或 Nx64 | 主世界光照调色板                  |
| ~/lightmap/world-1.png          | Nx32 或 Nx64 | 下界光照调色板                    |
| ~/lightmap/world1.png           | Nx32 或 Nx64 | 末地光照调色板                    |



## 详解丨Details

译者注：很杂乱很头大，即便我花了不少功夫试图让条理变得清楚些，这一章的内容依然很杂乱。

请各位整理一下思维，想清楚自己要实现什么功能，边看边找有用信息吧

[颜色设置|color.properties](./color.md)

[颜色映射|colormap.properties](./colormap.md)

[生物群系调色板|Biome Palettes](./biome_palettes.md)

[生物群系调色板：网格格式|Biome Palettes: Grid Format](./biome_palettes_grid_format.md)

[自定义光照贴图|Custom Lightmaps](./custom_lightmaps.md)