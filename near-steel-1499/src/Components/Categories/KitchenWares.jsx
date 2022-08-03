import React, { useEffect, useState } from "react";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

const KitchenWares = () => {
    const data = [
        {
            image:"https://www.uboric.com/wp-content/uploads/2021/02/Air-Tight-Containers-400x314.png",
            title:"Air Tight Containers",
            path:"/product-AirTightContainer"
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2021/02/Gas-Lighter-400x314.png",
            title:"Gas Lighter",
            path:"/product-Kitchenware-GasLighter"
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2021/02/kithchen-tools-400x314.png",
            title:"Kitchen Tools",
            path:"/product-Kitchenware-Tools"
        }
    ];
  return (
    <div>
    <div style={{textAlign:"center"}}>
      <h1
        style={{
          fontWeight: "500",
          margin: "20px",
          color: "teal",
          fontSize: "25px",
          fontFamily: "sans-serif",
        }}
      >
        Air Tight Containers
      </h1>
      <Box mb="6">
        <span
          height="19px"
          style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
        >
          Home
        </span>
        <ArrowRightIcon height="6px" />
        <span
          height="19px"
          style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
        >
          Products
        </span>
        <ArrowRightIcon height="6px" />
        <span
          height="19px"
          style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
        >
          Kitchan Ware
        </span>
      </Box>
    </div>
    <div id="base">
      <div id="grid">
        {data.map((item) =>{
            return(
              
              <div className="modulebox">
                <Image src={item.image} style={{height:"100%",margin:"auto"}} />
                <h3>{item.title}</h3>
              </div>
            )
          })}
      </div>
      <div id="filter"></div>
    </div>
  </div>
  )
}

export default KitchenWares;