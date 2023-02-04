import { add } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePostAction, SetPostAction } from "../store/post/actions";
import { getPosts } from "../store/post/selectors";
import { getIsLogged } from "../store/user/selectors";

const Posts = () => {
  const addPost = useSelector(getPosts);
  const isLogged = useSelector(getIsLogged);

  const dispatch = useDispatch();

  const handleDelete = (post: SetPostAction) => {
    dispatch(removePostAction(post));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {addPost.map((post: SetPostAction, index) => (
          <>
            <li key={index}>
              {post.text}
              <>
                {isLogged && (
                  <>
                    <button onClick={() => handleDelete(post)}>
                      Delete post
                    </button>
                    <button>Like</button>
                  </>
                )}
                <ul>
                  <li>
                    <p>first comment</p>
                    {isLogged && (
                      <>
                        <input />
                        <button>Post</button>
                      </>
                    )}
                  </li>
                </ul>
              </>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
