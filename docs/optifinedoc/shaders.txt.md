<center><h1>光影</h1><p>Shaders</p></center>

::: tip

本文将按照译者理解添加了一些超链接和注释，因译者水平有限，不敢保证翻译准确，故在页面尾部附上原文。

光影和着色器都是 Shader 的翻译。下面统一翻译成着色器。（标题翻译成光影只是为了吸引眼球）

:::

## 概述|Overview

着色器模块（The Shaders Mod）使用了一条[延迟渲染管线（deferred rendering pipeline）](https://learnopengl-cn.github.io/05%20Advanced%20Lighting/08%20Deferred%20Shading/)。

管线首先处理G缓冲着色器（gbuffer shaders）。它们会将数据渲染成纹理（textures），而纹理会被发送到合成着色器（composite shaders）中。

可选的延迟着色器（deferred shaders）可以被添加到地形和水的渲染之间。

接着合成着色器把接收到的内容渲染成纹理，并将结果发送到最终着色器（the final shader）中。

最终着色器直接将结果输出到屏幕。

## 着色器文件|Shader Files

所有着色器文件都被放在光影包中的 "shaders" 文件夹下。

着色器源文件使用运行它们的程序的名字，并根据它们的类型添加扩展名。

| 扩展名 | 类型                          |
| ------ | ----------------------------- |
| .vsh   | 顶点着色器（Vertex shader）   |
| .gsh   | 几何着色器（Geometry shader） |
| .fsh   | 片段着色器（Fragment shader） |

几何着色器需要带布局限定符（layout qualifiers）的 OpenGL3.2 或者带有 "maxVerticesOut" 配置的 GL_ARB_geometry_shader4 拓展。

## 颜色附件|Color Attachments

着色器之间的数据传递是通过颜色附件（color attachments）来完成。

所有设备至少都有4个颜色附件，对于支持它的机器，有多大16个。

MacOS限制为8个颜色附件，即便是 modern GPU。

在延迟、合成、和最终着色器中，它们由 gcolor、gdepth、gnormal、composite、gaux1、gaux2、gaux3和gaux4 uniforms 引用。

（colortex0 到 colortexF 可以替代 gcolor, gdepth 等）

如果不谈名字的话，除了前两个以外，所有的颜色附件都是相同的，可以用于任何目的。

第一个，gcolor 将在渲染之前清除颜色并设为当前迷雾的颜色。

第二个，gdepth 将在渲染之前清除颜色并设为纯白色，并且使用了适合存储深度值的更高精度的缓冲区。

其他颜色附件将在渲染之前清除颜色并设置为 alpha 为 0 的黑色。

<br/>

每个颜色附件使用双缓冲区（A and B），逻辑名为 "main" 和 "alt"，可以用作[乒乓缓冲（ping-pong buffers）](https://blog.csdn.net/Sun19910114/article/details/52983553)。

当两个缓冲区切换，main/alt 与 A/B 之间的对应关系被反转。

G缓冲程序（gbuffer programs）总是在 "main" 缓冲（仅限 gaux1-4）中读写（它们不应该同时在同一个缓冲中读写）。

延迟/合成程序（deferred/composite programs）总是从 "main" 中读取并写入 "alt" 缓冲。

当一个延迟/合成程序被渲染，它写入的缓冲被反转，以便接下来的程序将当前的输出视为输入。

<br/>

The property "flip.\<program\>.\<buffer\>=\<true|false\>" can be used to enable or disable the flip independant of the buffer write.

The virtual programs "deferred_pre" and "composite_pre" can be used for buffer flipping before the deferred/composite pass.

<br/>

Output color attachments are configured with the "/* DRAWBUFFERS:XYZ */" comment, placed in the fragment shader.

Gbuffers, deferred and composite programs can write to any color attachment, but no more than 8 at the same time.

If the output color attachments are not configured, then the program will write to the first 8 color attachments.  

<br/>

When writing to the color attachments in the composite shader, blending is disabled. 

Writing to color attachments that the composite shader also reads from will generate artifacts (unless you just copy the original contents) 

<br/>

The vertex and fragment configuration parsing is affected by the preprocessor conditional compilation directives.

The following preprocessor directives are currently recognized:

```glsl
#define <macro>
#undef <macro>
#ifdef <macro>
#ifndef <macro>
#if <int>
#if defined <macro>
#if !defined <macro>
#elif <int>
#elif defined <macro> 
#elif !defined <macro>
#else
#endif
```

<br/>

The current shaderpack can be reloaded by pressing "F3+R" or using the command "/reloadShaders". 



## 着色器程序|Shader Programs

| 名字               | 渲染的对象 | 未定义时使用 |
| ------------------ | ---------- | ------------ |
| \<none\>           | GUI和菜单 | \<none\>     |
| 以下为 Shadow map |  |  |
| shadow | everything in shadow pass | \<none\> |
| shadow_solid | \<not used\> | shadow |
| shadow_cutout | \<not used\> | shadow |
| 以下为 GBuffers |  |  |
| gbuffers_basic | 栓绳、方块选择框 | \<none\> |
| gbuffers_textured | 粒子 | gbuffers_basic |
| gbuffers_textured_lit | lit_particles, 世界边界 | gbuffers_textured |
| gbuffers_skybasic | 天空、地平线、星星、虚空 | gbuffers_basic |
| gbuffers_skytextured | 日月 | gbuffers_textured |
| gbuffers_clouds | 云 | gbuffers_textured |
| gbuffers_terrain | solid, cutout, cutout_mip | gbuffers_textured_lit |
| gbuffers_terrain_solid | \<not used\> | gbuffers_terrain |
| gbuffers_terrain_cutout_mip | \<not used\> | gbuffers_terrain |
| gbuffers_terrain_cutout | \<not used\> | gbuffers_terrain |
| gbuffers_damagedblock | 被破坏的方块 | gbuffers_terrain |
| gbuffers_block | 方块实体 | gbuffers_terrain |
| gbuffers_beaconbeam | 信标光柱                            | gbuffers_textured |
| gbuffers_item | \<not used\> | gbuffers_textured_lit |
| gbuffers_entities | 实体 | gbuffers_textured_lit |
| gbuffers_entities_glowing | glowing entities, spectral effect | gbuffers_entities |
| gbuffers_armor_glint | glint on armor and handheld items | gbuffers_textured |
| gbuffers_spidereyes | eyes of spider, enderman and dragon | gbuffers_textured |
| gbuffers_hand | hand and opaque handheld objects | gbuffers_textured_lit |
| gbuffers_weather | 雨雪 | gbuffers_textured_lit |
| 以下为 Deferred |  |  |
| deferred_pre | \<virtual\> flip ping-pong buffers | \<none\> |
| deferred | \<deferred\> | \<none\> |
| deferred1 | \<deferred\> | \<none\> |
| ... |  |  |
| deferred15 | \<deferred\> | \<none\> |
| 以下为 GBuffers translucent |  |  |
| gbuffers_water | translucent | gbuffers_terrain |
| gbuffers_hand_water | translucent handheld objects | gbuffers_hand |
| 以下为 Composite |  |  |
| composite_pre | \<virtual\> flip ping-pong buffers | \<none\> |
| composite | \<composite\> | \<none\> |
| composite1 | \<composite\> | \<none\> |
| ... |  |  |
| composite15 | \<composite\> | \<none\> |
| 以下为 Final |  |  |
| final | \<final\> | \<none\> |

备注：

- The programs shadow_solid, shadow_cutout, gbuffers_terrain_solid, gbuffers_terrain_cutout and gbuffers_terrain_cutout_mip are not used

Todo：

- Separate programs for world border, entities (by id, by type), cape, elytra, wolf collar, etc. 

## 属性|Attributes

| Source                         | Value                                | Comment                                                      |
| ------------------------------ | ------------------------------------ | ------------------------------------------------------------ |
| attribute vec3 mc_Entity;      | xy = blockId, renderType             | "blockId" is used only for blocks specified in "block.properties" |
| attribute vec2 mc_midTexCoord; | st = midTexU, midTexV                | Sprite middle UV coordinates                                 |
| attribute vec4 at_tangent;     | xyz = tangent vector, w = handedness |                                                              |

## 全局变量|Uniforms

| Source                                  | Value                                                        |
| --------------------------------------- | ------------------------------------------------------------ |
| uniform int heldItemId;                 | held item ID (main hand), used only for items defined in "item.properties" |
| uniform int heldBlockLightValue;        | held item light value (main hand)                            |
| uniform int heldItemId2;                | held item ID (off hand), used only for items defined in "item.properties" |
| uniform int heldBlockLightValue2;       | held item light value (off hand)                             |
| uniform int fogMode;                    | GL_LINEAR, GL_EXP or GL_EXP2                                 |
| uniform float fogDensity;               | 0.0-1.0                                                      |
| uniform vec3 fogColor;                  | r, g, b                                                      |
| uniform vec3 skyColor;                  | r, g, b                                                      |
| uniform int worldTime;                  | \<ticks\> = worldTicks % 24000                               |
| uniform int worldDay;                   | \<days\> = worldTicks / 24000                                |
| uniform int moonPhase;                  | 0-7                                                          |
| uniform int frameCounter;               | Frame index (0 to 720719, then resets to 0)                  |
| uniform float frameTime;                | last frame time, seconds                                     |
| uniform float frameTimeCounter;         | run time, seconds (resets to 0 after 3600s)                  |
| uniform float sunAngle;                 | 0.0-1.0                                                      |
| uniform float shadowAngle;              | 0.0-1.0                                                      |
| uniform float rainStrength;             | 0.0-1.0                                                      |
| uniform float aspectRatio;              | viewWidth / viewHeight                                       |
| uniform float viewWidth;                | viewWidth                                                    |
| uniform float viewHeight;               | viewHeight                                                   |
| uniform float near;                     | near viewing plane distance                                  |
| uniform float far;                      | far viewing plane distance                                   |
| uniform vec3 sunPosition;               | sun position in eye space                                    |
| uniform vec3 moonPosition;              | moon position in eye space                                   |
| uniform vec3 shadowLightPosition;       | shadow light (sun or moon) position in eye space             |
| uniform vec3 upPosition;                | direction up                                                 |
| uniform vec3 cameraPosition;            | camera position in world space                               |
| uniform vec3 previousCameraPosition;    | last frame cameraPosition                                    |
| uniform mat4 gbufferModelView;          | modelview matrix after setting up the camera transformations |
| uniform mat4 gbufferModelViewInverse;   | inverse gbufferModelView                                     |
| uniform mat4 gbufferPreviousModelView;  | last frame gbufferModelView                                  |
| uniform mat4 gbufferProjection;         | projection matrix when the gbuffers were generated           |
| uniform mat4 gbufferProjectionInverse;  | inverse gbufferProjection                                    |
| uniform mat4 gbufferPreviousProjection; | last frame gbufferProjection                                 |
| uniform mat4 shadowProjection;          | projection matrix when the shadow map was generated          |
| uniform mat4 shadowProjectionInverse;   | inverse shadowProjection                                     |
| uniform mat4 shadowModelView;           | modelview matrix when the shadow map was generated           |
| uniform mat4 shadowModelViewInverse;    | inverse shadowModelView                                      |
| uniform float wetness;                  | rainStrength smoothed with wetnessHalfLife or drynessHalfLife |
| uniform float eyeAltitude;              | view entity Y position                                       |
| uniform ivec2 eyeBrightness;            | x = block brightness, y = sky brightness, light 0-15 = brightness 0-240 |
| uniform ivec2 eyeBrightnessSmooth;      | eyeBrightness smoothed with eyeBrightnessHalflife            |
| uniform ivec2 terrainTextureSize;       | not used                                                     |
| uniform int terrainIconSize;            | not used                                                     |
| uniform int isEyeInWater;               | 1 = camera is in water, 2 = camera is in lava                |
| uniform float nightVision;              | night vision (0.0-1.0)                                       |
| uniform float blindness;                | blindness (0.0-1.0)                                          |
| uniform float screenBrightness;         | screen brightness (0.0-1.0)                                  |
| uniform int hideGUI;                    | GUI is hidden                                                |
| uniform float centerDepthSmooth;        | centerDepth smoothed with centerDepthSmoothHalflife          |
| uniform ivec2 atlasSize;                | texture atlas size (only set when the atlas texture is bound) |
| uniform vec4 entityColor;               | entity color multiplier (entity hurt, creeper flashing when exploding) |
| uniform int entityId;                   | entity ID                                                    |
| uniform int blockEntityId;              | block entity ID (block ID for the tile entity, only for blocks specified in "block.properties") |
| uniform ivec4 blendFunc;                | blend function (srcRGB, dstRGB, srcAlpha, dstAlpha)          |
| uniform int instanceId;                 | instance ID when instancing is enabled (countInstances > 1), 0 = original, 1-N = copies |
| uniform float playerMood;               | player mood (0.0-1.0), increases the longer a player stays underground |

## GBuffers Uniforms

> Programs: basic, textured, textured_lit, skybasic, skytextured, clouds, terrain, terrain_solid, terrain_cutout_mip, terrain_cutout, damagedblock, water, block, beaconbeam, item, entities, armor_glint, spidereyes, hand, hand_water, weather)

| Source                          | Value                                                   |
| ------------------------------- | ------------------------------------------------------- |
| uniform sampler2D texture;      | 0                                                       |
| uniform sampler2D lightmap;     | 1                                                       |
| uniform sampler2D normals;      | 2                                                       |
| uniform sampler2D specular;     | 3                                                       |
| uniform sampler2D shadow;       | waterShadowEnabled ? 5 : 4                              |
| uniform sampler2D watershadow;  | 4                                                       |
| uniform sampler2D shadowtex0;   | 4                                                       |
| uniform sampler2D shadowtex1;   | 5                                                       |
| uniform sampler2D depthtex0;    | 6                                                       |
| uniform sampler2D gaux1;        | 7  \<custom texture or output from deferred programs\>  |
| uniform sampler2D gaux2;        | 8  \<custom texture or output from deferred programs\>  |
| uniform sampler2D gaux3;        | 9  \<custom texture or output from deferred programs\>  |
| uniform sampler2D gaux4;        | 10  \<custom texture or output from deferred programs\> |
| uniform sampler2D colortex4;    | 7  \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortex5;    | 8  \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortex6;    | 9  \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortex7;    | 10  \<custom texture or output from deferred programs\> |
| uniform sampler2D colortex8;    | 16  \<custom texture or output from deferred programs\> |
| uniform sampler2D colortex9;    | 17  \<custom texture or output from deferred programs\> |
| uniform sampler2D colortexA;    | 18 \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortexB;    | 19 \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortexC;    | 20 \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortexD;    | 21 \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortexE;    | 22 \<custom texture or output from deferred programs\>  |
| uniform sampler2D colortexF;    | 23 \<custom texture or output from deferred programs\>  |
| uniform sampler2D depthtex1;    | 11                                                      |
| uniform sampler2D shadowcolor;  | 13                                                      |
| uniform sampler2D shadowcolor0; | 13                                                      |
| uniform sampler2D shadowcolor1; | 14                                                      |
| uniform sampler2D noisetex;     | 15                                                      |

## Shadow Uniforms

> Programs: shadow, shadow_solid, shadow_cutout 

| Source                          | Value                      |
| ------------------------------- | -------------------------- |
| uniform sampler2D tex;          | 0                          |
| uniform sampler2D texture;      | 0                          |
| uniform sampler2D lightmap;     | 1                          |
| uniform sampler2D normals;      | 2                          |
| uniform sampler2D specular;     | 3                          |
| uniform sampler2D shadow;       | waterShadowEnabled ? 5 : 4 |
| uniform sampler2D watershadow;  | 4                          |
| uniform sampler2D shadowtex0;   | 4                          |
| uniform sampler2D shadowtex1;   | 5                          |
| uniform sampler2D gaux1;        | 7  \<custom texture\>      |
| uniform sampler2D gaux2;        | 8  \<custom texture\>      |
| uniform sampler2D gaux3;        | 9  \<custom texture\>      |
| uniform sampler2D gaux4;        | 10  \<custom texture\>     |
| uniform sampler2D colortex4;    | 7  \<custom texture\>      |
| uniform sampler2D colortex5;    | 8  \<custom texture\>      |
| uniform sampler2D colortex6;    | 9  \<custom texture\>      |
| uniform sampler2D colortex7;    | 10  \<custom texture\>     |
| uniform sampler2D colortex8;    | 16  \<custom texture\>     |
| uniform sampler2D colortex9;    | 17  \<custom texture\>     |
| uniform sampler2D colortexA;    | 18  \<custom texture\>     |
| uniform sampler2D colortexB;    | 19  \<custom texture\>     |
| uniform sampler2D colortexC;    | 20  \<custom texture\>     |
| uniform sampler2D colortexD;    | 21  \<custom texture\>     |
| uniform sampler2D colortexE;    | 22  \<custom texture\>     |
| uniform sampler2D colortexF;    | 23  \<custom texture\>     |
| uniform sampler2D shadowcolor;  | 13                         |
| uniform sampler2D shadowcolor0; | 13                         |
| uniform sampler2D shadowcolor1; | 14                         |
| uniform sampler2D noisetex;     | 15                         |

## Composite and Deferred Uniforms

> Programs: composite, composite1, composite2, composite3, composite4, composite5, composite6, composite7, final, deferred, deferred1, deferred2, deferred3, deferred4, deferred5, deferred6, deferred7

| Source                          | Value                      |
| ------------------------------- | -------------------------- |
| uniform sampler2D gcolor;       | 0                          |
| uniform sampler2D gdepth;       | 1                          |
| uniform sampler2D gnormal;      | 2                          |
| uniform sampler2D composite;    | 3                          |
| uniform sampler2D gaux1;        | 7                          |
| uniform sampler2D gaux2;        | 8                          |
| uniform sampler2D gaux3;        | 9                          |
| uniform sampler2D gaux4;        | 10                         |
| uniform sampler2D colortex0;    | 0                          |
| uniform sampler2D colortex1;    | 1                          |
| uniform sampler2D colortex2;    | 2                          |
| uniform sampler2D colortex3;    | 3                          |
| uniform sampler2D colortex4;    | 7                          |
| uniform sampler2D colortex5;    | 8                          |
| uniform sampler2D colortex6;    | 9                          |
| uniform sampler2D colortex7;    | 10                         |
| uniform sampler2D colortex8;    | 16                         |
| uniform sampler2D colortex9;    | 17                         |
| uniform sampler2D colortexA;    | 18                         |
| uniform sampler2D colortexB;    | 19                         |
| uniform sampler2D colortexC;    | 20                         |
| uniform sampler2D colortexD;    | 21                         |
| uniform sampler2D colortexE;    | 22                         |
| uniform sampler2D colortexF;    | 23                         |
| uniform sampler2D shadow;       | waterShadowEnabled ? 5 : 4 |
| uniform sampler2D watershadow;  | 4                          |
| uniform sampler2D shadowtex0;   | 4                          |
| uniform sampler2D shadowtex1;   | 5                          |
| uniform sampler2D gdepthtex;    | 6                          |
| uniform sampler2D depthtex0;    | 6                          |
| uniform sampler2D depthtex1;    | 11                         |
| uniform sampler2D depthtex2;    | 12                         |
| uniform sampler2D shadowcolor;  | 13                         |
| uniform sampler2D shadowcolor0; | 13                         |
| uniform sampler2D shadowcolor1; | 14                         |
| uniform sampler2D noisetex;     | 15                         |

## GBuffers Textures

| Id   | Name         | Legacy name                                                  |
| ---- | ------------ | ------------------------------------------------------------ |
| 0    | texture      |                                                              |
| 1    | lightmap     |                                                              |
| 2    | normals      |                                                              |
| 3    | specular     |                                                              |
| 4    | shadowtex0   | shadow, watershadow                                          |
| 5    | shadowtex1   | shadow (when watershadow used)                               |
| 6    | depthtex0    |                                                              |
| 7    | gaux1        | colortex4 \<custom texture or output from deferred programs\> |
| 8    | gaux2        | colortex5 \<custom texture or output from deferred programs\> |
| 9    | gaux3        | colortex6 \<custom texture or output from deferred programs\> |
| 10   | gaux4        | colortex7 \<custom texture or output from deferred programs\> |
| 12   | depthtex1    |                                                              |
| 13   | shadowcolor0 | shadowcolor                                                  |
| 14   | shadowcolor1 | \<custom texture or output from deferred programs\>          |
| 15   | noisetex     | \<custom texture or output from deferred programs\>          |
| 16   | colortex8    | \<custom texture or output from deferred programs\>          |
| 17   | colortex9    | \<custom texture or output from deferred programs\>          |
| 18   | colortexA    | \<custom texture or output from deferred programs\>          |
| 19   | colortexB    | \<custom texture or output from deferred programs\>          |
| 20   | colortexC    | \<custom texture or output from deferred programs\>          |
| 21   | colortexD    | \<custom texture or output from deferred programs\>          |
| 22   | colortexE    | \<custom texture or output from deferred programs\>          |
| 23   | colortexF    | \<custom texture or output from deferred programs\>          |

## Shadow Textures

| Id   | Name         | Legacy name                    |
| ---- | ------------ | ------------------------------ |
| 0    | texture      | tex                            |
| 1    | lightmap     |                                |
| 2    | normals      |                                |
| 3    | specular     |                                |
| 4    | shadowtex0   | shadow, watershadow            |
| 5    | shadowtex0   | shadow (when watershadow used) |
| 7    | gaux1        | colortex4 \<custom texture\>   |
| 8    | gaux2        | colortex5 \<custom texture\>   |
| 9    | gaux3        | colortex6 \<custom texture\>   |
| 10   | gaux4        | colortex7 \<custom texture\>   |
| 13   | shadowcolor0 | shadowcolor                    |
| 14   | shadowcolor1 |                                |
| 15   | noisetex     |                                |
| 16   | colortex8    | \<custom texture\>             |
| 17   | colortex9    | \<custom texture\>             |
| 18   | colortexA    | \<custom texture\>             |
| 19   | colortexB    | \<custom texture\>             |
| 20   | colortexC    | \<custom texture\>             |
| 21   | colortexD    | \<custom texture\>             |
| 22   | colortexE    | \<custom texture\>             |
| 23   | colortexF    | \<custom texture\>             |

## Composite and Deferred Textures

| Id   | Name         | Legacy name                    |
| ---- | ------------ | ------------------------------ |
| 0    | colortex0    | gcolor                         |
| 1    | colortex1    | gdepth                         |
| 2    | colortex2    | gnormal                        |
| 3    | colortex3    | composite                      |
| 4    | shadowtex0   | shadow, watershadow            |
| 5    | shadowtex1   | shadow (when watershadow used) |
| 6    | depthtex0    | gdepthtex                      |
| 7    | colortex4    | gaux1                          |
| 8    | colortex5    | gaux2                          |
| 9    | colortex6    | gaux3                          |
| 10   | colortex7    | gaux4                          |
| 11   | depthtex1    |                                |
| 12   | depthtex2    |                                |
| 13   | shadowcolor0 | shadowcolor                    |
| 14   | shadowcolor1 |                                |
| 15   | noisetex     |                                |
| 16   | colortex8    |                                |
| 17   | colortex9    |                                |
| 18   | colortexA    |                                |
| 19   | colortexB    |                                |
| 20   | colortexC    |                                |
| 21   | colortexD    |                                |
| 22   | colortexE    |                                |
| 23   | colortexF    |                                |

## Depth buffers usage

| Name      | Usage                                                        |
| --------- | ------------------------------------------------------------ |
| depthtex0 | everything                                                   |
| depthtex1 | no translucent objects (water, stained glass)                |
| depthtex2 | no translucent objects (water, stained glass), no handheld objects |

## Shadow buffers usage

| Name       | Usage                                         |
| ---------- | --------------------------------------------- |
| shadowtex0 | everything                                    |
| shadowtex1 | no translucent objects (water, stained glass) |

## Vertex Shader Configuration

| Source                             | Effect                                                       |
| ---------------------------------- | ------------------------------------------------------------ |
| attribute \<type\> mc_Entity;      | useEntityAttrib = true                                       |
| attribute \<type\> mc_midTexCoord; | useMidTexCoordAttrib = true                                  |
| attribute \<type\> at_tangent;     | useTangentAttrib = true                                      |
| const int countInstances = 1;      | when "countInstances > 1" the geometry will be rendered several times, see uniform "instanceId" |

## Geometry Shader Configuration

| Source                                      | Effect                                                    |
| ------------------------------------------- | --------------------------------------------------------- |
| #extension GL_ARB_geometry_shader4 : enable | Enable GL_ARB_geometry_shader4                            |
| const int maxVerticesOut = 3;               | Set GEOMETRY_VERTICES_OUT_ARB for GL_ARB_geometry_shader4 |

## Fragment Shader Configuration

| Source                         | Effect                                                  | Comment |
| ------------------------------ | ------------------------------------------------------- | ------- |
| uniform \<type\> shadow;       | shadowDepthBuffers = 1                                  |         |
| uniform \<type\> watershadow;  | shadowDepthBuffers = 2                                  |         |
| uniform \<type\> shadowtex0;   | shadowDepthBuffers = 1                                  |         |
| uniform \<type\> shadowtex1;   | shadowDepthBuffers = 2                                  |         |
| uniform \<type\> shadowcolor;  | shadowColorBuffers = 1                                  |         |
| uniform \<type\> shadowcolor0; | shadowColorBuffers = 1                                  |         |
| uniform \<type\> shadowcolor1; | shadowColorBuffers = 2                                  |         |
| uniform \<type\> depthtex0;    | depthBuffers = 1                                        |         |
| uniform \<type\> depthtex1;    | depthBuffers = 2                                        |         |
| uniform \<type\> depthtex2;    | depthBuffers = 3                                        |         |
| uniform \<type\> gdepth;       | if (bufferFormat[1] == RGBA) bufferFormat[1] = RGBA32F; |         |
| uniform \<type\> gaux1;        | colorBuffers = 5                                        |         |
| uniform \<type\> gaux2;        | colorBuffers = 6                                        |         |
| uniform \<type\> gaux3;        | colorBuffers = 7                                        |         |
| uniform \<type\> gaux4;        | colorBuffers = 8                                        |         |
| uniform \<type\> colortex4;    | colorBuffers = 5                                        |         |
| uniform \<type\> colortex5;    | colorBuffers = 6                                        |         |
| uniform \<type\> colortex6;    | colorBuffers = 7                                        |         |
| uniform \<type\> colortex7;    | colorBuffers = 8                                        |         |
| /* SHADOWRES:1024 */                             | shadowMapWidth = shadowMapHeight = 1024                      ||
| const int shadowMapResolution  = 1024;           | shadowMapWidth = shadowMapHeight = 1024                      ||
| /* SHADOWFOV:90.0 */                             | shadowMapFov = 90                                            ||
| const float shadowMapFov =  90.0;                | shadowMapFov = 90                                            ||
| /* SHADOWHPL:160.0 */                            | shadowMapDistance = 160.0                                    ||
| const float shadowDistance =  160.0f;            | shadowMapDistance = 160.0                                    ||
| const float  shadowDistanceRenderMul = -1f;      | shadowDistanceRenderMul = -1 |When > 0  enable shadow optimization (shadowRenderDistance = shadowDistance *  shadowDistanceRenderMul)|
| const float shadowIntervalSize  = 2.0f;          | shadowIntervalSize = 2.0                                     ||
| const bool  generateShadowMipmap = true;         | shadowMipmap = true                                          ||
| const bool  generateShadowColorMipmap = true;    | shadowColorMipmap = true                                     ||
| const bool  shadowHardwareFiltering = true;      | shadowHardwareFiltering = true                               ||
| const bool  shadowHardwareFiltering0 = true;     | shadowHardwareFiltering[0] = true                            ||
| const bool  shadowHardwareFiltering1 = true;     | shadowHardwareFiltering[1] = true                            ||
| const bool shadowtexMipmap =  true;              | shadowMipmap[0] = true                                       ||
| const bool shadowtex0Mipmap =  true;             | shadowMipmap[0] = true                                       ||
| const bool shadowtex1Mipmap =  true;             | shadowMipmap[1] = true                                       ||
| const bool shadowcolor0Mipmap  = true;           | shadowColorMipmap[0] = true                                  ||
| const bool shadowColor0Mipmap  = true;           | shadowColorMipmap[0] = true                                  ||
| const bool shadowcolor1Mipmap  = true;           | shadowColorMipmap[1] = true                                  ||
| const bool shadowColor1Mipmap  = true;           | shadowColorMipmap[1] = true                                  ||
| const bool shadowtexNearest =  true;             | shadowFilterNearest[0] = true                                ||
| const bool shadowtex0Nearest =  true;            | shadowFilterNearest[0] = true                                ||
| const bool  shadow0MinMagNearest = true;         | shadowFilterNearest[0] = true                                ||
| const bool shadowtex1Nearest =  true;            | shadowFilterNearest[1] = true                                ||
| const bool  shadow1MinMagNearest = true;         | shadowFilterNearest[1] = true                                ||
| const bool shadowcolor0Nearest  = true;          | shadowColorFilterNearest[0] = true                           ||
| const bool shadowColor0Nearest  = true;          | shadowColorFilterNearest[0] = true                           ||
| const bool  shadowColor0MinMagNearest = true;    | shadowColorFilterNearest[0] = true                           ||
| const bool shadowcolor1Nearest  = true;          | shadowColorFilterNearest[1] = true                           ||
| const bool shadowColor1Nearest  = true;          | shadowColorFilterNearest[1] = true                           ||
| const bool  shadowColor1MinMagNearest = true;    | shadowColorFilterNearest[1] = true                           ||
| /* WETNESSHL:600.0 */                            | wetnessHalfLife = 600 (ticks)                                ||
| const float wetnessHalflife =  600.0f;           | wetnessHalfLife = 600 (ticks)                                ||
| /* DRYNESSHL:200.0 */                            | drynessHalfLife = 200 (ticks)                                ||
| const float drynessHalflife =  200.0f;           | drynessHalfLife = 200 (ticks)                                ||
| const float  eyeBrightnessHalflife = 10.0f;      | eyeBrightnessHalflife = 10 (ticks)                           ||
| const float  centerDepthHalflife = 1.0f;         | centerDepthSmoothHalflife = 1 (ticks)                        ||
| const float sunPathRotation =  0f;               | sunPathRotation = 0f                                         ||
| const float  ambientOcclusionLevel = 1.0f;       | ambientOcclusionLevel = 1.0f |0.0f = AO  disabled, 1.0f = vanilla AO|
| const int superSamplingLevel =  1;               | superSamplingLevel = 1                                       ||
| const int  noiseTextureResolution = 256;         | noiseTextureResolution = 256                                 ||
| /* GAUX4FORMAT:RGBA32F */                        | buffersFormat[7] = GL_RGBA32F                                ||
| /* GAUX4FORMAT:RGB32F */                         | buffersFormat[7] = GL_RGB32F                                 ||
| /* GAUX4FORMAT:RGB16 */                          | buffersFormat[7] = GL_RGB16                                  ||
| const int  \<bufferIndex\>Format = \<format\>;   | bufferFormats[index] = \<format\> |See "Draw  Buffer Index" and "Texture Formats"|
| const bool  \<bufferIndex\>Clear = false;        | gbuffersClear[index] = false |Skip glClear()  for the given buffer, only for "composite" and "deferred"  programs|
| const vec4  \<bufferIndex\>ClearColor = vec4();  | gbuffersClearColor[index] = vec4(r, g, b, a) |Clear color for the given  buffer, only for "composite" and "deferred" programs|
| const bool  \<bufferIndex\>MipmapEnabled = true; | bufferMipmaps[index] = true |Only for  programs "composite" , "deferred" and "final"|
| const int  \<shadowBufferIx\>Format = \<format\>; | shadowBufferFormats[index] = \<format\> |See "Shadow Buffer  Index" and "Texture Formats"|
| const bool  \<shadowBufferIx\>Clear = false;     | shadowBuffersClear[index] = false |Skip glClear() for  the given shadow color buffer|
| const vec4  \<shadowBufferIx\>ClearColor = vec4(); | shadowBuffersClearColor[index] = vec4(r, g, b, a) |Clear color for the given shadow  color buffer|
| /* DRAWBUFFERS:02BF */                           | drawBuffers = "02BF" |Draw  buffers 0, 2, B and F|

## Draw Buffer Index

| Prefix          | Index |
| --------------- | ----- |
| colortex\<0-F\> | 0-F   |
| gcolor          | 0     |
| gdepth          | 1     |
| gnormal         | 2     |
| composite       | 3     |
| gaux1           | 4     |
| gaux2           | 5     |
| gaux3           | 6     |
| gaux4           | 7     |

## Shadow Buffer Index

| Prefix             | Index |
| ------------------ | ----- |
| shadowcolor        | 0     |
| shadowcolor\<0-1\> | 0-1   |

## Texture Formats

**1. 8-bit normalized**

>  R8
>
>  RG8
>
>  RGB8
>
>  RGBA8

**2. 8-bit signed normalized**

>  R8_SNORM
>
>  RG8_SNORM
>
>  RGB8_SNORM
>
>  RGBA8_SNORM

**3. 16-bit normalized**

>  R16
>
>  RG16
>
>  RGB16
>
>  RGBA16

**4. 16-bit signed normalized**

>  R16_SNORM
>
>  RG16_SNORM
>
>  RGB16_SNORM
>
>  RGBA16_SNORM

**5. 16-bit float**

>  R16F
>
>  RG16F
>
>  RGB16F
>
>  RGBA16F

**6. 32-bit float**

>  R32F
>
>  RG32F
>
>  RGB32F
>
>  RGBA32F

**7. 32-bit integer**

>  R32I
>
>  RG32I
>
>  RGB32I
>
>  RGBA32I

**8. 32-bit unsigned integer**

>  R32UI
>
>  RG32UI
>
>  RGB32UI
>
>  RGBA32UI

**9. Mixed**

>  R3_G3_B2
>
>  RGB5_A1
>
>  RGB10_A2
>
>  R11F_G11F_B10F
>
>  RGB9_E5

## Pixel Formats

**1. Normalized**

>  RED
>
>  RG
>
>  RGB
>
>  BGR
>
>  RGBA
>
>  BGRA

**2. Integer**

>  RED_INTEGER
>
>  RG_INTEGER
>
>  RGB_INTEGER
>
>  BGR_INTEGER
>
>  RGBA_INTEGER
>
>  BGRA_INTEGER

## Pixel Types

>  BYTE
>
>  SHORT
>
>  INT
>
>  HALF_FLOAT
>
>  FLOAT
>
>  UNSIGNED_BYTE
>
>  UNSIGNED_BYTE_3_3_2
>
>  UNSIGNED_BYTE_2_3_3_REV
>
>  UNSIGNED_SHORT
>
>  UNSIGNED_SHORT_5_6_5
>
>  UNSIGNED_SHORT_5_6_5_REV
>
>  UNSIGNED_SHORT_4_4_4_4
>
>  UNSIGNED_SHORT_4_4_4_4_REV
>
>  UNSIGNED_SHORT_5_5_5_1
>
>  UNSIGNED_SHORT_1_5_5_5_REV
>
>  UNSIGNED_INT
>
>  UNSIGNED_INT_8_8_8_8
>
>  UNSIGNED_INT_8_8_8_8_REV
>
>  UNSIGNED_INT_10_10_10_2
>
>  UNSIGNED_INT_2_10_10_10_REV

## Block ID mapping

The block ID mapping is defined in "shaders/block.properties" included in the shader pack.

Forge mods may add custom block mapping as "assets/\<modid\>/shaders/block.properties" in the mod JAR file.

The "block.properties" file can use conditional preprocessor directives (#ifdef, #if, etc.)

For more details see section "Standard Macros" A to G. Option macros are not available.

Format "block.\<id\>=\<block1\> \<block2\> ..."

The key is the substitute block ID, the values are the blocks which are to be replaced.

Only one line per block ID is allowed.

See "properties_files.txt" for the block matching rules.

```properties
# Short format
block.31=red_flower yellow_flower reeds
# Long format
block.32=minecraft:red_flower ic2:nether_flower botania:reeds
# Properties
block.33=minecraft:red_flower:type=white_tulip minecraft:red_flower:type=pink_tulip botania:reeds:type=green
```

See "properties.files" for more details.

## Block render layers

The custom block render layers are defined in "shaders/block.properties" included in the shader pack.

```properties
layer.solid=<blocks>
layer.cutout=<blocks>
layer.cutout_mipped=<blocks>
layer.translucent=<blocks>
```

Layers

> solid - no alpha, no blending (solid textures)
>
> cutout - alpha, no blending (cutout textures)
>
> cutout_mipped - alpha, no blending, mipmaps (cutout with mipmaps)
>
> translucent - alpha, blending, mipmaps (water, stained glass)

Blocks which are solid opaque cubes (stone, dirt, ores, etc) can't be rendered on a custom layer as this would affect face culling, ambient occlusion, light propagation and so on.

For exaple:

```properties
layer.translucent=glass_pane fence wooden_door
```

## Item ID mapping

The item ID mapping is defined in "shaders/item.properties" included in the shader pack.

Forge mods may add custom item mapping as "assets/\<modid\>/shaders/item.properties" in the mod JAR file.

The "item.properties" file can use conditional preprocessor directives (#ifdef, #if, etc.)

For more details see section "Standard Macros" A to G. Option macros are not available.

Format "item.\<id\>=\<item1\> \<item2\> ..."

The key is the substitute item ID, the values are the items which are to be replaced.

Only one line per item ID is allowed.

```properties
# Short format
item.5000=diamond_sword dirt
# Long format
item.5001=minecraft:diamond_sword botania:reeds
```

## Entity ID mapping

The entity ID mapping is defined in "shaders/entity.properties" included in the shader pack.

Forge mods may add custom entity mapping as "assets/\<modid\>/shaders/entity.properties" in the mod JAR file.

The "entity.properties" file can use conditional preprocessor directives (#ifdef, #if, etc.)

For more details see section "Standard Macros" A to G. Option macros are not available.

Format "entity.\<id\>=\<entity1\> \<entity2\> ..."

The key is the substitute entity ID, the values are the entities which are to be replaced.

Only one line per entity ID is allowed.

```properties
# Short format
entity.2000=sheep cow
# Long format
entity.2001=minecraft:pig botania:pixie
```

## Standard Macros

The standard macros are automatically included after the "#version" declaration in every shader file

**A. Minecraft version**

```glsl
#define MC_VERSION <value>
```

The value is in format 122 (major 1, minor 2, release 2)

For example: 1.9.4 -\> 10904, 1.11.2 -\> 11102, etc.

**B. Maximum supported GL version**

```glsl
#define MC_GL_VERSION <value>
```

The value is integer, for example: 210, 320, 450

**C. Maximum supported GLSL version**

```glsl
#define MC_GLSL_VERSION <value>
```

The value is integer, for example: 120, 150, 450

**D. Operating system**

One of the following:

```glsl
#define MC_OS_WINDOWS
#define MC_OS_MAC
#define MC_OS_LINUX
#define MC_OS_OTHER
```

**E. GPU**

One of the following:

```glsl
#define MC_GL_VENDOR_ATI
#define MC_GL_VENDOR_INTEL
#define MC_GL_VENDOR_NVIDIA
#define MC_GL_VENDOR_XORG
#define MC_GL_VENDOR_OTHER
```

**F. Driver**

One of the following:

```glsl
#define MC_GL_RENDERER_RADEON 
#define MC_GL_RENDERER_GEFORCE
#define MC_GL_RENDERER_QUADRO
#define MC_GL_RENDERER_INTEL
#define MC_GL_RENDERER_GALLIUM
#define MC_GL_RENDERER_MESA
#define MC_GL_RENDERER_OTHER
```

**G. OpenGL extensions**

 Macros for the supported OpenGL extensions are named like the corresponding extension with a prefix "MC\_".

 For example the macro "MC\_GL\_ARB\_shader\_texture\_lod" is defined when the extension "GL\_ARB\_shader\_texture\_lod" is supported.

 Only the macros which are referenced and supported are added to the shader file.

**H. Options**

```glsl
#define MC_FXAA_LEVEL <value>       // When FXAA is enabled, values: 2, 4
#define MC_NORMAL_MAP               // When the normal map is enabled
#define MC_SPECULAR_MAP             // When the specular map is enabled
#define MC_RENDER_QUALITY <value>   // Values: 0.5, 0.70710677, 1.0, 1.4142135, 2.0
#define MC_SHADOW_QUALITY <value>   // Values: 0.5, 0.70710677, 1.0, 1.4142135, 2.0
#define MC_HAND_DEPTH <value>       // Values: 0.0625, 0.125, 0.25
#define MC_OLD_HAND_LIGHT           // When Old Hand Light is enabled
#define MC_OLD_LIGHTING             // When Old Lighting is enabled
```

**I. Textures**

```glsl
#define MC_TEXTURE_FORMAT_LAB_PBR       // Texture format LabPBR (https://github.com/rre36/lab-pbr/wiki)
#define MC_TEXTURE_FORMAT_LAB_PBR_1_3   // Version 1.3
```

(see "texture.properties")

## References

- [http://daxnitro.wikia.com/wiki/Editing_Shaders_%28Shaders2%29](http://daxnitro.wikia.com/wiki/Editing_Shaders_%28Shaders2%29)
- [http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1286604-shaders-mod-updated-by-karyonix](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1286604-shaders-mod-updated-by-karyonix)
- [http://www.minecraftforum.net/forums/search?by-author=karyonix&display-type=posts](http://www.minecraftforum.net/forums/search?by-author=karyonix&display-type=posts)
- [http://www.seas.upenn.edu/~cis565/fbo.htm#feedback](http://www.seas.upenn.edu/~cis565/fbo.htm#feedback)

