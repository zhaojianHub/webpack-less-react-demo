const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV, '------> 输出当前环境')

// const _env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    // mode: _env,
    entry: {
        app: './src/index.js'
    },
    // devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/i,
                use: [
                    process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader :
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 200 * 1024
                    }
                }
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource'
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出1'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};