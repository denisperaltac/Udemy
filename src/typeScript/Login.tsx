import React, { useEffect, useReducer } from "react";

interface AuthState {
  validando: Boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  name: "",
};

type LoginPayload = {
  username: string;
  name: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        name: "",
        username: "",
      };
    case "login":
      const { name } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        name,
        username: action.payload.username,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [{ validando, token, username, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { username: "NAPOLEQN", name: "Denis Peralta" },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  if (validando) {
    return (
      <>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <>
          <div className="alert alert-success">
            Hola {name}. Estas Autenticado como: {username}
          </div>
          <button className="btn-primary" onClick={logout}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No Autenticado</div>
          <button className="btn-primary" onClick={login}>
            Log In
          </button>
        </>
      )}
    </>
  );
};

export default Login;
