var app = getApp()
Page({
    data: {
        
    },
    onLoad: function(options) {

        var that = this
        
        wx.request({
            url: 'https://api.getweapp.com/thirdparty/wemall/goods/inqGoodsByTypeBrand?brand=' + options.brand + "&typeid=" + options.typeid,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    list: res.data.data
                });
            }
        })
    }

})