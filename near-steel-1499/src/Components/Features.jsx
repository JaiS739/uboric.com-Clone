import React from 'react';
import "./features.css"
import { BsCheckLg } from "react-icons/bs";


import {
  Grid,
  Box,
  Flex,
 
} from "@chakra-ui/react";



const Features = () => {
  return (
    <>

      <div className='text'>
        <div className='textbig'>The Ultimate Domestic Online Shopping Experience Platform in India</div>
        <div className='textp'><p>Online shopping with Uboric is quick, convenient and trouble-free.
          You can shop for the desired product right from the comfort of your home and get them delivered straight to
          your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your
          homes and just clicking on your requirements to get it delivered at your doorstep. Your search for the latest
          trending variety of unique products ends right here. A wide range of international products from global brands
          are available at your fingertips. We provide you with a world-class online shopping experience, along with
          superior service, to suit all your specific requirements. Our products are very reasonably priced and are not
          easily available elsewhere. Our high-end technology-based systems, combined with a human approach, ensure that
          you have an amazing and blissful online shopping experience with us. Our emphasis on customer delight drives
          every activity we undertake to provide you an ultimate, hassle-free and pleasant shopping experience. Our
          diverse categories of products comprise of fashion & jewellery, mobiles and tablets, home and furniture,
          electronics, health care and supplements, sports and fitness, beauty and perfumes. We offer almost every
          variety of product that your heart desires. Just Go Ahead and Explore the magical world of online shopping with Uboric!
          24×7 Customer Care: For all your queries and concerns regarding your shopping orders.</p></div>
        <div className='textl'>Benefits of shopping on Uboric :</div>
        {/* <div className='option'>
        <div><span><BsCheckLg className='rigthttik'/></span>User-Friendly</div>
        <div><span><BsCheckLg className='rigthttik'/></span>Safe & Secure Shopping</div>

        <div><span><BsCheckLg className='rigthttik'/></span>Check Out Closely</div>
        <div><span><BsCheckLg className='rigthttik'/></span>Multiple Payment Options:</div>
        <div><span><BsCheckLg className='rigthttik'/></span>Order History:</div>
       </div> */}



        <Flex gap="1rem" fontSize="20px" flexWrap="wrap" justify="center"  mt="1rem">
          <Box  ><span><BsCheckLg className='rigthttik' /></span>User-Friendly</Box>
          <Box ><span><BsCheckLg className='rigthttik' /></span>Safe & Secure Shopping</Box>

          <Box ><span><BsCheckLg className='rigthttik' /></span>Check Out Closely</Box>
          <Box ><span><BsCheckLg className='rigthttik' /></span>Multiple Payment Options:</Box>
          <Box ><span><BsCheckLg className='rigthttik' /></span>Order History:</Box>
        </Flex>

      </div>

     


    </>
  )
}

export default Features
