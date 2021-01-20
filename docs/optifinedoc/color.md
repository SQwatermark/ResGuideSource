<center><h1>颜色设置</h1><p>color.properties</p></center>

## 属性文件丨color.properties

你只需要为你想要修改的属性提供数值。方便起见，下面列出Minecraft中每个属性的默认值。

所有的属性名都区分大小写。

所有颜色都是十六进制rgb格式，从000000到ffffff。

除非另有说明，否则所有路径都相对于assets/minecraft。

**水的粒子效果(飞溅的水花, 气泡, 水滴)的底色**

生物群系水体颜色乘数应用于该值。该值应该与基础水材质的颜色匹配。

如果你的基础水材质是灰色的，那么你可以通过misc/watercolorX.png进行着色，并且把这个值设置为为ffffff。

```properties
particle.water=334cff
```



**传送门颗粒的底色**

RGB值都会乘一个0.4到1.0之间的随机乘数

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

实体名可以是简化的 (通常的实体名)，也可以是完整的 (带有命名空间的)。

完整实体名的分隔符 ":" 必须转义。

例如：

> egg.shell.creeper=0da70b
> egg.spots.minecraft\:creeper=000000

```properties
egg.shell.<实体名>=<颜色>
egg.spots.<实体名>=<颜色>
```



**地图颜色**

别名

> map.snow=map.white
> map.adobe=map.orange
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
map.podzol=815631
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
map.silver=999999
map.cyan=4c7f99
map.purple=7f3fb2
map.blue=334cb2
map.brown=664c33
map.green=667f33
map.red=993333
map.black=191919
```



旗帜使用通用地图颜色，无法单独设置旗帜的颜色。



**羊的颜色**

```properties
sheep.white=ffffff
sheep.orange=f2b233
sheep.magenta=e57fd8
sheep.lightBlue=99b2f2
sheep.yellow=e5e533
sheep.lime=7fcc19
sheep.pink=f2b2cc
sheep.gray=4c4c4c
sheep.silver=999999
sheep.cyan=4c99b2
sheep.purple=b266e5
sheep.blue=3366cc
sheep.brown=7f664c
sheep.green=667f33
sheep.red=cc4c4c
sheep.black=191919
```



**狼项圈颜色**

```properties
collar.white=ffffff
collar.orange=f2b233
collar.magenta=e57fd8
collar.lightBlue=99b2f2
collar.yellow=e5e533
collar.lime=7fcc19
collar.pink=f2b2cc
collar.gray=4c4c4c
collar.silver=999999
collar.cyan=4c99b2
collar.purple=b266e5
collar.blue=3366cc
collar.brown=7f664c
collar.green=667f33
collar.red=cc4c4c
collar.black=191919
```



**染料颜色**

注：这些值虽然存在，但实际上并没有在任何地方使用。

```properties
dye.black=1e1b1b
dye.red=b3312c
dye.green=3b511a
dye.brown=51301a
dye.blue=253192
dye.purple=7b2fbe
dye.cyan=287697
dye.silver=287697
dye.gray=434343
dye.pink=d88198
dye.lime=41cd34
dye.yellow=decf2a
dye.lightBlue=6689d3
dye.magenta=c354cd
dye.orange=eb8844
dye.white=f0f0f0
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

