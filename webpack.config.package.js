var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hmm.js',
        library: 'hmm',
        libraryTarget: 'umd'
    },
    externals: {
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        }
    },
    module: {
      rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "env",
                {
                  modules: false
                }
              ]
            ],
            plugins: ["transform-object-rest-spread"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
