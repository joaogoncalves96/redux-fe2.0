import { Store } from "redux";
import { get } from "lodash";

export const getPosts = (store: Store) => get(store, "posts.posts", []);
