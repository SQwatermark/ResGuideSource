<center><h1>高清字体</h1><p>HD Fonts</p></center>

## 概述丨Overview

从1.6版本开始，Minecraft支持更高分辨率的字体，但自定义的能力仍然是有限的。

OptiFine会首先在 "assets/minecraft/optifine/font" 文件夹下寻找字体。
这让你可以同时拥有在原版使用的自定义字体以及需要optifine才能显示的更高分辨率的字体。

> 默认字体: assets/minecraft/optifine/font/ascii.png
>
> 附魔台字体: assets/minecraft/optifine/font/ascii_sga.png

注意：不支持unicode字体。

为了能够更好地控制单个字符的宽度，OptiFine提供了一种手动指定它们的方法。
创建以下属性文件：

> assets/minecraft/optifine/font/ascii.properties
>
> assets/minecraft/optifine/font/ascii_sga.properties

对应你想要自定义的字体.



## 属性文件丨bettergrass.properties

这个文件中的每一行都指定一个字符的宽度：

```properties
# 自定义宽度
width.<ascii值 0-255>=<宽度 0-8>
```



例如，为了指定大写字母 A, B, C 的宽度，你可以输入

```properties
# ABC
width.65=5.9
width.66=5
width.67=5.25
```



不管字体的分辨率是多少，值只能是介于0-8之间的浮点数（原版只支持整数宽度）。
你不需要规定所有字符的宽度，只需要规定你想要覆盖的字符的宽度。

空格字符的默认宽度为4.0。
你可以以同样的方式覆盖它，将 "width.32" 设置为自定义值。



## α混合丨Alpha Blending

如果设置为true，字体将会采用α混合

```properties
blend=<true|false>
```



## 粗体偏移丨Bold offset

粗体字符按照符合字符的笔画宽度的一个微小的x偏移被渲染两次。
标准8x字体 (texture 128x128) 的默认偏移值为 1.0，更高分辨率的字体的默认偏移值为0.5

```properties
offsetBold=<值>
```



## 参考文献丨References

[https://bitbucket.org/prupe/mcpatcher/wiki/HD_Fonts](https://bitbucket.org/prupe/mcpatcher/wiki/HD_Fonts)