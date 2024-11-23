import "./post.css";
import { MoreVert, Delete as DeleteIcon } from "@mui/icons-material";
import { Users } from "../../data.js";
import { useState } from "react";

export default function Post({ post, onDelete, onEdit }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <DeleteIcon onClick={() => onDelete(post.id)} />
            <MoreVert onClick={() => onEdit(post.id, post.desc)} />{" "}
            {/* Cambiado */}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like2.jpg"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/like.jpg"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">a {like} les gusto esto</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comentarios</span>
          </div>
        </div>
      </div>
    </div>
  );
}
