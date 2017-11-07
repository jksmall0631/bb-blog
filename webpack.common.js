const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./public/index.js'],
  },
  output: {
    path: __dirname + "/public/",
    filename: '[name].bundle.js',
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      {test: /\.svg$/, loaders: 'file-loader'},
      {test: /\.png$/, loader: 'url-loader'}
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
};
