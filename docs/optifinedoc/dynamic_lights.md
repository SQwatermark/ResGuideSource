<center><h1>动态光源</h1><p>Dynamic Lights</p></center>

## 概述丨Overview

此配置允许模组定义实体和物品的动态光源等级。



## 属性文件丨dynamic_lights.properties

---

此配置文件允许模组定义实体和物品的动态光源等级。
位置: "/assets/<mod_id>/optifine/dynamic_lights.properties"

**实体光照等级**
实体名会被自动补全模组ID。
光照等级必须在0和15之间。
示例:
 entities=basalz:15 blitz:7

```
entities=<实体名:光照等级> ...  
```



**物品光照等级**
物品名会被自动补全模组ID。
光照等级必须在0和15之间。
示例:
 items=florb:15 morb:7

```
items=<物品名:光照等级> ...  
```

