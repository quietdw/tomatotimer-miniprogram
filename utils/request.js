const { host, t_app_id, t_app_secret } = getApp().globalData

function _http(method,url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${host}${url}`,
      data,
      header: {
        Authorization:`Bearer ${wx.getStorageSync('X-token')}`,
        't-app-id': t_app_id,
        't-app-secret': t_app_secret
      },
       method,
      dataType: 'json',
      success: function(res) {
        let statusCode = res.statusCode
        if(statusCode>400){
          if(statusCode===401){
            wx.redirectTo({
              url: '/pages/login/login',
            })
          }
          reject({ statusCode,res})
        }else{
          resolve(res)
        }
      },
      fail: function(res) {
        wx.showToast({
          title: '请求失败',
        })
        reject(res)
      }
    })
  })
}

const http={
  get: (url, params) => _http('GET', url, params),
  post: (url, data) => _http('POST', url, data)
}

export default{
  http
}