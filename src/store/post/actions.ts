/*
{
  userReducer: {
    username: String;
  },
  postReducer: [
    {
      text: String,
      likes: string[],
      comments: string[],
      user: string
    }
  ]
}
*/

export interface SetPostAction {
  type: "ADD_POST";
  payload: {
    text: string;
    likes: string[];
    comments: string[];
    username: string;
  };
}

export interface SetLikeAction {
  type: "ADD_LIKE";
  payload: {
    username: string;
    like: number;
    comment: string;
  };
}
export interface SetRemovePostAction {
  type: "REMOVE_POST";
  payload: {
    post: SetPostAction;
  };
}
export interface SetCommentPostAction {
  type: "ADD_COMMENT";
  payload: {
    username: string;
    comment: string;
  };
}

export const addPostAction = (
  text: string,
  username: string
): SetPostAction => ({
  type: "ADD_POST",
  payload: {
    text,
    likes: [],
    comments: [],
    username,
  },
});

export const removePostAction = (post: SetPostAction["payload"]) => ({
  type: "REMOVE_POST",
  payload: {
    post,
  },
});

export const addLikeAction = (
  username: string,
  like: number,
  comment: string
): SetLikeAction => ({
  type: "ADD_LIKE",
  payload: {
    username,
    like,
    comment,
  },
});

export const addCommentAction = (
  username: string,
  comment: string
): SetCommentPostAction => ({
  type: "ADD_COMMENT",
  payload: {
    username,
    comment,
  },
});

export type Actions = SetPostAction | SetLikeAction | SetRemovePostAction;
