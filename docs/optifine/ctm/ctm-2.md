# 枯山水——CTM

许多艺术创作者用CTM展示的图案不是简单的面与边框，而是更富有创造性的东西。

下图是我的朋友绘制的枯山水，这个图案由两种完全不同的方块构成，下图中被圈起来的是一种使用了CTM格式的方块，而没被圈起来的是另一种方块：

![image-20200707223919074](https://i.loli.net/2020/07/28/QpTUNVOxJ53qyiw.png)

## 复杂CTM的思路梳理

我们要用两种方块制作枯山水，ctm格式的用红沙制作，非ctm格式的用沙子制作。

前面制作的铁块ctm这时起到了作用，我们用铁块摆出形状，从而推测出该如何绘制材质：

![image-20200708105930161](https://i.loli.net/2020/07/28/W1i8AdIszwJuv45.png)

我们可以看出，ctm方块单独摆放时，显示0号材质，摆放成3×3的样式时，显示13,14,15,25,26,27,37,38,39号材质。

所以0号材质应该是这样的：![image-20200708110251476](https://i.loli.net/2020/07/28/jt13iwmbC6AWacB.png)

而13,14,15,25,26,27,37,38,39号材质分别是这样的：

![image-20200708110411929](https://i.loli.net/2020/07/28/JFLR3VEiDUYe912.png)

按照这种思路，设想可能的摆放方式，逐步画出所有材质：

![image-20200708110626171](https://i.loli.net/2020/07/28/so89nDwRmCHYIvM.png)

将材质放入ctm文件夹内，再新建一个properties文件，我将其命名为karesansui1.properties（karesansui是枯山水的罗马音）

![image-20200708111117126](https://i.loli.net/2020/07/28/dhwbl5DUM6iZuPt.png)

输入如下代码，保存

```properties
method=ctm
matchBlocks=minecraft:red_sand
tiles=0-47
```

让我们进入游戏看看效果吧！

![image-20200708111309850](https://i.loli.net/2020/07/28/uFX1qhlDCPZdAvR.png)

结果和设想的不同，非常失败！

别急着投降，仔细观察，似乎所有材质的位置都是正确的，但是被旋转了若干个90°

## 插曲——随机旋转的沙子

我起初认为这是红沙拥有[自然纹理](https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=896135&pid=15603178)，但是文档中并没有给沙子设置默认的自然纹理，游戏设置里甚至没有开启自然纹理的选项。

也就是说，红沙的随机旋转不是OptiFine造成的，而是原版的性质。

这给了我一个方向，我打开了assets/minecraft/blockstates/red_sand.json，果不其然，沙子被设置了随机模型：

```json
{
    "variants": {
        "": [
            { "model": "block/red_sand" },
            { "model": "block/red_sand", "y": 90 },
            { "model": "block/red_sand", "y": 180 },
            { "model": "block/red_sand", "y": 270 }
        ]
    }
}
```

稍加修改，只保留其中的一种模型：

```json
{
    "variants": {
        "": [
            { "model": "block/red_sand" }
        ]
    }
}
```

保存，重载资源包，十分完美：

![image-20200708114537676](https://i.loli.net/2020/07/28/pwB95zl8uHikfPV.png)

<br/><br/><Vssue/>