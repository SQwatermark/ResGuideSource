# default.json

翻译自 [reddit 上的一篇文章](https://www.reddit.com/r/Minecraft/comments/8yjroi/how_to_add_a_ttf_font_to_your_resource_pack/) 的节选，并作了一些补充：

> 让我们看看这两个文件。默认的  `default.json` 是这样的（我省略了一些东西，接下来会谈到）：
>
> ```json
> {
> "providers": [
> {
> "type": "bitmap",
> "file": "minecraft:font/nonlatin_european.png",
> "ascent": 7
> "chars": [
>     ...
> ]
> },
> {
> "type": "bitmap",
> "file": "minecraft:font/accented.png",
> "height": 12,
> "ascent": 10,
> "chars": [
>     ...
> ]
> },
> {
> "type": "bitmap",
> "file": "minecraft:font/ascii.png",
> "ascent": 7,
> "chars": [
>     ...
> ]
> },
> {
> "type": "legacy_unicode",
> "sizes": "minecraft:font/glyph_sizes.bin",
> "template": "minecraft:font/unicode_page_%s.png"
> }
> ]
> }
> ```
>
> 这个文件包含一系列字体提供器（providers）。当游戏想要渲染一个字符，它会在每个提供器中（从上到下地）寻找这个字符。有三种类型的提供器。
>
> 第一种类型：
>
> - `"type": "bitmap"` 这表示包含很多字符的位图
> - `file` 表示相对于 `assets/<命名空间>/textures/` 的路径而且应该指向一张 png 图片
> - `ascent` 是字符向上偏移的像素值
> - `height` 是字符的像素高度
> - `chars` 是位图包含的一系列字符（用 Unicode 编码表示），和图片进行对照不难理解其含义
>
> 第二种类型：
>
> - `"type": "legacy_unicode"` 仅用于 Unicode 字体
> - `sizes` 是相对于 `assets/<命名空间>/` 的资源路径，指向包含字形尺寸的二进制文件。默认为 `glyph_sizes.bin`
> - `template` 是相对于 `assets/<命名空间>/textures/` 的资源路径，其中 `%s` 将被替换为包含 Unicode 字形的图片的页码
>
> 第三种类型：
>
> - `"type": "ttf"` 表示 **TTF 字体文件**
> - `file` 是相对于 `assets/<命名空间>/font/` 的资源路径，且应该是一个 ttf 字体文件
> - `shift` 是有两个值的数组。分别为水平方向偏移和竖直方向偏移。默认值为 `[0, 0]`
> - `size` 是字符的像素尺寸。默认值为 `11.0`
> - `oversample` 是字体的分辨率。当你提升这个值，字体将会渲染得更清晰，分辨率会更高。默认为 `2.0`
> - `skip` 是提供器不应该提供的字符。例如，如果写 `"skip": "a"`，那么字符 "a" 就会以默认的 Minecraft 字体渲染，但是其他文字将会使用你提供的字体。

::: warning

- 上述资源路径都要加命名空间，原版的命名空间表示方法为在路径前加 `minecraft:`
- 文件名不能含有小写英文字母、阿拉伯数字、下划线、横杠、小数点以外的字符（满足正则表达式[a-z0-9/._-]），也就是说不能含有大写字母（这一点对于资源包的所有文件都适用）。
- 当游戏想要渲染一个字符，它会在每个提供器中（从上到下地）寻找这个字符，这意味着只要在一个提供器中找到某个字符，就不会使用后面的提供器的这个字符。资源包中的提供器会优先加载。

:::
