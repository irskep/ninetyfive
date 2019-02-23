const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './src/lib/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css|\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
};
