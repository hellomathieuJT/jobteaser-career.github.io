import path from "path"
import YAML from "yamljs"

const config = YAML.load( path.resolve(__dirname, "./config.yml")  )

export default {
  path : { ...config.path },

  server : {

    ...config.server,

    protocol() {
      return `http${this.secure ? "s" : ""}://`
    },

    link() {
      const url = `${this.protocol()}${this.host}`
      return !!this.port ? `${url}:${this.port}` : url
    },

  },
}
