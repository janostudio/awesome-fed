'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');

var NODE_ENV = process.env.NODE_ENV;

var IP = '0.0.0.0';
var PORT = 3000;

if (NODE_ENV === 'local') {
  module.exports = {
    ip: IP,
    port: PORT,
    devtool: 'source-map',
    entry: ['./index.js'],
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlPlugin({
        template: './index.html',
        inject: 'body'
      })
    ],
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
  };
}

if (NODE_ENV === 'production') {
  module.exports = {
    entry: ['./index.js'],
    output: {
      path: 'build',
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlPlugin({
        template: './index.html',
        inject: 'body'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
      })
    ],
    module: {
      loaders: [{
        test: /\.json$/,
        loader: "json-loader"
      },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }]
    }
  };
}