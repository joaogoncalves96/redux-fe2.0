import { Actions, SetUsernameAction } from "./actions";

const initialState = {
  username: "",
  isLogged: false,
};

const usernameReducer = (state = initialState, action: SetUsernameAction) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload.username,
        isLogged: action.payload.isLogged,
      };
    default:
      return state;
  }
};

export default usernameReducer;
