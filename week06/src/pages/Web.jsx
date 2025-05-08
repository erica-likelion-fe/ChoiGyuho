import { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const Web = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <Header title={"ERICA x React Props State"} />
      <Nav posts={posts} setSelectedPost={setSelectedPost} />
      <Outlet context={{ posts, setPosts, selectedPost }} />
    </>
  );
};

export default Web;
