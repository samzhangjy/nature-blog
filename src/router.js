import { Layout, Nav } from "@douyinfe/semi-ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./components/Copyright";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

export default function Router() {
  const { Sider, Content, Footer } = Layout;
  return (
    <BrowserRouter>
      <Layout className="full overflow-auto">
        <Navbar />
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content className="container">
            <Routes>
              <Route path="/">
                <Route element={<Home />} index />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </Layout>
        <Footer>
          <Copyright />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}
