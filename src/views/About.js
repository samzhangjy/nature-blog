import React from "react";
import { Typography } from "@douyinfe/semi-ui";

export default function About() {
  const { Title, Text } = Typography;
  const post = require(`../posts/about.md`);
  return (
    <>
      <Title>关于我们</Title>
      <hr />
      <post.react Title={Title} Text={Text} />
    </>
  );
}
