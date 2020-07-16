# 自定义加载界面

我们可以通过自定义加载画面修改Minecraft加载世界时显示的背景图片。

随便截一张图，放到optifine/gui/loadinng文件夹下，并命名为background0.png，这表示主世界的加载画面，如果是下界，命名为background-1.png，如果是末地，命名为background1.png，模组添加的维度也可以用这种background+id.png的方式命名。

![image-20200716160014059](loading.assets/image-20200716160014059.png)

重载资源包，通过传送门从下界传送回主世界：

![image-20200716160613361](loading.assets/image-20200716160613361.png)

吐槽一下，1.15.2除了最初一次加载，加载速度都快到来不及截图。

显然我们不想要这种效果，所以要通过属性文件进行调整。

在loading文件夹下新建文件，命名为loading.properties

**loading.properties**

```properties
# 缩放模式，默认的缩放模式为fixed，full表示全屏，但是会造成图片拉伸
scaleMode=full
```

![image-20200716161157592](loading.assets/image-20200716161157592.png)

修改一下缩放模式：

```properties
# stretch也表示全屏，但不会造成拉伸，通常情况下选这个就好了。
scaleMode=stretch
```

![image-20200716161701863](loading.assets/image-20200716161701863.png)

::: tip

本节的属性文件的详细内容见[OptiFine帮助文档](https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=896135&pid=15608659)

:::