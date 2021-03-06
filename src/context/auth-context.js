import React from "react";

const store = {
  authenticated: false,
  login: () => {},
};
const AuthContext = React.createContext(store);

const AuthProvider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };

export default AuthContext;
