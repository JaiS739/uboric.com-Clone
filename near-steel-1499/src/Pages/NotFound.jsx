import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import {Box,Image,Heading,Text} from "@chakra-ui/react"
const NotFound = () => {
  return (
    <Box width="99%" border="1 px solid">
        <Image src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" width="300px" height="300px" ml="35%"/>
        <Heading textAlign="center">PAGE NOT FOUND</Heading>
        <RouterLink to="/"><Text textAlign="center" color="red" fontSize="20px">Click Here</Text></RouterLink>
    </Box>
  )
}

export default NotFound
