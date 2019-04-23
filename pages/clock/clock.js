import request from "../../utils/request.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    initTime: 1500,
    total: "25:00",
    isTomato: false,
    visible:false,
    isFinished:false,
    placeholder:'',
    tomatoId:'',
    aborted:true
  },
  timer: null,
  onGiveUp(event){
    if (this.data.initTime ===1500){
      return
    }
    this.data.visible  = true;
    this.data.placeholder = '给我一个理由'
    this.setData({ visible: this.data.visible, placeholder: this.data.placeholder})
    this.clearTimer()
  }
  ,
  onConfirm(event){
    request.http.edit(`/tomatoes/${this.data.tomatoId}`,{
      description: event.detail, aborted: this.data.aborted 
    }).then(()=>{
      this.data.tomatoId = ''
      wx.navigateBack({
        to:-1
      })
    })
    
  }
  ,
  onCancle(){
    this.setData({ visible: false })
    this.setTiming()
  }
  ,
  startTomato() {
    this.data.isTomato = true
    request.http.post('/tomatoes').then(res=>{
      this.data.tomatoId = res.data.resource.id
    })
    this.setData({
      isTomato: this.data.isTomato
    })
    this.setTiming()
  },
  stopTomato() {
    this.data.isTomato = false
    this.setData({
      isTomato: this.data.isTomato
    })
    this.clearTimer()
  }
  ,
  clearTimer(){
    clearInterval(this.timer)
    this.timer = null
  }
  ,
  formatTime(time) {
    let m = Math.floor(time / 60) + ""
    let s = (time % 60) + ""
    m = m.length === 1 ? "0" + m : m
    s = s.length === 1 ? "0" + s : s
    this.setData({
      total: `${m}:${s}`
    })
  },
  setTiming() {
    this.timer = setInterval(() => {
        this.data.initTime = this.data.initTime - 1
        this.formatTime(this.data.initTime)
        if (this.data.initTime === 0) {
          this.clearTimer()
          this.data.isFinished = true
          this.data.visible = true
          this.data.placeholder = "完成了什么啊？"
          this.data.aborted = false
          this.setData({ isFinished: this.data.isFinished, visible: this.data.visible, placeholder: this.data.placeholder })
        }
    }, 1000)
  },
  onShow: function() {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    this.clearTimer()
    if (this.data.tomatoId){
    request.http.edit(`/tomatoes/${this.data.tomatoId}`, {
      description: '退出了番茄页面', aborted: this.data.aborted
    })
      
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.clearTimer()
    if (this.data.tomatoId){
     request.http.edit(`/tomatoes/${this.data.tomatoId}`, {
       description: '退出了番茄页面', aborted: this.data.aborted
     })
   }
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