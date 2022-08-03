import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";

const Support = () => {
  return (
    <div>
      <Grid
        templateColumns="repeat(1, 1fr)"
        margin={{
          base: "50px 0px",
          sm: "80px 0px",
          md: "80px 0px",
          lg: "80px  0px ",
          xl: "80px 50px 0px 50px",
        }}
        // {{ base: "80px 0px", md: "80px 0px", lg: "80px 50px 0px 50px" }}
      >
        <Box boxSize="100%">
          <Image
            width={"100%"}
            src="https://www.uboric.com/wp-content/uploads/2020/08/Uboric-1.jpg"
            alt="Dan Abramov"
          />
        </Box>
      </Grid>
    </div>
  );
};

export default Support;
