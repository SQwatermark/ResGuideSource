<center><h1>颜色设置</h1><p>color.properties</p></center>

## 属性文件丨color.properties

你只需要设置需要修改的属性。方便起见，下面列出 Minecraft 中每个属性的默认值。

所有的属性名都区分大小写。

所有颜色都是从 000000 到 ffffff 的十六进制 rgb 格式。

除非另有说明，否则所有路径都相对于assets/minecraft。

**水的粒子效果（飞溅的水花, 气泡, 水滴）的底色**

生物群系水体颜色乘数应用于该值。该值应该与基础水纹理的颜色匹配。

如果你的基础水纹理是灰色的，那么你可以通过 misc/watercolorX.png 进行着色，并且把这个值设置为 ffffff。

```properties
particle.water=334cff
```



**传送门颗粒的底色**

RGB 值都会乘一个 0.4 到 1.0 之间的随机乘数

```properties
particle.portal=ff4ce5
```



**下界和末地颜色**

```properties
fog.nether=330707
fog.end=181318
sky.end=282828
```



**荷叶颜色**

单一颜色，应用于所有的生物群系。

```properties
lilypad=208030
```



**药水效果的颜色**

最终表现出来的颜色是这些颜色以药水效果的等级作为权重，加权平均后的结果。

```properties
potion.absorption=2552a5
potion.blindness=1f1f23
potion.confusion=551d4a
potion.damageBoost=932423
potion.digSlowDown=4a4217
potion.digSpeed=d9c043
potion.fireResistance=e49a3a
potion.harm=430a09
potion.heal=f82423
potion.healthBoost=f87d23
potion.hunger=587653
potion.invisibility=7f8392
potion.glowing=94a061
potion.jump=786297
potion.levitation=ceffff
potion.luck=339900
potion.moveSlowdown=5a6c81
potion.moveSpeed=7cafc6
potion.nightVision=1f1fa1
potion.poison=4e9331
potion.regeneration=cd5cab
potion.resistance=99453a
potion.saturation=f82423
potion.unluck=c0a44d
potion.waterBreathing=2e5299
potion.weakness=484d48
potion.wither=352a27
```



potion.water 代表一个普通的水瓶

```properties
potion.water=385dc6
```



**刷怪蛋颜色**

> egg.<shell|spots>.<实体名>=<颜色>

实体名可以是简化的（通常的实体名），也可以是完整的（带有命名空间的）。

完整实体名的分隔符 ":" 必须转义。

例如：

> egg.shell.creeper=0da70b
>
> egg.spots.minecraft\:creeper=000000

```properties
egg.shell.<实体名>=<颜色>
egg.spots.<实体名>=<颜色>
```



**地图颜色**

别名

> map.snow=map.white
>
> map.adobe=map.orange
>
> map.lightBlue=map.light_blue

方块在地图中的颜色

```properties
map.air=000000
map.grass=7fb238
map.sand=f7e9a3
map.cloth=c7c7c7
map.tnt=ff0000
map.ice=a0a0ff
map.iron=a7a7a7
map.foliage=007c00
map.clay=a4a8b8
map.dirt=976d4d
map.stone=707070
map.water=4040ff
map.wood=8f7748
map.quartz=fffcf5
map.gold=faee4d
map.diamond=5cdbd5
map.lapis=4a80ff
map.emerald=00d93a
map.obsidian=815631
map.netherrack=700200
```



通用地图颜色

```properties
map.white=ffffff
map.orange=d87f33
map.magenta=b24cd8
map.light_blue=6699d8
map.yellow=e5e533
map.lime=7fcc19
map.pink=f27fa5
map.gray=4c4c4c
map.light_gray=999999
map.cyan=4c7f99
map.purple=7f3fb2
map.blue=334cb2
map.brown=664c33
map.green=667f33
map.red=993333
map.black=191919
```



**陶瓦**

```properties
map.white_terracotta=d1b1a1
map.orange_terracotta=9f5224
map.magenta_terracotta=95576c
map.light_blue_terracotta=706c8a
map.yellow_terracotta=ba8524
map.lime_terracotta=677535
map.pink_terracotta=a04d4e
map.gray_terracotta=392923
map.light_gray_terracotta=876b62
map.cyan_terracotta=575c5c
map.purple_terracotta=7a4958
map.blue_terracotta=4c3e5c
map.brown_terracotta=4c3223
map.green_terracotta=4c522a
map.red_terracotta=8e3c2e
map.black_terracotta=251610
# Nether
map.crimson_nylium=bd3031
map.crimson_stem=943f61
map.crimson_hyphae=5c191d
map.warped_nylium=167e86
map.warped_stem=3a8e8c
map.warped_hyphae=562c3e
map.warped_wart_block=14b485
```



