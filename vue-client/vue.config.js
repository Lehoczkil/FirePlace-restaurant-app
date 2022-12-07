module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3100",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};