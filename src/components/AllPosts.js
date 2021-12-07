import React from "react";
import { usePosts } from "../custom-hooks";

export default function AllPosts() {
  const { posts } = usePosts();

  return <div>{JSON.stringify(posts)}</div>;
}
