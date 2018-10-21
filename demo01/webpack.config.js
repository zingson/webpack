const path = require('path');

// 构建前清理输出目录
const clean_webpack_plugin = require('clean-webpack-plugin');

module.exports = {
    mode:'development ', //通过选择 development 或 production 之中的一个
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {test: /\.txt$/,use:'raw-loader'},
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,use:['file-loader']}
        ]
    },
    plugins:[
        new clean_webpack_plugin(['dist'])
    ]
};

