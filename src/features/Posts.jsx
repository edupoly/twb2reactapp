import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts([...data.posts]);
      });
  }, []);
  return (
    <div className="border border-2 p-2 m-2">
      <ul className="d-flex flex-wrap list-unstyled gap-4">
        {posts?.map((post) => {
          return (
            <li className="p-2 border border-1 w-25">
              <Link to="/postDetails" state={post}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Posts;
