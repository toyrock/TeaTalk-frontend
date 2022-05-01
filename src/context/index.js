import { createContext, useState, useEffect } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const signup = async (userName, email, password) => {
    const response = await client.post("/auth/signup", {
      userName,
      email,
      password,
    });
  };

  const login = async (email, password) => {
    try {
      const response = await client.post("/auth/login", {
        email,
        password,
      });
      saveToken(response.data.token);
      const findUser ={
        username:response.data.userName,
        email: response.data.email,
      }
      setUser(findUser);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const verify = async () => {
    try {
      const response = await client.get("/auth/verify");
      setUser(response.data.user);
      navigate("/home");
    } catch (error) {
      navigate("/home");
    }
  };

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/landing");
  };

  useEffect(() => {
    verify();
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}