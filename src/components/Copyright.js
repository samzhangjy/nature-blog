import React from "react";
import { Space, Typography } from "@douyinfe/semi-ui";

export default function Copyright() {
  const { Text } = Typography;
  return (
    <div className="footer">
      <Text>
        &copy; 2022{" "}
        <Text
          link={{
            href: "https://space.bilibili.com/522408191",
            target: "_blank",
          }}
        >
          @samzhangjy
        </Text>
      </Text>
    </div>
  );
}
