module.exports = {
  outputDir: 'dist',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/scss/_variables.scss';
          @import '@/assets/scss/_main.scss';
          @import '@/assets/scss/_theme.scss';
        `,
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};
