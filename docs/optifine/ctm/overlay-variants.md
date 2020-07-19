# 卢恩符文——覆盖方法的变体

覆盖方法还有四个变体，分别为overlay_ctm, overlay_random, overlay_repeat, overlay_fixed。它们分别和ctm, random, repeat, fixed对应，除了材质由替换变成了覆盖以外没什么区别。

我这里以overlay_random为例，其他的也就一通百通了。

## 卢恩符文

我打算把卢恩字母随机地印在红砂岩上，卢恩字母透明字形并不难寻找，Minecraft原版就自带了。位于unicode_page_16.png中。

::: tip

有关字体的详细知识参考[这个小节](../../vanilla/font/font.md)。

:::

我将其提取出来，新建文件名为ruins.properties：

![image-20200710132812408](overlay-ctm.assets/image-20200710132812408.png)

**ruins.properties**

```properties
method=overlay_random
tiles=0-80
matchBlocks=minecraft:cut_red_sandstone
# 限定在红砂岩的侧面
faces=sides
```

![image-20200710133444707](overlay-ctm.assets/image-20200710133444707.png)

要让同一块红砂岩只显示一种卢恩字母，加入symmetry=all：

```properties
method=overlay_random
tiles=0-80
matchBlocks=minecraft:cut_red_sandstone
faces=sides
# 默认值为none，即每个面都单独进行随机
# 如果设为opposite，则相反的面有相同的材质
# 如果设为all，则所有面都有相同材质
symmetry=all
```

![image-20200710142453133](overlay-variants.assets/image-20200710142453133.png)

## 享元模式

享元模式，简而言之就是从不同的结构中找出共同的东西，尽可能重复利用。

overlay材质和享元模式是相当契合的。在上一小节，我们做了草的覆盖材质，原先我们是为砂砾制作的，但最终我们将其用于许许多多的方块——只要敲几个字母，就可以添加一种方块，十分便利。

如果conquest和cocricot模组都可以使用overlay_ctm方法的话，就可以省去相当多的材质，它们的木骨架材质是木骨架与墙面材质的组合——墙面本身是不含ctm的，如果换一种墙面就得多做一套ctm材质，既浪费精力，也浪费电脑的运算能力。那不如就做一套不含墙面的ctm材质，覆盖在墙面材质上。

**cocricot mod1.12.2 的木骨架**

![image-20200710161531247](overlay-variants.assets/image-20200710161531247.png)

## 自发光纹理

虽然有些跑题，但我觉得这里引入自发光纹理还是很舒服的。

我们可以在方块材质上添加永远以最大亮度渲染的渲染层，用于模拟材质的发光部分。

我打算让这些文字 “发光”。

首先，在optifine文件夹下新建一个名为emissive.properties的文件。

**emissive.properties**

```properties
# 这个文件只有这一个属性，用于设置自发光纹理的后缀。
suffix.emissive=_e
```

然后，将卢恩文字的材质单独复制一份，放到一个临时创建的文件夹中，然后重命名这些文件，加上_e后缀。

::: tip 提示

建议使用[ReNamer](https://www.den4b.com/products/renamer)进行批量重命名

![image-20200710152152941](overlay-variants.assets/image-20200710152152941.png)

:::

将重命名完成的文件放回原文件夹：

![image-20200710152506798](overlay-variants.assets/image-20200710152506798.png)

重载资源包，将时间调整至晚上，查看效果：

![image-20200710152751897](overlay-variants.assets/image-20200710152751897.png)

既然用上发光的材质了，那我们可以把原先的材质改一改，节省一点空间，能省一点是一点，万一做的是高清材质呢：

将原先的材质更换成边长为1的完全透明的材质：

![image-20200710154455263](overlay-variants.assets/image-20200710154455263.png)

重载资源包，依然不影响效果：

![image-20200710154540432](overlay-variants.assets/image-20200710154540432.png)

::: warning

这种发光没有任何照明效果。

:::

<br/><br/><Vssue/>