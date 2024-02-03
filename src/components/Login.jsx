import {
  Container,
  Image,
  Flex,
  Text,
  Heading,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  function login() {
    if (password.length < 8) {
      setEmailError(true);
    } else if (email.length === 0) {
      setPassError(true);
    } else {
      alert("you are sucessfully login");
    }
  }
  return (
    <Container
      bg="#fff"
      borderRadius="12px"
      px="2.4rem"
      py="3.2rem"
      fontFamily="Mulish"
    >
      <Flex justifyContent="center">
        <Image src="/logo.png" textAlign="center" />
      </Flex>
      <Text fontSize="1.8rem" textAlign="center" color="#A4A6B3" mb="3.6rem">
        DashBoard Ui Kit
      </Text>
      <Heading
        fontSize="2.2rem"
        textAlign="center"
        padding="0 3.2rem"
        mb="0.8rem"
      >
        Log In to Dashboard Kit
      </Heading>
      <Box>
        <Text
          fontSize="1.8rem"
          color="#A4A6B3"
          textAlign="center"
          fontWeight="500"
          mb="4rem"
        >
          Enter your email and password
        </Text>

        <Text
          fontSize="2.2rem"
          color="#A4A6B3"
          mb="0.4rem"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        >
          Email
        </Text>

        <Input
          type="text"
          padding="1.2rem"
          border="2px solid #A4A6B3"
          placeholder="Enter Your Email"
          marginBottom="1.8rem"
          borderRadius="8px"
          size="4xl"
        />
      </Box>
      <Box>
        <Text
          fontSize="2.2rem"
          color="#A4A6B3"
          mb="0.4rem"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        >
          Password
        </Text>

        <Input
          type="text"
          padding="1.2rem"
          border="2px solid #A4A6B3"
          placeholder="Enter Your Email"
          borderRadius="8px"
          size="4xl"
        />
      </Box>
      <Text
        textAlign="right"
        fontSize="1.8rem"
        marginTop="4px"
        marginBottom="2.8rem"
        color="#A4A6B3"
      >
        forgot Password!
      </Text>
      <Button
        py="0.8rem"
        px="1.2rem"
        fontSize="2.5rem"
        bg="blue"
        color="#fff"
        size="4xl"
        borderRadius="6px"
        marginBottom="1.8rem"
        onClick={login}
      >
        Login
      </Button>

      <Text fontSize="1.8rem" textAlign="center">
        <Text as="span">don't have an account? </Text>
        <Text as="span" color="blue">
          Sign up now
        </Text>
      </Text>
    </Container>
  );
}

export default Login;
