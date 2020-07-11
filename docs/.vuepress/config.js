module.exports = {
  title: '森罗万象',
  description: 'Minecraft资源包指南',
  base: "/resguide/",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
	  { text: 'OptiFine文档', link: 'https://www.mcbbs.net/thread-896135-1-1.html' },
	  { text: '下载示例', link: 'https://github.com/SQwatermark/ResGuideSource' },
    ],
    sidebar: [
      '/propaedeutics/',
	  {
        title: '基础',   // 必要的
        path: '/basic/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
          '/basic/pack.mcmeta',
          '/basic/vanilla-resources',
          '/basic/normal-textures',
          '/basic/icon'
        ]
      },
	  ['/basic/structure', '幕间一'],
	  ['/vanilla/texture/animation/', '动态材质（前篇）'],
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
		  '/vanilla/model/flower_pot',
        ]
      },
	  ['/vanilla/more-assets', '幕间二'],
	  {
        title: '音效',
        path: '/vanilla/sounds/',
        children: [
          '/vanilla/sounds/replace-sounds',
          '/vanilla/sounds/add-sounds'
        ]
      },
	  {
        title: '语言和文字',
        path: '/vanilla/lang/',
        children: [
          '/vanilla/lang/lang',
		  '/vanilla/font/font',
          '/vanilla/font/default.json'

        ]
      },
	  ['/optifine/', '幕间三'],
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

        ]
      },
	  ['/optifine/animation/', '动态材质（后篇）'],
	  ['/optifine/sky/', '天空盒'],
	  {
        title: 'GUI',
        path: '/vanilla/texture/gui/',
        children: [
		  '/vanilla/texture/gui/panorama',
        ]
      },

    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  plugins: [
    '@vuepress/back-to-top',
	['@dovyp/vuepress-plugin-clipboard-copy', true],
    ['vuepress-plugin-container',{type: 'right',defaultTitle: ''}],
    ['vuepress-plugin-container',{type: 'theorem',before: info => `<div class="theorem"><p class="title">${info}</p>`,after: '</div>'}],
	['vuepress-plugin-container',{type: 'tip',defaultTitle: {'/': '提示'}}],
	['vuepress-plugin-container',{type: 'warning',defaultTitle: {'/': '注意'}}],
	['vuepress-plugin-container',{type: 'danger',defaultTitle: {'/': '警告'}}],
	['vuepress-plugin-container',{type: 'bv',before: info => `<iframe src="//player.bilibili.com/player.html?bvid=BV${info}&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="650" height="450">`,after: '</iframe>'}],
	['vuepress-plugin-zooming',{selector: '.theme-default-content img',delay: 500,options: {bgColor: 'black',bgOpacity: 0.8,scrollThreshold: 200}}],
	['minimal-analytics', {ga: 'UA-172352215-1'}],
	['@vssue/vuepress-plugin-vssue',{
      // 设置 `platform` 而不是 `api`
      platform: 'github',
	  locale: 'zh',
      // 其他的 Vssue 配置
      owner: 'SQwatermark',
      repo: 'resguide',
      clientId: '0e0e3e9e3509802c1e02',
      clientSecret: 'd571da19b622a436037022e2fa56e3b8cfd1509a',
	  autoCreateIssue:true,
    }]
	
  ]
}