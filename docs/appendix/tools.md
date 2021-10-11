# 工具

这一节我将推荐一些工具，介绍工具的使用方法。

- [PNGGauntlet（图片压缩）](#pnggauntlet)

## PNGGauntlet

**用途：** 无损压缩PNG格式的图片，可以一定程度上压缩资源包的体积。

**地址：** [https://pnggauntlet.com/](https://pnggauntlet.com/)

**使用方法：**

将资源包文件夹单独复制一份，并将整个文件夹拖入PNGGauntlet，软件将自动读取内部所有图片。

![](https://i.loli.net/2020/07/28/SKgPRG8wcYEMse1.png)

点击Tools-Options-PNGOUT，将Color Type设置为RGB+Alpha，因为其他颜色类型在MC中可能会出错：

![image-20200725085906371](https://i.loli.net/2020/07/28/oiFw4l9evu8bUqn.png)

取消勾选OptiPNG和DeflOpt，因为它们无法选择颜色类型：

![image-20200725085808632](https://i.loli.net/2020/07/28/KnO1gyuTItvqQfC.png)

勾选“Overwrite Original Files”，这会覆盖原文件，所以请务必备份，点击Optimize!

![](https://i.loli.net/2020/11/18/gUEiZDPvSLaAf8F.png)
