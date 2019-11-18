const {
  NODE_ENV = "development",
} = process.env;

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules/",
      "src/",
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
  mode: NODE_ENV,
};
