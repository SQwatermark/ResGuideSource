# 渲染类型

除了不透明方块之外，替换原版模型/纹理还容易遇到的一个问题就是渲染类型（Render Type）。

在旧版本中，渲染类型被称为渲染层（Render Layer），而渲染类型这个词表示另外的东西。

![image-20200707133756597](https://i.loli.net/2021/10/12/cN5B4wGMqUyRSvm.png)

我们看到竹叶原本是透明的，但是在这个例子里，透明的部分被渲染为白色了。这是方块的渲染类型导致的。

方块有五种渲染类型：

- SOLID - 绝大部分完整不透明方块是这个渲染类型，不支持alpha通道，即透明度，即便原纹理有透明部分，也会被渲染为白色。
- CUTOUT - 绝大部分非完整方块是这个渲染类型，它支持完全透明，但不支持半透明。
- CUTOUT_MIPPED - 带[多级纹理](https://zh.wikipedia.org/wiki/Mipmap)的CUTOUT。
- TRANSLUCENT - 支持半透明纹理，冰块就是这个渲染类型。
- TRANSLUCENT_NO_CRUMBLING - 高版本新增的半透明的变种。

下图来源于一个[Blog](https://greyminecraftcoder.blogspot.com/2020/04/block-rendering-1144.html)：

![img](https://i.loli.net/2021/10/12/9siTnYzXqSgeJVb.png)

::: tip

通常情况下渲染类型也是资源包所无能为力的，总而言之，尽量不要用原版方块的模型做一些奇奇怪怪的东西，很容易出现渲染问题。

:::

## 用OptiFine修改渲染类型

上面说了通常情况下资源包对渲染类型无能为力，但我们还是有个更改方块的渲染类型的方法的，那就是OptiFine的[自定义方块](../../optifinedoc/custom_blocks)。但是对固体不透明方块，此方法无效。这个方法比较明显的用途，也就是在仅支持纯透明的方块中实现半透明纹理。

举个例子，我想让末地烛变成半透明的，先调整纹理的不透明度，查看效果：

![image-20200715142808173](https://i.loli.net/2021/10/12/4eBF2LkGsZNlvKw.png)

由于其渲染类型为CUTOUT，理所当然没有显示出半透明纹理，现在我们在optifine文件夹下直接新建文件名为block.properties：

**block.properties**

```properties
layer.translucent=end_rod
```

现在它的确是半透明的了：

![image-20220606234405216](rendertype.assets/image-20220606234405216.png)

## 拓展阅读

[Minecraft中文wiki：不透明度](https://minecraft-zh.gamepedia.com/教程/不透明度)
