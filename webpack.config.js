// webpack.config.js
const path = require('path');

var styleLintPlugin = require('stylelint-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var core_js_config = {
  entry: {
    vendor: ['babel-polyfill', 'dialog-polyfill', 'picturefill'],
    head: './core/js/src/entry/core_head_js_entry.js',
    body: './core/js/src/entry/core_body_js_entry.js'
  },
  output: {
    path: path.resolve(__dirname, './core/js/dist'),
    filename: 'core-[name].js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout : 300,
    poll             : 1000
  }
}

// config for compiling head and body JS
var theme_js_config = function(env) {
  var theme = 'example';
  if (env && env.theme) {
    theme = env.theme;
  }

  return {
    entry: {
      // code splitting: we take all of our vendor code and put it in a separate bundle (vendor.min.js)
      // this way it will have better caching/cache hits since it changes infrequently
      vendor: path.resolve(__dirname, './core/js/dist', 'core-vendor.js'),
      head: './theme/' + theme + '/js/src/entry/theme_head_js_entry.js',
      body: './theme/' + theme + '/js/src/entry/theme_body_js_entry.js'
    },
    output: {
      path: path.resolve(__dirname, './theme/' + theme + '/js/dist'),
      filename: theme + '-[name].js'
    },
    watch        : true,
    watchOptions : {
      aggregateTimeout : 300,
      poll             : 1000
    },
    module       : {
      rules : [
        {
          test : /\.scss$/,
          use  : extractTextPlugin.extract({
            fallback : 'style-loader',
            use      : ['css-loader', 'postcss-loader', {
              'loader': 'sass-loader',
              options: {
                includePaths: [__dirname+'/node_modules/modularscale-sass/stylesheets']
              }
            }]
          })
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        /*
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 2 }
            },
            'postcss-loader',
            'sass-loader'
          ]
        },
        */
      ]
    },
    plugins      : [
      new styleLintPlugin({
        options: {
          syntax: 'scss'
        }
      }),
      new extractTextPlugin({
        filename  : '../css/all.css',
        disable   : false,
        allChunks : true
      })
    ]
  }
};

module.exports = [core_js_config, theme_js_config];
