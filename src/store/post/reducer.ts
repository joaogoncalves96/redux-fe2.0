import shortid from "shortid";
import {
  SetCommentPostAction,
  SetLikeAction,
  SetPostAction,
  SetRemovePostAction,
} from "./actions";

const initialState = {
  posts: [
    {
      id: "1",
      text: "text",
      likes: [],
      comments: ["first comment", "second"],
      username: "joao",
    },
    {
      id: "2",
      text: "text1",
      likes: ["asd", "qwerty"],
      comments: ["first comment", "second"],
      username: "joao1234",
    },
  ],
};

const postReducer = (
  state = initialState,
  action:
    | SetPostAction
    | SetLikeAction
    | SetRemovePostAction
    | SetCommentPostAction
) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              comments: [...post.comments, action.payload.comment],
            };
          }
          return post;
        }),
      };
    case "REMOVE_POST":
      const { post } = action.payload;
      return {
        ...state,
        //@ts-ignore
        posts: state.posts.filter((p) => p !== post),
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            ...action.payload,
            id: shortid.generate(),
          },
        ],
      };
    case "ADD_LIKE":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              likes: [...post.likes, action.payload.like],
            };
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
