import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { regiterUser } from "../Redux/AuthReducer/action";

const Register = ({ users }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [valid, setValid] = useState({
    password: false,
    email: false,
  });

  const handelRegister = () => {
    if (!registerEmail) setValid({ email: true });
    if (!registerPassword) setValid({ password: true });
    let currentUser = users
      .map((user) => user.email)
      .find((item) => item === registerEmail);

    if (currentUser === registerEmail && registerEmail && registerPassword) {
      return toast({
        title: "User already exixt.",
        description: "Try login.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    if (registerEmail && registerPassword) {
      dispatch(
        regiterUser({
          email: registerEmail,
          password: registerPassword,
          token: uuidv4(),
        })
      ).then(() => {
        toast({
          title: "Registered Successfully.",
          description: "Please login.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      });
    }
  };

  return (
    <Box w="100%">
      <Heading fontSize="2xl" fontWeight={600} mb="2rem">
        Register
      </Heading>
      <Box p="1rem 2rem">
        <Text textAlign="start" mb="1rem">
          Creating an account is quick and easy, and will allow you to move
          through our checkout quicker.
        </Text>
        <FormControl isRequired>
          <FormLabel fontWeight={400}>Email address</FormLabel>
          <Input
            id="email"
            isInvalid={valid.email}
            type="email"
            size="lg"
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
              setValid({ email: false });
            }}
          />
          <FormLabel fontWeight={400} mt="1.5rem">
            Password
          </FormLabel>
          <Input
            isInvalid={valid.password}
            type="password"
            size="lg"
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
              setValid({ password: false });
            }}
          />
        </FormControl>
        <Text textAlign="start" mb="1rem">
          A link to set a new password will be sent to your email address.
        </Text>
        <Text textAlign="start" mb="1rem">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </Text>
        <Box textAlign="start" pl="1.2rem">
          <Button
            bg="#ffce61"
            border="1px solid"
            p="1.5rem"
            mt="0.5rem"
            borderRadius={4}
            onClick={handelRegister}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
