# 随机模型

我们可以为方块状态设置多种随机的模型，这点在原版Minecraft就有应用，例如石头。

**blockstates/stone.json**

```json
{
    "variants": {
        "": [
            { "model": "block/stone" },
            { "model": "block/stone_mirrored" },
            { "model": "block/stone", "y": 180 },
            { "model": "block/stone_mirrored", "y": 180 }
        ]
    }
}
```
