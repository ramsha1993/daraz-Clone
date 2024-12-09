import React, { useState } from 'react'
import { Box, Flex,Text,Span } from '@chakra-ui/react'
import classes from './Sproduct.module.css'
import { IoGridSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrCaretNext } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import Seproduct from './Seproduct';
import { useSelector } from 'react-redux';
import Categorieshead from './Categorieshead';
const Sproduct = () => {
  // const [visibility, setvisibility] = useState("hidden")
  const prod=useSelector(state=>(state.search))
  // const boxshow={
  //   visibility:visibility,
  //   position:'absolute', zIndex:'200', background:'white'
  // }

  // function showbox(){
  //   setvisibility("visible")
  // }
  // function hidebox(){
  //   setvisibility("hidden")
  // }
  return ( 

  
    <Box className={classes.Spro}> 
<Categorieshead />
   <Flex> 
    
<Flex flexDirection='column' rowGap='23px' className={classes.span} ><Flex align='center'><Span>Home</Span><IoIosArrowForward /><Span>Search</Span></Flex>

<Box>
<h4>Category</h4>
<Flex flexDirection='column'>
<Span>Item</Span>
<Span>Like New Item</Span>
</Flex>
</Box>
   <Box>
<h4>Brand</h4>
<Flex><input type="checkbox" /><Span>Daraz Like New</Span></Flex>
<Flex><input type="checkbox" /><Span>Apple</Span></Flex>
<Flex><input type="checkbox" /><Span>Oppo</Span></Flex>
<Flex><input type="checkbox" /><Span>E-tachi mobile</Span></Flex> 
<Flex><input type="checkbox" /><Span>Infinix</Span></Flex>
<Flex><input type="checkbox" /><Span>Motorolla</Span></Flex>
<Flex><input type="checkbox" /><Span>Xiaomi Redmi</Span></Flex>
   </Box>

<Box>   
<h4>Service & Promotions</h4> 
<Flex><input type="checkbox" /><Span>Free Delivery</Span></Flex>  
<Flex><input type="checkbox" /><Span>12.12</Span></Flex>    
<Flex><input type="checkbox" /><Span>Voucher Max</Span></Flex>    
<Flex><input type="checkbox" /><Span>Mall</Span></Flex>
<Flex><input type="checkbox" /><Span>Coins</Span></Flex>    
</Box>
<Box>
<h4>Shipped From</h4>
<Flex><input type="checkbox" /><Span>Punjab</Span></Flex>    
<Flex><input type="checkbox" /><Span>Sindh</Span></Flex>    
<Flex><input type="checkbox" /><Span>Khyber Pakhtunkhwa</Span></Flex>    
<Flex><input type="checkbox" /><Span>Balochistan</Span></Flex>    
<Flex><input type="checkbox" /><Span>Islamabad</Span></Flex>    
<Flex><input type="checkbox" /><Span>Local</Span></Flex>    
</Box>

<Box className={classes.inputwidth}>
<h4>Price</h4>
<Flex gap='4px'><input type="number" placeholder='Min' pattern='[0-9]*' />-<input type="number" placeholder='Max'/><button><Span><GrCaretNext /></Span></button></Flex>
  
</Box>
<Flex className={classes.star}>
<h4>Rating</h4>
<Flex gap='7px'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
</Flex>
<Flex justify='space-between'><Flex gap='7px'><FaStar /><FaStar /><FaStar /><FaStar /></Flex><Span fontSize='13px' color='gray'>And Up</Span>
</Flex>
<Flex justify='space-between'><Flex gap='7px'><FaStar /><FaStar /><FaStar /></Flex><Span fontSize='13px' color='gray'>And Up</Span>
</Flex>
<Flex justify='space-between'><Flex gap='7px'><FaStar /><FaStar /></Flex><Span fontSize='13px' color='gray'>And Up</Span>
</Flex>
<Flex justify='space-between'><FaStar /><Span fontSize='13px' color='gray'>And Up</Span>
</Flex>
</Flex>
<Box>
<h4>Warrant Type</h4>
<Flex><input type="checkbox" /> <Span>Brand Warranty</Span></Flex>
<Flex><input type="checkbox" /> <Span>No Warranty</Span></Flex>
<Flex><input type="checkbox" /> <Span>Local Seller Warranty</Span></Flex>
<Flex><input type="checkbox" /> <Span>International Seller Warranty</Span></Flex>
</Box>
<Box>
  <h4>Color Family</h4>
  <Box overflow='auto' maxHeight='500px'>
<Flex><input type="checkbox" /><Span>Black</Span></Flex>
<Flex><input type="checkbox" /><Span>Blue</Span></Flex>
<Flex><input type="checkbox" /><Span>Green</Span></Flex>
<Flex><input type="checkbox" /><Span>Gold</Span></Flex>
<Flex><input type="checkbox" /><Span>White</Span></Flex>
<Flex><input type="checkbox" /><Span>Grey</Span></Flex>
<Flex><input type="checkbox" /><Span>Multicolor</Span></Flex>
<Flex><input type="checkbox" /><Span>Silver</Span></Flex>
<Flex><input type="checkbox" /><Span>Silver</Span></Flex>
<Flex><input type="checkbox" /><Span>Purple</Span></Flex>
<Flex><input type="checkbox" /><Span>Orange</Span></Flex>
<Flex><input type="checkbox" /><Span>Mint</Span></Flex>
<Flex><input type="checkbox" /><Span>Violet</Span></Flex>
<Flex><input type="checkbox" /><Span>Yellow</Span></Flex>
<Flex><input type="checkbox" /><Span>Pink</Span></Flex>
<Flex><input type="checkbox" /><Span>Light blue</Span></Flex>
<Flex><input type="checkbox" /><Span>Brown</Span></Flex>
<Flex><input type="checkbox" /><Span>Red</Span></Flex>
<Flex><input type="checkbox" /><Span>Dark blue</Span></Flex>
<Flex><input type="checkbox" /><Span>Aqua</Span></Flex>
<Flex><input type="checkbox" /><Span>Golden</Span></Flex>
<Flex><input type="checkbox" /><Span>Light green</Span></Flex>
<Flex><input type="checkbox" /><Span>Titanium Grey</Span></Flex>
<Flex><input type="checkbox" /><Span>Sky Blue</Span></Flex>
<Flex><input type="checkbox" /><Span>Cyan</Span></Flex>
<Flex><input type="checkbox" /><Span>Sand</Span></Flex>
</Box>
</Box>
<Box>
  <h4>Warranty Period</h4>
<Flex><input type="checkbox" /><Span>1 Year</Span></Flex>
<Flex><input type="checkbox" /><Span>6 Months</Span></Flex>
<Flex><input type="checkbox" /><Span>1 Month</Span></Flex>
<Flex><input type="checkbox" /><Span>1</Span></Flex>
<Flex><input type="checkbox" /><Span>11 Month</Span></Flex>
<Flex><input type="checkbox" /><Span>2 Years</Span></Flex>
<Flex><input type="checkbox" /><Span>18 Months</Span></Flex>
<Flex><input type="checkbox" /><Span>10 Months</Span></Flex>
</Box>

    </Flex>


<Flex className={classes.Sproduct}>

 <Box  className={classes.productbox}>
    <h1 >{prod}</h1>
   <Flex  width='80vw' justify='space-between'> <Text>no of products founded</Text><Flex><label>Sort by:</label><select name="" id="">
    <option value="">Best Match</option>
    <option value="">price low to high</option>
    <option value="">price high to low</option></select> <Flex align='center'><Text>View:</Text><IoGridSharp />
    </Flex>        </Flex></Flex>
   
   
   
   <Seproduct />
    </Box></Flex></Flex></Box>)
}

export default Sproduct