// build/webpack.component.js
const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');
const components = require('./components.json');

const basePath = path.resolve(__dirname, '../');

let entries = {};

Object.keys(components).forEach(key => {
  entries[key] = path.join(basePath, components[key]);
});

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
});