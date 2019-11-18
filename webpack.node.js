const path = require("path");
const common = require("./webpack.common");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  ...common,
  entry: {
    cli: "./src/cli.tsx",
    server: "./src/server.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist", "lib"),
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
