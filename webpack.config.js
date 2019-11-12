var webpack = require('webpack'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './*.html'
    }])
  ],
  // watch: true
}