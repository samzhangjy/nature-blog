import React from "react";
import { useParams } from "react-router-dom";
import { Space, Typography, Tag } from "@douyinfe/semi-ui";
import NotFound from "./NotFound";

export default function ViewPost() {
  const { postId } = useParams();
  const { Title, Text } = Typography;
  try {
    
  require(`../posts/${postId}.md`);
  } catch(e) {
    return <NotFound />
  }
  const post = require(`../posts/${postId}.md`);
  return (
    <>
      <Title>{post.attributes.title}</Title>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        {post.attributes.tags.map((val, idx) => {
          return (
            <Tag key={idx} style={{ marginRight: 6 }}>
              {val}
            </Tag>
          );
        })}
      </div>
      <Text>{post.attributes.desc}</Text>
      <hr />
      <post.react Title={Title} Text={Text} />
      <br />
      <Text type="secondary">发布于 {post.attributes.publish_date}</Text>
    </>
  );
}
