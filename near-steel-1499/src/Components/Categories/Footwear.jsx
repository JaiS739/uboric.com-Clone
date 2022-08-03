import React, { useEffect, useState } from "react";
import axios from "axios";
import Contains from "./Contains";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

import {getDataRequest,getDataSuccess,getDataFailure} from "../../Redux/AppReducer/action"
import { useSelector,useDispatch } from "react-redux";

const Footwear = () => {
    const data = [
        {
            image:"https://www.uboric.com/wp-content/uploads/2020/12/1335958783_WP_Guardiani-e1607677359150-400x319.png",
            title:"Men's footwear",
            path:"/product-Mensfootwear"
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
        FootWear
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
          FootWear
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

export default Footwear;