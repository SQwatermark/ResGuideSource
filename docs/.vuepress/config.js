module.exports = {
  title: '森罗万象',
  description: 'Minecraft资源包指南',
  base: "/resguide/",
  themeConfig: {
    nav: [
      { text: '教程', link: '/' },
      { text: 'OptiFine文档', link: '/optifinedoc/' },
      { text: '论坛版', link: 'https://www.mcbbs.net/thread-1079039-1-1.html' },
      { text: '下载示例', link: 'https://gitee.com/sqwatermark/ResGuideSource' },
    ],
    sidebar: {
    
      '/optifinedoc/': [
        ['properties_files', '属性文件说明'],
        ['ctm', '连接纹理'],
        ['natural_textures', '自然纹理'],
        ['better_grass', '更好的草地'],
        ['custom_blocks', '自定义方块渲染'],
        ['cit', '自定义物品纹理'],
        ['random_entities', '随机实体纹理'],
        ['cem', '自定义实体模型'],
        ['custom_animations', '自定义动画'],
        {
          title: '自定义颜色',   // 必要的
          path: 'custom_colors',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          children: [
            ['color', '颜色设置'],
            ['colormap', '颜色映射'],
            ['biome_palettes', '生物群系调色板'],
            ['biome_palettes_grid_format', '生物群系调色板：网格格式'],
            ['custom_lightmaps', '自定义光照贴图'],
          ]
        },
        ['custom_sky', '自定义天空'],
        ['emissive_textures', '自发光纹理'],
        ['dynamic_lights', '动态光源'],
        ['custom_loading_screens', '自定义载入画面'],
        ['custom_guis', '自定义GUI'],
        ['custom_panorama', '自定义全景图'],
        ['hd_fonts', '高清字体'],
        ['system_properties', '系统属性'],
        ['texture.properties', '纹理属性'],
        {
          title: '光影',   // 必要的
          children: [
            ['shaders.txt', '说明'],
            ['shaders.properties', '属性文件'],
          ]
        },
        ['debug_keys', '调试快捷键'],
        ['todo', '尚未完成的事'],
      ],
      
      '/': [
        '/propaedeutics/',
        {
          title: '基础',   // 必要的
          path: '/basic/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          children: [
            '/basic/pack.mcmeta',
            '/basic/vanilla-resources',
            '/basic/normal-textures',
            '/basic/icon',
            '/basic/structure',
          ]
        },
        ['/vanilla/texture/animation/', '动态纹理（前篇）'],
        {
          title: '模型和渲染',
          path: '/vanilla/model/',
          children: [
            '/vanilla/model/tutorials',
            '/vanilla/model/shading',
            '/vanilla/model/ambientocclusion',
            '/vanilla/model/cullface',
            '/vanilla/model/tintindex',
            '/vanilla/model/opaquecube',
            '/vanilla/model/rendertype',
            '/vanilla/model/modelpack',
            '/vanilla/model/item_tags',
            '/vanilla/model/flower_pot',
          ]
        },
        ['/vanilla/more-assets', '额外的资源文件'],
        {
          title: '音效',
          path: '/vanilla/sounds/',
          children: [
            '/vanilla/sounds/replace-sounds',
            '/vanilla/sounds/add-sounds',
          ]
        },
        {
          title: '语言和文字',
          //path: '/vanilla/lang/',
          children: [
            '/vanilla/lang/lang',
            '/vanilla/font/font',
            '/vanilla/font/default.json',

          ]
        },
        ['/optifine/', 'OptiFine与MCPatcher'],
        {
          title: 'CTM',
          path: '/optifine/ctm/',
          children: [
            '/optifine/ctm/ctm',
            '/optifine/ctm/ctm-2',
            '/optifine/ctm/random',
            '/optifine/ctm/biomes',
            '/optifine/ctm/weight',
            '/optifine/ctm/ctm_compact',
            '/optifine/ctm/vertical',
            '/optifine/ctm/horizontal',
            '/optifine/ctm/repeat',
            '/optifine/ctm/overlay',
            '/optifine/ctm/overlay-variants',
            '/optifine/ctm/misc',
          ]
        },
        {
          title: 'CIT',
          path: '/optifine/cit/',
          children: [

          ]
        },
        {
          title: 'CEM',
          path: '/optifine/cem/',
          children: [
            '/optifine/cem/random_entities',
            '/optifine/cem/random_creeper',
            '/optifine/cem/example',
            '/optifine/cem/cpm',
          ]
        },
        {
          title: '动态纹理（后篇）',
          path: '/optifine/animation/',
          children: [
            '/optifine/animation/inventory',
          ]
        },
        {
          title: '光与色',
          //path: '/optifine/colormap/',
          children: [
            '/optifine/colormap/lightmap',
          ]
        },
        {
          title: '环境',
          path: '/vanilla/texture/environment/',
          children: [
            '/vanilla/texture/environment/rain-and-snow',
            '/optifine/sky/skybox',
            '/optifine/sky/multiverse-sky',
          ]
        },
        {
          title: 'GUI',
          //path: '/vanilla/texture/gui/',
          children: [
            '/vanilla/texture/gui/panorama',
            '/vanilla/texture/gui/loading',
          ]
        },
        ['/optifine/shader/pbr', 'PBR纹理'],
        ['/vanilla/shader/', '着色器/光影'],
        {
          title: '附录',
          //path: '/appendix/',
          children: [
            '/appendix/fragments',
            '/appendix/tools',
            '/appendix/questions',
          ]
        }
      ]
      
    }
    
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  plugins: [
    '@vuepress/back-to-top',
	//['@dovyp/vuepress-plugin-clipboard-copy', true],
  ['vuepress-plugin-container',{type: 'right',defaultTitle: ''}],
  ['vuepress-plugin-container',{type: 'theorem',before: info => `<div class="theorem"><p class="title">${info}</p>`,after: '</div>'}],
	['vuepress-plugin-container',{type: 'tip',defaultTitle: {'/': '提示'}}],
	['vuepress-plugin-container',{type: 'warning',defaultTitle: {'/': '注意'}}],
	['vuepress-plugin-container',{type: 'danger',defaultTitle: {'/': '警告'}}],
	['vuepress-plugin-container',{type: 'bv',before: info => `<iframe src="//player.bilibili.com/player.html?bvid=BV${info}&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="650" height="450">`,after: '</iframe>'}],
	['vuepress-plugin-zooming',{selector: '.theme-default-content img',delay: 500,options: {bgColor: 'black',bgOpacity: 0.8,scrollThreshold: 200}}],
	['minimal-analytics', {ga: 'UA-172352215-1'}],
  ]
}