const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }, 
      {
        test: /\.html$/,
        use: {
            loader: "html-loader"
          }
      }, 
      {
        test: /\.css$/,
        use: {
            loader: "style-loader!css-loader"
          }
      }
    ]
  }, 
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", 
      filename: "./index.html"
    })
  ]
};