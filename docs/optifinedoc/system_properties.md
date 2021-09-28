<center><h1>系统属性</h1><p>System Properties</p></center>

系统属性必须添加到启动程序配置文件 (launcher profile) 中的 "JVM Arguments" 字段中。
例如，要启用扩展日志，请在JVM参数中添加 "-Dlog.detail=true"。

启用扩展日志

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

显示 frame time (ms) 而不是 FPS（2021.1.16新增）

```properties
frame.time=<true|false>
```

OpenGL debug groups（2021.1.20新增）

```properties
gl.debug.groups=<true|false>
```

忽略 OpenGL 错误（2021.1.20新增）
\<ids\> - 逗号分隔的错误id列表

```properties
gl.ignore.errors=<ids>
```

CEM debug models（2021.5.21新增）

Automatically generate CEM models for all supported entities using different colors for each model part

The part names and colors are written in the log

译注：不清楚效果所以原文放这，如果您知道效果，望告知

```properties
cem.debug.models=<true|false>
```