const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')

const config = require('../config')
const utils = require('./helpers/utils')

const CircularDependencyPlugin = require('circular-dependency-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  entry: {
    main: [
      './src/polyfills.ts',
	    './src/main.ts'
	  ],
    // polyfills: ['./src/polyfills.ts'],
    styles: [
      "./src/styles.css"
    ]
  },

  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
    alias: {
      '@src': utils.resolvePath('src'),
      '@a': utils.resolvePath('src/app')
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        query: {
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },

      // Suppress warnings for System.import() deprecation
      // Until Angular and Snazzy-Info-Window fixes this in their framework
	    {
		    test: /[\/\\]@angular[\/\\].+\.js$/,
		    parser: {
		      system: true
		    }
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new CircularDependencyPlugin({
      exclude: /(\\|\/)node_modules(\\|\/)/,
      failOnError: false
    }),

    new ProgressBarPlugin({
      format: `  Progress [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false
    }),

    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      utils.resolvePath('src')
    ),

    // Copy custom static assets
    new CopyWebpackPlugin([
      {
        from: utils.resolvePath('static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*'],
        debug: 'warning'
      }
    ])
  ],

  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty',
    tls: 'empty',
    net: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
