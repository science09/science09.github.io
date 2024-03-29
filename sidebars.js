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
        'notes/wechat/Redis详细介绍一篇就够',
        'notes/wechat/快速实现一个分布式定时器',
        'notes/wechat/如何做架构设计和评审',
        'notes/wechat/面试官：为什么说mysql数据库单表最大两千万？',
        'notes/wechat/【系统设计】S3 对象存储',
        'notes/wechat/B站在全链路压测上的实践',
        'notes/wechat/小红书KV存储架构：万亿级数据与跨云多活不在话下',
        'notes/wechat/网易严选商品中心DDD实践',
        'notes/wechat/社区点赞业务缓存设计优化探索 ｜ 得物技术',
        'notes/wechat/缓存高频面试题：缓存穿透？缓存击穿？缓存雪崩？',
        'notes/wechat/十几亿用户中心系统，ES+Redis+MySQL架构就轻松搞定！',
        'notes/wechat/京东售后系统架构设计：专治多端并发、数据不一致的臭毛病',
        'notes/wechat/2000万日订单背后，如何保障系统的高可用？',
        'notes/wechat/Docker 网络4种模式详解',
        'notes/wechat/去哪儿网业务缓存体系的升级改造',
        'notes/wechat/架构师技术路线图',
        'notes/wechat/10年后，再审视Heroku发布的十二要素应用',
        'notes/wechat/互联网公司常用分库分表方案汇总'
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
