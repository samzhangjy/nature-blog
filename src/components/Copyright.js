import React from "react";
import { Space, Typography } from "@douyinfe/semi-ui";

export default function Copyright() {
  const { Text } = Typography;
  return (
    <div className="footer">
      <Text>
        &copy; {new Date().getFullYear()}{" "}
        <Text
          link={{
            href: "https://github.com/samzhangjy",
            target: "_blank",
          }}
        >
          @samzhangjy
        </Text>{" "}
        for Nature Studio
      </Text>
    </div>
  );
}
