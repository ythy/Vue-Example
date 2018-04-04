const { webpackConfig, pages, PUBLISH }  = require('./webpack.config.base');
const env = require('../environment/prod.env');
const _ = require('lodash');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PACKAGE = require('../package.json');

webpackConfig.mode = 'production';

webpackConfig.devtool = 'nosources-source-map';

webpackConfig.output =  _.assign( webpackConfig.output, {
  filename : PUBLISH + 'script/' + PACKAGE.version + '-[hash]/' + '[name].js',
  chunkFilename: PUBLISH + 'script/' + PACKAGE.version + '-[hash]/' + '[name].bundle.js',    
  publicPath : '',
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
              name: '/' + PUBLISH + 'img/[name].[ext]'
          }
      }
    ]
  },
];

webpackConfig.plugins = [...webpackConfig.plugins,
  new webpack.DefinePlugin(env),
  new MiniCssExtractPlugin({
         filename: PUBLISH + "styles/" + PACKAGE.version + "-[hash]/" + "[name].css",
         chunkFilename: PUBLISH + "styles/" + PACKAGE.version + "-[hash]/" + "[name].bundle.css",
      }),
];




module.exports = webpackConfig;
