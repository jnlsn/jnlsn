'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { default: ImageminPlugin } = require('imagemin-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const config = require('./config');

let webpackConfig = {
  context: config.paths.src,
  entry: config.entry,
  output: {
    path: config.paths.dist,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)(?![/|\\](bootstrap|foundation-sites))/],
        use: [
          { loader: 'buble-loader', options: { objectAssign: 'Object.assign' } },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: config.enabled.sourceMaps } },
            {
              loader: 'postcss-loader', options: {
                config: { path: __dirname, ctx: config },
                sourceMap: config.enabled.sourceMaps,
              },
            },
            { loader: 'resolve-url-loader', options: { sourceMap: config.enabled.sourceMaps } },
            { loader: 'sass-loader', options: { sourceMap: config.enabled.sourceMaps } },
          ],
        }),
      },
      {
        test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
        include: config.paths.src,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
        include: /node_modules|bower_components/,
        loader: 'url-loader',
        options: {
          limit: 4096,
          outputPath: 'vendor/',
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin(config.copy),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
    }),
    new ImageminPlugin({
      optipng: { optimizationLevel: 7 },
      gifsicle: { optimizationLevel: 3 },
      pngquant: { quality: '65-90', speed: 4 },
      svgo: { removeUnknownsAndDefaults: false, cleanupIDs: false },
      plugins: [imageminMozjpeg({ quality: 75 })],
      disable: (config.enabled.watcher),
    }),
  ],
};

if (config.env.production) {
  webpackConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = webpackConfig;
