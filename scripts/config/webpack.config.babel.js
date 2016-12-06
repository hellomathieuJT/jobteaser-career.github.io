import path from "path"

import webpack from "webpack"
import extractTextPlugin from "extract-text-webpack-plugin"
import eslintFormatter from "eslint-friendly-formatter"
import progressBarPlugin from "progress-bar-webpack-plugin"

import configWebpack from "./configWebpack"

const production = process.argv.includes("--export")

const rootPath = path.resolve(__dirname, "../../")
const {"path": configPath, server: configServer} = configWebpack

const devEntries = [
  "webpack/hot/only-dev-server",
  `webpack-dev-server/client?${configServer.link()}`,
]

const loadersJs = [
  "babel?" + JSON.stringify({
    presets: ["react", "es2015", "stage-0"],
    plugins: ["transform-runtime", "react-hot-loader/babel"],
    cacheDirectory: true,
  }),
  "eslint?fix",
]

const moduleJs = {
  test: /\.jsx?$/,
  exclude: [
    /node_modules/,
  ],
  include: path.resolve(rootPath, configPath.root),
  loaders: [
    // ...loadersOptJs,
    ...loadersJs,
  ]
}

const mainConfig = {

  entry: {
    index: [`${configPath.root}/entries/index.js`]
  },

  output: {
    path: path.resolve(rootPath, configPath.export),
    filename: production ? "javascripts/[name].js" : "[name].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [
      ``,
      `.js`,
      `.json`,
    ],
    alias: {
      common_assets: "../../src/common_assets",
    },
  },

  module: {
    loaders: [

      {
        test: /\.json$/,
        loader: "json",
      },

      {
        test: /\.ya?ml$/,
        loaders: [ "json", "yaml" ],
      },

      { ...moduleJs },

      {
        test: /\.s?css$/,
        loader: extractTextPlugin.extract(
          "style",
          [
            "css?importLoaders=1&sourceMap",
            "postcss",
            "resolve-url",
          ].join("!"),
        ),
      },

      {
        test: /\.(png|jpe?g|gif|ico|bg.svg)$/,
        loader: "url",
        query: {
          // limit: 10000, // DataUrl if file is smaller that 10kb
          name: "images/[name].[ext]",
        },
      },

      {
        test: /\.(ttf|eot|otf|woff2?)$/,
        loader: "file",
        query: {
          name: "fonts/[name].[ext]",
        },
      },

      {
        test: /\.raw.svg$/,
        loader: 'raw-loader',
      },

    ],
  },

  node: {
    fs: "empty" // avoids error messages
  },

  postcss: (webpack) => [

    require("postcss-smart-import")({
      addDependencyTo: webpack,
    }),

    require("postcss-cssnext")({
      features: {
        customProperties: {
          variables: {
            maxWidth: "100%",
          },
        },
        customMedia: {
          extensions: {
            maxMedium: "(max-width: 41.875em)",
            medium: "(min-width: 41.876em)",
            wide: "(min-width: 47.5em)",
            maxLarge: "(max-width: 50em)",
            large: "(min-width: 50.01em)",
          },
        },
      },

    }),
  ],

  eslint: {
    reporter: eslintFormatter,
  },

  plugins: [

    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": production,
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),

    new extractTextPlugin("stylesheets/[name].css", {disable: !production}),

    ...(production ?
      [

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
          compress: {
            drop_console: true,
            warnings: false,
          },
          sourceMap: true,
        }),

        new progressBarPlugin(),

      ] : []
    ),

  ],

}

const devConfig = production ? {} : {

  entry: {
    ...mainConfig.entry,
    dev: devEntries,
  },

  plugins: [
    ...(mainConfig.plugins || []),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new webpack.NoErrorsPlugin(),
  ],

  eslint: {
    ...mainConfig.eslint,
    emitWarning: true,
  },

}

const config = Object.assign({}, mainConfig, devConfig)

export default config
