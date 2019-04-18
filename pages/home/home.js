// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmState:false,
    fakeData:[
      {id:1,message:'先挣他两个亿'},
      { id: 2, message: '先挣他两个亿先挣他两个亿先挣他两个亿先挣他两个亿先挣他两个亿' },
      { id: 3, message: '先挣他两个亿' },
      { id: 4, message: '先挣他两个亿' },
      { id: 5, message: '先挣他两个亿' },
      { id: 6, message: '先挣他两个亿' },
      { id: 7, message: '先挣他两个亿' },
      { id: 8, message: '先挣他两个亿' },
      { id: 9, message: '先挣他两个亿' }

    ]
  },
  onCreate(e) {
    this.setData({ confirmState:true})
  }
  ,
  onConfirm(event) {
    let newData = {}
    newData.id = this.data.fakeData.length+1
    newData.message = event.detail
    this.data.fakeData.unshift(newData)
    this.setData({ fakeData: this.data.fakeData })
    this.setData({ confirmState: false })
  },
  onCancle() {
    this.setData({ confirmState: false })
  },
  methods:{
    
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