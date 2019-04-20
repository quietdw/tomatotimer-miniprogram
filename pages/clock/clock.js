// pages/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    initTime:1500,
    total: "25:00"
  },
  StartTomato(){
    console.log(1)
  }
,
  formatTime(time){
    let m = Math.floor(time / 60)+""
    let s = (time % 60) + ""
    m = m.length === 1 ? m + "0" : m
    s = s.length ===1?s+"0":s
    this.setData({ total: `${m}:${s}` })
  },
  onShow: function () {
    let timer = setInterval(()=>{
      
      this.formatTime(this.data.initTime--)

    },1000)
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