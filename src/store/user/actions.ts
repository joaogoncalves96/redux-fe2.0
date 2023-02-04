export interface SetUsernameAction {
  type: "SET_USERNAME";
  payload: {
    username: string;
    isLogged: boolean;
  };
}

export const setUsernameAction = (
  username: string,
  isLogged: boolean
): SetUsernameAction => ({
  type: "SET_USERNAME",
  payload: {
    username,
    isLogged,
  },
});

export type Actions = SetUsernameAction;
