import React from "react";
import {
  Grid,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Footwear = () => {
  return (
    <div>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 5,
          lg: 5,
          xl: 5,
        }}
        spacing={{
          base: 14,
          sm: 14,
          md: 3,
          lg: 3,
          xl: 3,
        }}
        width={"97%"}
        margin="auto"
      >
        {/* for now i am giveing route to login just to check update here as per the need:- */}
        <NavLink to={"/"}>
          <Box height="20%">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-1-400x601.jpg"
              alt="Dan Abramov"
              height={{
                base: "65vh",
                sm: "65vh",
                md: "45vh",
                lg: "55vh",
                xl: "55vh",
              }}
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/product-category/chappal-slippers"}>
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-3-400x601.jpg"
              alt="chappal slippers"
              height={{
                base: "65vh",
                sm: "65vh",
                md: "45vh",
                lg: "55vh",
                xl: "55vh",
              }}
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/product-category/casual-partyshoes"}>
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-2-400x601.jpg"
              alt="casual partyshoes"
              height={{
                base: "65vh",
                sm: "65vh",
                md: "45vh",
                lg: "55vh",
                xl: "55vh",
              }}
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/product-category/casual-sandals"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-400x601.jpg"
              alt="casual sandals"
              height={{
                base: "65vh",
                sm: "65vh",
                md: "45vh",
                lg: "55vh",
                xl: "55vh",
              }}
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-5-400x601.jpg"
              alt="loafers"
              height={{
                base: "65vh",
                sm: "65vh",
                md: "45vh",
                lg: "55vh",
                xl: "55vh",
              }}
              width={"98%"}
            />
          </Box>
        </NavLink>
      </SimpleGrid>
    </div>
  );
};

export default Footwear;
