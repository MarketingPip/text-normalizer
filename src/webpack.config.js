// webpack.config.js
const fs = require('fs');
const path = require('path');

  


module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: "index.ts",
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
  optimization: { },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
