# 综合案例

我懒了，所以把我之前写在[https://www.mcbbs.net/thread-980391-1-1.html](https://www.mcbbs.net/thread-980391-1-1.html) 的回答搬过来了。

一个非常好的例子：[https://www.planetminecraft.com/texture_pack/transmobifier-v1-0-50-custom-mob-skins-custom-mobs-using-nametags/](https://www.planetminecraft.com/texture_pack/transmobifier-v1-0-50-custom-mob-skins-custom-mobs-using-nametags/)

[百度网盘链接](https://pan.baidu.com/s/1A5hnwbDDmY_VWtwi_hMcag)（仅供学习使用，如有条件请到原链接下载） 提取码：dsjb

这个资源包可以将命名为 koala 的猪显示为考拉的样子：

![image-20211004025237495](https://i.loli.net/2021/10/12/DtxhgpsWSNGKqiR.png)

不仅纹理改变了，还多了一对大耳朵。

照着资源包自己摸索摸索再看看我的讲解的话，大概就能懂了。简要说明下这个资源包包含的文件夹：

- random文件夹：随机实体纹理文件夹，提供了一些纹理，并且告诉 OptiFine 该在如何使用这些纹理。
- cem文件夹：自定义生物模型文件夹，修改了一些生物的模型，注意，你没办法根据生物的名字来确定生物的模型，但结合 random 文件夹里的内容可以做到类似的效果。
- cit文件夹：自定义物品纹理文件夹，修改了特定命名牌的纹理。

接下来讲解这个资源包是如何把命名为 koala 的猪变成考拉的样子的：

## 第一步 随机实体纹理

我们来看看 "random/entity/pig" 文件夹，圈起来的是考拉的纹理。

![img](https://i.loli.net/2021/10/12/FYyNfJI5pWDlzPr.png)  

打开 pig.properties，这个文件的名字告诉了 OptiFine，这里面的一切设置，都是用于 pig，也就是猪的。

```properties
skins.2=50
name.2=iregex:(brown pig|.* p1)
skins.3=51
name.3=iregex:(black pig|.* p2)
skins.4=52
name.4=iregex:(spotted pig|.* p3)


skins.5=53
name.5=iregex:(red panda|.* p4)

skins.6=54
name.6=iregex:(koala|.* p5)
```

最下面两行的意思是：猪的第 6 种纹理是 pig54.png，如果猪被命名为 koala 的话，猪就会使用这种纹理。  

虽然作者从2开始计数，可能是把原版纹理当成了第一种纹理。但你在制作的时候，大可以从 1 开始计数。

iregex:(koala|.* p5) 是一个正则表达式，你可以从[这里](https://www.mcbbs.net/thread-827651-1-1.html)学一下正则表达式的语法，尤其是要使用中文时，应该使用 Unicode 字符编码，例如：regex:(\u00a7.)*(\\\\+\\\\d+?(\u00a7.)*\\\\s*(\u00a7.)*)?\u829d\u9ebb\u9985\u6c64\u5706。

如果你对正则表达式感到实在是头大，写上 name.6=koala 也是可以的，同样，中文需要使用 Unicode 编码。

当你掌握了自定义生物的纹理，大部分自定义生物的功能已经可以实现了。

## 第二步 自定义物品纹理

如果你用铁砧将命名牌命名为 koala，命名牌的纹理会改变，出现一只考拉的脑袋，这是自定义物品纹理的功能。

可以看看 "cit/transmobifier/pig nametags" 文件夹，不过这一部分和自定义生物本身没多大关系，就不详述了。

## 第三步 自定义生物模型

当你在游戏中将一只猪命名为 koala 时，你会发现，考拉有一对大耳朵，而原版的猪是没有的，其实作者是修改了猪的模型。

让我们打开 cem 文件夹，里面和猪有关的是这几个文件：

![img](https://i.loli.net/2021/10/12/u9Rh5Dyb13wJlfp.png)  

其中 pig.jem 修改了猪的模型，具体来说，它为猪的模型添加了两个部件，其语法详见[此页面](../../optifinedoc/cem.md)。

```json
{
  "comment": "Model by sixfootblue",
  "textureSize": [64,64],
  "models": 
  [
	{
      "model": "red_panda_ears.jpm",
      "part": "head", 
      "attach": true,
      "translate": [-0.25, 8, -4],
      "rotate": [0, 180, 0]
    },
	{
      "model": "red_panda_tail.jpm",
      "part": "body", 
      "attach": true,
      "translate": [0, 6, 0],
      "rotate": [0, 0, 0],
	  "animations":
      [
        {
		  "this.rx": "-0.2 + (sin(time / 18) / 8)"
        }
      ]
    }
  ]
}
```

而 red_panda_ears.jpm 和 red_panda_tail.jpm 正是这两个部件的模型文件。

red_panda_ears.jpm 和 red_panda_tail.jpm 内容如下：

```json
{
  "comment": "Designed by Sixfootblue with Cubik Studio - https://cubik.studio",
  "createdWith": "Cubik Studio 2.8.438 Beta",
  "texture": "textures/entity/pig/red_panda_parts",
  "textureSize": [32,32],
  "submodels": [
    //子模型的定义，两文件的这个部分并不相同，略
  ]
}
```

两个部件的第四行都写着 "texture": "textures/entity/pig/red_panda_parts"，这定义了这两个部件的纹理，我们打开这个文件夹，竟然发现 red_panda_parts.png 是一张完全透明的空白图片！这并不是什么奇怪的事，仔细想想，没有改名字的猪，总不能也长出多余的耳朵和尾巴吧？所以这张图片默认是空的。

那么如何让猪在被命名为 koala 时长出考拉的耳朵呢？（尾巴是给浣熊用的） 

重新回到 "random/entity/pig/" 文件夹：

![img](https://i.loli.net/2021/10/12/v4bXZfAJszFClH1.png) 

我相信如果前面的部分可以看懂的话，这里也不难理解了。 

除此之外，这个资源包还有很丰富的内容，自己探索吧。