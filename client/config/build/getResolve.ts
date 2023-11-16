import { ResolveOptions } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const getResolve = (): ResolveOptions => {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin()],
  };
};
