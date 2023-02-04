import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import postReducer from "./post/reducer";
import usernameReducer from "./user/reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  username: usernameReducer,
});

export const store = createStore(rootReducer);
