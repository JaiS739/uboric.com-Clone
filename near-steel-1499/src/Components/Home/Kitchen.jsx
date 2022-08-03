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
// import styles from "../Home/style.module.css";
import styles from "./style.module.css";

const Kitchen = () => {
  return (
    <>
      <Grid templateColumns="repeat(1, 1fr)" margin={"40px 0"}>
        <HStack spacing="55px" justifyContent={"center"}>
          <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-2-e1608267087979-pkx8tuzlfhai1ztcx1owc3kh6ggu4y22dyfsgaynio.png" />

          <Heading
            color={"#1e516c"}
            fontWeight={"400"}
            textAlign="center"
            fontFamily="Lato"
          >
            KITCHEN WARE
          </Heading>
          <Box>
            <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-2-e1608267087979-pkx8tuzlfhai1ztcx1owc3kh6ggu4y22dyfsgaynio.png" />
          </Box>
        </HStack>
      </Grid>
      <div>
        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 3 }}
          spacing={3}
          width={"97%"}
          margin="auto"
        >
          {/* for now i am giveing route to login just to check update here as per the need:- */}
          <NavLink to={"/product-category/Kitchenware-Tools"}>
            <Box height="57vh">
              <Image
                className={styles.kitchenPop}
                src="https://www.uboric.com/wp-content/uploads/2020/12/kithchen-tools-1000x784.jpg"
                alt="kitchen tools"
                height={{ base: "50vh", md: "50vh", lg: "55vh" }}
                width={"98%"}
              />
            </Box>
          </NavLink>
          <NavLink to={"/product-category/airTight"}>
            <Box>
              <Image
                className={styles.kitchenPop}
                src="https://www.uboric.com/wp-content/uploads/2020/12/Air-Tight-Containers-1000x784.jpg"
                alt="air tight container"
                height={{ base: "50vh", md: "50vh", lg: "55vh" }}
                width={"98%"}
              />
            </Box>
          </NavLink>
          <NavLink to={"/product-category/Kitchenware-GasLighter"}>
            <Box>
              <Image
                className={styles.kitchenPop}
                src="https://www.uboric.com/wp-content/uploads/2020/12/Gas-Lighter-1024x1024.jpg"
                alt="gas lighter"
                height={{ base: "50vh", md: "50vh", lg: "55vh" }}
                width={"98%"}
              />
            </Box>
          </NavLink>
        </SimpleGrid>
      </div>
    </>
  );
};

export default Kitchen;
