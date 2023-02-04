import React from "react";
import AddPost from "./components/addPost";
import Login from "./components/login";
import Posts from "./components/posts";

function App() {
  return (
    <>
      <Login />
      <AddPost />
      <Posts />
    </>
  );
}

export default App;
