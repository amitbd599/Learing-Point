import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getData } from "../api/api";
import { Set, Stack } from "immutable";

const Inner = () => {
  useEffect(() => {
    getData();
  }, []);

  const posts = useSelector((state) => state.Data.data);

  if (!posts || posts.size === 0) {
    return <p>Loading...</p>;
  }

  const mySet = Set([1, 2, 3, 3, 4, 5, 5, 5, 7, 7]);

  const myStack = Stack([10, 20, 30]);

  console.log(myStack.toArray());

  console.log(mySet.toArray());

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.get("id")}>
            <strong>{post.get("title")}</strong>: {post.get("body")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inner;
