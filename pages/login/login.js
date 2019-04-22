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
    let code

    wx.login({
      success(res){
        code = res.code
        request.http.post('/sign_in/mini_program_user', {
          code,
          iv,
          encrypted_data,
          app_id,
          app_secret
        }).then(res => {
          wx.setStorageSync('me', res.data.resource)
          wx.setStorageSync('X-token', res.header['X-token'])
          console.log(1)
          wx.switchTab({
            url: '/pages/home/home'
          })
        }) 
      }
    })
    
  }
})
