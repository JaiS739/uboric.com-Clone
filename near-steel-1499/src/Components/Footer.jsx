import React from 'react';
import "./footer.css";
import {FaFacebookF } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";

import { ImPlus } from "react-icons/im";
import Features from './Features';



const Footer = () => {
  return (
   <>
        <Features/>
     <div className="reviewContainer">
      <h1 className="reviewHeading">What Our Customer Says</h1>
      <div className="carousel">
          <div className="reviewCard">
          <p>"Nice shop for specific shoes. Variety is large.. and the quality is also good. Price is average matched to other shoppers"</p>
          <p> "Sanket Anadani"</p>
          <img src="https://www.uboric.com/wp-content/uploads/2020/07/star.png" alt="" />
            
          </div>
          <div className="reviewCard">
          <p> "Best Quality Products and also Fast delivery,You Get here Original Products"</p>
          <p> "Amit Anand"</p>
          <img src="https://www.uboric.com/wp-content/uploads/2020/07/star.png" alt="" />
            
          </div>
          <div className="reviewCard">
          <p>"Best Place for Buying lots of Products at one place specially Purchased  Shoes here"</p>
          <p> "Adesh Patel"</p>
          <img src="https://www.uboric.com/wp-content/uploads/2020/07/star.png" alt="" />  
          </div>  
      </div>
      <button className='btn'>Add Your Review</button>
    </div> 
    <div className='Footer'>
        <div className='img1'>
        <img className='footerimg' src="https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png" alt="" />
        </div>
        <div className='footertext'>
          <div> <p>About Us</p></div> 
           <div> <p>Contact</p></div>
           <div> <p>Shipping & Returns</p></div>
          <div>   <p>My Account</p></div>
          <div>  <p>Privacy Policy</p></div>
           <div> <p>Become A seller</p></div>
           <div> <p>Terms & Condition</p></div>
            
        </div>
        <div className='reserved'>
            <p>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</p>
        </div>
        <div className='contect'>
            <div className='icons'>
               <FaFacebookF className='FacebookIcon'/>
        </div>
        <div className='icons1'>
        <FaInstagram className='insta' fontSize='large'/>
        </div>
       
        </div>
        <div className='icons2'>
            <ImPlus className='plus'/>
        </div>
    </div>
   </>
  )
}

export default Footer
