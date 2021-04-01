const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[hash:8].js",
  },
  devServer: {
    port: 8002,
    hot: true,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      path: path.resolve(__dirname, "dist"),
      filename: "index.html",
      hash: true,
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        loader: "style-loader",
      },
      {
        test: /\.ts/,
        loader: "ts-loader",
      },
    ],
  },
};
