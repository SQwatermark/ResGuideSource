# 原版资源文件的位置

现在我们有了一个一穷二白的资源包，方便起见，我们要找到原版的资源文件，放到资源包里作为我们的资源包的默认资源。如果想要修改某个材质，直接在材质包里修改就行了，非常方便。

虽然这会导致资源包从一开始就很占内存，无论如何，知晓原版资源文件在什么地方是非常必要的，因为资源包无非是对原版资源文件的覆盖，不知道原版是什么样，也就不知道如何去覆盖。至于是要在原版资源包的基础上进行修改还是从零开始填充文件，纯看个人喜好。

::: warning

在发布资源包时请删除所有原版文件，一是因为版权问题，二是因为如果你的资源包叠加在别人的资源包上，这些文件可能造成别人的资源包被覆盖。

:::

打开.minecraft文件夹，再打开versions子文件夹，里面可以看到你安装的所有游戏版本：

![image-20200618145925797](https://i.loli.net/2020/07/28/oKWbEFjX7p6Rwka.png)

::: tip

如果你不知道.minecraft文件夹在哪，最简单的方式就是打开资源包所在的文件夹，它的上一级文件夹叫.minecraft，我们要找的就是这个文件夹。

:::

在这个示例中我要为1.15.2版本制作资源包，打开图中名为1.15.2的文件夹，里面有两个文件：1.15.2.jar和1.15.2.json。用任何[解压软件](../propaedeutics/#压缩软件)解压1.15.2.jar。

打开刚刚解压出的文件夹，里面有一个assets文件夹：

![image-20200708094924504](https://i.loli.net/2020/07/28/KHXgs3eda5y9nuL.png)

把assets文件夹剪切到刚才创建的资源包文件夹中，现在我们的资源包中已经有了原版的资源。可以把刚才解压出的多余的文件删除了。

![image-20200706104411292](https://i.loli.net/2020/07/28/xOG5gwLrACVDSME.png)

重新加载资源包，游戏画面不会有任何变化，我们虽然有一个材质包，却是直接复制的原版，在下一节中我们将着手修改一张材质，让这个材质包有那么点实际意义。

::: tip

可以使用快捷键`F3`+`T`重载资源包。

对于部分笔记本电脑的键盘，F3是音量增大键，需要同时按下`Fn`+`F3`+`T`才能正常使用。

:::

::: details 解决主菜单全景图丢失的问题

如果你和我一样用的是1.15.2版本，你会发现主菜单全景图不见了。

解决问题的方式是打开资源包的assets/minecraft/textures/gui/title/background文件夹，把里面的图片全部删除，再重新加载资源包。

![image-20200708095748906](https://i.loli.net/2020/07/28/5wuyUizDdaTc8H6.png)

1.15.2将主菜单全景图[存放在jar文件外部](../vanilla/more-assets.md)，为了防止外置文件丢失而产生异常，jar文件里放上了备用的灰幕。

我们复制了jar文件里的资源，相当于用灰幕覆盖了外置的全景图文件。

:::
