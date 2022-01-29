import { Layout, Nav } from "@douyinfe/semi-ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import ViewPost from "./views/ViewPost";

export default function Router() {
  const { Content, Footer } = Layout;
  return (
    <BrowserRouter>
      <Layout className="full overflow-auto">
        <Navbar />
        <Layout>
          <Content className="container">
            <Routes>
              <Route path="/">
                <Route element={<Home />} index />
                <Route path="/posts/:postId" element={<ViewPost />} />
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
