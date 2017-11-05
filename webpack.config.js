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
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      {test: /\.svg$/, loaders: 'file'},
      {test: /\.png$/, loader: 'url-loader'}
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
};
