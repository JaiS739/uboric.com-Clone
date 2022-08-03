import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  SimpleGrid,
  VStack,
  Select,
  Button,
  UnorderedList,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRightIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  FaHeadphones,
  FaMoneyBillAlt,
  FaShoppingBag,
  FaCreditCard,
  FaCrown,
} from "react-icons/fa";
import {
  getDataRequest,
  getDataSuccess,
  getDataFailure,
  addCartData,
  getCartData,
  updateCartData,
} from "../Redux/AppReducer/action";
import { v4 as uuid } from "uuid";
const SingleProduct = () => {
  const data = useSelector((store) => store.AppReducer.products);
  const cartdata = useSelector((store) => store.AppReducer.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const { id } = useParams();
  const [product, setProduct] = useState({});

  // add to cart button functionality
  const addToCart = (x) => {
    const check_index = cartdata.findIndex((item) => item.id === x.id);
    if (check_index !== -1) {
      cartdata[check_index].count++;
      dispatch(updateCartData(x.id, cartdata[check_index].count));
    } else {
      dispatch(addCartData(x));
    }
    toast({
      title: "Your item is added to cart.",
      description: "Checkout the cart.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  // buy now button functionality
  const buyNow = (x) => {
    const check_index = cartdata.findIndex((item) => item.id === x.id);
    if (check_index !== -1) {
      cartdata[check_index].count++;
      dispatch(updateCartData(x.id, cartdata[check_index].count));
    } else {
      dispatch(addCartData(x));
    }
    navigate("/cart");
  };

  const dataAction = () => {
    const request = dispatch(getDataRequest());
    axios
      .get("https://near1499server.herokuapp.com/categories")
      .then((r) => dispatch(getDataSuccess(r.data)))
      .catch((e) => dispatch(getDataFailure()));
  };
  useEffect(() => {
    dataAction();
    if (cartdata.length == 0) {
      dispatch(getCartData());
    }
  }, []);
  useEffect(() => {
    if (id) {
      const temp = data.find((item) => item.id === Number(id));
      temp && setProduct(temp);
    }
  }, [id, data]);

  return (
    <Box>
      <Box
        height="155px"
        borderTop="2px solid rgb(30,81,108)"
        borderBottom="2px solid rgb(30,81,108)"
      >
        <Flex direction="column">
          <Box mt="10">
            <Heading
              style={{
                fontSize: "26px",
                lineHeight: "28px",
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "3px",
                color: "rgb(30,86,160)",
              }}
            >
              {product.name}
            </Heading>
          </Box>
          <Box mb="6" textAlign="center">
            <span
              height="19px"
              style={{ color: "rgb(30,86,160)", fontSize: "16px" }}
            >
              Home
            </span>
            <ArrowRightIcon height="6px" />
            <span
              height="19px"
              style={{ color: "rgb(30,86,160)", fontSize: "16px" }}
            >
              Products
            </span>
            <ArrowRightIcon height="6px" />
            <span
              height="19px"
              style={{ color: "rgb(30,86,160)", fontSize: "16px" }}
            >
              {product.name}
            </span>
          </Box>
        </Flex>
      </Box>

      <Flex
        direction={{
          base: "column",
          xl: "row",
          lg: "row",
          md: "column",
          sm: "column",
        }}
        // direction={{base:"column", xl: "row", lg: "row", md: "column", sm: "column" }}
        mt="5%"
      >
        <Box
          width={{ md: "99%", xl: "45%", lg: "45%", sm: "99%", base: "99%" }}
        >
          <Flex direction="column">
            <Image
              src={product.image2}
              width="90%"
              ml="4%"
              height="350px"
              // _hover={{ ml: "10%" }}
            />
            <Flex direction="row" mt="2%">
              <Image
                src={product.image1}
                width="22%"
                ml="1%"
                height="120px"
                _hover={{ border: "1px solid blue" }}
              />
              <Image
                src={product.image2}
                width="22%"
                ml="1%"
                height="120px"
                _hover={{ border: "1px solid blue" }}
              />
              <Image
                src={product.image3}
                width="22%"
                ml="1%"
                height="120px"
                _hover={{ border: "1px solid blue" }}
              />
              <Image
                src={product.image4}
                width="22%"
                ml="1%"
                height="120px"
                _hover={{ border: "1px solid blue" }}
              />
            </Flex>
          </Flex>
        </Box>
        {/* <Box
          width={{ md: "55%", xl: "55%", lg: "55%", sm: "99%", base: "99%" }}
        > */}

        <Box
          width={{ md: "55%", xl: "55%", lg: "55%", sm: "99%", base: "99%" }}
        >
          <Flex direction="column">
            <Heading
              style={{
                fontSize: "20px",
                lineHeight: "25px",
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "3px",
                marginTop: "3px",
              }}
            >
              {product.name}
            </Heading>
            <Text align="left" fontSize="large" fontWeight="600" ml="8" mt="5">
              {`₹  ${product.cost?.toFixed(2)}  (Inclusive of all Taxes)`}
            </Text>
            <Image
              src="https://www.uboric.com/wp-content/uploads/2020/12/guarantee.svg"
              width="120px"
              height="120px"
              ml="40%"
            />

            <Flex direction="row" ml="5" mt="4" justifyContent="space-around">
              <VStack>
                <FaMoneyBillAlt size="40" />
                <Text>7days Return</Text>
              </VStack>
              <VStack>
                <FaHeadphones size="40" />
                <Text>24/7 Online Support</Text>
              </VStack>
              <VStack>
                <FaShoppingBag size="40" />
                <Text>Fast Delivery in India</Text>
              </VStack>
              <VStack>
                <FaCreditCard size="40" />
                <Text>Secure Payment</Text>
              </VStack>
            </Flex>
            <Flex width="25%" ml="5%" mt="6" direction="column">
              <Text textAlign="start" fontWeight="600">
                Size:
              </Text>
              <Select
                variant="outline"
                placeholder="Choose an option"
                align="left"
              >
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Select>
            </Flex>
            <Flex
              direction="row"
              ml="5%"
              paddingBottom="6%"
              borderBottom="1px solid grey"
            >
              <Button
                bg="#ffce61"
                border="1px solid"
                width="15%"
                height="50px"
                mt="3"
                borderRadius="4"
                onClick={() => buyNow(product)}
              >
                BUY NOW
              </Button>
              <Text mt="5" fontSize="17px" ml="3">
                Or 3 interest free payments of ₹ $
                {Math.floor((0.9 * product.cost) / 3).toFixed(2)} with
              </Text>
              <Image
                src="https://www.uboric.com/wp-content/plugins/pay-in-3-woo-commerce-plugin/public/images/brand.svg"
                width="50px"
              />
              <InfoOutlineIcon mt="5" />
              <Button
                bg="#ffce61"
                border="1px solid"
                // width="20%"
                boxSizing="border-box"
                mt="3"
                ml="2"
                borderRadius="4"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </Button>
            </Flex>
          </Flex>
          <Button
            bg="#ffce61"
            border="1px solid"
            width="60%"
            ml="20%"
            p="1.5rem"
            mt="0.5rem"
            borderRadius={4}
          >
            SEND ENQUIRY
          </Button>
          <UnorderedList
            ml="7%"
            mt="5"
            mr="5%"
            fontSize="18px"
            fontWeight="500"
          >
            <ListItem padding="2">
              {" "}
              <Flex direction="row">
                <FaCrown />
                <Text
                  backgroundColor=" #00DBDE"
                  backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                  bgClip="text"
                >
                  Guaranteed delivery with 100% original products
                </Text>{" "}
              </Flex>
            </ListItem>
            <ListItem padding="2">
              <Text
                backgroundColor=" #00DBDE"
                backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                bgClip="text"
              >
                COD available on some categories
              </Text>
            </ListItem>
            <ListItem padding="2">
              <Text
                backgroundColor=" #00DBDE"
                backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                bgClip="text"
              >
                FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500
              </Text>
            </ListItem>
            <ListItem padding="2">
              <Text
                backgroundColor=" #00DBDE"
                backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                bgClip="text"
              >
                EMI OPTION AVAILABLE
              </Text>
            </ListItem>
            <ListItem padding="2">
              <Text
                backgroundColor=" #00DBDE"
                backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                bgClip="text"
              >
                FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT
                FREE DELIVERY AVAILABLE ON ALL ORDERS
              </Text>
            </ListItem>
            <ListItem padding="2">
              <Text
                backgroundColor=" #00DBDE"
                backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                bgClip="text"
              >
                {" "}
                BELOW ₹500 CASH ON DELIVERY CHARGES ₹49
              </Text>
            </ListItem>
            <ListItem padding="2">
              <Text
                backgroundColor=" #00DBDE"
                backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                bgClip="text"
              >
                YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA
              </Text>
            </ListItem>
            <ListItem padding="2">
              <Text
                backgroundColor=" #00DBDE"
                backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
                bgClip="text"
              >
                RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ
                RETURN POLICY TO KNOW MORE.
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>

      <Box width="100%" mt="5%" mb="3%">
        <Heading textAlign="center">Related Products</Heading>

        <SimpleGrid
          columns={{ xl: 4, lg: 2, md: 2, sm: 1 }}
          spacing="20px"
          width="90%"
          ml="5%"
        >
          {data.splice(id, 4).map((e) => {
            return (
              <Box
                key={e.id}
                borderRadius="5%"
                boxShadow="2xl"
                p="6"
                rounded="md"
                bg="white"
              >
                <Image src={e.image1} width="95%" height="60%" ml="5%" />
                <Text textAlign="center" fontSize="20px" lineHeight="25px">
                  {e.name}
                </Text>
                <Text
                  mt="3%"
                  textAlign="center"
                  fontSize="15px"
                  lineHeight="20px"
                >
                  ₹ {e.cost} (Inclusive of all Taxes)
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SingleProduct;
