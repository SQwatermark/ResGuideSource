<center><h1>自然纹理</h1><p>Natural Textures</p></center>

## 概述丨Overview

让纹理具有随机的旋转和翻转，可以创造出类似于随机纹理的效果，避免方块的栅格感

**译注：在制作CTM纹理时，请务必注意有没有关闭对应方块的自然纹理**



## 属性文件丨natural.properties

路径: /assets/minecraft/optifine/natural.properties



**格式**

```properties
<纹理名称> = <值>
```



**值**

> 4 = 旋转 x 90°(4种变体)
>
> 2 = 旋转 x 180°(2种变体)
>
> F = 水平翻转纹理 (2种变体)
>
> 4F = 4 + F (8种变体)
>
> 2F = 2 + F (4种变体)

例子：黑曜石的纹理，有四种旋转变体，并且可以翻转

```properties
obsidian = 4F
```

下面给出自然纹理的默认值

**草方块**

```properties
grass_block_side = F
grass_block_side_overlay = F
grass_block_snow = F
mycelium_side = F
mycelium_top = 4F
dirt_path_top = 4
dirt_path_side = F
```

**雪**

```properties
snow = 4F
```

**泥土**

```properties
coarse_dirt = 4F
podzol_top = 4F
podzol_side = F
farmland = 2F
farmland_moist = 2F
```

**石头**

```properties
granite = 2F
diorite = 2F
andesite = 2F
sandstone_top = 4
sandstone_bottom = 4F
stone_slab_top = F
end_stone = 4
```

**砂砾**

```properties
gravel = 2
clay = 4F
```

**原木**

```properties
oak_log = 2F
spruce_log = 2F
birch_log = F
jungle_log = 2F
acacia_log = 2F
dark_oak_log = 2F
oak_log_top = 4F
spruce_log_top = 4F
birch_log_top = 4F
jungle_log_top = 4F
acacia_log_top = 4F
dark_oak_log_top = 4F
```

**树叶**

```properties
oak_leaves = 2F
spruce_leaves = 2F
birch_leaves = 2F
jungle_leaves = 2
dark_oak_leaves = 2F
acacia_leaves = 2F
```

**矿石**

```properties
gold_ore = 2F
iron_ore = 2F
coal_ore = 2F
diamond_ore = 2F
redstone_ore = 2F
lapis_ore = 2F
```

**下界**

```properties
netherrack = 4F
nether_quartz_ore = 2
soul_sand = 4F
glowstone = 4
```

**红石**

```properties
redstone_lamp_on = 4F
redstone_lamp = 4F
```

**海晶石**

```properties
prismarine = 4F
```

**混合**

```properties
obsidian = 4F
cactus_side = 2F
```



