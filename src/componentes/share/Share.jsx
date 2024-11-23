import "./share.css";
import Post from "../post/Post";
import { useState, useEffect } from "react";

import {
  PermMedia as PermMediaIcon,
  Label as LabelIcon,
  Room as RoomIcon,
  EmojiEmotions as EmojiEmotionsIcon,
} from "@mui/icons-material";

export default function Share() {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [editPostId, setEditPostId] = useState(null);
  const [editText, setEditText] = useState(""); // Texto en edición

  // Guarda los datos en localStorage
  const persistData = (newList) => {
    localStorage.setItem("posts", JSON.stringify(newList));
  };

  // Crea un nuevo post
  const createNewPost = () => ({
    id: Date.now(),
    desc: newPostText,
    date: "justo ahora",
    like: 0,
    comment: 0,
    userId: 1,
  });

  // Añade un nuevo post
  const addPost = () => {
    if (newPostText.trim() !== "") {
      const newPost = createNewPost();
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      persistData(updatedPosts);
      setNewPostText("");
    }
  };

  // Elimina un post por ID
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    persistData(updatedPosts);
  };

  // Inicia el modo de edición
  const startEditing = (id, currentText) => {
    setEditPostId(id);
    setEditText(currentText);
  };

  // Guarda los cambios al editar
  const saveEdit = () => {
    const updatedPosts = posts.map((post) =>
      post.id === editPostId ? { ...post, desc: editText } : post
    );
    setPosts(updatedPosts);
    persistData(updatedPosts);
    setEditPostId(null);
    setEditText("");
  };

  // Cancela la edición
  const cancelEdit = () => {
    setEditPostId(null);
    setEditText("");
  };

  // Carga los datos de localStorage al iniciar
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    try {
      const parsedPosts = JSON.parse(storedPosts);
      if (Array.isArray(parsedPosts)) {
        setPosts(parsedPosts);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error("Error parsing posts from localStorage:", error);
      setPosts([]);
    }
  }, []);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/persona1.jpg" alt="" />
          <input
            placeholder="¿En qué estás pensando?"
            className="shareInput"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Foto o video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Ubicación</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Senimientos</span>
            </div>
          </div>
          <button className="shareButton" onClick={addPost}>
            Share
          </button>
        </div>
      </div>
      <div className="postsContainer">
        {posts.map((post) =>
          editPostId === post.id ? (
            <div key={post.id} className="post">
              <div className="postWrapper">
                <div className="postTop">
                  <div className="postTopLeft">
                    <img
                      className="postProfileImg"
                      src="/assets/persona1.jpg"
                      alt=""
                    />
                    <span className="postUsername">Karelia Guillen</span>
                    <span className="postDate">{post.date}</span>
                  </div>
                </div>
                <div className="postCenter">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="editInput"
                  />
                </div>
                <div className="postBottom">
                  <button className="editButton" onClick={saveEdit}>
                    Guardar
                  </button>
                  <button className="editButton cancel" onClick={cancelEdit}>
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Post
              key={post.id}
              post={post}
              onDelete={deletePost}
              onEdit={() => startEditing(post.id, post.desc)}
            />
          )
        )}
      </div>
    </div>
  );
}
