const { argv } = require('yargs')
const fs = require('fs');
const merge = require('webpack-merge')
const ngcWebpack = require('ngc-webpack')
const path = require('path')
const webpack = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer/lib/BundleAnalyzerPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { PurifyPlugin } = require('@angular-devkit/build-optimizer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')
const loaderConfigs  = require('./helpers/loaderConfigs')
const utils = require('./helpers/utils')

const styleLoaders = loaderConfigs.getProdStyleLoaders({
  sourceMap: config.build.cssSourceMap
})

if (argv.report || config.build.bundleAnalyzerReport) {
  console.log(
    "> Bundle report will be displayed post compilation.\n\n"
  )
}

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: ([
	    {
    		test: '/\.ts$/',
  	  	use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: utils.resolvePath('tslint.json'),
              emitErrors: true,
              failOnHint: true,
              typeCheck: true,
              tsConfigFile: utils.resolvePath('config/tsconfig.app.json')
            }
          },
	  	    {
		  	    loader: 'ts-loader',
  		  	  options: {
              errorFormatter: utils.tsConfErrorFormatter,
              happyPackMode : true,
              transpileOnly: true,
              configFile: utils.resolvePath('config/tsconfig.app.json')
    			  }
  	    	},
	  	    {
            loader: 'angular2-template-loader'
          }
	  	  ]
	    },

      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: [
          {
            loader: '@angular-devkit/build-optimizer/webpack-loader',
            options: {
              sourceMap: config.build.productionSourceMap
            }
          },
          {
            loader: '@ngtools/webpack'
          }
        ]
      },

      // Extract global styles into separate css file
      {
        include: [
          utils.resolvePath("src/styles.css")
        ],
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: config.build.productionSourceMap,
              importLoader: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded'
            }
          }
        ]
      }
    ]).concat(styleLoaders)
  },
  mode: 'production',

  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  stats: 'normal',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),

    // See https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        caseSensitive: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeAttributeQuotes: false,
        removeComments: true
        // More options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunksSortMode: 'dependency'
    }),

    new MiniCssExtractPlugin({
      filename: `${config.build.assetsSubDirectory}/styles/[name].[contenthash].css`
    }),

    // new webpack.optimize.splitChunks({
      // name: [
        // 'inline'
      // ],
      // minChunks: null
    // }),
    // new webpack.optimize.splitChunks({
      // "name": [
        // "vendor"
      // ],
      // "minChunks": (module) => {
                // return module.resource
                    // && (module.resource.startsWith(nodeModules)
                        // || module.resource.startsWith(genDirNodeModules)
                        // || module.resource.startsWith(realNodeModules));
            // },
      // "chunks": [
        // "main"
      // ]
    // }),
    // new webpack.optimize.splitChunks({
      // name: [
        // 'main'
      // ],
      // minChunks: 2,
      // async: 'common'
    // }),

    new ngcWebpack.NgcWebpackPlugin({
	    AOT: true,
      basePath: utils.resolvePath(''),
      hostReplacementPaths: {
        [ utils.resolvePath('src/environments/environment.ts') ]
        : utils.resolvePath('config/tsconfig.env.prod.ts')
      },
      mainPath: utils.resolvePath('src/main.ts'),
      sourceMap: config.build.productionSourceMap,
      tsConfigPath: utils.resolvePath('config/tsconfig.app.json')
    }),

    new PurifyPlugin({
		  info: true
	  })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: config.build.productionSourceMap,
        uglifyOptions: {
          ecma: 5,
          output: {
            ascii_only: true,
            comments: false
          },
          compress: {
            pure_getters: true,
            passes: 3
          },
        }
      }),
    ],
    noEmitOnErrors: true,
    concatenateModules: true
  }
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        `\\.(${config.build.productionGzipExtensions.join('|')})$`
      ),
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: true
    })
  )
}

module.exports.getProdConfigPromise = async () => {
  if (argv.report) {
    try {
      const analyzerPort = await utils.getFreePort(8888)

      webpackConfig.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerHost: '127.0.0.1',
          analyzerPort
        })
      )
    }
    catch(e) {
      console.log(
        'Error finding port for Bundle Analyzer. Bundle Analyzer will be disabled.'
        + ` Reported Error: ${e}`
      )
    }
  }

  return webpackConfig
}
