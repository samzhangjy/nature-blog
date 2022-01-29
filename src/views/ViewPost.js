import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@douyinfe/semi-ui"

export default function ViewPost() {
  const { postId } = useParams();
  const { Title, Text } = Typography;
  const post = require(`../posts/${postId}.md`)
  return (
    <>
      <Title>{post.attributes.title}</Title>
      <Text>{post.attributes.desc}</Text>
      <hr />
      <post.react Title={Title} />
    </>
  )
}