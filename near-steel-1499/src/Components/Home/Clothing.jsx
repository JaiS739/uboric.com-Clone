import React from "react";
import { Grid, Image, Box, Center, SimpleGrid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
const Clothing = () => {
  return (
    <div>
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
        <NavLink to="/">
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2021/12/banner3-1.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        {/* for now i am giveing route to login just to check update here as per the need:- */}
        <NavLink to={"/"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2021/12/banner4-1.jpg"
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

export default Clothing;
