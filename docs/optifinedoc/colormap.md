<center><h1>颜色映射</h1><p>colormap.properties</p></center>

---

## 属性文件丨colormap.properties

---

除了像 pine.png 或 underwater.png 这样的 "固定的" 颜色映射。
每个自定义颜色映射必须有一个属性文件，

此文件没有任何版权限制。
请根据需求复制和修改。
将其放到 optifine/colormap/blocks 或者其任何子文件夹下。

所有的属性名都区分大小写。
所有颜色都是十六进制rgb格式，从000000到ffffff。
除非另有说明，否则所有路径都相对于assets/minecraft。

**调色板格式**
fixed:  单个固定的颜色，不需要图片，用于去除原版
      生物群系着色，而不需要创建一个256x256的
      全白色的颜色映射图。
vanilla: 原版温度+湿度256x256映射，
      受到不同生物群系共享相同的基础温度+湿度值的限制。
grid:  OptiFine样式网格 (x=biome ID, y=height) 256x256映射。
      每一列表示一个从虚空到最大建筑高度的生物群系。
      未使用的列应该使用合理的默认颜色梯度填充，
      以适应模组添加的生物群系。
默认格式为vanilla，但是可以通过在~/color.properties中
设置调色板格式来全局覆盖此属性。

```
format=<fixed | vanilla | grid>
```



**(可选) 列出要将颜色映射应用于的方块列表**
在1.7中，方块是通过名称而不是数字来表示的。
旧方块支持数字ID，但新方块将只支持名称。
例如，石头可以称为
 stone       (无前缀的名称)
 minecraft:stone (全名)

为所有石头和矿石方块着色:
 blocks=stone gold_ore iron_ore coal_ore lapis_ore diamond_ore redstone_ore redstone_ore:lit=true

方块+属性也支持下列语法:
 blocks=minecraft:lever:face=wall:facing=east,west

如果没有设置 (或者没有属性文件)，
它会默认按照文件名，例如,
 assets/minecraft/optifine/colormap/custom/stone.png -> minecraft:stone

```
blocks=<方块列表+可选属性>
```



**(仅用于format=fixed或vanilla) 颜色映射图**
路径可以相对于属性文件的位置。
图片应该是一张256x256的颜色映射。
如果没有提供源文件，则使用与属性文件名称相同的png作为默认值。

```
source=<image>
```



**(可选) 固定RGB颜色.**
对于format=fixed，这只是应用于所有匹配方块的固定颜色。
如果没有给出值，则默认值为白色(ffffff)。

对于format=vanilla或grid，这是用于手持或掉落方块
的默认颜色。如果没有给出值，则根据格式从固定
位置提取默认颜色:
 format=vanilla: x=127,y=127 (位图的正中心)
 format=grid:  x=1,y=64  (海平面的平原生物群系)

```
color=<十六进制rgb值>
```



**(仅用于format=grid) y 变异度**
在被颜色映射使用之前在y轴添加可控制数量的随机噪声。
例如，值为2.0时，会在 y - 2 到 y + 2 之间随机
选择一个值。
默认值为0 (无变异).

```
yVariance=<值>
```



**(仅用于format=grid) y 偏移值**
在从颜色映射采样之前，从方块的y坐标中减去一个固定值。
例如，值为64时，将对从0到64格高的方块使用颜色映射中 y=0 的像素的颜色。
高度为65的方块将使用 y=1 的像素，高度为65的方块将使用 y=2 的像素，
诸如此类。
默认值为0 (无偏移).

```
yOffset=<值>
```

