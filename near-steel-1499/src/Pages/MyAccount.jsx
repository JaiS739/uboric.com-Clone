import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  StylesProvider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiFullWoodBucketHandle } from "react-icons/gi";
import { AiOutlineFileZip, AiOutlineFileText } from "react-icons/ai";
import { FaUser, FaHome } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import styles from "./myAccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkUser, logout } from "../Redux/AuthReducer/action";
import { useState } from "react";
import { getLocalData } from "../Utils/localStorage";

const MyAccount = () => {
  const users = useSelector((state) => state.AuthReducer.userData);
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let token = getLocalData("token");
    let currentUser = users.find((user) => {
      if (user.token === token) {
        return user;
      }
    });
    if (currentUser) {
      setUser(currentUser.email);
    }
  }, [users]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(checkUser());
    }
  }, []);

  const handleLogout = () => {
    let confirmation = window.confirm("Are you sure you want to log out?");
    if (confirmation) {
      dispatch(logout());
      navigate("/");
    }
  };
  return (
    <Box>
      <Container p="0.5rem" color="#1e516c">
        <Heading
          fontSize="2xl"
          mb="0.4rem"
          letterSpacing="2px"
          fontWeight={500}
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

      {/* dashboard */}
      <Flex
        bg="#f5f7fb"
        m={{
          base: "1.5rem 0 0 0",
          sm: "1.5rem 5rem 0 5rem",
          md: "1.5rem 0 0 0",
          lg: "1.5rem 2rem 0 2rem",
          xl: "1.5rem 10rem 0 10rem",
        }}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Stack
          id={styles.dashboardContainer}
          fontWeight={600}
          w={{
            base: "100%",
            sm: "100%",
            md: "25rem",
            lg: "24rem",
            xl: "25rem",
          }}
        >
          <Flex
            cursor="pointer"
            bg="#0160b4"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
            color="white"
          >
            <Text>Dashboard</Text>
            <Icon color="white" as={BsSpeedometer2} />
          </Flex>
          <Flex
            cursor="pointer"
            bg="white"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
          >
            <Text>Orders</Text>
            <Icon opacity={0.5} as={GiFullWoodBucketHandle} />
          </Flex>
          <Flex
            cursor="pointer"
            bg="white"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
          >
            <Text>Downloads</Text>
            <Icon opacity={0.5} as={AiOutlineFileZip} />
          </Flex>
          <Flex
            cursor="pointer"
            bg="white"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
          >
            <Text>Addresses</Text>
            <Icon opacity={0.5} as={FaHome} />
          </Flex>
          <Flex
            cursor="pointer"
            bg="white"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
          >
            <Text>Account details</Text>
            <Icon opacity={0.5} as={FaUser} />
          </Flex>
          <Flex
            cursor="pointer"
            bg="white"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
          >
            <Text>Quotes</Text>
            <Icon opacity={0.5} as={AiOutlineFileText} />
          </Flex>
          <Flex
            cursor="pointer"
            bg="white"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
          >
            <Text>Submissions</Text>
            <Icon opacity={0.5} as={AiOutlineFileText} />
          </Flex>
          <Flex
            cursor="pointer"
            bg="white"
            p="1rem 0.7rem"
            justify="space-between"
            align="center"
            onClick={handleLogout}
          >
            <Text>Logout</Text>
            <Icon opacity={0.5} as={HiOutlineLogout} />
          </Flex>
        </Stack>

        {/* right box */}
        <Box>
          <Text bg="white" textAlign="start" m="0 1rem" p="1rem">
            Hello {user} (not {user}?{" "}
            <span
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
              onClick={handleLogout}
            >
              Log out
            </span>
            )
          </Text>
          <Text bg="white" textAlign="start" m="0 1rem" p="1rem">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default MyAccount;
