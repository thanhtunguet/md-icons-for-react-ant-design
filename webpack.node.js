const path = require("path");
const common = require("./webpack.common");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  ...common,
  entry: {
    transform: "./src/transform.tsx",
    "build-docs": "./src/build-docs.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  target: "node",
  externals: [
    webpackNodeExternals(),
  ],
  resolve: {
    ...common.resolve,
    alias: {
      "handlebars": "handlebars/dist/handlebars.js",
      "express": "express/index.js",
    },
  },
};
