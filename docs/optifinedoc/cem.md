<center><h1>自定义实体模型</h1><p>Custom Entity Models</p></center>

## 实体模型丨cem_model.txt

对于每一个你想要覆盖的实体模型或者方块实体模型，
使用这个模板在 "assets/minecraft/optifine/cem" 文件夹下新建一个名称为 "<实体名>.jem" 的文件。
实体模型包含一系列实体部件模型。
部件模型可以在此文件内部被指定，或者从外部的 ".jpm" 文件读取。

特例:
\- 哞菇背后的蘑菇可以通过下列材质自定义

> "assets/minecraft/textures/entity/cow/red_mushroom.png" 
> "assets/minecraft/textures/entity/cow/brown_mushroom.png"

| 实体名              | 部件名                                                       |
| ------------------- | ------------------------------------------------------------ |
| armor_stand         | head, headwear, body, left_arm, right_arm, left_leg, right_leg, right, left, waist, base |
| banner              | slate, stand, top                                            |
| bat                 | head, body, right_wing, left_wing, outer_right_wing, outer_left_wing |
| bed                 | head, foot, leg1 ... leg4                                    |
| blaze               | head, stick1 ... stick12                                     |
| boat                | bottom, back, front, right, left, paddle_left, paddle_right, bottom_no_water |
| book                | cover_right, cover_left, pages_right, pages_left, flipping_page_right, flipping_page_left, book_spine |
| cat                 | back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, tail2, head, body |
| cave_spider         | head, neck, body, leg1 ... leg8                              |
| chest               | lid, base, knob                                              |
| chest_large         | lid, base, knob                                              |
| chicken             | head, body, right_leg, left_leg, right_wing, left_wing, bill, chin |
| cow                 | head, body, leg1 ... leg4                                    |
| creeper             | head, armor, body, leg1 ... leg4                             |
| dragon              | head, spine, jaw, body, rear_leg, front_leg, rear_leg_tip, front_leg_tip, rear_foot, front_foot, wing, wing_tip |
| donkey              | \<same as horse>                                             |
| dolphin             | body, back_fin, left_fin, right_fin, tail, tail_fin, head    |
| drowned             | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| ender_chest         | lid, base, knob                                              |
| end_crystal         | cube, glass, base                                            |
| end_crystal_no_base | cube, glass                                                  |
| enderman            | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| endermite           | body1 ... body4                                              |
| evoker              | head, body, arms, left_leg, right_leg, nose, left_arm, right_arm |
| evoker_fangs        | base, upper_jaw, lower_jaw                                   |
| fox                 | head, body, leg1 ... leg4, tail                              |
| ghast               | body, tentacle1 ... tentacle9                                |
| giant               | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| guardian            | body, eye, spine1 ... spine12, tail1 ... tail3               |
| head_dragon         | head, jaw                                                    |
| head_humanoid       | head, head2                                                  |
| head_skeleton       | head                                                         |
| horse               | body, neck, back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, saddle,head, mane, mouth, left_ear, right_ear, left_bit, right_bit, left_rein, right_rein, headpiece, noseband<br/> //1.15.2添加了child_back_left_leg, child_back_right_leg, child_front_left_leg,child_front_right_leg（2020/2/20） |
| illusioner          | head, body, arms, left_leg, right_leg, nose, left_arm, right_arm |
| iron_golem          | head, body, left_arm, right_arm, left_leg, right_leg         |
| lead_knot           | knot                                                         |
| llama               | head, body, leg1 ... leg4<br/>//1.15.2添加了chest_right, chest_left（2020/2/19） |
| magma_cube          | core, segment1 ... segment8                                  |
| minecart            | bottom, back, front, right, left, dirt                       |
| mooshroom           | head, body, leg1 ... leg4                                    |
| mule                | \<same as horse>                                             |
| ocelot              | back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, tail2, head, body |
| panda               | head, body, leg1 ... leg4                                    |
| parrot              | head, body, tail, left_wing, right_wing, left_leg, right_leg |
| pig                 | head, body, leg1 ... leg4                                    |
| piglin              | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_ear, right_ear |
| piglin_brute        | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_ear, right_ear |
| pillager            | head, body, arms, left_leg, right_leg, nose, left_arm, right_arm |
| polar_bear          | head, body, leg1 ... leg4                                    |
| rabbit              | left_foot, right_foot, left_thigh, right_thigh, body,left_arm, right_arm, head, right_ear, left_ear, tail, nose |
| ravager             | head, jaw, body, leg1 ... leg4, neck                         |
| salmon              | body_front, body_back, head, fin_back_1, fin_back_2, tail, fin_right, fin_left |
| sheep               | head, body, leg1 ... leg4                                    |
| sheep_wool          | head, body, leg1 ... leg4                                    |
| shulker             | head, base, lid                                              |
| shulker_box         | base, lid                                                    |
| shulker_bullet      | bullet                                                       |
| sign                | board, stick                                                 |
| silverfish          | body1 ... body7, wing1 ... wing3                             |
| skeleton            | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| skeleton_horse      | \<same as horse>                                             |
| slime               | body, left_eye, right_eye, mouth                             |
| snow_golem          | body, body_bottom, head, left_hand, right_hand               |
| spawner_minecart    | bottom, back, front, right, left, dirt                       |
| spider              | head, neck, body, leg1, ... leg8                             |
| squid               | body, tentacle1 ... tentacle8                                |
| stray               | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| tnt_minecart        | bottom, back, front, right, left, dirt                       |
| tropical_fish_a     | body, tail, fin_right, fin_left, fin_top                     |
| tropical_fish_b     | body, tail, fin_right, fin_left, fin_top, fin_bottom         |
| turtle              | head, body, leg1 ... leg4, body2                             |
| vex                 | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_wing, right_wing |
| villager            | head, headwear, headwear2, body, bodywear, arms, left_leg, right_leg, nose |
| vindicator          | head, body, arms, left_leg, right_leg, nose, left_arm, right_arm |
| witch               | head, headwear, headwear2, body, bodywear, arms, left_leg, right_leg, nose, mole |
| wither              | body1 ... body3, head1 ... head3                             |
| wither_skeleton     | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| wither_skull        | head                                                         |
| wolf                | head, body, leg1 ... leg4, tail, mane                        |
| zombie              | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| zombie_horse        | \<same as horse>                                             |
| zombie_pigman       | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| zombie_villager     | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| zombified_piglin    | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_ear |

