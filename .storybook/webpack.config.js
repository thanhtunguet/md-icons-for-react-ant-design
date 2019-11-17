module.exports = ({config}) => {
  config.entry = "./.storybook/config.js";
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      use: [
        "awesome-typescript-loader",
        "ts-loader",
      ],
    },
    {
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true,
          },
        },
      ],
    },
  );
  config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx", ".less", ".scss");
  return config;
};
