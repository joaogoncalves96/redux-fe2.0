import React, { useState } from "react";

interface Props {
  likes: string[];
}

const Likes = ({ likes }: Props) => {
  return (
    <>
      <h3>Likes</h3>
      <ul>
        {likes.map((like) => (
          <li>{like}</li>
        ))}
      </ul>
    </>
  );
};

export default Likes;
