import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";

const Home = ({isAuth}) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getdocs = async () => {
      const data = await getDocs(postsCollectionRef, db);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getdocs();
  });
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <>
      <div className="posts-container container">
        {postList.map((post) => {
          return (
            <div className="post shadow p-3 mb-5 bg-white rounded">
              <div className="title">
                <h1>{post.title}</h1>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <i
                    class="fa-solid fa-trash"
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  ></i>
                )}
              </div>
              <div className="content">{post.content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
