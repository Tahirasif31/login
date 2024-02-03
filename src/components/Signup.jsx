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
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  function login() {
    if (email.length === 0) return setEmailError(true);
    if (password.length < 8) return setPassError(true);
    setEmailError((e) => false);
    setPassError((e) => false);
    setEmail("");
    setPassword("");
    alert("you are sucessfully login");
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
        fontSize="2rem"
        textAlign="center"
        padding="0 3.2rem"
        mb="0.8rem"
      >
        Signup to Dashboard Kit
      </Heading>
      <Box>
        <Text
          fontSize="1.8rem"
          color="#A4A6B3"
          textAlign="center"
          fontWeight="500"
          mb="4rem"
        >
          Enter your Personal Information
        </Text>

        <Text fontSize="2.2rem" color="#A4A6B3" mb="0.4rem" value={email}>
          Full Name
        </Text>

        <Input
          sx={{
            padding: "1.2rem",
            marginBottom: "1.8rem",
            borderRadius: "8px",
            ":focus": {
              outline: "none",
            },
          }}
          size="4xl"
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setName(e.target.value)}
          border={emailError ? "2px solid red" : "2px solid #A4A6B3"}
          value={name}
        />
      </Box>
      <Box>
        <Text fontSize="2.2rem" color="#A4A6B3" mb="0.4rem" value={email}>
          Email
        </Text>

        <Input
          sx={{
            padding: "1.2rem",
            marginBottom: "1.8rem",
            borderRadius: "8px",
            ":focus": {
              outline: "none",
            },
          }}
          size="4xl"
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          border={emailError ? "2px solid red" : "2px solid #A4A6B3"}
          value={email}
        />
      </Box>
      <Box>
        <Text fontSize="2.2rem" color="#A4A6B3" mb="0.4rem" value={email}>
          Password
        </Text>

        <Input
          border={passError ? "2px solid red" : "2px solid #A4A6B3"}
          type="text"
          padding="1.2rem"
          placeholder="Enter Your Password"
          borderRadius="8px"
          size="4xl"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
        Signup
      </Button>

      <Text fontSize="1.8rem" textAlign="center">
        <Text as="span">already have an account? </Text>
        <Text as="span" color="blue">
          Login now
        </Text>
      </Text>
    </Container>
  );
}

export default Signup;