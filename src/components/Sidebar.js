import React from "react";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconStar,
  IconUser,
  IconSetting,
  IconCodeStroked,
  IconUserGroup,
  IconTabsStroked,
  IconHome,
} from "@douyinfe/semi-icons";
import { RiAngularjsFill, RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import {
  AiOutlineFieldBinary,
  AiOutlineBug,
  AiOutlineRobot,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const items = [
  {
    itemKey: "home",
    text: "首页",
    icon: <IconHome />,
    to: "/"
  },
  {
    itemKey: "frontend",
    text: "前端开发",
    icon: <IconTabsStroked style={{ fontSize: "18px" }} />,
    items: [
      {
        itemKey: "react",
        text: "React",
        icon: <RiReactjsFill style={{ fontSize: "18px", color: "#62C3F5" }} />,
        to: "/show/frontend/react/"
      },
      {
        itemKey: "vue",
        text: "Vuejs",
        icon: <RiVuejsFill style={{ fontSize: "18px", color: "#30953A" }} />,
        to: "/show/frontend/vue"
      },
      {
        itemKey: "angular",
        text: "Angular",
        icon: <RiAngularjsFill style={{ fontSize: "18px", color: "#D52515" }} />,
        to: "/show/frontend/angular"
      },
    ],
  },
  {
    itemKey: "spider",
    text: "网页爬虫",
    icon: <IconCodeStroked style={{ fontSize: "18px" }} />,
    items: [
      {
        itemKey: "basic",
        text: "基础教程",
        icon: (
          <AiOutlineFieldBinary
            style={{ fontSize: "18px", color: "#3F51B5" }}
          />
        ),
        to: "/show/spider/basic"
      },
      {
        itemKey: "strategies",
        text: "爬虫策略",
        icon: <AiOutlineBug style={{ fontSize: "18px", color: "#7E3100" }} />,
        to: "/show/spider/strategies"
      },
      {
        itemKey: "auto-test",
        text: "自动化测试",
        icon: <AiOutlineRobot style={{ fontSize: "18px", color: "#F0B114" }} />,
        to: "/show/spider/auto-test"
      },
    ],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Nav
      style={{ height: "100%" }}
      items={items}
      onSelect={(key) => { navigate(key.selectedItems[0].to) }}
      footer={{
        collapseButton: true,
      }}
      defaultOpenKeys={["frontend", "spider"]}
    />
  );
}
