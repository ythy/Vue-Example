const webpack = require('webpack');
const path = require('path');
const FileSystem = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workingDir = process.cwd();
const PUBLISH = 'static/';

function getEntry(){
  let entry = {
    index: './src/main.ts'
  };
  return entry;
}

function getHtmlPlugins(){
  let plugins = [];
  plugins.push(new HtmlWebpackPlugin({ 
    hash:true,
    title: 'Vue Test',  
    filename: 'index.html',
    template: 'templates/index.ejs',
    chunks: ['index'],
  }));
  return plugins;
}

let webpackConfig = {

    entry :  getEntry(),

    output : {
        path : workingDir + '/dist',
    },   
    
    plugins :  [
        ...getHtmlPlugins(),
        new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$/,
          threshold: 10240, //Only assets bigger than this size are processed. In bytes.
          minRatio: 0.8 //Only assets that compress better that this ratio are processed
        }),
    ],

    module : {
        rules: [
            {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    appendTsxSuffixTo: [/\.vue$/] 
                  },
                },
              ]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                'babel-loader'
              ]
            },
            {
              test: /\.vue$/,
              use: [{
                loader: 'vue-loader',
                options: {
                  loaders: {
                    css: [
                       MiniCssExtractPlugin.loader,
                       'css-loader',
                       {
                         loader: 'postcss-loader', 
                         options: {
                           sourceMap: true,
                         }
                       }                     
                    ]
                  }
                },
              }]
            },
        ],
    },

    resolve: {
      extensions: [".js", ".ts", '.vue'],
      alias: {
        '@': path.resolve(workingDir, 'src'),
//        'vue$': 'vue/dist/vue.esm.js'
      }
    },
};

module.exports = {webpackConfig, PUBLISH};
