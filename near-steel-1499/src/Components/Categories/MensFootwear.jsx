import React, { useEffect, useState } from "react";
import axios from "axios";
import Contains from "./Contains";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {getDataRequest,getDataSuccess,getDataFailure} from "../../Redux/AppReducer/action"
import { useSelector,useDispatch } from "react-redux";

const MensFootwear = () => {
    const data = [
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/fe4618c043ad5d860331149ed80888ef_result-400x400.jpg",
            title:"Casual Chapple/Slippers",
            path:"/product-category/casual-slippers"
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/fe2354c1ff2223538915e6c80416533b_result-400x400.jpg",
            title:"Casual Sandals",
            path:"/product-category/casual-sandals"
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/1de99999291951b1f3799b8a82464aa3_result-400x400.jpg",
            title:"Casual/Party Shoes",
            path:"/product-category/casual-partyshoes"
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/a915cde9497a95a4b667d82a358f174f_result-400x400.jpg",
            title:"Chappal/Slippers",
            path:"/product-chappal/slippers"
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/d4c25e9efd546803ca71d1a82fadc65b_result-400x400.jpg",
            title:"Flip Flops",
            path:"/product-FlipFlops"
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/4b51e0cf02d5f2529ccc61d3201fbe58_result-400x400.jpg",
            title:"Loafers",
            path:""
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/b4bf30bb1519e85a2e9e55ca332bb4ab_result-400x400.jpg",
            title:"Mojdi",
            path:""
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/5ca7752dd0d34782f3b46e5c94cc0f3b_result-400x400.jpg",
            title:"Sneakers",
            path:""
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2020/01/pexels-photo-1754062_result-400x400.jpeg",
            title:"Socks",
            path:""
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/7e7fee993140e1f6a3fc82179141f430_result-400x400.jpg",
            title:"Sports Sandals",
            path:""
        },
        {
            image:"https://www.uboric.com/wp-content/uploads/2019/12/bef2b18d267aea052d02f7d537f8ad26_result-400x400.jpg",
            title:"Sports Shoes",
            path:""
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
        Mens FootWear
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
          FootWears
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

export default MensFootwear;