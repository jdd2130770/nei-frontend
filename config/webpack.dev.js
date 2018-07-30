import dotEnv from 'dotenv';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import commonConfig from './webpack.common.js';
import helpers from './helpers.js';

/**
 * Webpack Plugins
 */
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
const distFolder = 'dist-dev';

export default webpackMerge(commonConfig, {
  // More info: https://webpack.github.io/docs/build-performance.html#sourcemaps and
  // https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'cheap-module-source-map',

  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      helpers.root('src/index.js'), // Defining path seems necessary for this to work consistently on Windows machines.
    ],
  },

  stats: 'errors-only',

  devServer: {
    contentBase: helpers.root(distFolder),
    hot: true,
    port: 3000,
    historyApiFallback: true,
    stats: 'minimal',
  },

  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: helpers.root(distFolder),

    // Use absolute paths to avoid the way that URLs are resolved by Chrome when they're parsed from a
    // dynamically loaded CSS blob. Note: Only necessary in Dev.
    publicPath: '/',

    filename: '[name].bundle.js',

    sourceMapFilename: '[file].map',

    chunkFilename: '[id].chunk.js',
  },

  plugins: [
    new webpack.EnvironmentPlugin(ENVIRONMENT_VARS, {
      NODE_ENV: 'development',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),

    // Create HTML file that includes references to bundled CSS and JS.
    new HtmlPlugin({
      template: helpers.root('src/index.ejs'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
  ],
});
