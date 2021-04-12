module.exports = {
  devServer: (_) => {
    const config = _;

    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
