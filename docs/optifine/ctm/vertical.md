# 海鼠壁——竖向连接

> 注：案例中海鼠壁的设计思路来源于[Tachibana TEX 3D](https://tachibana11111.wixsite.com/tachibana-tex-3d)材质包。

本小节我们要把蓝色陶瓦替换成[海鼠壁](https://en.wikipedia.org/wiki/Namako_wall)。

海鼠壁是一种日式墙壁，用于防火和防潮。

![海鼠壁にも「漆喰ドカッと」 | 淡路島の近畿壁材工業株式会社](vertical.assets/images.jpg)

观察其纹理，深蓝色打底，白色交叉网纹，上下都有白漆包边。这种中间纹理重复，顶端和底端不同的材质十分适合用竖向连接方法（vertical）做。

竖向连接方法的模板如下，它需要四张材质，相当于竖向放置的CTM。

![](vertical.assets/vertical_template.png)

我的朋友绘制了四张材质，与上面的模板一一对应。

![image-20200708202727524](vertical.assets/image-20200708202727524.png)

新建文件名为namako.properties（namako是海鼠壁的罗马音），输入以下代码：

```properties
method=vertical
tiles=0-3
# 这次我们用matchTiles，matchTiles表示我们要把什么材质换成连接材质。
# minecraft:blue_terracotta表示minecraft/textures/block/blue_terracotta.png
# 在此我们还看不出matchTiles方法相对于matchBlocks有什么独特的优势，但不久我们就会看到。
matchTiles=minecraft:blue_terracotta
```

保存，重载资源包，进入游戏查看：

![image-20200708201423876](vertical.assets/image-20200708201423876.png)

我们用海鼠壁围出一圈墙壁看看效果：

![image-20200708205113091](vertical.assets/image-20200708205113091.png)

有点内味了，但我还希望在拐角处加一个包边图案。这但那是下一节的内容了，本节到此结束。

<br/><br/><Vssue/>