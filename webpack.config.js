const path = require('path');
const { env } = require('process');

const mode = env['NODE_ENV'] || env['JEKYLL_ENV'] || 'development';

module.exports = {
  mode,
  entry: {
    main: path.join(__dirname, '_scripts/main.js')
  },
  output: {
    path: path.join(__dirname, 'assets/scripts/'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};
