# 动态纹理（前篇）

![自己动手做一台老式放映机，放一场默片老电影_胶片](https://i.loli.net/2021/10/12/bPOGwZ3fHhoYDmp.gif)

动态纹理就像老式电影的胶卷一样，实际上是逐帧绘制，竖向连接成长条的单张图案。在游戏中，自上而下逐帧播放，反复循环。一共有多少帧，每一帧播放多长时间，都是可以自定义的。

![image-20200709190728020](https://i.loli.net/2021/10/12/kPXepv9Nafn1QyR.png)

::: tip

因为最后一帧之后紧接着就是第一帧，所以开头和结尾最好要能接上。

:::

我们要用上图展示的蓝色呼吸灯替换原版的淡蓝色混凝土。

首先，将纹理命名为light_blue_concrete.png，替换掉原先的混凝土纹理。然后在旁边新建文件，命名为light_blue_concrete.png.mcmeta，并向文件中写入如下代码：

```json
{
    "animation": {
        
    }
}
```

::: details 展开查看效果（闪烁图案警告）

![img](https://i.loli.net/2021/10/12/d8uxQkrIWfzt7Kj.gif)

:::

闪烁过快，我们需要调慢闪烁速度。

将代码更改如下：

```json
{
    "animation": {
        "frametime": 3
    }
}
```

在这段代码中我们添加了frametime，frametime表示纹理的每一帧持续的时间（单位为0.05秒），默认值为1，也就是说一秒可以播放20帧，我们把它放慢三倍。

我们看到纹理的变化柔和了许多。

::: details 展开查看效果（辣眼GIF警告）

![img](https://i.loli.net/2021/10/12/i9YbgspXltFUPqh.gif)

:::

接下来我们注意到这张纹理是上下对称的，下面的四张纹理显得有些浪费，可以把这四张纹理给去掉。

![image-20200712092435178](https://i.loli.net/2021/10/12/sghJnuTzKIvi1xF.png)

然后我们要修改一下mcmeta文件：

**light_blue_concrete.png.mcmeta**

```json
{
    "animation": {
        "frametime": 3,
        "frames": [0,1,2,3,4,5,4,3,2,1]
    }
}
```

"frames"里填写帧播放的次序，最上面的一帧是第0帧，我让它先从0帧播放到5帧，再倒着从5帧返回0帧了。

::: tip

动态纹理的更多写法请看[wiki](https://minecraft-zh.gamepedia.com/资源包#.E6.9D.90.E8.B4.A8)

:::

### 巧用动态纹理制作四季效果

参考[3D Seasons](https://www.curseforge.com/minecraft/texture-packs/d-seasons)资源包。

// TODO

## 相关视频

::: bv 1YV411k7JN

:::
