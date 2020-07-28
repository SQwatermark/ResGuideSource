# 自定义字体

本期将介绍Minecraft字体文件的构成，以及如何制作一个字体资源包。

## 字体资源简介

要了解如何修改 Minecraft 字体，有必要先了解一下相关的文件，打开原版资源包的 assets/minecraft/textures/font 文件夹，里面有 224 张 png 图片。分别为 `ascii.png`，`asscii_sga.png` 和 `unicode_page_xx.png`（xx从00到ff，但并不完全），在1.13以上的版本中，还要多两张图片，`accented.png` 和 `nonlatin_european.png`。

- `ascii.png` 用于存储 ASCII 编码字符
- `ascii_sga.png` 用于存储[标准银河字母](https://minecraft-zh.gamepedia.com/%E9%99%84%E9%AD%94%E5%8F%B0#.E6.A0.87.E5.87.86.E9.93.B6.E6.B2.B3.E5.AD.97.E6.AF.8D)（Standard Galactic Alphabet，SGA），也就是附魔台周围浮现出的文字（修改这些字体不会在附魔台以外的任何地方造成不良后果）
- `unicode_page_xx.png` 用于存储 Unicode 编码字符，其中也包括了 ASCII 编码的所有字符，但是字体并不相同，`ascii.png` 中的字体是 Minecraft 开发团队制作的，看起来更像素一些。而 `unicode_page_xx.png` 中的字体为 [GNU Unifont](https://zh.wikipedia.org/wiki/GNU_Unifont)，由 Roman Czyborra 制作，涵盖了[基本多文种平面](https://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%B9%B3%E9%9D%A2%E6%98%A0%E5%B0%84#%E5%9F%BA%E6%9C%AC%E5%A4%9A%E6%96%87%E7%A7%8D%E5%B9%B3%E9%9D%A2)中的所有字符。ASCII 字符默认优先于 Unicode 字符显示，但是当在语言设置界面选择 `强制使用Unicode字体` 时，只会使用 `unicode_page_xx.png` 中的字符。
- `accented.png` 用于存储注音文字
- `nonlatin_europea.png` 用于存储非拉丁语欧洲文字

此外，在assets\minecraft\font 文件夹下还有名为 `glyph_sizes.bin` 的十六进制文件，用于存储字符的宽度

> Minecraft 渲染 Unicode 文字的思路是把`0x00000000`到`0xFFFFFFFF`的每个文字都做成材质贴图，按照高 16 位进行分割，形成`assets/minectaft/textures/font/unicode_page_ff.png`这样的图片，每个文字都是方格的；
>
> 为了解决文字宽度不同的问题，设置了一个文件(`assets/minecraft/font/glyph_sizes.bin`)来保存对应图像的水平坐标区间，采用一个字节来保存（高 4 位保存 xMin ，低 4 位保存 xMax ，当然精度方面也就只有 4 位了，但是考虑到 mc 的马赛克性质，确实足够用了），这些字节直接按照 Unicode 值作为文件中位置。
>
> ::: right
>
> ——引用自 [https://www.v2ex.com/t/310750](https://www.v2ex.com/t/310750)
>
> :::



**基本多文种平面（Basic Multilingual Plane）**

[![基本多文种平面](https://i.loli.net/2020/07/28/HYEkIFiptUfZBGL.png "基本多文种平面")](https://baike.baidu.com/item/%E5%9F%BA%E6%9C%AC%E5%A4%9A%E6%96%87%E7%A7%8D%E5%B9%B3%E9%9D%A2 "基本多文种平面")

这张表格与 `unicode_page_xx.png` 形成对应关系，但是 Minecraft 并未使用其全部内容（不包含08、D8-F8）

## 制作字体资源包

我写字超丑的，所以这里只介绍如何将现成的字体加入资源包，而不会教怎么自己制作字体（教程百度就有）。

注意：

- 从 1.6 开始，Minecraft 支持高清字体，所以可以放心把分辨率调高（游戏时可能会卡）
- 字体可以是彩色的，但是会让样式代码生成的彩色文本变得奇怪

### 1.13 之前

使用**[MINECRAFT字体生成器](https://www.mcbbs.net/thread-229426-1-1.html)**，贴内有使用教程，用起来还蛮方便的，就是容易卡死

### 1.13 之后

1.13 版本对字体进行了改进：

> 1.13-pre6：Improved fonts（改进了字体）
>
> 1.13-pre7：Fixed outstanding issues with the new improved fonts（修复了新优化的字体造成的较突出的问题）

这两段话几乎没说啥，但实际上这次改动极大地方便了玩家自定义字体。

我这里使用 1.15.2 版本进行演示如何添加一个 tff 字体：

1. 打开原版的 assets\minecraft\font 文件夹，里面比1.12 版本多了两个文件：`default.json` 和 `alt.json` ，前者用于控制普通文字的字体，后者用于控制附魔台文字的字体。（点击[这里](default.json.md)查看对这两个文件格式的详解）
2. 将 tff 字体放到资源包的 assets\minecraft\font 路径下，我从网上下载了一款[丁永康硬笔楷书](http://www.fonts.net.cn/font-38210891255.html)用于演示，并命名为 `name_of_the_font.ttf`

::: warning

文件名不能含有小写英文字母、阿拉伯数字、下划线、横杠、小数点以外的字符（满足正则表达式[a-z0-9/._-]），也就是说不能含有大写字母（这一点对于资源包的所有文件都适用）。

:::

1. 在资源包的 assets\minecraft\font 路径下新建 `default.json`，填写以下内容：

   ```json
   {
       "providers": [
           {
               "type": "ttf",
               "file": "minecraft:name_of_the_font.ttf",
   			"shift": [0, 0],
    			"size": 11.0,
    			"oversample": 2.0
           }
       ]
   }
   ```

   此处的 `shift`，`size` 和 `oversample` 都使用了默认值

2. 进入游戏查看，发现字体位置偏上，且过于模糊：
   ![字体示例](https://i.loli.net/2020/07/28/TiJCuxF7Ueqs9Mr.png "字体示例")

3. 调整 `default.json` 中设定的值（shift和oversample）：

   ```json
   {
       "providers": [
           {
               "type": "ttf",
               "file": "minecraft:name_of_the_font.ttf",
   			"shift": [0, 1],
    			"size": 11.0,
    			"oversample": 4.0
           }
       ]
   }
   ```

4. 重新进入游戏观察，OK（但是这个字体本身过细，不适合 mc）
   ![字体示例2](https://i.loli.net/2020/07/28/Zeb9WJcmjSoFVCs.png)


### 如何对单个字进行调整

如果你觉得某个字写的不好看，想要自己修改，但苦于在浩如烟海的文字中寻找，可以使用这里介绍的方法快速锁定字符的位置：

1. 随便在网上搜一个 Unicode 编码转换工具，将想要修改的文字转换为 Unicode 编码，例如汉字 "囧" 的 Unicode 码是 `\u56e7`
2. 忽略 "\u"，根据 "56" 找到 `unicode_page_56.png`，根据 "e7" 找到第15行第8个字符（e和7分别为十六进制第15和第8个数字），就是汉字 "囧" 了

在 1.13 以上的版本，可以直接用 `default.json` 文件指定字符对应的图片，详见[这篇文章](https://www.mcbbs.net/thread-835539-1-1.html)

p.s. 可以用这种方法将一些文字替换成形象的图画

### OptiFine 的改进

参考：[OptiFine帮助文档：高清字体](https://www.mcbbs.net/forum.php?mod=redirect&goto=findpost&ptid=896135&pid=15831179)，这部分没什么需要解释的。

## 拓展阅读

- **[一些关于glyph_sizes.bin的信息](https://tieba.baidu.com/p/4046922665)**

- **[潜影盒内容预览 - 字体黑科技](https://www.mcbbs.net/thread-913031-1-1.html)**

- **[【1.13】地图制作技巧——字体艺术](https://www.mcbbs.net/thread-835539-1-1.html)**

<br/><br/><Vssue/>