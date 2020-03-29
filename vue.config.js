const webpack = require("webpack");

module.exports = {

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

作者：空白_0ec8
链接：https://www.jianshu.com/p/63f31a132822
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。