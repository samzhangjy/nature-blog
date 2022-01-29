import React from "react";
import { Empty, Button, Typography } from "@douyinfe/semi-ui";
import {
  IllustrationNotFound,
  IllustrationNotFoundDark,
} from "@douyinfe/semi-illustrations";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const { Text } = Typography;
  const navigate = useNavigate();
  return (
    <Empty
      image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
      darkModeImage={
        <IllustrationNotFoundDark style={{ width: 150, height: 150 }} />
      }
      title="页面走丢了"
      description={<Text>Oops，你打开的页面走丢啦……</Text>}
      style={{ marginTop: "100px" }}
    >
      <div>
        <Button
          style={{ padding: "6px 24px", marginRight: 12 }}
          type="primary"
          onClick={() => navigate(-1)}
        >
          返回上页
        </Button>
        <Button
          style={{ padding: "6px 24px" }}
          theme="solid"
          type="primary"
          onClick={() => navigate("/")}
        >
          返回首页
        </Button>
      </div>
    </Empty>
  );
}
