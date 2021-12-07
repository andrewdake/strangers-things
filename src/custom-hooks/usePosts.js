import { useState, useEffect } from "react";
import axios from "axios";

export function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          "https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/posts"
        );

        const { posts } = response.data.data;

        setPosts(posts);
      } catch (ex) {
        console.error(ex);
      }
    };

    getPosts();
  }, []);

  return { posts };
}
