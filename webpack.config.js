const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'development' }) => {
  return {
    mode,
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        minSize: 100, // 100B
        chunks: 'all',
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
            priority: 1,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
            priority: 10,
          },
        },
      }
    },
    plugins: [
      new ProgressPlugin(),
      new HtmlWebpackPlugin({
        title: 'GDG 🤖',
        template: 'public/index.html',
      }),
    ],
  };
};
