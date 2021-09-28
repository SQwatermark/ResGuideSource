<center><h1>生物群系调色板：网格格式</h1><p>Biome Palettes: Grid Format</p></center>

## 概述丨Overview

原版 colormap 有一些缺陷。首先，像沙漠这样的生物群系在 colormap 中只有一个像素，意味着它们的颜色不能随高度变化。此外，多个生物群系拥有相同的温度和湿度，因此它们无法拥有不同颜色。即使基础值不同，生物群落有时也会在高海拔重叠。

OptiFine 提供了另一种选择，最初由 Misa 提出。和原版 colormap 一样，它也是一种 256x256 的彩色图片，但是 x 坐标表示生物群系ID，y 坐标表示高度。（请在 Minecraft Wiki 上查阅生物群系的ID列表）

这使得生物群系完全分离开，你可以自由控制从基岩到高度上限的所有颜色。

colormap 的每一列表示一个生物群系。请注意此图片是垂直 "翻转" 的：世界的底部（y=0）在图片的顶部，高度上限（y=255）在底部。海平面为 y=64。正常情况下，你会给每一列添加一些渐变。

模板：

![biome_grid_template.png](https://github.com/sp614x/optifine/blob/master/OptiFineDoc/doc/images/biome_grid_template.png?raw=true)



## 属性文件丨colormap.properties

**（可选）格式**

此属性将网格格式的 colormap 与原版 colormap 区分开来。

如果没有明确标识，网格格式的 colormap 将被解释为原版的温度+湿度格式，效果会非常奇怪。

```properties
# 网格格式
format=grid
```

如果你在 "assets/minecraft/optifine/color.properties" 文件中进行过以下全局设置，则 format 属性可省略：

```properties
# 网格格式
palette.format=grid
```

这会使所有自定义 colormap 都使用网格格式，这么做之前请确保这是你需要的效果。



**（可选）方块列表，可附带属性**

```properties
# 方块
# 例如：
#   blocks=stone minecraft:sand minecraft:lever:face=wall:facing=east,west
blocks=<列表>
```

参阅[生物群系调色板](./biome_palettes.md)。



**（可选）colormap 图片**

```properties
# 图片
source=<图片>
```

参阅[生物群系调色板](./biome_palettes.md)。



**（可选）默认颜色**

```properties
# 颜色
color=<RGB值>
```

参阅[生物群系调色板](./biome_palettes.md)。



**（可选）y 差异**

如果设置了该属性，则在从 colormap 采样之前，将 y 坐标加上一个随机噪声，从而使平面区域更具差异性。
例如，值为 2 时，游戏会在 y - 2 到 y + 2 之间随机选择一个值。

```properties
# Y 差异
yVariance=<值>
```

默认值为 0（无差异）。

可以在 "assets/minecraft/optifine/color.properties" 中全局设置此属性：

```properties
# Y 差异
palette.yVariance=<值>
```



**（可选）y 偏移**

```properties
# Y 偏移
yOffset=<值>
```

在从 colormap 采样之前，将方块的 y 坐标减去一个固定值。

例如，值为 64 时，0 到 64 格高的方块将使用 colormap 中 y=0 的颜色。高度为 65 的方块将使用 y=1 的颜色，高度为 66 的方块将使用 y=2 的颜色，以此类推。

默认值为0（无偏移）。

## 提示丨Tips

- 向前兼容性：colormap 中未使用的列表示未分配的生物群系 ID，这些 ID 可以被未来的 Minecraft 版本或模组使用。当然，如果你知道它们的 ID，你可以为特定的模组生物群系创建配色方案。但即使你不这么做，最好也至少为未使用的列设置一个中性的渐变，这样新的生物群系就会有一个合理的默认外观。

- 向后兼容性：无论属性文件如何设置，在 "assets/minecraft/textures/colormap" 中的原版 "grass.png" 和 "foliage.png" colormap永远都是原版格式。这为非 OptiFine 用户保留了兼容性。要使用草或叶子的网格格式，你必须在 "assets/minecraft/optifine/colormap/blocks" 中创建一个自定义 colormap，并将其应用于适当的方块。对于 OptiFine 用户，自定义 colormap 会覆盖原版 colormap；对于非 OptiFine 用户，只会使用原版 colormap。

- 分辨率：虽然网格格式的 colormap 尺寸通常是 256x256，但没有原版格式那样的硬性要求：

  - Minecraft 1.7 引入了许多生物群系的稀有变种。例如 "Birch Forest M" (ID 155) 是 "Birch Forest" (ID 27) 的稀有变种。

    方便的是，稀有变种的 ID 永远是常见的生物群系的 ID + 128。

    如果你想让所有的稀有生物群系使用与相应的非稀有生物群系相同的配色方案，就可以利用这一事实。

    只需将 colormap 的宽度从 256 像素调整为 128 像素，OptiFine 在为生物群系分配 colormap 的列时，就会在 x 方向 "包装" 它。

    与之类似，一张1像素宽的 colormap 可以为所有生物群系提供相同的基于高度的颜色梯度。

  - 在 y 方向上，如果你提供了超过 256 个像素，且服务器的最大建造高度高于默认值，OptiFine 将很乐意使用它们。

    类似地，如果 colormap 的 y 轴小于 256 像素，它将在此高度 "达到极限"，此高度之上的方块具有相同的颜色。

    特别地，64 像素的高度会使地下具有颜色变化，海平面以上具有固定颜色。

    如果高度为 192 ，且设置 yOffset=64，会得到相反的效果：地面上具有颜色变化，地面以下具有固定的颜色。

    高度为 1 像素会导致颜色不随高度改变。
  



## 参考文献丨References

- [https://bitbucket.org/prupe/mcpatcher/wiki/Biome_Palettes_(Grid)](https://bitbucket.org/prupe/mcpatcher/wiki/Biome_Palettes_(Grid))
- [http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/resource-pack-discussion/1255785-b?comment=124](http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/resource-pack-discussion/1255785-b?comment=124)