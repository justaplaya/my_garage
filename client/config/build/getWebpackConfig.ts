import webpack = require('webpack');
//eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as webpackDevServer from 'webpack-dev-server';
import { getLoaders } from './getLoaders';
import { BuildOptions } from './types';
import { getResolve } from './getResolve';
import { getDevServer } from './getDevServer';
import { getPlugins } from './getPlugins';

export const getWebpackConfig = ({ port, paths, mode, analyze }: BuildOptions): webpack.Configuration => {
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
    plugins: getPlugins(mode, paths, analyze),
    devServer: getDevServer(port),
    resolve: getResolve(),
    module: {
      rules: getLoaders(mode),
    },
  };
};
