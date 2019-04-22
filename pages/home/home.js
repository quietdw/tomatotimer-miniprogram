// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmState:false,
    lists:[
      { id: 1, description:'先挣他两个亿1'},
      { id: 2, description: '先挣他两个亿先挣他两个亿先挣他两个亿先挣他两个亿先挣他两个亿2', completed: false},
      { id: 3, description: '先挣他两个亿3', completed: false},
      { id: 4, description: '先挣他两个亿4', completed: false},
      { id: 5, description: '先挣他两个亿5', completed: false},
      { id: 6, description: '先挣他两个亿6', completed: false},
      { id: 7, description: '先挣他两个亿7', completed: false},
      { id: 8, description: '先挣他两个亿8', completed: false},
      { id: 9, description: '先挣他两个亿9', completed: false}
    ]
  },
  onCreate(e) {
    this.setData({ confirmState:true})
  }
  ,
  onConfirm(event) {
    let newData = {}
    newData.id = this.data.lists.length+1
    newData.description = event.detail
    this.data.lists.unshift(newData)
    this.setData({ lists: this.data.lists })
    this.setData({ confirmState: false })
  },
  onCancle() {
    this.setData({ confirmState: false })
  },
  completed(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].completed= true
    this.data.lists.splice(index,1)
     this.setData({ lists: this.data.lists })
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