# 主菜单全景图

主菜单全景图就是主菜单的背景，其纹理位于 assets/minecraft/textures/gui/title/background 文件夹下，共六张。

把这六张图片拼接一下，不难看出这是一个盒子的展开图。想象将其折叠成一个盒子，将玩家视角置于盒子正中央，就好似玩家声临其境一样。这就是游戏中常用的 [CubeMapping](https://en.wikipedia.org/wiki/Cube_mapping) 技术。

![](https://i.loli.net/2020/07/28/TZB52HWRr8K6kiu.png)

## 如何制作主菜单全景图

### 常规方式：截图

最简单的方法就是在游戏里看向六个方向，分别截一张图：

1. 首先要在启动器中将游戏窗口大小改为 512 x 512。

2. 拍摄前要阻止各种可能的变化，防止不同截图衔接不上，最好将世界变成彻底静态的。

   - `/gamerule doDaylightCycle false` 停止昼夜交替
   - 关闭飘来飘去的云
   - 如果开的光影中有各种晃动元素，也要关掉

3. 将角视场调整为82

4. 按下 F1（有些笔记本需要 Fn + F1）隐藏一切 UI

5. 选择合适的位置，选择合适的时间，调整光影的各种设置以达到最符合氛围的效果

   - `/tp @p ~ ~ ~ -90 0`，按下 F2（有些笔记本需要 Fn + F2）截图得到 `panorama_0.png`
   - `/tp @p ~ ~ ~ 0 0`，截图得到 `panorama_1.png`
   - `/tp @p ~ ~ ~ 180 0`，截图得到 `panorama_2.png`
   - `/tp @p ~ ~ ~ 90 0`，截图得到 `panorama_3.png`
   - `/tp @p ~ ~ ~ -90 -90`，截图得到 `panorama_4.png`
   - `/tp @p ~ ~ ~ -90 90`，截图得到 `panorama_5.png`
6. 将截图放到资源包的 assets/minecraft/textures/gui/title/background 文件夹下，测试，如果感觉图片之间衔接不好，可以试着调整一下光影设置，很多光影会模糊加深屏幕边缘，要将这类设置关掉。

### extra：使用mod

1.9.x 到 1.12.x 版本可以使用 [Quark](https://www.mcbbs.net/thread-648145-1-1.html) 模组中的全景图生成器功能（`Ctrl+Shift+截屏键`），但实际上这个功能只相当于瞬间执行上述方法的第五步。

如果使用1.14.4-1.15.x版本，可以使用 **[Runorama——全景截图背景](https://www.mcbbs.net/thread-910751-1-1.html)** mod。

### extra2：画

Conquest_ 资源包的主菜单全景图是画出来的。

![conquest全景图](https://i.loli.net/2020/07/28/GysUjbtpQAx29Ni.png)

### 进阶：使用软件

全景图本质上是一个天空盒（skybox），它自然可以用3D渲染软件渲染出来，这部分需要一定专业知识，在此不多赘述。我也不会。

### 特殊：静态背景图片

还记得我们在一开始遇到的问题吗？我们用原版assets文件制作初始资源包时，主菜单的全景图变成了灰幕。

从Minecraft1.13版本起，全景图文件夹里就多了一张名为panorama_overlay.png的图片，让我们再次把这张图片放回assets/minecraft/textures/gui/title/background文件夹

![image-20200822162516716](https://i.loli.net/2020/08/22/7G1sKDv64FiTxpu.png)

顾名思义，这张图的含义似乎是：在全景图上覆盖的图片，我们将其稍加编辑，查看下效果：

![image-20200822162930523](https://i.loli.net/2020/08/22/UTBny5d4sQXPEej.png)

![image-20200822162918630](https://i.loli.net/2020/08/22/2ugvMi6jbRDacJE.png)

效果已经很明显了，panorama_overlay.png将覆盖在主菜单全景图上，如果这张图片支持任意分辨率，那我们就可以用一张静态的图片取而代之。

比如这样：

![image-20200822164541552](https://i.loli.net/2020/08/22/PD5pEzjACO76oGW.png)

## 使用 OptiFine 添加更多花样

详见 OptiFine 帮助文档的[自定义全景图](../../../optifinedoc/custom_panorama.md)章节

