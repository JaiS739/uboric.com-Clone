import React, { useEffect, useState } from "react";
import axios from "axios";
import Contains from "./Contains";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import {
  getDataRequest,
  getDataSuccess,
  getDataFailure,
} from "../../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
const KitchenTool = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.AppReducer.products);

  const dataaction = () => {
    const request = dispatch(getDataRequest());
    axios
      .get("https://near1499server.herokuapp.com/categories")
      .then((r) => dispatch(getDataSuccess(r.data)))
      .catch((e) => dispatch(getDataFailure()));
  };

  useEffect(() => {
    dataaction();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontWeight: "500",
            margin: "20px",
            color: "teal",
            fontSize: "25px",
            fontFamily: "sans-serif",
          }}
        >
          Gas Lighters
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
            Kitchen Ware
          </span>
          <ArrowRightIcon height="6px" />
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
          >
            Gas Lighters
          </span>
        </Box>
      </div>
      <div id="base">
        <div id="grid">
          {data.map((item) => {
            if (item.type === "Kitchentool") {
              return <Contains key={item.id} data={item} />;
            }
          })}
        </div>
        <div id="filter"></div>
      </div>
    </div>
  );
};

export default KitchenTool;
