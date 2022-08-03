import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Register from "../Components/Register";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../Redux/AuthReducer/action";
import { saveLocalData } from "../Utils/localStorage";

const Login = () => {
  const users = useSelector((state) => state.AuthReducer.userData);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [loginEamil, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [valid, setValid] = useState({
    password: false,
    email: false,
  });

  useEffect(() => {
    if (users.length === 0) {
      dispatch(checkUser());
    }
  }, []);

  const handelLogin = () => {
    if (!loginEamil) return setValid({ email: true });
    if (!loginPassword) return setValid({ password: true });

    let currentUser = users.find((user) => {
      if (user.email === loginEamil && user.password === loginPassword) {
        return user;
      }
    });
    if (!currentUser) {
      return toast({
        title: "Invalid Credentials.",
        description: "Try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    const comingFrom = state?.from?.pathname || "/myaccount";
    // console.log(currentUser.token);
    saveLocalData("token", currentUser.token);
    navigate(comingFrom, { replace: true });
  };

  return (
    <Box p="1rem 0 0 0">
      <Container p="0.5rem" color="#1e516c">
        <Heading
          fontSize="2xl"
          mb="0.4rem"
          letterSpacing="2px"
          fontWeight={500}
          textAlign="center"
        >
          My account
        </Heading>
        <Flex justify="center" align="end" fontSize="sm" gap={1}>
          <RouterLink to="/">
            <Text _hover={{ textDecoration: "underline" }}>Home</Text>
          </RouterLink>
          <RiArrowDropRightLine />
          <Text>My account</Text>
        </Flex>
      </Container>

      {/* login register box  */}
      <Flex
        gap={10}
        justify="center"
        p={{
          base: "1rem 1rem",
          sm: "1rem 5rem",
          md: "1rem 3rem",
          lg: "1rem 5rem",
          xl: "1rem 10rem",
        }}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        {/* login  */}
        <Box w="100%" borderBottomRadius="10px">
          <Heading fontSize="2xl" fontWeight={600} mb="2rem">
            Login
          </Heading>
          <Box bg="#fafafa" p="1rem 2rem" shadow="md" borderBottomRadius="10px">
            <Text textAlign="start">Connect with</Text>
            <Flex
              border="1px solid #4f71e8"
              maxW="max-content"
              align="center"
              p="0 0 0 0.4rem"
              borderRadius={5}
              m="0.2rem 0 4rem 0.3rem"
              cursor="pointer"
              transition="500ms"
              _hover={{ transform: "scale(1.1)" }}
            >
              <FcGoogle fontSize="25px" />
              <Text
                p="0 1.5rem"
                fontSize="sm"
                ml="0.3rem"
                lineHeight={2.1}
                bg="#4f71e8"
                color="white"
                border="1px solid #4f71e8"
                borderRightRadius={5}
              >
                Login with Google
              </Text>
            </Flex>
            <FormControl isRequired>
              <FormLabel fontWeight={400}>Username or email address</FormLabel>
              <Input
                id="loginEmail"
                isInvalid={valid.email}
                size="lg"
                type="email"
                value={loginEamil}
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                  setValid({ email: false });
                }}
              />
              <FormLabel fontWeight={400} mt="1.5rem">
                Password
              </FormLabel>
              <Input
                isInvalid={valid.password}
                size="lg"
                type="password"
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                  setValid({ password: false });
                }}
              />
            </FormControl>
            <Flex
              direction={{ base: "column", xl: "row" }}
              mt="1.5rem"
              align="start"
              gap={10}
            >
              <Checkbox mt="0">Remember me</Checkbox>
              <Button
                bg="#ffce61"
                border="1px solid"
                p="1.5rem"
                mt="0.5rem"
                borderRadius={4}
                onClick={handelLogin}
              >
                LOG IN
              </Button>
            </Flex>
            <Text mt="1rem" textAlign="right">
              Lost your password?
            </Text>
          </Box>
        </Box>
        {/* register  */}
        <Register users={users} />
      </Flex>
    </Box>
  );
};

export default Login;
