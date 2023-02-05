import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removePostAction,
  SetPostAction,
} from "../store/post/actions";
import { getPosts } from "../store/post/selectors";
import { getIsLogged, getUser } from "../store/user/selectors";
import Comments from "./comments";

const Posts = () => {
  const addPost = useSelector(getPosts);
  const isLogged = useSelector(getIsLogged);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const handleDelete = (post: SetPostAction["payload"]) => {
    dispatch(removePostAction(post));
  };

  console.log("post", addPost);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {addPost.map((post: SetPostAction["payload"], index) => (
          <>
            <li key={index}>
              {post.text}
              <>
                {isLogged && (
                  <>
                    {user === post.username && (
                      <button onClick={() => handleDelete(post)}>
                        Delete post
                      </button>
                    )}
                    <button>Like</button>
                  </>
                )}
              </>
              <Comments
                username={user}
                isLogged={isLogged}
                comments={post.comments}
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
