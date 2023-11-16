import { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types';
import webpack = require('webpack');
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const getPlugins = (
  mode: BuildOptions['mode'],
  paths: BuildOptions['paths'],
  analyze: BuildOptions['analyze'],
): WebpackPluginInstance[] => {
  const isProd = mode === 'production';

  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html,
  });

  const processPlugin = new webpack.ProvidePlugin({
    process: 'process/browser',
  });

  const copyPlugin = new CopyPlugin({
    patterns: [{ from: 'public/assets', to: 'assets/' }],
  });

  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  const analyzePlugin = new BundleAnalyzerPlugin();

  const plugins = [htmlPlugin, processPlugin, copyPlugin];

  if (isProd) plugins.push(miniCssPlugin);

  if (analyze) plugins.push(analyzePlugin);

  return plugins;
};
