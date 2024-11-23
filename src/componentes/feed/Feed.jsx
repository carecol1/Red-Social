import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts as data } from "../../data";
import { useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState(data);
  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
