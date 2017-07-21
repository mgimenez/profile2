const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack');

const path = require('path');
var isProd = process.env.NODE_ENV === 'production';

var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
});

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|gif|png|svg)?$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    openPage: '',
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Matias Gimenez',
      // minify: {
      //   collapseWhitespace: true,
      // },
      hash: true,
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      disable: !isProd,
      allChunks: true
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
  ]
}
