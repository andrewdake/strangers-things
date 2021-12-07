import React from "react";
import { usePosts } from "../custom-hooks";
import { formatDate } from "../lib";

function Post({ post }) {
  const {
    location,
    willDeliver,
    messages,
    active,
    _id,
    author,
    cohort,
    title,
    description,
    price,
    createdAt,
    updatedAt,
    isAuthor,
  } = post || {};

  return (
    <div className="postContainer">
      <h2>{title}</h2>
      <span>{active ? "Active" : "Closed"}</span>
      <div className="author">{author.username}</div>
      <div>Created: {formatDate(createdAt)}</div>
      <div>Last Updated: {formatDate(updatedAt)}</div>
      <div>Description</div>
      <p>{description}</p>
      <div>Price: {price}</div>
    </div>
  );
}

export default function AllPosts() {
  const { posts } = usePosts();

  console.log(posts);

  return (
    <section className="container">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
}
