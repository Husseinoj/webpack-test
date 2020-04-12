const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports =  {
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ // order of loader is important
                    { loader: 'style-loader' }, // output our css into a <style> tag in the html document
                    { loader: 'css-loader' } // parse css into js and resolves any dependencies.
                ],
              },
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"Output Message"
        })
    ]
}