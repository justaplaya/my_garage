const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/assets', to: 'assets/' }],
    }),
  ],
  devServer: {
    port: 3030,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|woff|woff2|eot|ttf|webp)$/,
        loader: 'url-loader',
        options: { limit: 1, name: 'assets/[hash].[ext]' },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
              outDir: './dist/assets',
            },
          },
          'file-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: { compilerOptions: { noEmit: false } },
        },
      },
    ],
  },
};
