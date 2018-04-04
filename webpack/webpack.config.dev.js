const { webpackConfig, pages, PUBLISH } = require('./webpack.config.base');
const env = require('../environment/dev.env');
const _ = require('lodash');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


webpackConfig.devServer = {
  disableHostCheck: true,
  host: '0.0.0.0',
  port: '7128',
  compress: true,
};

webpackConfig.mode = 'development';

webpackConfig.devtool = 'cheap-module-eval-source-map';

webpackConfig.output =  _.assign( webpackConfig.output, {
  filename : PUBLISH + 'script/[name].js',
  chunkFilename: PUBLISH + 'script/[name].bundle.js',    
  publicPath : '/dist/',
});


webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    exclude: /node_modules/,
    use: [
      {
          loader: 'url-loader',
          options: {
              limit: 5000,
              name: PUBLISH + 'img/[name].[ext]'
          }
      }
    ]
  },
];

webpackConfig.plugins = [...webpackConfig.plugins,
  new webpack.DefinePlugin(env),
  new ExtractTextPlugin({
         filename: PUBLISH + "styles/[name].css",
         ignoreOrder: true,
      }),
];



module.exports = webpackConfig;
