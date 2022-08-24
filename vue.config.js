const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV === "production",
  runtimeCompiler: false,
  productionSourceMap: true,
  transpileDependencies: true
})