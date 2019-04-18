// pages/test/test.js
Page({
  onChangeValue(){
    let xxx = this.data.str.split('').reverse().join('')
    this.setData({str:xxx})
  },
  /**
   * 页面的初始数据
   */
  data: {
    message:"first",
    id:1,
    condition:true,
    array:[1,2,3,5,8,13],
    str:'String',
    visible:true
  },
    onConfirm(event){
      console.log(event.detail)
      this.setData({ visible: false })
    },
    onCancle(){
      this.setData({ visible : false})
    }
  ,

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