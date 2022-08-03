import React from "react";
import {
  Grid,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Heading,
  Center,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
// import styles from "./style.module.css";
const FootwearHeading = () => {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" margin={"40px 0"}>
        <HStack spacing="55px" justifyContent={"center"}>
          <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/shoes-icon-right-e1605175492472-pkxdahmpc96i32hqyh9qfkc7owqxivqr4zuwukso7k.png" />
          <Heading
            color={"#1e516c"}
            fontWeight={"400"}
            textAlign="center"
            fontFamily="Lato"
          >
            FOOT WEAR
          </Heading>
          <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/shoes-icon-left-e1605175515419-pkxdaq391ri2zk5gl2xdk07d1dl8g5oc65qa62g4nk.png" />
        </HStack>
      </Grid>
      <Center m="20px">
        <Flex justifyContent={"center"} width={"100%"}>
          <NavLink to="/product-category/Mensfootwear">
            <Box width={"99%"}>
              <Image
                src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/men-fashion-pf2rgkwglk7z47uh031vpxcshl64adc389ivxapmss.jpg"
                width={"100%"}
                _hover={{ cursor: "pointer" }}
              />
            </Box>
          </NavLink>
        </Flex>
      </Center>
    </div>
  );
};

export default FootwearHeading;
