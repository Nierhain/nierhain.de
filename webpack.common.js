const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
      app: './src/index.js',
  },
  plugins: [
      new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
      new HtmlWebpackPlugin({
          title: 'Nierhain.de',
      }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
              'style-loader',
              'css-loader',
              'postcss-loader'
          ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ]
        }
      ]
  }
};