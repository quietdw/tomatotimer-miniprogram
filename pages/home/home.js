// pages/home/home.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmState: false,
    lists: []
  },
  onCreate(e) {
    this.setData({
      confirmState: true
    })
  },
  onConfirm(event) {
    let description = event.detail
  if(!description){
    wx.showToast({
      title: '写点东西吧',
      icon:'none'
    })
    return
  }
    request.http.post('/todos', {
      completed: false,
      description
    }).then(res => {
      let newData = {}
      newData.id = res.data.resource.id
      newData.description = res.data.resource.description
      this.data.lists.unshift(newData)
      this.setData({
        lists: this.data.lists
      })
      this.setData({
        confirmState: false
      })
    })
  },
  onCancle() {
    this.setData({
      confirmState: false
    })
  },
  completed(event) {
    let key = event.currentTarget.dataset.key
    let index = event.currentTarget.dataset.index
    request.http.delete(`/todos/${key}`,{
      completed:true
    }).then((res)=>{
      console.log(res)
       this.data.lists[index] = res.data.resource
      this.setData({
       lists: this.data.lists
     })
    })
    
   
  },
  methods: {

  }

  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    request.http.get('/todos').then(res => {
      this.setData({
        lists: res.data.resources
      })
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})