const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/app.tsx',
  ],
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public/build']
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/404.html',
      filename: '404.html'
    }),
  ],
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ],
      },
    ]
  }
}
