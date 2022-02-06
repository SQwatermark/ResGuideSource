# GUI设计摘要

GUI最大的功能是信息显示和信息整理。

GUI设计大致可以分为4个部分：背景设计、框架设计、图标设计、物品渲染设计。

- **背景设计** 上要与GUI的功能、GUI额外显示的功能统一，但是又是本资源包风格体现特殊位置。玩家大概有1/4的时间在看GUI相关的内容，而GUI暴露出来的大面积空白内容供给了大量可发挥的空间。
- **框架设计** 框架设计指的是标签按钮框架、纵横交错的格子栏框架的设计。
- **图标设计** 分为GUI贴图处的图标，以及物品的本身的贴图，当然有些物品的贴图本身也被当作图标。
- **物品渲染设计** 即调整models/items/item.json、block.json等的物品渲染模型，这通常是GUI设计中忽略的部分。物品渲染设计与框架设计相统一，可以让背包有着意想不到的效果。(参考 生灵 调整了物品旋转)

GUI设计思路上大致有3个要求：功能相符、前后一致、浑然一体。

- **功能相符**：容器本身、界面功能和GUI提供的信息显示相符合。
- **前后一致**：指的是同一个资源包各种GUI的设计风格一致。往细致地来讲，例如框架设计上，各种GUI的同一类型的框架设计风格和设计思路相统一，比如3x9背包栏等。
- **浑然一体**：指的是GUI的4个部分的设计，并且包括容器本身的物品纹理与方块模型应该是一个有机统一的整体，各个部分的风格应该保持协调一致。

## 一些GUI参考

Colourful Containers Dark Mode GUI [https://www.mcbbs.net/thread-1299897-1-1.html](https://www.mcbbs.net/thread-1299897-1-1.html)

![](https://s2.loli.net/2022/01/31/iv2HZaxQymCWJzd.png)

纯净致简Pure Simplicity-TexturePack [https://www.mcbbs.net/thread-1035766-1-1.html](https://www.mcbbs.net/thread-1035766-1-1.html)

盘灵古域 （地图）[https://www.mcbbs.net/thread-434761-1-1.html](https://www.mcbbs.net/thread-434761-1-1.html)

![盘灵古域](https://s4.ax1x.com/2022/02/06/Hu2rND.png)

立体式的设计风格，包括很多其他的GUI。

（如有侵权立刻删除）

Bewitched [https://www.mcbbs.net/thread-928028-1-1.html](https://www.mcbbs.net/thread-928028-1-1.html)

（看一下视频里的GUI界面！）

Diefault  [https://www.bilibili.com/video/BV1tL411p7pg?share_source=copy_web](https://www.bilibili.com/video/BV1tL411p7pg?share_source=copy_web)

（不仅修改了UI，还修改了物品放置的渲染，以适合UI的布局）

原质化 Material [https://www.mcbbs.net/thread-802516-1-1.html](https://www.mcbbs.net/thread-802516-1-1.html)

![](https://attachment.mcbbs.net/data/myattachment/forum/201809/18/100916v4pbpbiskp0600pw.png.thumb.jpg)


