import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, LoginPage, SignupPage, AddPostPage, UserProfilePage } from "pages";
import { AddPost, PrivateRoute } from "components";
import { AuthContextProvider } from "context";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
          <Route path="/"  element={<Home />} />
          {/* <Route path="/post/:id" element={<PostPage />} /> */}
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="AddPost" element={<AddPostPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
