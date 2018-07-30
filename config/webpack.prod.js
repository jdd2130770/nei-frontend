import dotEnv from 'dotenv';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import commonConfig from './webpack.common.js';
import helpers from './helpers.js';

/**
 * Webpack Plugins
 */
import CleanPlugin from 'clean-webpack-plugin';
import Md5HashPlugin from 'webpack-md5-hash';
import HtmlPlugin from 'html-webpack-plugin';

/**
 * Load the ENV file before doing anything else.
 */
dotEnv.config();

/**
 * Webpack Environment Variables Config
 */
const ENVIRONMENT_VARS = ['HOST', 'PORT', 'BACKEND_URL', 'GOOGLE_ANALYTICS_ID', 'IMAGE_URL_DOMAIN', 'ROLLBAR_TOKEN'];

/**
 * The name of the folder where the compiled code will go.
 * @type {string}
 */
const distFolder = 'dist';

export default webpackMerge(commonConfig, {
  // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
  // and https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  entry: [
    'babel-polyfill',
    helpers.root('src/index.js')
  ],

  output: {
    path: helpers.root(distFolder),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js',
  },

  plugins: [
    // Clean the dist folder before generating new files.
    new CleanPlugin([distFolder], {
      root: helpers.root(),
    }),

    // Hash the files using MD5 so that their names change when the content changes.
    new Md5HashPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),

    // https://webpack.js.org/plugins/environment-plugin/
    new webpack.EnvironmentPlugin(ENVIRONMENT_VARS, {
      NODE_ENV: 'production',
    }),

    // Generate HTML file that contains references to generated bundles.
    // See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlPlugin({
      template: helpers.root('src/index.ejs'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});
