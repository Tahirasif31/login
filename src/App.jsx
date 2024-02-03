import { useState } from "react";
import * as React from "react";
import { Container, Flex } from "@chakra-ui/react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPassword from "./components/forgetPassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex bg="#353131" h="100vh" maxW="100vw" alignItems="center">
      {/* <Login /> */}
      {/* <Signup /> */}
      <ForgetPassword />
    </Flex>
  );
}

export default App;
