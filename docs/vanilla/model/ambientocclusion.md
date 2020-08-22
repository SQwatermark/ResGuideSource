# 环境光遮蔽

以下内容为[这篇Blog](https://greyminecraftcoder.blogspot.com/2020/04/lighting-1144.html)的译文节选，[完整译文](https://www.mcbbs.net/thread-1062742-1-1.html)发布在mcbbs。

> 环境光遮蔽（Ambient Occlusion）是一种基于附近的方块计算表面的光照的方法。[这儿](https://www.mcbbs.net/plugin.php?id=link_redirect&target=http%3A%2F%2F0fps.wordpress.com%2F2013%2F07%2F03%2Fambient-occlusion-for-minecraft-like-worlds%2F)有Minecraft如何实现这个方法的简介。简而言之，对于每个顶点，计算出三个毗邻的方块和接触这个面的方块的平均光照强度。在下方的例子中，对于这个用红色圈起来的顶点，是以白色显示的这三个方块和这个面正上方的方块（未显示）的平均亮度。如果这四个方块都是透明的，”环境光遮蔽“光照强度将会是1.0。每个不透明方块都会降低顶点接收到的光照 - 如果四个方块都是不透明的那么这个强度将会是0.2。”环境光遮蔽“值会与顶点的颜色乘数相乘。顶点的混合亮度被计算为四个相邻方块的平均值。（还有一些其他有关对角方块是否被计算在内的细节，但是你已经知道了基本的思路）在绘制面时，OpenGL提供了平滑，所以环境光遮蔽在不同顶点上的产生的阴影在整个平面上被平滑了。
>
> ![img](https://i.loli.net/2020/07/29/E5w6cS4VGk8uiUv.png)



Minecraft的方块模型有一个`"ambientocclusion"`选项，默认为`true`。

反常识的一点是，如果设置了`"parent"`，则其父模型的`ambientocclusion`标签会覆盖该模型的`ambientocclusion`标签。代码实现如下。

**net.minecraft.client.renderer.model.BlockModel（1.15.2）**

```java
public boolean isAmbientOcclusion() {
    return this.parent != null ? this.parent.isAmbientOcclusion() : this.ambientOcclusion;
}
```

::: tip 提示

通常情况下，一个非完整方块，我们要考虑一下是否将环境光遮蔽设置为false，例如原版的例子template_torch.json，直立的火把。上一节涉及的shade在这里也得到了体现。

Blockbench中设置环境光遮蔽的方法：文件——项目——环境光遮蔽。

:::

**template_torch.json**

```json
{
    "ambientocclusion": false,
    "textures": {
        "particle": "#torch"
    },
    "elements": [
        {   
            "from": [ 7, 0, 7 ],
            "to": [ 9, 10, 9 ],
            "shade": false,
            "faces": {
                "down": { "uv": [ 7, 13, 9, 15 ], "texture": "#torch" },
                "up":   { "uv": [ 7,  6, 9,  8 ], "texture": "#torch" }
            }
        },
        {   
            "from": [ 7, 0, 0 ],
            "to": [ 9, 16, 16 ],
            "shade": false,
            "faces": {
                "west": { "uv": [ 0, 0, 16, 16 ], "texture": "#torch" },
                "east": { "uv": [ 0, 0, 16, 16 ], "texture": "#torch" }
            }
        },
        {   
            "from": [ 0, 0, 7 ],
            "to": [ 16, 16, 9 ],
            "shade": false,
            "faces": {
                "north": { "uv": [ 0, 0, 16, 16 ], "texture": "#torch" },
                "south": { "uv": [ 0, 0, 16, 16 ], "texture": "#torch" }
            }
        }
    ]
}
```

<br/><br/><Vssue/>