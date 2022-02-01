import React, { useState } from "react";
import { Space, Col, Row, Typography, Pagination } from "@douyinfe/semi-ui";
import data from "../posts/data.json";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { postsPerPage } from "../config";

export default function ViewPosts() {
  const { Title } = Typography;
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const posts = [];
  for (var i = 0; i < data.length; i++) {
    posts.push({
      ...require(`../posts/${data[i]}`),
      id: data[i].split(".")[0],
    });
  }
  console.log((page - 1) * postsPerPage, page * postsPerPage - 1)
  return (
    <Space vertical align="start" spacing="loose" className="w-full">
      <Title>博客归档</Title>
      <hr />
      <Row gutter={55}>
        {posts.length > postsPerPage
          ? posts.slice((page - 1) * postsPerPage, page * postsPerPage).map((value, index) => {
              return (
                <Col md={12} lg={8} xxl={6} key={index} style={{marginBottom: 20}}>
                  <Post post={value} />
                </Col>
              );
            })
          : posts.map((value, index) => {
              return (
                <Col md={12} lg={8} xxl={6} key={index} style={{marginBottom: 20}}>
                  <Post post={value} />
                </Col>
              );
            })}
      </Row>
      <div className="text-center">
        <Pagination
          total={posts.length}
          pageSize={postsPerPage}
          currentPage={page}
          onPageChange={(e) => setPage(e)}
          className="text-center"
        />
      </div>
    </Space>
  );
}
