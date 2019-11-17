module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "awesome-typescript-loader",
        ],
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules/",
      "src/"
    ],
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".js",
      ".min.js",
    ],
  },
  devtool: "source-map",
  mode: process.env.NODE_ENV,
};
