<center><h1>系统属性</h1><p>System Properties</p></center>

系统属性必须添加到启动程序配置文件 (launcher profile) 中的 "JVM Arguments" 字段中。
例如，要启用扩展日志记录，请在JVM参数中添加 "-Dlog.detail=true"。

启用扩展日志记录

```properties
log.detail=<true|false>
```

将 final texture map 保存在 "debug" 文件夹中

```properties
saveTextureMap=<true|false>
```

将 final shader sources 保存在 "shaderpacks/debug" 文件夹中

```properties
shaders.debug.save=<true|false>
```

自动动态化所有怪物模型，
在测试自定义实体模型时很有用

```properties
animate.model.living=<true|false>
```

从文件夹 "playermodels" 读取玩家模型

```properties
player.models.local=<true|false>
```

每5秒自动重载一次玩家模型，
在测试自定义本地玩家模型时很有用

```properties
player.models.reload=<true|false>
```

