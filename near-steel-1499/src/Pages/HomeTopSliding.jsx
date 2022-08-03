import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
import pic1 from "../Components/Home/homePageImages/pic1.PNG";
import pic2 from "../Components/Home/homePageImages/pic2.PNG";
import pic3 from "../Components/Home/homePageImages/pic3.PNG";
import pic4 from "../Components/Home/homePageImages/pic4.PNG";

import Carousel from "react-bootstrap/Carousel";

function HomeTopSliding() {
  return (
    <Carousel slide={false} style={{width:"100%",height:"100%"}}>
      <Carousel.Item>
        <img className="d-block w-100" src={pic1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic4} alt="fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeTopSliding;
