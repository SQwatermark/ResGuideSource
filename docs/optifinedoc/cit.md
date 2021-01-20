<center><h1>自定义物品材质</h1><p>Custom Item Textures</p></center>

## 全局属性丨cit.properties

基于 MCPatcher 的 Custom Item Textures mod 的配置

这个文件包含自定义物品材质的全局属性，它应该被放在材质包的 optifine/cit 文件夹下。
关于单个物品材质，参阅 cit_single.properties。

所有的属性名都区分大小写。
除非另作说明，所有的路径都相对于 assets/minecraft。

**(可选) 如何对同一物品应用多个效果**

根据所选择的方法，可以使用从 0（不可见）到 1（完全可见）的不同强度呈现多个效果。

> average: 根据附魔等级加权平均。
>
> &emsp;&emsp;&emsp;&emsp;强度 = 附魔等级 / 总的附魔等级
>
> layered: 类似于average，但使用的是最大值而不是总和。
>
> &emsp;&emsp;&emsp;&emsp;强度 = 附魔等级 / 所有附魔中最高的等级
>
> cycle:&emsp; 轮流显示每种效果，每种效果的持续时间都可以通过duration属性(在cit_single.properties中)
>
> &emsp;&emsp;&emsp;&emsp;设置。如果存在[group]值，则可以独立循环多个效果。

注意 average 和 cap=1 的 layered 是等效的，两者都只显示物品上 "占主导地位" 的附魔。

```properties
method=<average | layered | cycle>
```



**(可选) average/layered方法可以渲染多少层**

根据每种效果位于的层数（layer value），上面的层比下面的层具有更高的优先级。

```properties
cap=<count>
```



**(可选) 在cycle方法中一种效果转变为另一种效果的速度**

对于有持续时间属性的效果，这并不影响实际效果的持续时间。

默认值为5秒。

```properties
fade=<seconds>
```



**(可选) 是否使用默认的glink.png附魔效果**

如果设置为 true，则在没有自定义附魔效果时使用 glink.png。如果设置为 false，默认的 glink.png 附魔效果将完全停止渲染。

这对没有特定附魔但有附魔效果的物品很重要——比如药水和金苹果。

默认值为true。

```properties
useGlint=<true | false>
```



## 单个物品材质丨cit_single.properties

基于 MCPatcher 的 Custom Item Textures mod 的配置

对于每一个想要使用自定义材质的物品，使用这个模板在材质包的 optifine/cit 文件夹下创建一个 .properties 文件。属性（properties）文件可以放在 optifine/cit 的任意一层子文件夹下。

每个属性文件都指定一个匹配的物品ID或物品名列表，一个替换材质，和一系列可选的用于指定伤害、堆叠数或NBT标签的规则。

所有的属性名都区分大小写。除非另作说明，所有的路径都相对于assets/minecraft。



### 通用属性丨General properties

---

**(可选) 材质替换类型**

- item:     简单的物品材质替换。适用于GUI中的物品，手持的物品，和世界中的物品。
            如果多个属性文件匹配相同的物品，只会使用第一个匹配的属性文件。
            (先按照权重排序，在权重相同的情况下按照物品名排序)

- enchantment: 附魔的覆盖材质（替换 misc/glint.png）。
                如果多个属性文件匹配相同的物品，
                它们将按照全局属性 cit.properties 文件中指定的规则来进行混合。

- armor:    盔甲材质替换，应用于玩家和怪物穿戴的盔甲模型。
            如果多个属性文件匹配相同的物品，只有第一个属性文件会被使用。
            (先按照权重排序，在权重相同的情况下按照物品名排序)

- elytra:    鞘翅材质替换，应用于玩家和怪物穿戴的鞘翅模型。
            如果多个属性文件匹配相同的物品，只有第一个属性文件会被使用。
            (先按照权重排序，在权重相同的情况下按照物品名排序)

默认类型为item。每种类型都有附加属性，它们将会在接下来的小节中提及。

```properties
type=<item | enchantment | armor | elytra>
```



使用替换材质的物品列表（对于 type=enchantment 类型可选，对于其他类型是必需的）

```properties
items=<物品ID列表>
```



**(可选) 替换材质**

可以是完整路径也可以只是文件名：

> mytextures/excalibur.png   -> mytextures/excalibur.png
>
> excalibur                  -> optifine/cit/excalibur.png

根据种类，包括动画在内的材质格式被通过不同方式处理。详见下面的 "特定种类属性" 章节。

如果不提供任何材质，OptiFine将按照属性文件名在属性文件所在的同一层文件夹中寻找材质，

