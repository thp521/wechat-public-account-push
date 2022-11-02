/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx215b876dba995d70',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1796276662459973d4efe087fe094b56',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXdCZ5lvD6zkGMraqQVU3zDJ1xEU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'U0RSlz42zoipqTHGCADC-2u2SOi4-wYo4m1BbXnLVC8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小宝贝', year: '2002', date: '04-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '大宝贝', year: '2000', date: '12-03',
        },
        {
          type: '节日', name: '相恋', year: '2022', date: '08-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-13' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'FobgIqYRRazfN9c333eGn-e8np19dZzD3zCl8lJF9CY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXdCZ5lvD6zkGMraqQVU3zDJ1xEU',
    }
  ],

}

module.exports = USER_CONFIG

