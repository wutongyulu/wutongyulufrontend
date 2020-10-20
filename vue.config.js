const webpack = require("webpack");

module.exports = {


    devServer: {
<<<<<<< HEAD
        port: 80,     // 端口
            proxy: {
                '/apis': {     //这里最好有一个 /
                    target: 'http://localhost:8080',  // 后台接口域名
                    ws: true,        //如果要代理 websockets，配置这个参数
                    secure: false,  // 如果是https接口，需要配置这个参数
                    changeOrigin: true,  //是否跨域
                    pathRewrite:{
                        '^/apis':''
                    }
                }
            }
          
=======
        port: 8096,     // 端口
>>>>>>> e37979a882718890e37543c40a85f1bac0e9d753
    },
    lintOnSave: false ,  // 取消 eslint 验证

    
  configureWebpack: {

        plugins: [

            new webpack.ProvidePlugin({

                $: 'jquery',

                jQuery: 'jquery',

                'window.jQuery': 'jquery',

                Popper: ['popper.js', 'default']

            })

        ]

    }

}

