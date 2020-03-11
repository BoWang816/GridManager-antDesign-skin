/**
 * webpack-pro.config.js
 * @author wangbo
 * @since 2020/3/10
 * @github https://github.com/BoWang816
 */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const genRules = require('./webpack-loader.config');
const buildPath = path.join(__dirname, "dist");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
    mode: 'production',

    // 入口文件所在的上下文
    context: path.join(__dirname, "src/"),

    // 入口文件配置
    entry: {
        js: './js/index.js'
    },

    // 文件导出的配置
    output:{
        path: buildPath ,
        filename: "index.js",
        libraryTarget: "umd"
    },

    // 优化代码
    optimization: {
        minimizer: [
            // 压缩js
            new UglifyJsPlugin({
                uglifyOptions: {
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    warnings: false
                }
            })
        ]
    },

    // 以插件形式定制webpack构建过程
    plugins: [
        // 删除dist目录
        new CleanWebpackPlugin(),
        // 将文件复制到构建目录
        new CopyWebpackPlugin([
            {from: path.join(__dirname, '/package.json'), to: '', toType: 'dir'},
            {from: path.join(__dirname, '/README.md'), to: '', toType: 'dir'}
        ])
    ],

    // 处理项目中的不同类型的模块。
    module: {
        rules: genRules('src', false)
    }
};

module.exports = config;
