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
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");

  function validateEmail(email) {
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
  }

  function forgetAccount() {
    if (!validateEmail(email)) {
      setMessage("Enter Valid Email");
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
      setEmail("");
      setMessage("New password sent successfully");
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
        fontSize="1.8rem"
        textAlign="center"
        padding="0 3.2rem"
        mb="0.8rem"
      >
        Recover Your Dashboard Kit
      </Heading>
      <Box>
        <Text
          fontSize="1.8rem"
          color="#A4A6B3"
          textAlign="center"
          fontWeight="500"
          mb="1.2rem"
        >
          Enter your email to request new password
        </Text>

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
      <Text fontSize="1.8rem">{message}</Text>
      <Button
        py="0.8rem"
        px="1.2rem"
        fontSize="2.5rem"
        bg="blue"
        color="#fff"
        size="4xl"
        borderRadius="6px"
        marginBottom="1.8rem"
        onClick={forgetAccount}
      >
        Recover
      </Button>

      <Text fontSize="1.8rem" textAlign="center">
        <Text as="span">don't have an account? </Text>
        <Link to={"/signup"}>
          <Text as="span" color="blue">
            Sign up now
          </Text>
        </Link>
      </Text>
    </Container>
  );
}

export default ForgetPassword;
