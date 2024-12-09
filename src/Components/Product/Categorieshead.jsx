import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import classes from './Categorieshead.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Flex,Text,Span } from '@chakra-ui/react'
const Categorieshead = () => {

  const [visibility, setvisibility] = useState("hidden")

  const boxshow={
    visibility:visibility,
    position:'absolute', zIndex:'200', background:'white'
  }

  function showbox(){
    setvisibility("visible")
  }
  function hidebox(){
    setvisibility("hidden")
  }
  return (<>
    <Flex position='relative' align='center' padding='15px'> <Span color='#0f136d'>Categories</Span>
    <Box onMouseEnter={showbox} cursor="pointer"><RiArrowDropDownLine /></Box></Flex>
   
       <Flex width="40vw" style={boxshow} onMouseLeave={hidebox}><Box as="ul" color="#757575" fontSize='13px' onMouseEnter={showbox} >   
      <li className={classes.category} data-cate="cate_1_2" style={{cursor:'pointer'}}>Electronic Accessories</li>
      <Box as="ul" className={classes.detail} data-cate="cate_1_2" position='absolute' top='0' left='166px' zIndex='200' background='white' color="#757575" fontSize='13px'> 
         <li>Mobile Accessories</li>
         <li>Camera Accessories</li>
         <li>Wearable
         </li>
         <li>Network Components</li>
         <li>Computer Components</li>
         <li>Headphones & Headsets
         </li>
         <li>Printers
   
         </li>
         <li>Storage
         </li>
         <li>Portable Speakers
         </li>
         <li> Gaming Accessories
         </li>
         <li>Monitors & Accessories
         </li>
         <li>Computer Accessories</li></Box>
   
    <li className={classes.category}  style={{cursor:'pointer'}} data-cate="cate_1_3"> TV & Home Appliances</li>
   <Box as="ul" className={classes.detail} data-cate="cate_1_3" position='absolute' top="0" left='166px'>
   <li>Air Conditioner                </li>
   <li>Washing Machine</li>
   <li>Refrigerators & Freezers</li>
   <li>Cooling & Heating</li>
   <li>Irons & Garment Care</li>
   <li>Vacuums & Floor Care</li>
   <li>Kitchen Appliances</li>
   <li>Home Audio & Theater</li>
   <li>Smart Televisions</li>
   <li>Projectors & Players</li>
   <li>Generator, UPS & Solar</li>
   <li>TV Accessories</li>
   </Box>
       <li> Health & Beauty</li>
       <li> Mother & Baby</li>
       <li>Electronic Devices</li>
       <li>Groceries & Pets</li>
       <li>Home & Lifestyle</li>
       <li>Women's Fashion</li>
       <li>Men's Fashion
       </li>
       <li>Watches, Bags & Jewellery
       </li>
       <li>Sports & Outdoor
       </li>
       <li>Automotive & Motorbike
       </li>
       </Box>
       </Flex>
       </>)
}

export default Categorieshead;
