import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgetPassword from "./components/forgetPassword";
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget" element={<ForgetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
