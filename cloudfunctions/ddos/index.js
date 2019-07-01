// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
// 云函数入口函数
exports.main = (event, context) => {
  request('https://api.map.baidu.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body); // Print the HTML for the Google homepage.
    return {
      ddos: statusCode
    }
  });
  
}

