# GUI

（缺少realms的）

## 文件树结构索引

```
├<<<realms─textures─gui─realms
│  │  news_notification_mainscreen.png
│  │  on_icon.png
│  │  off_icon.png
├─items 部分涉及的图标的位置
│  │  
│  │  empty_armor_slot_shield.png 无盔甲时的贴图
├─environment 环境效果
│      clouds.png 云层（有猫腻，被用于地图定位）
│      end_sky.png 末地天空
│      moon_phases.png 月相
│      rain.png 下雨
│      snow.png 下雪
│      sun.png 太阳
├─gui 各种类型的HUD、GUI的位置
│  │  accessibility.png 主界面辅助功能按钮
│  │  bars.png 凋灵等的bossbar
│  │  book.png 书
│  │  checkbox.png 勾选框（多人游戏警告不要显示此节目）
│  │  demo_background.png 领域服试用期显示背景板
│  │  icons.png 各种状态HUD 血量、极限模式血量、坐骑血量、坐骑跳跃蓄力槽、护甲、饱和度、氧气、攻击指示器攻击冷却\切换冷却、准星、玩家列表信号
│  │  options_background.png 菜单的背景方块
│  │  recipe_book.png 配方书的界面
│  │  recipe_button.png 配方书按钮（熔炉、工作台都是这个）
│  │  resource_packs.png 资源包切换键（数据包切换键也是用这个）
│  │  server_selection.png 服务器切换键
│  │  social_interactions.png 社交界面，多人交互
│  │  spectator_widgets.png 观察者界面
│  │  stream_indicator.png 直播流指示
│  │  toasts.png 出现在游戏界面右上角的进度完成提示、配方解锁提示、操作引导
│  │  widgets.png 第一人称物品栏,语言，模式锁，领域消息
│  │  world_selection.png 选择世界的（世界是在更新的版本中保存的，红色感叹号）
│  │  
│  ├─advancements 进度页面的内容
│  │  │  tabs.png 切换tab
│  │  │  widgets.png 单个成就
│  │  │  window.png 进度窗口
│  │  │  
│  │  └─backgrounds 进度页面的背景图
│  │          adventure.png 冒险
│  │          end.png 下界
│  │          husbandry.png 农牧业
│  │          nether.png 末地
│  │          stone.png Minecraft
│  │          
│  ├─container 各种容器的gui界面
│  │  │  anvil.png 铁砧
│  │  │  beacon.png 信标
│  │  │  blast_furnace.png 高炉
│  │  │  brewing_stand.png 炼药炉
│  │  │  bundle.png 收纳袋
│  │  │  cartography_table.png 制图台
│  │  │  crafting_table.png 工作台
│  │  │  dispenser.png 发射器、投掷器
│  │  │  enchanting_table.png 附魔台
│  │  │  furnace.png 熔炉
│  │  │  gamemode_switcher.png 游戏模式切换F3+F4
│  │  │  generic_54.png 两个箱子合并的6x9大箱子，末影盒、木桶、小型箱子占用前3排
│  │  │  grindstone.png 砂轮
│  │  │  hopper.png 漏斗
│  │  │  horse.png 马、驴、羊驼、行商羊驼
│  │  │  inventory.png 生存模式物品栏、背包
│  │  │  loom.png 织布机
│  │  │  shulker_box.png 潜影盒
│  │  │  smithing.png 锻造台
│  │  │  smoker.png 烟熏炉
│  │  │  stats_icons.png 统计信息
│  │  │  stonecutter.png 切石机
│  │  │  villager2.png 村民交易界面、流浪商人交易界面
│  │  │  
│  │  └─creative_inventory 玩家创造模式背包/物品栏
│  │          tabs.png 物品标签tab，上面，下面
│  │          tab_inventory.png 创造模式物品栏装备背包
│  │          tab_items.png 创造模式选中物品标签界面
│  │          tab_item_search.png 创造模式选中搜索物品界面
│  │          
│  ├─presets 自定义世界的预置
│  │      isles.png
│  │      
│  └─title 标题
│      │  edition.png 版本号
│      │  minecraft.png 主标题Minecraft和领域
│      │  mojangstudios.png 加载界面mj
│      │  
│      └─background 主界面全景图
│              panorama_0.png
│              panorama_1.png
│              panorama_2.png
│              panorama_3.png
│              panorama_4.png
│              panorama_5.png
│              panorama_overlay.png
│              
├─map 与地图相关信息的位置
│      map_background.png 地图的背景
│      map_background_checkerboard.png （单手地图？）
│      map_icons.png 地图的各种标志
│      
└─misc 杂项
        enchanted_item_glint.png 附魔
        enchanted_item_glint.png.mcmeta
        forcefield.png 世界边界
        nausea.png 反胃
        powder_snow_outline.png 冻伤
        pumpkinblur.png 南瓜头带上去的样子
        pumpkinblur.png.mcmeta
        shadow.png 实体阴影
        shadow.png.mcmeta
        spyglass_scope.png 望远镜的边框
        underwater.png 水下视野
        unknown_pack.png 未知资源包的图片
        unknown_server.png 未知服务器的图片
        vignette.png 晕影（当玩家身处亮度较低环境下出现，效果和南瓜头带上去一样，光线越暗，透明度越高，算法为反色后与屏幕颜色相乘）
        vignette.png.mcmeta
        white.png
```

