var webpack = require('webpack'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	mode: "development",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          import: true,
        },
      },
    ],
      // rules: [
      //   {
      //     test: /\.css$/,
      //     use: [
      //       'style-loader',
      //       'css-loader'
      //     ],
      //   },
      //   {
      //     test: /\.(png|svg|jpg|gif)$/,
      //     use: [
      //       'file-loader',
      //     ],
      //   },
      //   {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/,
      //     use: [
      //       'file-loader',
      //     ],
      //   },
      // ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './*.html'
    }])
  ],
  watch: true
}