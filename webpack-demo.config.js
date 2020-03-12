/**
 * webpack-demo.config.js
 * @author wangbo
 * @since 2020/3/12
 * @github https://github.com/BoWang816
 */
const path = require('path');
const genRules = require('./webpack-loader.config');
const buildPath = path.join(__dirname, '/');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
    mode: 'development',

    // map
    //  http://www.css88.com/doc/webpack2/configuration/devtool/
    devtool: 'cheap-eval-source-map',

    // 入口文件配置
    context: path.join(__dirname, "src/"),

    // 入口文件配置
    entry: {
        app: './demo/app.js',
        index: './js/index.js'
    },

    // 文件导出的配置
    output:{
        filename: "[name].js",
        // publicPath 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
        publicPath: "/",
        path: __dirname + '/demo'
    },

    // 处理项目中的不同类型的模块
    module: {
        rules: genRules('src', true)
    },
    // 以插件形式定制webpack构建过程
    plugins: [
        // 删除dist目录
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            base: './',
            filename: 'index.html',
            template: './demo/index.html',
            excludeChunks: ['app'],
            inject: true
        }),
        // 将文件复制到构建目录
        new CopyWebpackPlugin([
            {from: path.join(__dirname, './src/demo/logo.ico'), to: '', toType: 'dir'}
        ])
    ],
};

module.exports = config;
