import {
  SetCommentPostAction,
  SetLikeAction,
  SetPostAction,
  SetRemovePostAction,
} from "./actions";

const initialState = {
  posts: [
    {
      text: "text",
      likes: [],
      comments: ["first comment", "second"],
      username: "joao",
    },
    {
      text: "text1",
      likes: [],
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
          return {
            ...post,
            comments: [...post.comments, action.payload.comment],
          };
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
        posts: [...state.posts, action.payload],
      };
    case "ADD_LIKE":
      const { username, like, comment } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.username === username) {
          return {
            ...post,
            likes: [...post.likes, like],
            comments: [...post.comments, comment],
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    default:
      return state;
  }
};

export default postReducer;
