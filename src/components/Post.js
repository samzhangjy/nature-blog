import React from "react";
import { Card, Space, Button, Typography, Tag } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const value = props.post;
  const navigate = useNavigate();
  const { Meta } = Card;
  const { Text } = Typography;
  return (
    <Card
      title={
        <Meta
          title={value.attributes.title}
          description={
            <Space style={{ marginTop: "10px" }}>
              {value.attributes.tags ? value.attributes.tags.map((tag, idx) => {
                return <Tag key={idx}>{tag}</Tag>;
              }) : null}
            </Space>
          }
        />
      }
      headerExtraContent={
        <Text type="tertiary">{value.attributes.publish_date}</Text>
      }
      cover={<img alt="example" src={value.attributes.cover} />}
      footerStyle={{ display: "flex", justifyContent: "flex-end" }}
      footer={
        <Space>
          <Button
            theme="solid"
            type="primary"
            onClick={() => navigate(`/posts/${value.id}`)}
          >
            继续阅读
          </Button>
        </Space>
      }
    >
      {value.attributes.desc}
    </Card>
  );
}
