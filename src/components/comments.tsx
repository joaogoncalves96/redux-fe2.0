import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentAction } from "../store/post/actions";

interface Props {
  username: string;
  isLogged: boolean;
  comments: string[];
}

const Comments = ({ username, isLogged, comments }: Props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleComment = (user: string, comment: string) => {
    dispatch(addCommentAction(user, comment));
    setComment("");
  };

  console.log("comment", comments);

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      {isLogged && (
        <>
          <input
            placeholder="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={() => handleComment(username, comment)}>
            add comment
          </button>
        </>
      )}
    </div>
  );
};

export default Comments;