只有 "models" 和 "part" 是必需的.

注意: 这不是一个有效的JSON格式，只能作为参考

```json
{
  "texture": <texture.png>                                    - 实体模型使用的材质
  "textureSize": [<width>, <height>],                          - 材质尺寸 (像素)
  "shadowSize": <shadow_size>,                                - 模型阴影尺寸 (0.0 - 1.0)
  models                                                      - 模型列表
  [
    {
      "baseId": <parent_id>,                                  - 模型的父类ID, 所有父类属性都会被继承
      "model": <model.jpm>,                                   - 部件模型文件,从中读取部件模型的定义
      "id": <id>,                                             - 模型ID, 可以将模型引用为父类
      "part": <part>,                                         - 部件模型要附着的实体部件
      "attach": <true|false>,                                 - True: 附着到实体部件, False: 取而代之
      "scale": <scale>,                                       - 渲染尺寸, 默认为1.0
      # 部件模型定义, 详见"cem_part.txt"                       - 部件模型定义 (内部)
      "animations":
      [
        {
          "variable1": "expression1",                         - 详见"cem_animation.txt"
          "variable2": "expression2,
          ...
        }
      ]
      ...
    },
    ...
  ]
}
```



## 部件模型丨cem_part.txt

这个文件包含一个模型部件的定义，
它可以在实体模型中被引用为 "model"。
推荐使用文件扩展名 ".jpm"，但这并不是必须的。
它应该位于资源包的 "assets/minecraft/optifine/cem" 文件夹下。

