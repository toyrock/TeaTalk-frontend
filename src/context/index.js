import axios from "axios";

const { createContext, useState, useEffect } = require("react");

// create a context
export const AuthContext = createContext();

// create a provider
export function AuthContextProvider({ children }) {
  // variable to hold the user
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get token from localstorage
    const token = localStorage.getItem("token");
    // verify the token
    if (token) {
      const url = `${process.env.REACT_APP_BACKEND_URL}/auth/verify`;
      const config = {
        headers: {
          authorization: token,
        },
      };

      // query the verify route in the backend
      axios
        .get(url, config)
        .then((response) => {
          if (response.status === 200) {
            console.log()
            setUser(response.data);
          } else {
            setUser(null);
            localStorage.removeItem("token");
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
        });
    }
    // check if token is valid (staus code 200) set the user (setUser)
    // if token is not valid delete the token from local storage
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
