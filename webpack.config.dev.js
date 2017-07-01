var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/test.js',
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'hmmmm.js',
    },
    module: {
      rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
