import webpack = require('webpack');
import * as webpackDevServer from 'webpack-dev-server';
import { loaders } from './loaders';
import { BuildOptions } from './types';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const getWebpackConfig = ({ port, paths, mode }: BuildOptions): webpack.Configuration => {
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      publicPath: '/',
      clean: true,
    },
    target: 'web',
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.html,
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new CopyPlugin({
        patterns: [{ from: 'public/assets', to: 'assets/' }],
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    ],
    devServer: {
      port,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      plugins: [new TsconfigPathsPlugin()],
    },
    module: {
      rules: loaders(mode),
    },
  };
};
