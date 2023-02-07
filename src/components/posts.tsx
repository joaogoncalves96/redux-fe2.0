import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikeAction, removePostAction } from "../store/post/actions";
import { getPosts } from "../store/post/selectors";
import { getIsLogged, getUser } from "../store/user/selectors";
import Comments from "./comments";
import Likes from "./likes";

interface SetPostAction {
  id: string;
  text: string;
  likes: string[];
  comments: string[];
  username: string;
}

const Posts = () => {
  const addPost = useSelector(getPosts);
  const isLogged = useSelector(getIsLogged);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const handleDelete = (post: SetPostAction) => {
    dispatch(removePostAction(post));
  };

  const handleClick = (user: string, like: string, postId: string) => {
    dispatch(addLikeAction(user, like, postId));
  };

  console.log("post", addPost);

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
                    {user === post.username && (
                      <button onClick={() => handleDelete(post)}>
                        Delete post
                      </button>
                    )}
                    {!post.likes.includes(user) && (
                      <button onClick={() => handleClick(user, user, post.id)}>
                        Like
                      </button>
                    )}
                    <Likes likes={post.likes} />
                  </>
                )}
              </>
              <Comments
                username={user}
                isLogged={isLogged}
                comments={post.comments}
                postId={post.id}
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
