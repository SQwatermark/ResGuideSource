<center><h1>自定义载入画面</h1><p>Custom Loading Screen</p></center>

## 属性文件丨loading.properties

文件 "/assets/minecraft/optifine/gui/loading/loading.properties" 控制世界载入画面

每个维度的自定义载入画面的背景图片路径为：

> /assets/minecraft/optifine/gui/loading/background\<dim>.png

"dim" 指维度ID：

| 维度   | ID   |
| ------ | ---- |
| 下界   | -1   |
| 主世界 | 0    |
| 末地   | 1    |

模组添加的维度也可以以这种方式被识别。

**缩放模式 (可选)**

背景纹理的自定义缩放模式

值

> fixed - 使用固定尺寸 (默认)
>
> full - 全屏, 保持长宽比
>
> stretch - 全屏

```properties
scaleMode=<fixed|full|stretch>
```



**尺寸 (可选)**

背景纹理的自定义尺寸。

对于缩放模式 "fixed"，它定义了要使用的缩放尺寸 (默认为2)。这与当前的GUI尺寸是联系的。

对于缩放模式 "full" 和 "stretch" 它定义了屏幕上有多少张完整的纹理 (默认为1)。

```properties
scale=2
```



**是否居中 (可选)**

定义背景纹理是否应居中显示在屏幕上。

默认为false。

```properties
center=<true|false>
```



属性 "scaleMode", "scale" 和 "center" 也可以在每个维度单独定义。

```properties
dim<dim>.scaleMode=<fixed|full|stretch>
dim<dim>.scale=2
dim<dim>.center=<true|false>
```