![img](https://s4.ax1x.com/2022/02/06/Hu2xET.jpg)

## 游戏界面反索引

#### 主游戏界面

![主界面](https://s4.ax1x.com/2022/02/06/Hu2H3j.png)

注意：按钮的的取用是取左右舍中间的！因此，会有出现按钮图案不衔接的情况（如图退出游戏按钮）

地图选择（gui\world_selection.png）

![地图选择](https://s4.ax1x.com/2022/02/06/Hu23AU.png)

资源包数据包选择都是同一个贴图。（gui\resource_packs.png）

##### 主界面全景图：

gui\title\background\panorama_0.png到5，6张图以及overlay（从0-5从上到下类似于动态纹理的长图，用于模糊背景图）。原版是0-5：西北东南上下，其实只要形成一个内正方体盒子就可以了。制作方法：[主菜单全景图 ](http://sqwatermark.com/resguide/vanilla/texture/gui/panorama.html#如何制作主菜单全景图) [论坛](https://www.mcbbs.net/forum.php?mod=viewthread&tid=1079039&page=1&cp=37#pid18959176)

![](https://i.loli.net/2020/07/28/TZB52HWRr8K6kiu.png)

##### 闪烁标语：

在`.minecraft/versions/version/version.jar/assets/minecraft/texts/splashes.txt`中，可以通过放置在资源包对应位置`assets/minecraft/texts/splashes.txt`来进行修改

##### Minecraft Realm部分：

```
├<<<realms─textures─gui─realms
│  │  news_notification_mainscreen.png
│  │  on_icon.png
│  │  off_icon.png
```

这部分内容包括那个新闻图和闪烁星星。在领域界面还有用到widgets那个信封和闪缩数字

![领域](https://s4.ax1x.com/2022/02/06/Hu2wB6.png)

#### HUD

![HUD](https://s4.ax1x.com/2022/02/06/Hu2Uj1.png)

紫色栅格是用于数格子的，有一部分重复的东西是没用的。

副手的左右手设置：选项->自定义皮肤->主手：右手/左手

攻击指示器设置：视频设置->攻击指示器：十字准星/快捷栏/关

#### 玩家物品栏

![玩家物品栏](https://s4.ax1x.com/2022/02/06/Hu2IUS.png)

##### 生存模式

配方书的贴图是gui\recipe_button.png 自己那个没什么用。装备栏的空槽在item文件夹下

##### 创造模式

生存模式和创造模式的玩家背景不是同一个。背包没有背包合成格

##### 创造模式面板

tab 12个可以各具特色而互不影响。搜索页面和其他页面不是同一个贴图

##### 玩家背包格（物品栏+背包3x9）

背包格普遍存在于所有容器，而所有容器都可以设置成不相同的样式而互不干扰。

每个容器界面基本上都是由上下部分组成，下面是玩家背包格，上面是容器部分。

因此可以下面部分统一设计，而上面部分根据容器种类特殊化设计。

##### 滚动轴出现位置

创造模式物品栏，切石机，织布机

#### 配方书界面

![配方书相关](https://s4.ax1x.com/2022/02/06/Hu2c3d.png)

红色表示不可合成，蓝色表示鼠标悬浮。有更多信息的物品会显示成贴图重合（多种合成路径）或者贴图闪烁（同类合成表），右键有更多信息的物品会显示一个更多信息的悬浮框。

左侧标签的标签贴图是根据物品贴图自动生成的。注意，不同类型的熔炉的标签不一样，用到的物品不一样。

##### 知识之书出现位置

**文件中位置：**

gui\recipe_button.png

gui\toasts.png

gui\container\inventory.png

gui\container\crafting_table.png

后面两个貌似没什么用

**游戏内位置：**

合成表相关位置：背包 工作台 熔炉 高炉 烟熏炉 ——都是用 gui\recipe_button.png

知识之书 item\knowledge_book.png





#### 容器相关 

详见WIKI[容器](https://wiki.biligame.com/mc/物品栏#.E5.A4.96.E9.83.A8.E7.89.A9.E5.93.81.E6.A0.8F) [Inventory](https://minecraft.fandom.com/wiki/Inventory)

##### 潜影盒

![潜影盒](https://s4.ax1x.com/2022/02/06/Hu2s4e.png)

潜影盒和箱子使用的界面是一样的，但是是不同的文件。

##### 末影盒、木桶、小型箱子、大型箱子

![箱子](https://s4.ax1x.com/2022/02/06/Hu2hHf.png)

这些都使用generic_54，包括陷阱箱。末影盒、木桶、小型箱子占用前3排，采用切割并且拼合而成。

注意红色长线部分，在切割时并没有加入到箱子部分，在切割时，保留第三行下面那条线。

##### 动物：马、驴、羊驼、行商羊驼

![动物](https://s4.ax1x.com/2022/02/06/Hu28NF.png)

马：驯服的马有以下两种可用的物品栏：马铠栏：用以装备马铠，专用于马。鞍栏：用以装备鞍。

驴：驯服的驴有以下槽位可用：鞍槽：用于装备鞍。15格空的物品栏，手持箱子对驴按使用键后出现。

羊驼：已驯服的羊驼拥有用于装备1个地毯的槽位，不同颜色的地毯产生的装饰样式不同。手持箱子对着已驯服的羊驼按使用能装备上箱子，并根据强度（实体数据`Strength`）给出3、6、9、12或15格的物品栏空间）

需要同步绘制马铠、鞍、羊毛物品以及马铠、地毯装饰等皮肤，箱子纹理在动物皮肤内。

##### 交易：村民、流浪商人

![交易](https://s4.ax1x.com/2022/02/06/Hu2NcR.png)

##### 熔炉相关：高炉 熔炉 烟熏炉

![熔炉相关png](https://s4.ax1x.com/2022/02/06/Hu2ggA.png)

三种熔炉分别由三个文件管辖，配方按钮另由配方按钮文件管。

燃料条和进度条是程序切片贴图覆盖。

可以根据三种炉子的燃烧特性和外观设计相应的火焰和进度：

高炉：专门用于烧炼矿物或者熔炼金属工具和盔甲，烧炼速度和燃料的燃烧速度是普通熔炉的2倍。

烟熏炉：只能烧制食物，烧制速度和燃料的燃烧速度是普通熔炉的2倍。（from wiki）

在设计时还可以协调考虑熔炉的材质：熔炉的石质，烟熏炉是原木加熔炉，高炉是铁锭加平滑石头加熔炉。

这些特点可以加入到GUI、模型、物品贴图的设计中。

##### 工作台

![工作台](https://s4.ax1x.com/2022/02/06/Hu2Y9J.png)

工作台的配方书按钮不在本贴图，另由配方按钮文件管。

工作台的侧面是一把剪刀一把锯子一把锤子。

设计工作台的GUI的样式的时候还要考虑一下背包合成的样式。

##### 附魔相关：附魔台、铁砧、砂轮

其他相关还有书架、青金石等

其中使用的“书籍”在实体纹理里，重复使用在GUI、附魔台、讲台上。

![附魔台](https://s4.ax1x.com/2022/02/06/Hu2Gh4.png)

![铁砧](https://s4.ax1x.com/2022/02/06/Hu2Wut.png)

铁砧的GUI里多了一把前所未见的“工具”。

![砂轮](https://s4.ax1x.com/2022/02/06/Hu22jI.png)

砂轮的方块状态有4个朝向和3个连接方向。

注意砂轮的合成方式——用到了石台阶，可以设计砂轮的中间部分和石台阶有关系

##### 锻造台

![锻造台](https://s4.ax1x.com/2022/02/06/Hu2l7T.png)

同样的，锻造台也多出了一把前所未有的工具。贴图侧面还有钳子和垂直的贴图。

注意锻造台合成方式是包含铁锭，是铁质的。

##### 炼药相关：酿造台

![酿造](https://s4.ax1x.com/2022/02/06/Hu2DAO.png)

酿造台是烈焰棒加圆石底座合成而成，底座是石质的。在酿造台上有3个位置是药水模型

[KDesp's Better Default](https://www.mcbbs.net/thread-1136598-1-1.html) 的炼药锅感觉不错。

其他相关还有炼药锅以及其他药品等。

##### 红石物品交互：发射器、投掷器、漏斗

![发射器](https://s4.ax1x.com/2022/02/06/Hu2QBV.png)

发射器投掷器注意朝向上下的时候不太一样

![漏斗](https://s4.ax1x.com/2022/02/06/Hu20HK.png)

##### 织布机

![织布机](https://s4.ax1x.com/2022/02/06/Hu2o4g.png)

##### 切石机

![切石机](https://s4.ax1x.com/2022/02/06/Hu269H.png)

切石机底下是由3个石头和上面一个铁锭合成的。

##### 制图台

![制图台](https://s4.ax1x.com/2022/02/06/Hu27CQ.png)

地图上的图案在map\map_icons.png

##### 信标

![信标](https://s4.ax1x.com/2022/02/06/Hu25E8.png)

信标是由下界之星玻璃和黑耀岩合成的。

上面的一些图标其实很冗余，可以进行轻量化地设计

#### 统计信息

![统计信息](https://s4.ax1x.com/2022/02/06/Hu2fDP.png)

#### 右上角相关

![进度](https://s4.ax1x.com/2022/02/06/Hu2fDP.png)

配方书提示：左上角容器+物品+文字描述

进度提示：物品+文字描述

[教学提示](https://wiki.biligame.com/mc/教学提示)：贴图都在toasts里，第一次进游戏且生存模式才会播报

蓝色提示条：资源包重载失败；复述功能提示：辅助功能设置->复述功能

#### 进度相关

tabs是围着window绕一圈，角落分别是左和右，中间的几个都是中间的贴图（即图上标明的2）。原版只用到了5个章节的进度（只用到了图上标的1和2），但是可以用数据包增加进度章节数，因此tab不止只有上面部分。

### 杂项设计

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

## GUI设计摘要：

GUI最大的功能是信息显示和信息整理。

GUI设计大致可以分为4个部分：背景设计、框架设计、图标设计、物品渲染设计。

- **背景设计** 上要与GUI的功能、GUI额外显示的功能统一，但是又是本资源包风格体现特殊位置。玩家大概有1/4的时间在看GUI相关的内容，而GUI暴露出来的大面积空白内容供给了大量可发挥的空间。
- **框架设计** 框架设计指的是标签按钮框架、纵横交错的格子栏框架的设计。
- **图标设计** 分为GUI贴图处的图标，以及物品的本身的贴图，当然有些物品的贴图本身也被当作图标。
- **物品渲染设计** 即调整models/items/item.json、block.json等的物品渲染模型，这通常是GUI设计中忽略的部分。物品渲染设计与框架设计相统一，可以让背包有着意想不到的效果。(参考 生灵 调整了物品旋转)

GUI设计思路上大致有3个要求：功能相符、前后一致、浑然一体。

- **功能相符**：容器本身、界面功能和GUI提供的信息显示相符合。
- **前后一致**：指的是同一个资源包各种GUI的设计风格一致。往细致地来讲，例如框架设计上，各种GUI的同一类型的框架设计风格和设计思路相统一，比如3x9背包栏等。
- **浑然一体**：指的是GUI的4个部分的设计，并且包括容器本身的物品纹理与方块模型应该是一个有机统一的整体，各个部分的风格应该保持协调一致。

### 一些GUI参考



Colourful Containers Dark Mode GUI https://www.mcbbs.net/thread-1299897-1-1.html

![](https://s2.loli.net/2022/01/31/iv2HZaxQymCWJzd.png)

纯净致简Pure Simplicity-TexturePack https://www.mcbbs.net/thread-1035766-1-1.html

盘灵古域 （地图）https://www.mcbbs.net/thread-434761-1-1.html

![盘灵古域](https://s4.ax1x.com/2022/02/06/Hu2rND.png)

立体式的设计风格，包括很多其他的GUI。

（如有侵权立刻删除）

Bewitched https://www.mcbbs.net/thread-928028-1-1.html

（看一下视频里的GUI界面！）

Diefault  https://www.bilibili.com/video/BV1tL411p7pg?share_source=copy_web

（不仅修改了UI，还修改了物品放置的渲染，以适合UI的布局）

原质化 Material https://www.mcbbs.net/thread-802516-1-1.html

![](https://attachment.mcbbs.net/data/myattachment/forum/201809/18/100916v4pbpbiskp0600pw.png.thumb.jpg)





## 相关教程：

原版模组自定义容器GUI与容器GUI设计

Optifine动态GUI