**羊的颜色**

别名

> sheep.silver=sheep.light_gray
>
> sheep.lightBlue=sheep.light_blue

```properties
sheep.white=ffffff
sheep.orange=f2b233
sheep.magenta=e57fd8
sheep.light_blue=99b2f2
sheep.yellow=e5e533
sheep.lime=7fcc19
sheep.pink=f2b2cc
sheep.gray=4c4c4c
sheep.light_gray=999999
sheep.cyan=4c99b2
sheep.purple=b266e5
sheep.blue=3366cc
sheep.brown=7f664c
sheep.green=667f33
sheep.red=cc4c4c
sheep.black=191919
```



**狼和猫项圈颜色**

别名

> collar.silver=collar.light_gray
>
> collar.lightBlue=collar.light_blue

```properties
collar.white=ffffff
collar.orange=f2b233
collar.magenta=e57fd8
collar.light_blue=99b2f2
collar.yellow=e5e533
collar.lime=7fcc19
collar.pink=f2b2cc
collar.gray=4c4c4c
collar.light_gray=999999
collar.cyan=4c99b2
collar.purple=b266e5
collar.blue=3366cc
collar.brown=7f664c
collar.green=667f33
collar.red=cc4c4c
collar.black=191919
```



**通用染料颜色**

旗帜、信标光束、热带鱼、狼和猫项圈的基础颜色

别名

>dye.silver=dye.light_gray
>
>dye.lightBlue=dye.light_blue

```properties
dye.white=f9fffe
dye.orange=f9801d
dye.magenta=c74ebd
dye.light_blue=3ab3da
dye.yellow=fed83d
dye.lime=80c71f
dye.pink=f38baa
dye.gray=474f52
dye.light_gray=9d9d97
dye.cyan=169c9c
dye.purple=8932b8
dye.blue=3c44aa
dye.brown=835432
dye.green=5e7c16
dye.red=b02e26
dye.black=1d1d21
```



**文字颜色**

经验等级文字的颜色

```properties
text.xpbar=80ff20
```

"Boss生命值" 文字的颜色

```properties
text.boss=ff00ff
```

告示牌文字的颜色

```properties
text.sign=000000
```

由 \247 + 0123456789abcdef 生成的颜色代码

```properties
text.code.0=000000
text.code.1=0000aa
text.code.2=00aa00
text.code.3=00aaaa
text.code.4=aa0000
text.code.5=aa00aa
text.code.6=ffaa00
text.code.7=aaaaaa
text.code.8=555555
text.code.9=5555ff
text.code.10=55ff55
text.code.11=55ffff
text.code.12=ff5555
text.code.13=ff55ff
text.code.14=ffff55
text.code.15=ffffff
text.code.16=000000
text.code.17=00002a
text.code.18=002a00
text.code.19=002a2a
text.code.20=2a0000
text.code.21=2a002a
text.code.22=2a2a00
text.code.23=2a2a2a
text.code.24=151515
text.code.25=15153f
text.code.26=153f15
text.code.27=153f3f
text.code.28=3f1515
text.code.29=3f153f
text.code.30=3f3f15
text.code.31=3f3f3f
```



**资源载入画面**

背景颜色

```properties
screen.loading=ffffff
```

加载条背景颜色

```properties
screen.loading.bar=ffffff
```

加载条边框颜色

```properties
screen.loading.outline=000000
```

加载条前景颜色

```properties
screen.loading.progress=e22837
```

Logo 混合模式

src, dst, srcA 和 dstA 是以下之一：

> ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR,
>  SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, SRC_ALPHA_SATURATE

```properties
screen.loading.blend=<off|src dst srcA dstA>
```



**其他设置项**

这个设置会覆盖视频设置中的云的类型。

```properties
clouds=fast(快速)|fancy(高品质)|none(无)
```



经验球动画持续时间（毫秒）默认为 628 毫秒

```properties
xporb.time=628
```

