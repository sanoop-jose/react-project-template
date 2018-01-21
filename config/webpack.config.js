var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].html'
      },
      { test: /\.scss$/, loader: 'style-loader!css-loader?minimize!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?minimize' }
    ]
  }
};
