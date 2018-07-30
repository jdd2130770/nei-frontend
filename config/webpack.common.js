/* eslint-disable no-sync */

import helpers from './helpers.js';

/**
 * Webpack Plugins
 */

/**
 * Webpack Plugins
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Generate an external css file with a hash in the filename.
const extractCss = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  allChunks: false,
});

/**
 * Webpack Config
 */
export default {
  resolve: {
    modules: [
      helpers.root('src'),
      'node_modules',
    ],
  },

  // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  target: 'web',

  plugins: [
    extractCss
  ],

  module: {
    rules: [
      {
        // Loaders for javascript.
        test: /\.jsx?$/,
        include: helpers.root('src'),
        use: [{loader: 'babel-loader'}],
      }, {
        // Loaders for SASS.
        test: /\.scss$/,
        loader: extractCss.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {sourceMap: true}},
            {loader: 'postcss-loader', options: {sourceMap: true}},
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  helpers.root('node_modules'),
                  helpers.root('src/styles/scss'),
                ]
              }
            },
          ],
        }),
      }, {
        // Loaders for CSS.
        test: /\.css$/,
        loader: extractCss.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {sourceMap: true}},
            {loader: 'postcss-loader', options: {sourceMap: true}},
          ],
        }),
      }, {
        test: /\.eot(\?v=\d+.\d+.\d+)?(\?[^\/]*)?$/,
        use: [{loader: 'file-loader'}],
      }, {
        test: /\.woff2?(\?v=\d+.\d+.\d+)?(\?[^\/]*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          },
        }],
      }, {
        test: /\.ttf(\?v=\d+.\d+.\d+)?(\?[^\/]*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
          },
        }],
      }, {
        test: /\.svg(\?v=\d+.\d+.\d+)?(\?[^\/]*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        }],
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash]-[name].[ext]',
            },
          }
        ],
      }, {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          }
        ],
      }, {
        test: /\.pdf$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          }
        ],
      }, {
        // Inject jQuery into 3rd party dependencies.
        test: /bootstrap\.bundle(\.min)?\.js$/,
        use: [{
          loader: 'imports-loader?jQuery=jquery&$=jquery'
        }]
      }
    ]
  }
};
