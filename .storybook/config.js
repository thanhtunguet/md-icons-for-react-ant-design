import {addDecorator, configure} from "@storybook/react";
import Card from "antd/lib/card";
import * as React from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "../src/styles/stories.scss";

addDecorator((storyFn) => {
  return (
    <Card>
      {storyFn()}
    </Card>
  );
});

configure(require.context("../src", true, /stories\.tsx?$/), module);
