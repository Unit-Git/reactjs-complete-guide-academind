import React from "react";

const dataContext = {
  authenticated: false,
  login: () => {},
};
const AuthContext = React.createContext(dataContext);

export default AuthContext;
