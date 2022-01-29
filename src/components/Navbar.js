import React from "react";
import {
  Nav,
  Button,
  Layout,
  Space
} from "@douyinfe/semi-ui";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { Header } = Layout;
  const navigate = useNavigate();
  return (
    <>
      <Header className="w-full">
        <Nav
          mode={"horizontal"}
          onSelect={(key) => console.log(key)}
          header={{
            logo: (
              <img src={logo} alt="Nature Studio" />
            ),
            text: "Nature Studio",
          }}
          footer={
            <Space>
              <Button style={{ marginRight: 0 }} theme='borderless' onClick={() => navigate("/")}>首页</Button>
              <Button style={{ marginRight: 0 }} theme='borderless'>关于我们</Button>
            </Space>
          }
          className="w-full"
        />
      </Header>
    </>
  );
}
