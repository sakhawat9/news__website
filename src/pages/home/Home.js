import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import Sidebar from "../../components/sidebar/Sidebar";
import Post from "../../components/post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://nameless-anchorage-88117.herokuapp.com/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  console.log("posts", posts);
  return (
    <Container>
      <Banner />
      <Row>
        <Col md={8}>
          <Row>
            {posts.map((post) => <Post post={post} key={post._id} />)}
          </Row>
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
