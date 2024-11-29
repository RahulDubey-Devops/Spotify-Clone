const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './index.js',  // Update with your entry file path
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // if using React
          },
        },
      },
    ],
  },
};
