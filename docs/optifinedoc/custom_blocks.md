<center><h1>自定义方块渲染</h1><p>Custom Blocks</p></center>

## 配置文件丨block.properties

位置："/assets/minecraft/optifine/block.properties"

**渲染层 (可选)**

定义指定方块的自定义渲染层

有以下几种渲染层：

| 渲染层        | 说明                                                      |
| ------------- | --------------------------------------------------------- |
| solid         | 无alpha通道，无混合 （固体纹理）                          |
| cutout        | 有alpha通道，无混合（cutout纹理/裁切图案）                |
| cutout_mipped | 有alpha通道，无混合，有多级纹理（有多级纹理的cutout纹理） |
| translucent   | 有alpha通道，有混合，有多级纹理（水, 彩色玻璃）           |

```properties
layer.solid=<blocks>
layer.cutout=<blocks>
layer.cutout_mipped=<blocks>
layer.translucent=<blocks>
```

固体不透明方块（石头, 泥土, 矿石, 诸如此类）无法使用自定义渲染层，
因为这会影响面剔除（face culling），环境光遮蔽（ambient occlusion），光线传播（light propagation）等。

示例：

```properties
layer.translucent=glass_pane fence wooden_door
```