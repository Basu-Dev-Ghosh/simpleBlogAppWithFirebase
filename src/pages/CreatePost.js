import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {
  const navigate=useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const postsCollectionRef = collection(db, "posts");
  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(postsCollectionRef, {
      title,
      content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid  },
    });
    navigate('/')
  };
  useEffect(()=>{
  if(!isAuth){
    navigate("/")
  }
  },[])
  return (
    <>
      <div className="container create-post-container">
        <form onSubmit={createPost}>
          <div class="form-outline mb-4">
            <input
              type="text"
              id="form4Example1"
              class="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label class="form-label" for="form4Example1">
              Title..
            </label>
          </div>
          <div class="form-outline mb-4">
            <textarea
              class="form-control"
              id="form4Example3"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label class="form-label" for="form4Example3">
              Content...
            </label>
          </div>

          <button type="submit" class="btn btn-danger btn-block mb-4">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
