const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, 'src', 'index'),
  module: {
    rules: [
      {
        test: /\.(jp[e]?g|svg|png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '/src/index.html',
      title: 'React Memory Game',
    }),
  ],
};

module.exports = config;
