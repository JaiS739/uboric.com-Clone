import { Button, Flex, Image, Input, Td, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  getCartData,
  updateCartData,
} from "../Redux/AppReducer/action";

const BigScreenCartTable = ({ item }) => {
  const [itemCount, setItemCount] = useState(item.count);
  const [loading, setLoading] = useState(false);
  // console.log(products);
  const dispatch = useDispatch();

  const increment = (id, val) => {
    setItemCount(itemCount + val);
    let count = 1 + itemCount;
    // console.log(count);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(updateCartData(id, count));
      dispatch(getCartData());
    }, 3000);
  };

  const decrement = (id, val) => {
    if (itemCount > 1) {
      setItemCount(itemCount - val);
      let count = itemCount - 1;
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        dispatch(updateCartData(id, count));
        dispatch(getCartData());
      }, 3000);
    }
  };

  const deleteItem = (id) => {
    dispatch(deleteCartItem(id)).then(() => dispatch(getCartData()));
  };

  return (
    <>
      <Tr>
        <Td maxW={0.1} p={0}>
          <Button
            size="xs"
            borderRadius="50%"
            bg="#e2401c"
            fontWeight={800}
            color="white"
            _hover={{ bg: "red" }}
            onClick={() => deleteItem(item.id)}
          >
            X
          </Button>
        </Td>
        <Td p={0}>
          <Image src={item.image1} w="90px" />
        </Td>
        <Td>{item.name}</Td>
        <Td>₹{item.cost}.00</Td>

        <Td>
          <Flex>
            <Button
              bg="none"
              variant="outline"
              borderRadius={2}
              _hover={{ bg: "none" }}
              onClick={() => decrement(item.id, 1)}
              isLoading={loading}
            >
              -
            </Button>
            <Input
              textAlign="center"
              w="35px"
              p={0}
              value={itemCount}
              onChange={(e) => setItemCount(e.target.value)}
            />
            <Button
              bg="none"
              variant="outline"
              borderRadius={2}
              _hover={{ bg: "none" }}
              onClick={() => increment(item.id, 1)}
              isLoading={loading}
            >
              +
            </Button>
          </Flex>
        </Td>

        <Td>₹{+item.cost * +item.count}.00</Td>
      </Tr>
    </>
  );
};

export default BigScreenCartTable;