材质的UV可以用 "textureOffset" 立方体格式指定，
也可以用 "uvDown"、"uvUp"、"uvNorth"、 "uvSouth"、"uvWest" 和 "uvEast"单独指定。
必须使用立方体格式和单面UV格式中的一个，它们不能混合使用。
立方体格式的UV映射的示例为 "model_box.png"。

材质可以被指定为：

> "texture" - (no '/' in name), 在当前文件夹寻找
>
> "./folder/texture" - 相对于当前文件夹
>
> "~/folder/texture" - 相对于文件夹 "assets/minecraft/optifine/"
>
> "folder/texture" - 相对于文件夹 "assets/minecraft/"
>
> "mod:folder/texture - 解析为 "assets/mod/folder/texture.png"

材质的后缀名 ".png" 是可选的。

必需要素:

- "textureOffset" 或者单面UV
-  "coordinates"

注: 这不是一个有效的JSON格式，仅供参考

```json
{
  # 部件模型定义
  "texture": <texture.png>,                                - 部件模型要使用的材质
  "textureSize": [<width>, <height>],                      - 材质的像素尺寸
  "invertAxis": <axis_to_invert>,                          - 模型轴的翻转, 例如 "xyz" 翻转所有轴
  "translate": [<x>, <y>, <z>],                            - 平移 (像素)
  "rotate": [<angle_x>, <angle_y>, <angle_z>],             - 旋转 (角度)
  "mirrorTexture": <axis_to_mirror>,                       - 材质轴的翻转，例如 "uv" 同时翻转U轴和V轴
  "boxes"                                                  - 部件模型使用的立方体
  [
    {
      "textureOffset": [<u>, <v>],                         - 立方体格式的材质偏移量, 参阅 "model_box.png"
      "uvDown": [<u1>, <v1>, <u2>, <v2>],                  - 底面UV
      "uvUp": [<u1>, <v1>, <u2>, <v2>],                    - 顶面UV
      "uvNorth": [<u1>, <v1>, <u2>, <v2>],                 - 北面UV, 也称 "uvFront"
      "uvSouth": [<u1>, <v1>, <u2>, <v2>],                 - 南面UV, 也称 "uvBack"
      "uvWest": [<u1>, <v1>, <u2>, <v2>],                  - 西面UV, 也称 "uvLeft"
      "uvEast": [<u1>, <v1>, <u2>, <v2>],                  - 东面UV, 也称 "uvRight"
      "coordinates": [<x>, <y>, <z>, <width>, <height>, <depth>],  - 立方体位置和尺寸
      "sizeAdd": <size_add>                               - 长度增量 (添加到所有维) 可以用作不对称缩放
    },
    ...
  ],
  "sprites"                                                - 3D sprite models (depth 1) 
  [
    {
      "textureOffset": [<u>, <v>],                         - 材质偏移量 (像素)
      "coordinates": [<x>, <y>, <z>, <width>, <height>, <depth>],  - 立方体位置和尺寸
      "sizeAdd": <size_add>                                - 长度增量 (添加到所有维) 可以用作不对称缩放
    },
    ...
  ],
  "submodel":                                              - 子模型 (附着到父模型, 跟随它移动和旋转)
  {
    # Part model definition                                - 子模型定义                          
  },
  "submodels":                                             - 多个子模型 (附着到父模型, 跟随它移动和旋转)
  [
    {
      # Part model definition                               - 子模型定义                          
    },
    ...
  ]
}
```



## 自定义实体模型动画丨cem_animation.txt

每个要被动态化的模型变量(variables)都被分配了一个表达式(expression)。
模型每次被渲染并将其值赋给变量时，都会对表达式求值。
变量和表达式在json实体模型(JEM)的 "animation" 部分中定义。



```json
 "animations":
 [
   {
     "variable1": "表达式1",    
     "variable2": "表达式2",
     ...
   }
 ]
```



**变量(Variables)**

模型变量由此格式指定：

- "<模型>.<变量名>"

模型可能是:

> "this" - 当前自定义模型
>
> "part" - 当前自定义模型所依附的部件模型
>
> "\<part>" - 部件名指向的自定义模型
>
> "\<id>" - ID指向的自定义模型
>
> "\<part>:<sub_id>:<sub_sub_id>:..." - (分层结构) 首先按部件名查找原始模型，然后按ID查找子模型
>
> "\<id>:<sub_id>:<sub_sub_id>:..." - (分层结构) 首先按ID查找模型，然后按ID查找子模型

如果存在重复，则使用根据部件名或ID找到的第一个模型。
根据ID进行的模型搜索是深入的，在分层结构中也是如此。

分层结构让模型组 (json部件模型) 能够被不同部件再利用。
例如一个手的模型 "shoulder:upper_arm:elbow:forearm:palm:finger[1.5]" 可以同时应用于左手和右手。
动画可以使用 "left_hand:finger1" 表示左手拇指，"right_hand:finger1" 表示右手拇指。
可以跳过分层结构中的中间层。

变量名

> tx, ty, tz - 平移(translation) x, y, z
>
> rx, ry, rz - 旋转(rotation) x, y, z
>
> ox, oy, oz - 偏移(offset) x, y, z (偏移是绝对的, 不跟随模型缩放的, 可用于平移动画) //1.15.2被移除（2020/2/19）
>
> sx, sy, sz - 缩放(scale) x, y, z

**表达式(Expressions)**

表达式是具有括号、常量、变量、运算符和函数的一般数学表达式。

常量

> 浮点数
>
> pi - 3.1415926
>
> true
>
> false

变量

> \<model>.\<var> - 模型变量, 详见模型变量的说明
>
> time - 当前世界的时刻(tick)

渲染参数

> limb_swing - 肢体动画计数器(limb animation counter)
>
> limb_speed - 肢体移动速度(limb movement speed)
>
> age - 按tick计算的年龄(age in ticks)
>
> head_yaw - 头偏角(head yaw)
>
> head_pitch - 头仰角(head pitch)
>
> scale - 渲染比例(render scale)，默认为0.0625 //1.15.2被移除（2020/2/19）

实体参数 (浮点型)

> health
>
> hurt_time
>
> idle_time
>
> max_health
>
> move_forward
>
> move_strafing
>
> pos_x, pos_y, pos_z
>
> revenge_time
>
> swing_progress

实体参数 (true/false)

> is_alive
>
> is_burning
>
> is_child
>
> is_glowing
>
> is_hurt
>
> is_in_lava
>
> is_in_water
>
> is_invisible
>
> is_on_ground
>
> is_ridden
>
> is_riding
>
> is_sneaking
>
> is_sprinting
>
> is_wet

运算符

> +, -, *, /, %
>
> !, &&, ||
>
> \>, >=, <, <=, ==, !=

函数

> sin(x)
>
> cos(x)
>
> asin(x)
>
> acos(x)
>
> tan(x)
>
> atan(x)
>
> atan2(y, x)
>
> torad(deg)
>
> todeg(rad)
>
> min(x, y ,...)
>
> max(x, y, ...)
>
> clamp(x, min, max)              将一个值限制在最小值和最大值之间
>
> abs(x)
>
> floor(x)
>
> ceil(x)
>
> exp(x)
>
> frac(x)
>
> log(x)
>
> pow(x)
>
> random(x)
>
> round(x)
>
> signum(x)
>
> sqrt(x)
>
> fmod(x, y)                             与 Math.floorMod() 类似
>
> if(cond, val, [cond2, val2, ...], val_else)  基于一个或更多条件选择一个值

布尔函数

> between(x, min, max)              检查一个值是否在最大和最小值之间
>
> equals(x, y, epsilon)                将两个浮点数和误差范围进行比较
>
> in(x, val1, val2, ...)                检查一个值是否和多个值之一相等

**示例:**

```json
   ...
   "animations":
   [
     {
       "this.rx": "clamp(-0.5 * part.rx, 0, 90)",
       "this.tx": "3 * sin(limb_swing / 4) - 2",
       "this:Hoof.rx": "if(leg4:Hoof.rx > 90, leg4:Hoof.rx - 90, 0)"
       ...
     }
   ]
```



译注：制作模型推荐cubikstudio或者是blockbench，前者是收费的，后者是免费的。