> optifine/cit/excalibur.properties -> optifine/cit/excalibur.png

```properties
texture=<替换材质>
```



**(可选) 损害值**

仅当物品损害值是特定值或者在特定区间内时使用替换材质。

对于有耐久度的新物品，损害值从零开始，当使用它时损害值升高（和耐久度相反且一一对应）。
物品能承受的最大损害值各不相同，参阅 [http://www.minecraftwiki.net/wiki/Item_durability](http://www.minecraftwiki.net/wiki/Item_durability)

对于其它物品，损害值表示不同属性，例如药水类型或羊毛的颜色。详细信息请参阅 [http://www.minecraftwiki.net/wiki/Data_values](http://www.minecraftwiki.net/wiki/Data_values)。

```properties
damage=<损害值 0-65535>
```

损害值也可以以百分比形式给出：

> damage=0-50%

在按照符合条件的损害值列表对物品检查前应用于物品损害值的一个可选的位元掩码，例如，

匹配任何抗火药水:

> damage=3
>
> damageMask=15

匹配任何饮用的抗火药水：

> damage=3
>
> damageMask=16399

只匹配饮用的抗火药水I：

> damage=3
>
> damageMask=16447

只匹配喷溅型抗火药水II：

> damage=16403
>
> damageMask=16447

有关更简单的设置药水的方法，请参见本文件末尾的部分。

```properties
damageMask=<位元掩码>
```



**(可选) 堆叠数**

仅当堆叠数是特定值或在特定范围内时使用备选材质。

```properties
stackSize=<堆叠数 0-65535>
```



**(可选) 附魔名称**

附魔名称可以是简称 ("flame") 或全名 ("minecraft:flame")。

例如：

> enchantments=minecraft:silk_touch sharpness smite

1.13版本后被废除的属性 "enchantmentIDs" 也可以被识别。

```properties
enchantments=<附魔名称>
```



**(可选) 附魔等级**

```properties
enchantmentLevels=<附魔等级 0-255>
```

示例：

匹配任意等级的精准采集：

> enchantmentIDs=33

匹配等级3或更高等级的火矢或火焰附加：

> enchantmentIDs=flame minecraft:fire_aspect
>
> enchantmentLevels=3-

匹配任何附魔，所有附魔的总等级为8-10：

> enchantmentLevels=8-10

**(可选) 物品在那只手中会被渲染**

物品在GUI中显示时，被认为是在主手，默认值为 "any"

```properties
hand=any|main(主手)|off(副手)
```



**(可选) 基于NBT的规则**

只有当NBT标签具有特定值时才使用替换材质。如果提供了多个规则，则所有规则都必须匹配。

可以使用像NBTExplorer这样的实用程序来查看不同物品的NBT标签。

```properties
nbt.<tag>=<值>
```

目前只支持以下NBT类型：

> \- String, Integer, Short, Long, Double, Float - 仅匹配特定值
>
> \- Compound - 匹配特定标签或任何标签 (\*).
>
> \- List - 匹配特定序号 (从0开始) 或任何序号 (\*).

以 "!" 开头的值表示匹配相反的东西（非）。

整型也可以指定为十六进制颜色，例如#ff99cc。

列表大小被命名为 "count"。

示例：

匹配物品显示名：

> nbt.display.Name=My Sword

使用特殊格式匹配物品显示名：

注: 为了获得最佳兼容性，请使用转义序列 '\u00a7' 而不是§

> nbt.display.Name=\u00a74\u00a7oMy Sword

匹配物品的lore标签 (仅首行)：

> nbt.display.Lore.0=My Lore Text

匹配物品的lore标签 (所有行)：

> nbt.display.Lore.*=My Lore Text

字符串可以用多种方式匹配：

\- 精确值

> nbt.display.Name=Letter to Herobrine

精确匹配字符串 "Letter to Herobrine" 而不会匹配其他的。

\- 使用通配符 ? 和 *

> nbt.display.Name=pattern:Letter to *

匹配

> Letter to Herobrine
>
> Letter to a creeper

不匹配

> letter to Herobrine

\- 通配符,不区分大小写

> nbt.display.Name=ipattern:Letter to *

匹配

> Letter to Herobrine
>
> Letter to a creeper
>
> letter to Herobrine

\- Java正则表达式

 （参考 [http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html)）

> nbt.display.Name=regex:Letter (to|from) .*

匹配

> Letter to Herobrine
>
> Letter from Herobrine

不匹配

> letter to Herobrine
>
> A Letter to Herobrine

\- Java正则表达式,不区分大小写

> nbt.display.Name=iregex:Letter (to|from) .*

匹配

> Letter to Herobrine
>
> Letter from Herobrine
>
> letter to Herobrine

不匹配

> A Letter to Herobrine

注: 任何反斜杠都必须写两遍。在正则表达式或通配符中的反斜杠必须写四遍。

正确：

> nbt.display.name=regex:\\\\d+
>
> nbt.display.name=regex:\\\\\\\\
>
> nbt.display.name=/\\\/\\\

错误：

> nbt.display.name=regex:\d+
>
> nbt.display.name=regex:\\\
>
> nbt.display.name=/\/\

你可以用 "damage=0" 和NBT规则匹配有自定义效果的药水：

```properties
 items=potion
 damage=0
 nbt.CustomPotionEffects.0.Id=20
```

要覆盖默认的药水颜色，可以使用CustomPotionColor标记：

```
 /give @p minecraft:potion 1 0 {CustomPotionEffects:[{Id:20,Amplifier:0,Duration:20}],CustomPotionColor:-1}
```



### 特定种类属性丨Type-specific properties

---

**物品丨type=item**

---

**材质格式:**

物品的替换材质是覆盖到原始的items.png上的，因此遵循与正常物品材质相同的规则。

尤其是，这意味着动画必须使用Mojang的.mcmeta文件系统来实现正常播放。

```properties
texture=<替换材质>
```



**(可选) 多张材质的替换**

对于有多张材质的物品，这允许你为每张材质指定替换材质。

例如，根据其状态，原版弓有四种可能的材质：

bow_standby, bow_pulling_0, bow_pulling_1, bow_pulling_2. 

要替换全部四张，你可以使用

> texture.bow_standby=my_special_bow_standby
>
> texture.bow_pulling_0=my_special_bow_pulling_0
>
> texture.bow_pulling_1=my_special_bow_pulling_1
>
> texture.bow_pulling_2=my_special_bow_pulling_2

药水也有两张材质，要替换它们，使用

> texture.potion_bottle_drinkable=...

或者

> texture.potion_bottle_splash=...
> texture.potion_overlay=...

如果没有匹配的texture.\<name>属性，则使用通用的texture属性。

```properties
texture.<name>=<替换材质>
```



**(可选) 替换模型**

一个原版格式的Json物品模型 (http://minecraft.gamepedia.com/Model#Item_models)

> item/mymodel -> assets/minecraft/models/item/mymodel.json
>
> ./mymodel  -> 和属性文件相同文件夹下的mymodel.json

模型可以从相同文件夹下引用材质，例如: "./mytexture"

```properties
model=<替换模型>  
```



**(可选) 多个模型的替换**

对于拥有多个模型的物品，这允许你为每个模型指定替换模型，例如：

> model.bow_standby=my_special_bow_standby
>
> model.bow_pulling_0=my_special_bow_pulling_0
>
> model.bow_pulling_1=my_special_bow_pulling_1
>
> model.bow_pulling_2=my_special_bow_pulling_2

```properties
model.<name>=<替换模型>
```



**(可选) 权重**

如果多个属性文件匹配相同的物品，会使用拥有最高权重的属性文件。

如果权重相同，会比较它们的属性文件名。默认权重为0。

```properties
weight=<整型>
```



**附魔丨type=enchantment**

---

**材质格式:**

附魔材质可以是任何分辨率。

想要动态化一个附魔效果，则在anim/*.properties中使用如下方法

> to=<附魔材质的完整路径>

```properties
texture=<附魔材质>
```



**(可选) 将材质覆盖到底层材质时使用的混合方法**

查看Better Skies(sky.properties)来获取有效的方法列表。默认为add。

```properties
blend=<混合方法>
```



**(可选) 材质的滚动速度**

默认值为0 (无滚动)。

```properties
speed=<值>
```



**(可选) 附魔材质相对于物品的角度**

如果speed不为0，材质会沿这个方向滚动。

默认值为0。

```properties
rotation=<0-360 度>
```



**(可选) 层**

指定这个附魔效果在哪一层，以及层之间互相重叠时层的排序。

如果两个或更多效果使用同一层，权重决定那个效果会被渲染 (另一个不渲染)。

默认层为0 (最底层)。

```properties
layer=<整型>
```



**(可选) 权重**

同一层内多种附魔效果的相对权重。

在所有符合条件的效果中，只有在同一层内拥有最高权重的附魔效果才会被渲染。

换言之，

> layer属性决定效果被渲染的**顺序**(ORDER)。
>
> weight属性决定每一层的**哪一个**(WHICH)效果会被渲染。

如果两个效果有相同的weight和layer，将会比较它们的文件名。

默认权重为0.

```properties
weight=<整型>
```



**(可选，仅用于cycles方法的附魔) 持续时间**

附魔效果在一个周期内的持续时间，按秒计算。

默认值为1秒。

```properties
duration=<秒>
```



**盔甲丨type=armor**

---

**材质格式:**

替换材质应该符合对应的盔甲材质格式。

对于动态材质，则在 anim/*.properties 中使用如下方法

> to=<替换材质的路径>

**(必需) 替换材质**

你需要为textures/models/armor中该类型盔甲的所有材质创建替换材质。

对于钻石盔甲，

> texture.diamond_layer_1=my_diamond_armor_1
>
> texture.diamond_layer_2=my_diamond_armor_2

对于有四层的皮革盔甲:

> texture.leather_layer_1=...
>
> texture.leather_layer_1_overlay=...
>
> texture.leather_layer_2=...
>
> texture.leather_layer_2_overlay=...

如果没有匹配的texture.\<name>属性，则使用通用的texture属性。

```properties
texture.<name>=<替换纹理>
```



**(可选) 权重**

如果多个属性文件匹配相同的盔甲，则使用拥有最大权重的那个。
权重相同的情况下，会比较属性文件名，默认权重为0。

```properties
weight=<整数>
```



**药水丨potion**

---

http://www.minecraftwiki.net/wiki/Data_values#Potions

你可以不指定药水损害值，而使用一种基于文件名的系统为药水指定替换材质。

注意这里描述的每一件事**都可以**(CAN)通过cit属性文件实现。

这只是一个快捷方式。

药水有三个目录：

> optifine/cit/potion/normal - 非喷溅药水
>
> optifine/cit/potion/splash - 喷溅药水
>
> optifine/cit/potion/linger - 滞留药水

在任一目录下，创建<药水效果名称>.png文件。

不需要属性文件。

> absorption.png
>
> blindness.png
>
> confusion.png
>
> damageboost.png  (\*)
>
> digslowdown.png
>
> digspeed.png
>
> fireresistance.png (\*)
>
> harm.png       (\*)
>
> heal.png       (\*)
>
> healthboost.png
>
> hunger.png
>
> invisibility.png  \(\*\)
>
> jump.png
>
> moveslowdown.png  (\*)
>
> movespeed.png    (\*)
>
> nightvision.png  (\*)
>
> poison.png      (\*)
>
> regeneration.png  (\*)
>
> resistance.png
>
> saturation.png
>
> waterbreathing.png
>
> weakness.png    (\*)
>
> wither.png

文件名与自定义颜色的color.properties文件中的 potion.* 属性相同。注意区分大小写。

只有标记了(\*)的药水可以在游戏中直接获得。其他只能通过编辑器获得。

替换的png文件将会自动用于这种药水类型；不需要任何属性文件。

注意这替换了基础药水渲染中的 potion.png/potion_splash.png 和 potion_contents.png 两者(BOTH)。

所以替换图像中一定要包括有颜色的液体。

类似地，你可以替换各种 "无效果" 药水的材质。

它们只有非喷溅版本，同样只有标记(*)的版本在游戏中实际存在。

其余的都在代码中，这里列出只是为了完整起见。

> artless.png
>
> awkward.png     (\*)
>
>  bland.png
>
>  bulky.png
>
>  bungling.png
>
>  buttered.png
>
>  charming.png
>
>  clear.png
>
>  cordial.png
>
>  dashing.png
>
>  debonair.png
>
>  elegant.png
>
>  fancy.png
>
>  flat.png
>
>  foul.png
>
>  gross.png
>
>  harsh.png
>
>  milky.png
>
>  mundane.png     (\*)
>
>  odorless.png
>
>  potent.png
>
>  rank.png
>
>  sparkling.png
>
>  stinky.png
>
>  suave.png
>
>  thick.png      (\*)
>
>  thin.png
>
>  uninteresting.png

如果你宁愿所有的 "无效果" 药水都用一张单独的材质，

这个文件可用于任何没有设置上列指定的替换材质的药水：

> optifine/cit/potion/normal/other.png

另外两个材质(非喷溅型)也可以设置：

> optifine/cit/potion/normal/water.png - 水瓶 (item 373:0)
> optifine/cit/potion/normal/empty.png - 玻璃瓶 (item 374)

