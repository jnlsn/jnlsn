'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { default: ImageminPlugin } = require('imagemin-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const config = require('./config');

let webpackConfig = {
  context: config.paths.src,
  entry: config.entry,
  devtool: (config.enabled.sourceMaps ? '#source-map' : undefined),
  output: {
    path: config.paths.dist,
    publicPath: config.publicPath,
    filename: '[name].js',
  },
  stats: {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|s?[ca]ss)$/,
        include: config.paths.src,
        loader: 'import-glob-loader',
      },
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)(?![/|\\](bootstrap|foundation-sites))/],
        use: [
          { loader: 'buble-loader', options: { objectAssign: 'Object.assign' } },
        ],
      },
      {
        test: /\.scss$/,
        include: config.paths.src,
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
  resolve: {
    modules: [
      config.paths.src,
      'node_modules',
      'bower_components',
    ],
    enforceExtension: false,
  },
  plugins: [
    new CleanPlugin([config.paths.dist], {
      root: config.paths.root,
      verbose: false,
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      disable: (config.enabled.watcher),
    }),
    new CopyWebpackPlugin(config.copy),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: config.enabled.optimize,
      debug: config.enabled.watcher,
      stats: { colors: true },
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.s?css$/,
      options: {
        output: { path: config.paths.dist },
        context: config.paths.src,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: { failOnWarning: false, failOnError: true },
      },
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

if (config.enabled.watcher) {
  webpackConfig.entry = require('./util/addHotMiddleware')(webpackConfig.entry);
  webpackConfig = merge(webpackConfig, require('./webpack.config.watch'));
}

module.exports = webpackConfig;
