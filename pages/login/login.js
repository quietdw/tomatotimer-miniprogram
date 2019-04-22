//index.js
//获取应用实例
const app = getApp()
const { app_id, app_secret } = app.globalData

import request from "../../utils/request.js"

Page({
  data: {
  },
  onLoad() {

  },
  onShow(){
    request.http.get('/todos').then(res=>{
       console.log(res)
    })
  },
  bindGetUserInfo(e) {
    let iv = e.detail.iv
    let encrypted_data = e.detail.encryptedData

    this.wxLogin(iv, encrypted_data)
    
  },
  wxLogin(iv, encrypted_data){
    wx.login({
      success:(res)=> {
        console.log(res)
        this.meLogin(iv, encrypted_data, res.code)
      }
    })
  },
  meLogin(iv, encrypted_data, code){
    request.http.post('/sign_in/mini_program_user', {
      code,
      iv,
      encrypted_data,
      app_id,
      app_secret
    }).then(res => {
     this.saveData(res)
      wx.switchTab({
        url: '/pages/home/home'
      })
    })
  },
  saveData(res){
    wx.setStorageSync('me', res.data.resource)
    wx.setStorageSync('X-token', res.header['X-token'])
  }
})
