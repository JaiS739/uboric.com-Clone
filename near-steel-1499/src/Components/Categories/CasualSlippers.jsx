import React, { useEffect} from "react";
import axios from "axios";
import Contains from "./Contains";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import {
  getDataRequest,
  getDataSuccess,
  getDataFailure,
} from "../../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
const CasualSlippers = () => {
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
          Casual Chapple/Slippers
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
            Casual Chapple/Slippers
          </span>
        </Box>
      </div>
      <div id="base">
        <div id="grid">
          {data.map((item) => {
            if (item.type === "casualSlipper") {
              return <Contains key={item.id} data={item} />;
            }
          })}
        </div>

        <div id="filter" style={{ textAlign: "left", padding: "15px" }}>
          <label style={{ marginTop: "15px", fontWeight: "bold" }}>
           
          </label>
          <br />
          
        </div>

      </div>
    </div>
  );
};

export default CasualSlippers;
{
  /* <RouterLink to={`/${item.type}/${item.id}`} key={item.id}> */
}
// </RouterLink>
