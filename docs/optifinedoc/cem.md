<center><h1>自定义实体模型</h1><p>Custom Entity Models</p></center>

## 实体模型丨cem_model.txt

对于每一个你想要覆盖的实体模型或者方块实体模型，按照这个模板在 "assets/minecraft/optifine/cem" 文件夹下新建一个名称为 "<实体名>.jem" 的文件。

For each entity model or tile entity model that you wish to override use this template and create a "<entity_name>.jem" file in the  "assets/minecraft/optifine/cem" or "assets/minecraft/optifine/cem/<entity_name>" folder of your resource pack. 

实体模型包含一系列实体部件模型。部件模型可以写在此文件内部，也可以从外部的 ".jpm" 文件读取。

特例:
\- 哞菇背后的蘑菇可以通过下列纹理自定义

> "assets/minecraft/textures/entity/cow/red_mushroom.png" 
>
> "assets/minecraft/textures/entity/cow/brown_mushroom.png"

| 实体名              | 部件名                                                       |
| ------------------- | ------------------------------------------------------------ |
| allay            | head, headwear, body, left_arm, right_arm, left_leg, right_leg, right, left, waist, base |
| armor_stand            | head, headwear, body, left_arm, right_arm, left_leg, right_leg, right, left, waist, base |
| axolotl            | head, body, leg1 ... leg4, tail, top_gills, left_gills, right_gills |
| banner                 | slate, stand, top                                                                                                                                                                                                                                                                         |
| bat                    | head, body, right_wing, left_wing, outer_right_wing, outer_left_wing                                                                                                                                                                                                                      |
| bee                    | body, torso, right_wing, left_wing, front_legs, middle_legs, back_legs, stinger, left_antenna, right_antenna                                                                                                                                                                              |
| bed                    | head, foot, leg1 ... leg4                                                                                                                                                                                                                                                                 |
| bell                   | body                                                                                                                                                                                                                                                                                      |
| blaze                  | head, stick1 ... stick12                                                                                                                                                                                                                                                                  |
| boat                   | bottom, back, front, right, left, paddle_left, paddle_right, bottom_no_water                                                                                                                                                                                                              |
| cat                    | back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, tail2, head, body|
| cat_collar                    | back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, tail2, head, body|
| cave_spider            | head, neck, body, leg1 ... leg8|
| chest                  | lid, base, knob |
| chest_boat                  | bottom, back, front, right, left, paddle_left, paddle_right, bottom_no_water, chest_base, chest_lid, chest_knob |
| chest_large            | lid_left, base_left, knob_left, lid_right, base_right, knob_right                                                                                                                                                                                                                         |
| chest_minecart         | bottom, back, front, right, left                                                                                                                                                                                                                                                    |
| chicken                | head, body, right_leg, left_leg, right_wing, left_wing, bill, chin                                                                                                                                                                                                                        |
| cod                    | body, fin_back, head, nose, fin_right, fin_left, tail                                                                                                                                                                                                                                     |
| command_block_minecart | bottom, back, front, right, left                                                                                                                                                                                                                                                    |
| conduit                | base, eye, cage, wind                                                                                                                                                                                                                                                                     |
| cow                    | head, body, leg1 ... leg4                                                                                                                                                                                                                                                                 |
| creeper                | head, body, leg1 ... leg4     |
| creeper_charge                | head, body, leg1 ... leg4  |
| dragon                 | head, spine, jaw, body, left_wing, left_wing_tip, right_wing, right_wing_tip, front_left_leg, front_left_shin, front_left_foot, back_left_leg, back_left_shin, back_left_foot,  front_right_leg, front_right_shin, front_right_foot, back_right_leg, back_right_shin, back_right_foot     |
| donkey                 | \<same as horse\>, left_chest, right_chest                                                                                                                                                                                                                                                |
| dolphin                | body, back_fin, left_fin, right_fin, tail, tail_fin, head                                                                                                                                                                                                                                 |
| drowned                | head, headwear, body, left_arm, right_arm, left_leg, right_leg  |
| drowned_outer                | head, headwear, body, left_arm, right_arm, left_leg, right_leg  |
| elder_guardian         | body, eye, spine1 ... spine12, tail1 ... tail3                                                                                                                                                                                                                                            |
| enchanting_book        | cover_right, cover_left, pages_right, pages_left, flipping_page_right, flipping_page_left, book_spine                                                                                                                                                                                     |
| ender_chest            | lid, base, knob                                                                                                                                                                                                                                                                           |
| end_crystal            | cube, glass, base                                                                                                                                                                                                                                                                         |
| enderman               | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| endermite              | body1 ... body4                                                                                                                                                                                                                                                                           |
| evoker                 | head, hat, body, arms, left_leg, right_leg, nose, left_arm, right_arm                                                                                                                                                                                                                     |
| evoker_fangs           | base, upper_jaw, lower_jaw                                                                                                                                                                                                                                                                |
| fox                    | head, body, leg1 ... leg4, tail  |
| frog                    | head, body, eyes, tongue, left_arm, right_arm, left_leg, right_leg, croaking_body  |
| furnace_minecart       | bottom, back, front, right, left                                                                                                                                                                                                                                                    |
| ghast                  | body, tentacle1 ... tentacle9                                                                                                                                                                                                                                                             |
| giant                  | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| glow_squid                  | body, tentacle1 ... tentacle8 |
| goat                  | head, body, leg1 ... leg4, left_horn, right_horn, nose |
| guardian               | body, eye, spine1 ... spine12, tail1 ... tail3                                                                                                                                                                                                                                            |
| head_dragon            | head, jaw                                                                                                                                                                                                                                                                                 |
| head_player            | head                                                                                                                                                                                                                                                                                      |
| head_skeleton          | head                                                                                                                                                                                                                                                                                      |
| head_wither_skeleton   | head                                                                                                                                                                                                                                                                                      |
| head_zombie            | head                                                                                                                                                                                                                                                                                      |
| hoglin                 | head, right_ear, left_ear, body, front_right_leg, front_left_leg, back_right_leg, back_left_leg, mane                                                                                                                                                                                     |
| hopper_minecart        | bottom, back, front, right, left                                                                                                                                                                                                                                                    |
| horse                  | body, neck, back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, saddle, head, mane, mouth, left_ear, right_ear, left_bit, right_bit, left_rein, right_rein, headpiece, noseband, child_back_left_leg, child_back_right_leg, child_front_left_leg, child_front_right_leg |
| horse_armor                  | body, neck, back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, saddle, head, mane, mouth, left_ear, right_ear, left_bit, right_bit, left_rein, right_rein, headpiece, noseband, child_back_left_leg, child_back_right_leg, child_front_left_leg, child_front_right_leg |
| husk                   | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| illusioner             | head, hat, body, arms, left_leg, right_leg, nose, left_arm, right_arm                                                                                                                                                                                                                     |
| iron_golem             | head, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                                      |
| lead_knot              | knot                                                                                                                                                                                                                                                                                      |
| lectern_book           | cover_right, cover_left, pages_right, pages_left, flipping_page_right, flipping_page_left, book_spine                                                                                                                                                                                     |
| llama                  | head, body, leg1 ... leg4, chest_right, chest_left                                                                                                                                                                                                                                        |
| llama_decor            | head, body, leg1 ... leg4, chest_right, chest_left                                                                                                                                                                                                                                        |
| llama_spit             | body                                                                                                                                                                                                                                                                                      |
| magma_cube             | core, segment1 ... segment8                                                                                                                                                                                                                                                               |
| minecart               | bottom, back, front, right, left                                                                                                                                                                                                                                                    |
| mooshroom              | head, body, leg1 ... leg4                                                                                                                                                                                                                                                                 |
| mule                   | \<same as horse\>, left_chest, right_chest                                                                                                                                                                                                                                                |
| ocelot                 | back_left_leg, back_right_leg, front_left_leg, front_right_leg, tail, tail2, head, body                                                                                                                                                                                                   |
| panda                  | head, body, leg1 ... leg4                                                                                                                                                                                                                                                                 |
| parrot                 | head, body, tail, left_wing, right_wing, left_leg, right_leg                                                                                                                                                                                                                              |
| phantom                | body, left_wing, left_wing_tip, right_wing, right_wing_tip, head, tail, tail2                                                                                                                                                                                                             |
| puffer_fish_big        | body, fin_right, fin_left, spikes_front_top, spikes_middle_top, spikes_back_top, spikes_front_right, spikes_front_left, spikes_front_bottom, spikes_middle_bottom, spikes_back_bottom, spikes_back_right, spikes_back_left                                                                |
| puffer_fish_medium     | body, fin_right, fin_left, spikes_front_top, spikes_back_top, spikes_front_right, spikes_back_right, spikes_back_left, spikes_front_left, spikes_back_bottom, spikes_front_bottom                                                                                                         |
| puffer_fish_small      | body, eye_right, eye_left, tail, fin_right, fin_left                                                                                                                                                                                                                                      |
| pig                    | head, body, leg1 ... leg4  |
| pig_saddle                    | head, body, leg1 ... leg4  |
| piglin                 | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_ear, right_ear, left_sleeve, right_sleeve, left_pants, right_pants, jacket                                                                                                                                           |
| piglin_brute           | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_ear, right_ear, left_sleeve, right_sleeve, left_pants, right_pants, jacket                                                                                                                                           |
| pillager               | head, hat, body, arms, left_leg, right_leg, nose, left_arm, right_arm                                                                                                                                                                                                                     |
| polar_bear             | head, body, leg1 ... leg4                                                                                                                                                                                                                                                                 |
| rabbit                 | left_foot, right_foot, left_thigh, right_thigh, body, left_arm, right_arm, head, right_ear, left_ear, tail, nose                                                                                                                                                                          |
| ravager                | head, jaw, body, leg1 ... leg4, neck                                                                                                                                                                                                                                                      |
| salmon                 | body_front, body_back, head, fin_back_1, fin_back_2, tail, fin_right, fin_left                                                                                                                                                                                                            |
| sheep                  | head, body, leg1 ... leg4                                                                                                                                                                                                                                                                 |
| sheep_wool             | head, body, leg1 ... leg4                                                                                                                                                                                                                                                                 |
| shulker                | head, base, lid                                                                                                                                                                                                                                                                           |
| shulker_box            | base, lid                                                                                                                                                                                                                                                                                 |
| shulker_bullet         | bullet                                                                                                                                                                                                                                                                                    |
| sign                   | board, stick                                                                                                                                                                                                                                                                              |
| silverfish             | body1 ... body7, wing1 ... wing3                                                                                                                                                                                                                                                          |
| skeleton               | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| skeleton_horse         | \<same as horse\>                                                                                                                                                                                                                                                                         |
| slime                  | body, left_eye, right_eye, mouth   |
| slime_outer                  | body |
| snow_golem             | body, body_bottom, head, left_hand, right_hand                                                                                                                                                                                                                                            |
| spawner_minecart       | bottom, back, front, right, left                                                                                                                                                                                                                                                    |
| spider                 | head, neck, body, leg1, ... leg8                                                                                                                                                                                                                                                          |
| squid                  | body, tentacle1 ... tentacle8                                                                                                                                                                                                                                                             |
| stray                  | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| stray_outer                  | head, headwear, body, left_arm, right_arm, left_leg, right_leg |
| strider                | body, right_leg, left_leg, hair_right_top, hair_right_middle, hair_right_bottom, hair_left_top, hair_left_middle, hair_left_bottom   |
| strider_saddle                | body, right_leg, left_leg, hair_right_top, hair_right_middle, hair_right_bottom, hair_left_top, hair_left_middle, hair_left_bottom   |
| tnt_minecart           | bottom, back, front, right, left  |
| tadpole           | body, tail  |
| trader_llama           | head, body, leg1 ... leg4, chest_right, chest_left                                                                                                                                                                                                                                        |
| trader_llama_decor     | head, body, leg1 ... leg4, chest_right, chest_left                                                                                                                                                                                                                                        |
| trapped_chest          | lid, base, knob                                                                                                                                                                                                                                                                           |
| trapped_chest_large    | lid_left, base_left, knob_left, lid_right, base_right, knob_right                                                                                                                                                                                                                         |
| trident                | body                                                                                                                                                                                                                                                                                      |
| tropical_fish_a        | body, tail, fin_right, fin_left, fin_top                                                                                                                                                                                                                                                  |
| tropical_fish_b        | body, tail, fin_right, fin_left, fin_top, fin_bottom                                                                                                                                                                                                                                      |
| tropical_fish_pattern_a        | body, tail, fin_right, fin_left, fin_top                                                                                                                                                                                                                                                  |
| tropical_fish_pattern_b        | body, tail, fin_right, fin_left, fin_top, fin_bottom                                                                                                                                                                                                                                      |
| turtle                 | head, body, leg1 ... leg4, body2                                                                                                                                                                                                                                                          |
| vex                    | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_wing, right_wing                                                                                                                                                                                                     |
| villager               | head, headwear, headwear2, body, bodywear, arms, left_leg, right_leg, nose                                                                                                                                                                                                                |
| vindicator             | head, hat, body, arms, left_leg, right_leg, nose, left_arm, right_arm                                                                                                                                                                                                                     |
| wandering_trader       | head, headwear, headwear2, body, bodywear, arms, left_leg, right_leg, nose  |
| warden       | body, torso, head, left_leg, right_leg, left_arm, right_arm, left_tendril, right_tendril, left_ribcage, right_ribcage  |
| witch                  | head, headwear, headwear2, body, bodywear, arms, left_leg, right_leg, nose, mole                                                                                                                                                                                                          |
| wither                 | body1 ... body3, head1 ... head3  |
| wither_armor                 | body1 ... body3, head1 ... head3  |
| wither_skeleton        | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| wither_skull           | head                                                                                                                                                                                                                                                                                      |
| wolf                   | head, body, leg1 ... leg4, tail, mane                                                                                                                                                                                                                                                     |
| wolf_collar             | head, body, leg1 ... leg4, tail, mane                                                                                                                                                                                                                                                     |
| zoglin                 | head, right_ear, left_ear, body, front_right_leg, front_left_leg, back_right_leg, back_left_leg, mane                                                                                                                                                                                     |
| zombie                 | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| zombie_horse           | \<same as horse\>                                                                                                                                                                                                                                                                         |
| zombie_pigman          | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| zombie_villager        | head, headwear, body, left_arm, right_arm, left_leg, right_leg                                                                                                                                                                                                                            |
| zombified_piglin       | head, headwear, body, left_arm, right_arm, left_leg, right_leg, left_ear, left_sleeve, right_sleeve, left_pants, right_pants, jacket                                                                                                                                                      |

