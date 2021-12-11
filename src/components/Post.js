import React from "react";
import { formatDate } from "../lib";

export default function Post({ post }) {
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
