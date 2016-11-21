var app = getApp()
Page({
    data: {
        
    },
    onLoad: function(options) {

        var that = this
        
        wx.request({
            url: 'https://api.getweapp.com/thirdparty/wemall/venues/getBrandAndType?id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    brandList: res.data.data
                });
            }
        })
    }

})