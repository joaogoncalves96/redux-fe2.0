import { SetLikeAction, SetPostAction, SetRemovePostAction } from "./actions";

const initialState = {
  posts: [
    { text: "text", likes: [], comments: [], username: "joao" },
    { text: "text1", likes: [], comments: [], username: "joao1234" },
  ],
};

const postReducer = (
  state = initialState,
  action: SetPostAction | SetLikeAction | SetRemovePostAction
) => {
  switch (action.type) {
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
