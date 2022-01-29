import React from "react";
import {
  Nav,
  Button,
  Layout,
} from "@douyinfe/semi-ui";
import logo from "../assets/android-chrome-512x512.png"

export default function Navbar() {
  const { Header } = Layout;
  return (
    <>
      <Header className="w-full">
        <Nav
          mode={"horizontal"}
          onSelect={(key) => console.log(key)}
          header={{
            logo: (
              <img src={logo} alt="Dev Hint" />
            ),
            text: "DevHint",
          }}
          footer={
            <>
              <Button style={{ marginRight: 0 }} theme='borderless'>关于我们</Button>
            </>
          }
          className="w-full"
        />
      </Header>
    </>
  );
}
