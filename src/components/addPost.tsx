import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostAction } from "../store/post/actions";
import { getPosts } from "../store/post/selectors";
import { getIsLogged, getUser } from "../store/user/selectors";

const AddPost = () => {
  const addPost = useSelector(getPosts);
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isLogged = useSelector(getIsLogged);

  const handleClick = () => {
    dispatch(addPostAction(post, user));
  };

  console.log("add", addPost);

  return (
    <>
      {isLogged && (
        <div>
          <h1>AddPost</h1>
          <textarea
            placeholder="Add here your post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />

          <button onClick={handleClick}>Add post</button>
        </div>
      )}
    </>
  );
};

export default AddPost;
