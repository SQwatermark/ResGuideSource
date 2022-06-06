# 自定义语言

> 本章前置知识：
>
> ​	[额外的资源文件](../more-assets.md)
>
> ​	[JSON的基本语法](https://www.runoob.com/json/json-tutorial.html)

## 修改现有的语言文件

如果你不知道怎么做，甚至还头疼原版资源包里怎么只有英语语言文件的话，看看本章前置知识。

::: tip 提示

从1.13起，语言文件的格式从lang（本质properties格式）变成了json格式。

:::

## 如何添加一门语言

Minecraft 是支持添加新语言的，在[这里](https://minecraft-zh.gamepedia.com/%E8%B5%84%E6%BA%90%E5%8C%85#.E5.86.85.E5.AE.B9)有专业的说明。

pack.memeta 编写示例：

```json
{
  "pack":{
    "pack_format":8,
    "description":"添加自定义语言"
  },
  "language":{
    "my_lang":{                 //语言的编号，也就是语言文件的名字，例如简体中文是 "zh_cn"
      "name":"语言的完整名称",
      "region":"国家或地区名称",
      "bidirectional":false     //若为true，语言将会从右到左显示。
    }
  }
}
```

::: warning 注意

1. 务必注意 json 的语法，`pack.mcmeta` 的格式不正确的话，可能连资源包都无法加载，在 1.13 以上的版本中，语言文件也使用 json 格式，同样需要注意语法。
2. json规范本身是不支持注释的，请不要把注释也抄上。我在这里添加注释只是为了方便解说。
3. 语言文件中 `language.code`，`language.name`，`language.region` 三个键对应的值需要和 `pack.mcmeta `中的一致。

:::

## 拓展阅读

**[Minecraft中文wiki：语言](https://minecraft-zh.gamepedia.com/%E8%AF%AD%E8%A8%80)**

**[制作自定义语言包：从入门到入完门](https://www.mcbbs.net/thread-997830-1-1.html)**

## 圈内笑话

拆包 1.3.1 的 jar 文件，在 lang 文件夹中找到 zh_CN.lang（那时候中文语言文件是被包装在 jar 里的，文件名还允许大写字母）

第 559 行：

```properties
item.diode.name=雷石东直放站
```

这一版本的语言文件还有一些十分有趣的翻译，感兴趣可以自己查看

**[Minecraft中文WIKI关于1.3.1中部分译名错乱的说明](https://www.mcbbs.net/thread-40209-1-1.html)**
