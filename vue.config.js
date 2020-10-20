const webpack = require("webpack");

module.exports = {


    devServer: {
        port: 8096,     // 端口
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

