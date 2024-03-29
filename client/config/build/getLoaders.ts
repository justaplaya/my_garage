import { BuildOptions } from './types';
import { ModuleOptions } from 'webpack';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

export const getLoaders = (mode: BuildOptions['mode']): ModuleOptions['rules'] => {
  const isDev = mode === 'development';

  const webpack5esmInteropRule = {
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  };

  const jsxLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  };
  const cssLoader = {
    test: /\.css$/, // styles files
    use: ['style-loader', 'css-loader'],
  };
  const miniCssLoader = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  };

  const urlLoader = {
    test: /\.(png|jpg|gif|woff|woff2|eot|ttf|webp)$/,
    loader: 'url-loader',
    options: { limit: 1, name: 'assets/[hash].[ext]' },
  };

  const svgLoader = {
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
  };

  const tsLoader = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        compilerOptions: { noEmit: false },
        transpileOnly: isDev,
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
      },
    },
  };

  const loaders = [webpack5esmInteropRule, jsxLoader, urlLoader, svgLoader, tsLoader];

  if (isDev) {
    return loaders.concat(cssLoader);
  } else {
    return loaders.concat(miniCssLoader);
  }
};
