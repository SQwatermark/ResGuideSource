# 海鼠壁——横向连接

在上一节中，我们为海鼠壁制作了竖向连接纹理，但是我们认为它的拐角处还是太简陋了点，于是希望在拐角处也进行包边，形成横向连接，横向连接自然和纵向连接一样，需要四张纹理，横向连接与纵向连接一组合，就需要4×4=16张纹理。

我用Aseprite画好了这十六张纹理，方便起见，是在一张画布上绘制的。

![image-20200708213822683](https://i.loli.net/2020/07/28/8bxyRcm4fZp1OBI.png)

然后用图片剪切工具拆成16份：

![image-20200708214510509](https://i.loli.net/2020/07/28/nGHoPuiIX9xkzdy.png)

由于之前设置的0-3号纹理的序号已经发生变化，我们需要改一下namako.properties：

```properties
method=vertical
tiles=9 5 1 13
matchTiles=minecraft:blue_terracotta
```

接下来我们要为9号纹理、5号纹理、1号纹理、13号纹理分别设置横向连接纹理。

横向连接模板：

![](https://i.loli.net/2020/07/28/z64W2OhQtUVAZ7R.png)

**pic5.properties**

```properties
method=horizontal
tiles=4 5 6 7
# ./表示相对路径，./5.png表示与pic5.properties同一级文件夹下的5.png
# 除了这种表示方式外，还可以使用绝对路径表示：
# matchTiles=optifine/ctm/namako/5.png
matchTiles=./5.png
```

对于图片1、9、13，如法炮制：

![image-20200708220431542](https://i.loli.net/2020/07/28/9YDER1lb8jGwBfi.png)

重载资源包看看效果：

![image-20200708221255742](https://i.loli.net/2020/07/28/1XaKUN4QH8mqLW7.png)

虽然拐角的包边显得十分尖锐尚需打磨，但我们的重点还是了解海鼠壁纹理的思路，能够举一反三。

::: tip 提示

之前竖向连接使用的纹理，如今可以作为被横向连接替换的纹理，这种嵌套体现了连接纹理的无穷可能

:::
