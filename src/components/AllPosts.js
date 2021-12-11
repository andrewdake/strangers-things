import React from "react";
import Post from "./Post";
import { usePosts } from "../custom-hooks";
import { Layout } from "./util";

export default function AllPosts() {
  const { posts } = usePosts();

  return (
    <Layout>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Layout>
  );
}
