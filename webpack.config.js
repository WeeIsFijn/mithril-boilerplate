const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-es2015', '@babel/preset-stage-0'],
              "plugins": [
                ["@babel/plugin-transform-react-jsx", {
                    "pragma": "m"
                }]
            ]
            }
          }
        }
      ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: "/bin/",
    compress: true
  }
};

module.exports = config;