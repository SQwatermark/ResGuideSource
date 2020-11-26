# 自定义方块

Custom Blocks

## 配置文件|block.properties

位置："/assets/minecraft/optifine/block.properties"

**渲染层 (可选)**

定义指定方块的自定义渲染层  有以下几种渲染层：

- solid - no alpha, no blending (固体材质)
- cutout - alpha, no blending (cutout textures)
- cutout_mipped - alpha, no blending, mipmaps (cutout with mipmaps)
- translucent - alpha, blending, mipmaps (水, 彩色玻璃)

固体不透明方块 (石头, 泥土, 矿石, 诸如此类) 无法使用自定义渲染层， 因为这会影响面剔除(face culling)，环境光遮蔽(ambient occlusion)，光传播(light propagation)，等。

```properties
layer.solid=<blocks>
layer.cutout=<blocks>
layer.cutout_mipped=<blocks>
layer.translucent=<blocks>
```

示例：

```properties
layer.translucent=glass_pane fence wooden_door
```





