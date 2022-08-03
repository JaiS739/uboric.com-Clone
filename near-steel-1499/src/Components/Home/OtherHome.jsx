import React from "react";
import {
  Grid,
  GridItem,
  SimpleGrid,
  Image,
  Box,
  Heading,
  HStack,
} from "@chakra-ui/react";

import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const Other = () => {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" margin={"40px 0"}>
        <HStack spacing="55px" justifyContent={"center"}>
          <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/other-category-heading-pkx8tu1r8n97qduq2ja9rlt0l2lgx8yc1tsaz101ow.png" />
          <Heading
            color={"#1e516c"}
            fontWeight={"400"}
            textAlign="center"
            fontFamily="Lato"
          >
            OTHER <br /> CATEGORIES
          </Heading>
          <Box>
            <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/other-category-heading-2-e1608267154124-pkx8tt3x1t7xerw380vn741jzoq3pjulpp4thr1fv4.png" />
          </Box>
        </HStack>
      </Grid>

      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
        }}
        spacing={5}
        width={"96%"}
        margin="auto"
      >
        {/* for now i am giveing route to login just to check update here as per the need:- */}
        <NavLink to="/login">
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2021/12/banner1-1-1.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        {/* for now i am giveing route to login just to check update here as per the need:- */}
        <NavLink to={"/login"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2021/12/banner2-1.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
      </SimpleGrid>
    </div>
  );
};

export default Other;
