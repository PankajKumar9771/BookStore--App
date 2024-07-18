import React from "react";
import Home from "./home/Home";
import Courses from "./components/courses/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Login from "./components/Login";
import Search from "./components/Search";
const App = () => {
  console.log(useAuth);
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/courses"
            element={authUser ? <Courses /> : <Navigate to={"/signup"} />}
          />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
