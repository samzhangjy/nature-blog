import React from "react";
import {
  Button,
  Card,
  Typography,
  CardGroup,
  Space,
  Avatar,
  Col,
  Row
} from "@douyinfe/semi-ui";
import { react as Markdown } from "../posts/index.md";
import data from "../posts/data.json";
import { useNavigate } from "react-router-dom"

export default function Home() {
  const { Title, Text, Paragraph } = Typography;
  const { Meta } = Card;
  const navigate = useNavigate();
  const posts = [];
  for (var i = 0; i < data.length; i++) {
    posts.push({...require(`../posts/${data[i]}`), id: data[i].split(".")[0]});
  }
  return (
    <Space vertical align="start" spacing="loose" className="w-full">
      <div className="w-full markdown">
        <Markdown Title={Title} Text={Text} />
      </div>
      <Row>
        {posts.map((value, index) => {
          return (
            <Col md={12} lg={8} xxl={6}>
              <Card
                key={index}
                title={
                  <Meta
                    title={value.attributes.title}
                  />
                }
                cover={<img alt="example" src={value.attributes.cover} />}
                footerStyle={{ display: "flex", justifyContent: "flex-end" }}
                footer={
                  <Space>
                    <Button theme="solid" type="primary" onClick={() => navigate(`/posts/${value.id}`)}>
                      继续阅读
                    </Button>
                  </Space>
                }
              >
                {value.attributes.desc}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Space>
  );
}
