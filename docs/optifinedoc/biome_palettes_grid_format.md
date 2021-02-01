<center><h1>生物群系调色板：网格格式</h1><p>Biome Palettes: Grid Format</p></center>

## 概述丨Overview

OptiFine 的自定义生物群系调色板（网格格式）的说明，基于 McPatcher 的自定义生物群系调色板。

原版颜色映射格式有一些缺陷。首先，像沙漠这样的生物群系在颜色图中只有一个像素，这意味着它们的颜色不能随高度变化。此外，多个生物群系共享它们的温湿度值，因此不可能给它们不同的颜色方案。即使基础值不同，生物群落有时也会在高海拔重叠。

OptiFine 提供了另一种选择，最初由 Misa 提出。和原版颜色映射一样，它也是一种256x256的彩色图片，但是x坐标表示生物群系ID，y坐标表示高度。(生物群系的ID列表请参阅 Minecraft Wiki)。

这允许生物群系之间的完全分离，并让你完全控制从基岩到最大建筑高度的所有颜色。

颜色映射中的每一列表示一个生物群落。请注意此图片是垂直 "翻转" 的：世界的底部 (y=0) 在图片的顶部，最大建筑高度 (y=255) 在底部。海平面为 y=64。一般来说，你会让每一列都有一些渐变。

模板：

![img](https://attachment.mcbbs.net/forum/201911/14/111538jlwq8nk8kkyhkekh.png)



## 属性文件丨colormap.properties

**(可选) 格式标识**

此属性简单地将网格格式的颜色映射与原版颜色映射区分开来。

如果没有指定，网格颜色映射将被解释为原版的温度+湿度格式，这会导致怪异的结果。

```properties
# 网格格式
format=grid
```

如果你在 "assets/minecraft/optifine/color.properties" 文件中对其进行过全局设置，格式属性可以被省略：

```properties
# 网格格式
palette.format=grd
```

这会使所有自定义颜色映射都使用网格格式，所以请确保这是你想要的。



**(可选) 列出要设置可选属性的方块**

```properties
# 方块
# 例如:
#   blocks=stone minecraft:sand minecraft:lever:face=wall:facing=east,west
blocks=<列表>
```

参阅生物群系调色板 (biome_palettes.txt).



**(可选) 颜色映射图**

```properties
# 图片
source=<图片>
```

参阅生物群系调色板。



**(可选) 默认颜色**

```properties
# 颜色
color=<RGB值>
```

参阅生物群系调色板。



**(可选) y 变异度**

如果设置了该属性，则在被颜色映射使用之前，会将随机噪声添加到y坐标，从而使平面区域具有更多样的外观。
例如，值为2时，游戏会在 y - 2 到 y + 2 之间随机选择一个值。

```properties
# Y 变异度
yVariance=<值>
```

默认值为0 (无变化).

这个属性也可以在 "assets/minecraft/optifine/color.properties" 中全局设置：

```properties
# Y 变异度
palette.yVariance=<值>
```



**(可选) y 偏移**

```properties
# Y 偏移
yOffset=<值>
```

在从颜色映射采样之前，从方块的y坐标中减去一个固定值。

例如，值为64时，将对从0到64格高的方块使用颜色映射中 y=0 的像素的颜色。高度为65的方块将使用 y=1 的像素，高度为65的方块将使用 y=2 的像素，诸如此类。

默认值为0 (无偏移).

## 提示丨Tips

- 向前兼容性：颜色映射中未使用的列表示未分配的生物群系ID，这些ID可以被未来的Minecraft版本或模组使用。当然，如果你知道它们使用的ID，你可以为特定的模组生物群系创建配色方案。但即使你不这么做，最好也至少为未使用的列设置一个中性的渐变，这样新的生物群系就会有一个合理的默认外观。

- 向后兼容性：无论属性文件如何设置，在 "assets/minecraft/textures/colormap" 中的原版 "grass.png" 和 "foliage.png" 颜色映射永远都是原版格式。这为非OptiFine用户保留了兼容性。要使用草或叶子的网格格式，你必须在 "assets/minecraft/optifine/colormap/blocks" 中创建一个自定义颜色映射，并将其应用于适当的方块。对于OptiFine用户，自定义颜色映射会覆盖原版颜色映射；对于非OptiFine用户，只有原版颜色映射会被使用。

- 分辨率：虽然这种格式的颜色映射通常是256x256，但没有原版格式那样的硬性要求：

  - Minecraft 1.7 引入了许多生物群系的稀有变种。例如 "Birch Forest M" (ID 155) 是 "Birch Forest" (ID 27) 的稀有变种。

    方便的是，罕见变种的ID永远是常见的生物群系的ID + 128。

    如果你想让所有的稀有生物群系使用与相应的非稀有生物群系相同的配色方案，就可以利用这一事实。

    只需将颜色映射图的宽度从256像素调整为128像素，OptiFine在为生物群系分配颜色映射的列时，就会在x方向 "包装" 它。

    与之类似，一张1像素宽的颜色映射图可以为所有生物群系提供相同的基于高度的颜色梯度。

  - 在y方向上，如果你提供了超过256个像素，且服务器的最大建造高度高于默认值，OptiFine将很乐意使用它们。

    类似地，如果颜色映射图低于256像素，它将在此高度 "达到极限"，此高度之上的方块具有相同的颜色。

    特别地，64像素的高度会使地下具有颜色变化，海平面以上具有固定颜色。

    192像素的高度和 yOffset=64 的设置正好相反：地面上具有颜色变化，地面以下具有固定的颜色。

    1像素的高度允许生物群系之间的颜色变化，但不允许颜色随高度变化。
  



## 参考文献丨References

- [https://bitbucket.org/prupe/mcpatcher/wiki/Biome_Palettes_(Grid)](https://bitbucket.org/prupe/mcpatcher/wiki/Biome_Palettes_(Grid))
- [http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/resource-pack-discussion/1255785-b?comment=124](http://www.minecraftforum.net/forums/mapping-and-modding/resource-packs/resource-pack-discussion/1255785-b?comment=124)