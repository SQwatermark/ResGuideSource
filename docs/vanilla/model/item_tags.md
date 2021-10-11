# 物品标签——添加更多物品

> [Minecraft wiki](https://minecraft-zh.gamepedia.com/模型#.E7.89.A9.E5.93.81.E6.A0.87.E7.AD.BE)

利用物品标签中的damage或custom_model_data，可以实现原版添加更多物品模型。

custom_model_data标签是1.14加入的，对于1.14之后的版本，建议使用custom_model_data而不是damage。

## damage用法

一个示例：

这里填写的damage的值为0-1之间的浮点数，对应整数类型的损害值Damage，对于有耐久度的物品，损害值为当前已消耗的耐久度。

- 耐久度为1561时，损害值Damage为0，物品标签damage值为0。
- 耐久度为0时，损害值为1561，物品标签damage值为1。

**diamond_hoe.json**

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/diamond_hoe"
    },
    "overrides": [
        { "predicate": {"damage": 0}, "model": "item/diamond_hoe"},
        { "predicate": {"damage": 0.0006402048655569782}, "model": "item/jineng/1"},
        { "predicate": {"damage": 0.0012804097311139564}, "model": "item/jineng/2"},
        { "predicate": {"damage": 0.0019206145966709346}, "model": "item/jineng/3"},
        ...
    ]
}
```

![image-20200722140339694](https://i.loli.net/2021/10/12/Cq8otRj6l1VhWcH.png)

下面分别为Damage为1-9时，钻石锄显示的图案，Unbreakable标签设置为1，用于隐藏耐久度槽：

![image-20200722140313561](https://i.loli.net/2021/10/12/KPEFsOS6RUqTZdi.png)

最令人头大的问题是，damage应该填哪些值，实际上游戏程序会将物品的实际damage值和predicate中给出的damage值作比较，predicate中给出的damage值可以比精确计算值小。[这里](https://geenium.github.io/damage-value-generator/)有一个工具，可以帮你计算并生成json文件。

## custom_model_data用法

一看名字我们就知道这个标签就是专门为模型准备的，不会和别的功能混到一块。所以在1.14之后的版本，建议用这个。

**diamond_hoe.json**

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/diamond_hoe"
    },
    "overrides": [
        { "predicate": {"custom_model_data": 1}, "model": "item/jineng/1"}
    ]
}
```

custom_model_data由CustomModelData整数NBT字段直接支持。

![image-20200722151801895](https://i.loli.net/2021/10/12/UTHgBhi35Nkdlfv.png)

![image-20200722151851998](https://i.loli.net/2021/10/12/VLqBgw9o8ikzUv5.png)