
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('json')
      .test(/\.json$/)
      .use('json-loader')
      .loader('json-loader')
      .end();
  }
};

import { defineConfig } from '@vue/cli-service'

export default defineConfig({

})
