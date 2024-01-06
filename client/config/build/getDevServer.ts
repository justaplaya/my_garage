import { WebpackOptionsNormalized } from 'webpack';
import { BuildOptions } from './types';

export const getDevServer = (port: BuildOptions['port']): WebpackOptionsNormalized['devServer'] => {
  return {
    port,
    historyApiFallback: true,
    hot: true,
    open: true,
  };
};
