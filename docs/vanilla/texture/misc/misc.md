# 杂项设计

杂项的设计可以巧妙地使用属性文件，以下摘抄自wiki

`assets/minecraft/textures/misc`里的纹理支持JSON格式储存的`.mcmeta`文件来向纹理应用附加效果。文件的位置与纹理的位置处于同一目录，与纹理的文件名也相同。例如，文件`pumpkinblur.png`对应的属性文件的文件名为`pumpkinblur.png.mcmeta`。


{

- "texture":｛

  -  "blur":指定从近距离观察时是否导致纹理模糊。默认为`false`。
  -  "clamp":指定是否在原来的情况下以伸展纹理代替平铺纹理。默认为`false`。
  -  "mipmaps":纹理的自定义mipmap值。

  ｝

}


如果资源包里纹理文件对应的`.mcmeta`文件缺失，那么游戏将会加载默认设置，而不是从下一个资源包中继续加载`.mcmeta`文件。

例子：让太阳变得圆：为sun.png加属性文件，属性文件加blur，然后用半透明勾边（from Ghast..）

例子：修改药水的附魔效果

![附魔纹路](https://s4.ax1x.com/2022/02/06/Hu2t39.png)