import { useState, useEffect } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data: posts } = await axios.get(
          "https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/posts"
        );
        setPosts(posts);
      } catch (ex) {
        console.error(ex);
      }
    };

    getPosts();
  }, []);

  return { posts };
}
