import request from "../../utils/request.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toRight:false,
    tomatoLists:{},
    todoLists:{}
  },
  onClick(event){
    if (event.currentTarget.offsetLeft>200){
      this.data.toRight = true;
      this.getTodos().then(res=>{
        this.data.todoLists = res.data.resources
        this.setData({
          todoLists: this.data.todoLists
        })
      })
    }else{
      this.data.toRight = false
      this.getTomato().then(res => {
        this.data.tomatoLists = res.data.resources
        this.setData({
          tomatoLists: this.data.tomatoLists
        })
      })
    }
    this.setData({ toRight: this.data.toRight})
  }
,
getTomato(){
  return request.http.get('/tomatoes',{
     is_group: "yes" 
  })
},
getTodos(){
  return request.http.get('/todos', {
    is_group: "yes"
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
    this.getTomato().then(res => {
        this.data.tomatoLists = res.data.resources
        this.setData({
          tomatoLists: this.data.tomatoLists
        })
      })
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