只有 "models" 和 "part" 是必需的.

注意: 这不是一个有效的JSON格式，只能作为参考

```json
{
  "texture": <texture.png>                                    - 实体模型使用的纹理
  "textureSize": [<width>, <height>],                          - 纹理尺寸 (像素)
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



## 随机模型 | Randomized models

The alternative models use the same name as the main model with a number suffix.

For example:

wolf.jem  - main model (index 1)

wolf2.jem - alternative model (index 2)

wolf3.jem - alternative model (index 3)

The alternative models are selected randomly based on the entity id.

To customize the use of the alternative models add a "<model_name>.properties" file in the folder where the models are located.

The properties file works identically to the properties file used by Random Entities.

The models to be used are selected with the setting "models.\<n\>=\<list\>" instead of "textures.\<n\>=\<list\>".

The index of the current matching rule is available as animation parameter "rule_index" and can be used to cutomize the model depending on entity properties.

For more details see "random_entities.properties".

## 部件模型丨cem_part.txt

这个文件包含一个模型部件的定义，
它可以在实体模型中被引用为 "model"。
推荐使用文件扩展名 ".jpm"，但这并不是必须的。
它应该位于资源包的 "assets/minecraft/optifine/cem" 文件夹下。

纹理的UV可以用 "textureOffset" 立方体格式指定，
也可以用 "uvDown"、"uvUp"、"uvNorth"、 "uvSouth"、"uvWest" 和 "uvEast"单独指定。
必须使用立方体格式和单面UV格式中的一个，它们不能混合使用。
立方体格式的UV映射的示例为 "model_box.png"。

纹理可以被指定为：

> "texture" - (no '/' in name), 在当前文件夹寻找
>
> "./folder/texture" - 相对于当前文件夹
>
> "~/folder/texture" - 相对于文件夹 "assets/minecraft/optifine/"
>
> "folder/texture" - 相对于文件夹 "assets/minecraft/"
>
> "mod:folder/texture - 解析为 "assets/mod/folder/texture.png"

纹理的后缀名 ".png" 是可选的。

必需要素:

- "textureOffset" 或者单面UV
-  "coordinates"

注: 这不是一个有效的JSON格式，仅供参考

```json
{
  # 部件模型定义
  "texture": <texture.png>,                                - 部件模型要使用的纹理
  "textureSize": [<width>, <height>],                      - 纹理的像素尺寸
  "invertAxis": <axis_to_invert>,                          - 模型轴的翻转, 例如 "xyz" 翻转所有轴
  "translate": [<x>, <y>, <z>],                            - 平移 (像素)
  "rotate": [<angle_x>, <angle_y>, <angle_z>],             - 旋转 (角度)
  "mirrorTexture": <axis_to_mirror>,                       - 纹理轴的翻转，例如 "uv" 同时翻转U轴和V轴
  "boxes"                                                  - 部件模型使用的立方体
  [
    {
      "textureOffset": [<u>, <v>],                         - 立方体格式的纹理偏移量, 参阅 "model_box.png"
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
      "textureOffset": [<u>, <v>],                         - 纹理偏移量 (像素)
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



**变量（Variables）**

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

**变量名**

> tx, ty, tz                - 平移(translation) x, y, z
>
> rx, ry, rz               - 旋转(rotation) x, y, z
>
> ox, oy, oz             - 偏移(offset) x, y, z (偏移是绝对的, 不跟随模型缩放的, 可用于平移动画) //1.15.2被移除（2020/2/19）
>
> sx, sy, sz               - 缩放(scale) x, y, z
>
> visible                   - show model and submodels (boolean)
>
> visible_boxes      - show model only, does not affect submodels (boolean)

**实体变量**

Entity variables are specified in the format "var.\<name\>" (float) or "varb.\<name\>" (boolean) 

The name can be any string, for example "var.xyz", "var.last_rx", etc.

The variable is attached to the rendered entity and has a default value 0 or false.

Entity variables are useful for storing animation data between frames.

Not supported for block entities.

**渲染变量**

> render.shadow_size                               - The size of the shadow underneath an entity
>
> render.shadow_opacity                         - How transparent the shadow is
>
> render.leash_offset_x, render.leash_offset_y, render.leash_offset_z           - The location of the shadow
>
> render.shadow_offset_x, render.shadow_offset_z                   - The position of the point the leash attaches to

**表达式（Expressions）**

表达式是具有括号、常量、变量、运算符和函数的一般数学表达式。

常量

> \<number\>           - 浮点数
>
> pi                           - 3.1415926
>
> true
>
> false

变量

> \<model>.\<var> - 模型变量, 详见模型变量的说明
>
> time                    - 当前世界的时刻(tick)

渲染参数

> limb_swing - 肢体动画计数器(limb animation counter)
>
> limb_speed - 肢体移动速度(limb movement speed)
>
> age               - 按tick计算的年龄(age in ticks)
>
> head_yaw   - 头偏角(Y轴旋转)
>
> head_pitch - 头仰角(X轴旋转)
>
> player_pos_x, player_pos_y, player_pos_z       - The players current world position
>
> player_rot_x, player_rot_y                - The entities current world rotation. North is 0
>
> frame_time                                          - The time in seconds since the last frame
>
> dimension                                           - The current dimension. Overworld: 0, Nether: -1, End: 1
>
> rule_index                                            - The index of the current matching random models rule

实体参数 (浮点型)

>   health                                   - The entity's current health
>
>   hurt_time                                - The time the entity is hurt for. Counts down from 10 to 0
>
>   death_time                               - The time the entity is dead. Counts up from 0 to 20
>
>   anger_time                              \- The remaining entity angry time in ticks. Starts with 400-780 while  agressive, and then counts down to 0 when the target is lost
>
>   anger_time_start                    \- The start value of anger_time
>
>   max_health                               - The entity's maximum health
>
>   move_forward                             - Currently broken
>
>   move_strafing                            - Currently broken
>
>   pos_x, pos_y, pos_z                      - The entities current world position
>
>   rot_x, rot_y                             - The entities current world rotation. North is 0
>
>   swing_progress                           - How far through an attack the entity is. Counts up from 0 to 1
>
>   id                                       - A unique numeric identifier for the entity

实体参数 (true/false)

>   is_aggressive       - If the entity is aggressive towards a player or another entity
>
>   is_alive         - If the entity is alive
>
>   is_burning       - If the entity is on fire
>
>   is_child         - If the entity is in its baby state
>
>   is_glowing       - If the entity has the Glowing effect
>
>   is_hurt          - If the entity is taking damage
>
>   is_in_hand       - If the entity is being held in your hand
>
>   is_in_item_frame - If the entity is in an item frame
>
>   is_in_ground     - If a trident is impaled in the ground
>
>   is_in_gui        - If the entity is inside the GUI
>
>   is_in_lava       - If the entity is touching lava
>
>   is_in_water      - If the entity is touching water
>
>   is_invisible     - If the entity has the Invisibility effect/NBT tag
>
>   is_on_ground     - If the entity is touching the ground
>
>   is_on_head       - If the entity is worn on another entity's head
>
>   is_on_shoulder     - If a parrot is sitting on your shoulder
>
>   is_ridden        - If the entity is being ridden by another entity
>
>   is_riding        - If the entity is riding another entity
>
>   is_sitting        - If a cat/wolf/parrot is sitting
>
>   is_sneaking      - If a cat/ocelot is sneaking
>
>   is_sprinting     - If a cat/ocelot is sprinting
>
>   is_tamed           - If a cat/wolf/parrot is tamed
>
>   is_wet           - If the entity is inside water/rain

运算符

> +, -, *, /, %
>
> !, &&, ||
>
> \>, >=, <, <=, ==, !=

函数

>   sin(x)                                      - Get the sine of x
>
>   cos(x)                                      - Get the cosine of c
>
>   asin(x)                                     - Get the arc sine of x
>
>   acos(x)                                     - Get the arc cosine of x
>
>   tan(x)                                      - Get the tangent of x
>
>   atan(x)                                     - Get the arc tangent of x
>
>   atan2(y, x)                                 - Get the angle between the positive x-axis and the point (x, y)
>
>   torad(deg)                                  - Convert degrees to radians
>
>   todeg(rad)                                  - Convert radians to degrees
>
>   min(x, y ,...)                              - Get the smallest number from a list of numbers
>
>   max(x, y, ...)                              - Get the largest number from a list of numbers
>
>   clamp(x, min, max)              - 将一个值限制在最小值和最大值之间
>
>   abs(x)                                      - Get the absolute value of a number. Will turn negative numbers positive
>
>   floor(x)                                    - Round x down to the nearest whole number
>
>   ceil(x)                                     - Round x up to the nearest whole number
>
>   exp(x)                                      - Get e (Euler's constant) raised to the power of x
>
>   frac(x)                                     - Get the fractional part of x (what's behind the decimal point)
>
>   log(x)                                      - Get the natural logarithm of x
>
>   pow(x, y)                                   - Get x raised to the power of y
>
>   random(seed)                                - Random number from 0 to 1. Providing a seed will always return the same result. The seed is optional
>
>   round(x)                                    - Round x to nearest whole number
>
>   signum(x)                                   - Get the sign of x (positive or negative)
>
>   sqrt(x)                                     - Get the square root of x
>
>   fmod(x, y)                                  - Similar to the % operator, but the returned value always has the same sign as the divisor
>
>   lerp(k, x, y)                                      - Linear interpolation between X and Y
>
>   if(cond, val, [cond2, val2, ...], val_else)  - 基于一个或更多条件选择一个值
>
>   print(id, n, x)                        - 每n帧输出x的值
>
>   printb(id, n, x)                        - Prints the boolean value "x" every N-th frame

布尔函数

> between(x, min, max)              - 检查一个值是否在最大和最小值之间
>
> equals(x, y, epsilon)                - 将两个浮点数和误差范围进行比较
>
> in(x, val1, val2, ...)                - 检查一个值是否和多个值之一相等

**示例：**

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

Walking animation:

​    x is a multipler to control how fast the leg swings back and forth, and y is a multiplier to control how far it swings back and forth

```
    "left_leg.rx": "sin(limb_swing*x)*limb_speed*y"
```

Attack animation:

​    x is a multipler for how much it rotates

```
    "head.rx": "sin(swing_progress*pi)*x"
```

 Hurt animation:

​    x is a multipler for how much it rotates

```
    "head.rx": "-sin(hurt_time/pi)*x"
```

Custom counter:

​    This is a counter that will count up while an entity is in water, and count down again when it leaves

```
   "var.counter": "if(is_in_water, min(20, var.counter + 0.1 * frame_time * 20), max(0, var.counter - 0.1 * frame_time * 20))"
```