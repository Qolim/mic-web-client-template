const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[hash:8].js",
  },
  devServer: {
    port: 8011,
    hot: true,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      hash: true,
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "child-sys-one.html",
      hash: true,
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "child-sys-two.html",
      hash: true,
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
