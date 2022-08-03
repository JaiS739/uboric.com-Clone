import React from "react";
import { Flex, Image, Box, Grid, Center } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const SpicesAndFootWear = () => {
  return (
    <div>
      <Center m="15px">
        <Grid templateColumns="repeat(1, 1fr)" width={"92%"}>
          <NavLink to="/login">
            <Box
              _hover={{
                width: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://www.uboric.com/wp-content/uploads/2021/02/Headphone.jpg"
                alt="HeadPhone"
                width={"100%"}
              />
            </Box>
          </NavLink>
        </Grid>
      </Center>
    </div>
  );
};

export default SpicesAndFootWear;
