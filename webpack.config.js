var webpack = require('webpack')
var webpackHtmlPlugin = require('webpack-html-plugin')
var path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH,'app')
const OUTPUT_PATH =path.resolve(ROOT_PATH,'bundle')

module.exports = {
    entry:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/app.jsx'
    ],
    output:{
        filename:'bundle.js',
        publicPath:'/',
        path:OUTPUT_PATH
    },
    devtool:'inline-source-map',
    devServer:{
        hot:true,
        publicPath:'/',
        contentBase:path.resolve(OUTPUT_PATH)
    },

    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                options:{
                    presets:[
                        ['es2015',{'module':false}],
                        'react'
                    ],
                    plugins:[
                        'react-hot-loader/babel'
                    ]
                },
                exclude:/node_modules/
            }
        ]
    },

    plugins:[
        new webpackHtmlPlugin({
            filename:'index.html'
        }),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NamedModulesPlugin()
    ],
    resolve:{
        extensions:['.js','.jsx']
    }
}
