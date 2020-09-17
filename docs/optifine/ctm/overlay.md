# 砂砾——覆盖材质

> 本节前置知识：
>
> ​	[tintindex](../../vanilla/model/tintindex.md)
>
> ​	[渲染类型](../../vanilla/model/rendertype.md)

覆盖方法乍一看并不容易有直观理解，我们首先以官方的范本为例，制作一个覆盖材质，看看效果是什么样的。

![img](https://i.loli.net/2020/07/28/migUf95u2pIx3qv.png)

## 为砂砾制作覆盖材质

我们要为之前制作的砂砾设置覆盖材质：

![image-20200710091059701](https://i.loli.net/2020/07/28/kIh93e8ur6TzVdY.png)

将官方的范本裁切开，放到ctm文件夹下，并新建gravel_overlay.properties

**gravel_overlay.properties**

```properties
method=overlay
matchBlocks=minecraft:gravel
tiles=0-16
```

![image-20200710093307312](https://i.loli.net/2020/07/28/gtUG58uoKVMaxJl.png)

很遗憾，什么都没发生！

## 属性文件的优先级

我们已经为砂砾设置了方法为repeat的properties文件，所以在这里产生了冲突。

在枯山水——优先级章节我们已经提到，可以通过修改属性文件的路径，路径排在前面的文件具有更高的优先级，在log文件中，我们也可以清晰看到属性文件的排序：

![image-20200710093935385](https://i.loli.net/2020/07/28/GoBz7xldLM49J3A.png)

那么问题来了，既然我已经将gravel_overlay.properties设置为第一个加载，为什么它还是被dirt_stone.properties（砂砾——重复图案小节砂砾的属性文件）覆盖了？

这是因为matchTiles具有绝对优先级，任何macthTiles的属性文件都会在matchBlocks的属性文件之前加载。我们在dirt_stone.properties里设置的是macthTiles，而这里我们设置的是matchBlocks。

于是我们修改一下属性文件：

**gravel_overlay.properties**

```properties
method=overlay
matchTiles=minecraft:gravel
tiles=0-16
```

效果：

![image-20200710094616204](https://i.loli.net/2020/07/28/xAOj75VClnkdc16.png)

至此我们可以看出覆盖材质出现在了砂砾和其他方块的交界处，适合用于方块间的过渡。

## 草方块的过渡

因为覆盖材质是出现在砂砾上，那覆盖材质本身应该是草皮的材质，否则无法实现砂砾和草方块之间的过渡。

为什么我说覆盖材质应该是草皮的材质而不是砂砾和草皮各占一部分？

这是因为overlay材质会在cutout_mipped层渲染，这一层是支持透明材质的，而且这一层会覆盖在solid也就是普通渲染层的上面，形象地说就是草皮蔓延了一部分覆盖在了砂砾上方。

::: tip 提示

还不知道渲染层是什么可以看看[这一节](../../vanilla/model/rendertype.md)哦

:::

了解了这一点，我们就可以根据模板，制作草皮覆盖层的材质了。

闭着眼瞎画的材质：

![image-20200710101824568](https://i.loli.net/2020/07/28/NJ6v8aZmIuMBYWf.png)

我们看到虽然体现出草皮和砂砾的过渡了，但是草皮的颜色没了。

![image-20200710101918143](https://i.loli.net/2020/07/28/an76tdCzbwHFs3T.png)

我们需要给属性文件加上tintIndex和tintBlock：

::: tip 提示

不了解tintIndex可以看看[这个小节](../../vanilla/model/tintindex.md)。

:::

**gravel_overlay.properties**

```properties
method=overlay
matchTiles=minecraft:gravel
tiles=0-16
# 默认值为-1，也就是不使用染色
tintIndex=0
# 使用草方块的染色方式
tintBlock=minecraft:grass
```

很好，我们已经实现草方块和砂砾的过渡了！

![image-20200710103126832](https://i.loli.net/2020/07/28/wu1KoefznONHBlj.png)

但现在砂砾不管遇到什么方块都会显示覆盖草方块的样子。

![image-20200710103331939](https://i.loli.net/2020/07/28/FzKxkuSeZcPWB2n.png)

所以要加上connectBlocks或者connectTiles加以限制，我们选用connectTiles：

**gravel_overlay.properties**

```properties
method=overlay
matchTiles=minecraft:gravel
tiles=0-16
connectTiles=minecraft:grass_block_top
tintIndex=0
tintBlock=minecraft:grass
```

我们看到现在只有连接草方块时，砂砾才显示草方块的覆盖材质：

![image-20200710103611967](https://i.loli.net/2020/07/28/36KzfZIQj1cWgNX.png)

既然如此，我们为什么不为其他方块也加上草方块的覆盖材质呢？

**gravel_overlay.properties**

```properties
method=overlay
# 想加多少加多少！
matchTiles=gravel sand red_sand stone
tiles=0-16
connectTiles=minecraft:grass_block_top
tintIndex=0
tintBlock=minecraft:grass
```

效果：

![image-20200710104052053](https://i.loli.net/2020/07/28/obT8kEvNZlUDIeF.png)

现在看来，这个属性文件不是属于gravel的，反而是属于grass的，有了这个属性文件，可以让草方块蔓延到任何固体方块上。
