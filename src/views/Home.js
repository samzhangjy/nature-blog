import React from "react";
import { Button, Typography, Card, CardGroup, Space } from "@douyinfe/semi-ui";

export default function Home() {
  const { Title, Text } = Typography;
  const { Meta } = Card;
  return (
    <Space vertical align="start" spacing="loose">
      <Title>
        Welcome to <code>DevHint</code> !
      </Title>
      <Text>在 DevHint，你可以找到各种各样的编程资源!</Text>
    </Space>
  );
}
