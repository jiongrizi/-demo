// miniprogram/pages/ddos/ddos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },
  onStart: function () {
    var t = this;
    setInterval(function(){
      t.testFunction();
      t.data.count++;
      t.setData({
        count: t.data.count
      });
      
    },1000);
  },
  testFunction() {
    wx.cloud.callFunction({
      name: 'ddos',
      data: {
        a: 1,
        b: 2
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  postApi:function(){
    var t = this;
    wx.request({
      url: 'https://api.map.baidu.com',
      data: {},
      success: function (res) {
        t.count++;
      },
      fail: function (res) {
        console.log("fail");
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})