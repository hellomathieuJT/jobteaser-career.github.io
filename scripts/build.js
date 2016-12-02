import webpack from "webpack"
import webpackDevServer from "webpack-dev-server"

import webpackConfig from "./config/webpack.config.babel.js"
import configWebpack from "./config/configWebpack"

const {"path": configPath, server: configServer} = configWebpack
const production = process.argv.includes(`--export`)

function build() {

  if (production) {

      webpack(webpackConfig, (err) => {
        if (err) throw err

        console.log( `✓ Webpacked !` )

      })

  } else {

    new webpackDevServer( webpack(webpackConfig), {

      https: configServer.secure,
      contentBase: "./",
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      inline: true,
      stats: true,

    }).listen(configServer.port, configServer.host, () => {

      console.log( `✓ Dev server started on ${configServer.link()}` )

    })

  }

}

build()
