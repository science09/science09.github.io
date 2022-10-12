// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  notes: [
    'notes/notes-intro',
    {
      label: '公众号文章',
      type: 'category',
      items: [
        'notes/wechat/分布式唯一 ID 生成方案', 
        'notes/wechat/how_dose_linux_filesystem_work',
        'notes/wechat/mysql_MVCC_and_its_implementation_principle',
        'notes/wechat/从0.742秒到0.006秒，MySQL百万数据深分页优化实战',
        'notes/wechat/30条永不过时的SQL优化技巧',
        'notes/wechat/21个MySQL表设计的经验准则',
        'notes/wechat/MySQL的普通索引和唯一索引到底什么区别？',
        'notes/wechat/图文结合！Redis延迟队列golang高效实践',
        'notes/wechat/3种方式！Go Error处理最佳实践',
        'notes/wechat/推荐系统 embedding 技术实践总结',
        'notes/wechat/Go几个黑魔法技巧汇总',
        'notes/wechat/Redis详细介绍一篇就够'
      ],
      collapsed: false
    },
    {
      label: '资源',
      type: 'category',
      items: ['notes/resources/website'],
      collapsed: false
    }
  ],
  
};

module.exports = sidebars;