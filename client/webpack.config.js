const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'bundle.js', // the name of the bundle
    // publicPath: '/',
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // to import index.html file inside index.js
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/assets', to: 'assets/' }],
    }),
    // new webpack.DefinePlugin({
    //   'process.env': JSON.stringify(process.env),
    // }),
  ],
  devServer: {
    port: 3030, // you can change the port
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin()],
    // alias: {
    //   process: 'process/browser',
    // },
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
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // styles files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|woff|woff2|eot|ttf|webp)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: 1, name: 'assets/[hash].[ext]' },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeDimensions',
                    active: false,
                  },
                ],
              },
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
