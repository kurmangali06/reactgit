const path = require('path');

module.exports = {
  entry:path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname, './build'),
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loder'],
      }
    ]
  }
}