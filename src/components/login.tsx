import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogged, getUser } from "../store/user/selectors";
import { setUsernameAction } from "../store/user/actions";

const Login = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  
  const user = useSelector(getUser);
  const isLogged = useSelector(getIsLogged);

  const handleLogin = () => {
    dispatch(setUsernameAction(username, true));
  };

  const handleLogout = () => {
    dispatch(setUsernameAction(username, false));
  };

  console.log("user", isLogged);

  return (
    <div>
      {!isLogged ? (
        <>
          <h1>Login</h1>
          <input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <div>
          <h1>Welcome {user}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
