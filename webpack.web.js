const path = require("path");
const common = require("./webpack.common");

module.exports = {
  ...common,
  module: {
    ...common.module,
    rules: [
      ...common.module.rules,
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  entry: {
    client: "./src/client.tsx",
    styles: "./src/styles.tsx",
  },
  output: {
    path: path.resolve(__dirname, "docs", "js"),
    filename: "[name].js",
  },
  target: "web",
};
