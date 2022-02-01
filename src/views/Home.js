import React from "react";
import {
  Button,
  Card,
  Typography,
  CardGroup,
  Space,
  Avatar,
  Col,
  Row,
  Tag,
} from "@douyinfe/semi-ui";
import { react as Markdown } from "../posts/index.md";
import data from "../posts/data.json";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { postsPerPage } from "../config";

if (window.matchMedia("(prefers-color-scheme: dark)").matches)
  require("highlight.js/styles/github-dark.css");
else require("highlight.js/styles/github.css");

export default function Home() {
  const { Title, Text, Paragraph } = Typography;
  const { Meta } = Card;
  const navigate = useNavigate();
  const posts = [];
  for (var i = 0; i < (data.length >= 6 ? 6 : data.length); i++) {
    posts.push({
      ...require(`../posts/${data[i]}`),
      id: data[i].split(".")[0],
    });
  }
  return (
    <Space vertical align="start" spacing="loose" className="w-full">
      <div className="w-full markdown">
        <Markdown Title={Title} Text={Text} />
      </div>
      <Row gutter={55}>
        {posts.slice(0, postsPerPage).map((value, index) => {
          return (
            <Col md={12} lg={8} xxl={6} key={index} style={{marginBottom: 20}}>
              <Post post={value} />
            </Col>
          );
        })}
      </Row>
    </Space>
  );
}
