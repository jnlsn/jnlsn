const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { default: ImageminPlugin } = require('imagemin-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  context: path.resolve(__dirname, './src/_assets'),
  entry: {
    app: ['./js/app.js', './scss/app.scss'],
  },
  output: {
    path: path.resolve(__dirname, './src/assets'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            "css-loader",
            "postcss-loader",
            "resolve-url-loader",
            "sass-loader",
          ],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        include: path.resolve(__dirname, './src/_assets'),
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: '[path][name].[ext]',
            },
          },
        ],
      }, // inline base64 URLs for <=30k images, direct URLs for the rest
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: 'img/**/*',
        to: '[path][name].[ext]',
      },
      {
        from: 'pdf/**/*',
        to: '[path][name].[ext]',
      }
    ]),
    new ImageminPlugin({ 
      optipng: { optimizationLevel: 7 },
      gifsicle: { optimizationLevel: 3 },
      pngquant: { quality: '65-90', speed: 4 },
      svgo: { removeUnknownsAndDefaults: false, cleanupIDs: false },
      plugins: [imageminMozjpeg({ quality: 75 })],
    }),
  ],
};
