import { Store } from "redux";
import { get } from "lodash";

export const getUser = (store: Store) => get(store, "username.username", "");
export const getIsLogged = (store: Store) => get(store, "username.isLogged", false);
