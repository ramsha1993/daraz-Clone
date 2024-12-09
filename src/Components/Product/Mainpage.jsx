import React from 'react'
import { Box,Flex ,Image,Span,Text} from '@chakra-ui/react'
import Categorieshead from './Categorieshead'
import classes from './Mainpage.module.css'
import { IoIosArrowForward } from "react-icons/io";
import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import { MdOutlineCurrencyExchange } from "react-icons/md";
import data from '../../data.json'
import darazblu from '../../assets/darazblue.png'
import { IoShieldOutline } from "react-icons/io5";
import qr from '../../assets/qrcode3.png'
import image1 from '../../assets/img-1.jpg'
import { FaStar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import darazsale from '../../assets/darazdecember sale.webp'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMobile2 } from "react-icons/ci";

const Mainpage = () => {
  return (
<Box  width='100%'>
    <Categorieshead  className={classes.cate} />
    <Box backgroundColor='#eff0f5'><Flex><Flex align='center'><Link>Products cate</Link><IoIosArrowForward /></Flex><Flex align='center'> <Link>Products cate</Link><IoIosArrowForward /></Flex> <Flex align='center'><Link>Products cate</Link><IoIosArrowForward /></Flex> <Flex align='center'><Link>Products cate</Link><IoIosArrowForward /></Flex></Flex>
    
    </Box>
    <Flex backgroundColor='#eff0f5' align='center'
    justify='center' >
<Flex width='93vw' height='900px'  backgroundColor='white' >
<Box className={classes.image}>
  <Box width='330px' height='330px'><ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:"https://img.drz.lazcdn.com/static/pk/p/8bbfb91abae3862a4d5f6c83b8ef872d.jpg_200x200q80.jpg_.webp"
    },
    largeImage: {
        src: "https://img.drz.lazcdn.com/static/pk/p/8bbfb91abae3862a4d5f6c83b8ef872d.jpg_200x200q80.jpg_.webp",
        width: 1200,
        height: 1800
    }
}} /></Box>
  <Box></Box>
</Box>
<Box className={classes.texside}>
  <Box><h1>PRODUCT FULL DESCRIPTION</h1></Box>
<Box>
  <Flex><IoShareSocial /><CiHeart /></Flex>
<Flex className={classes.starcl}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
<Box><Link>Ratings</Link></Box><Box>|</Box><Box><Link>Answered Questions</Link></Box></Flex>
</Box>

<Flex className={classes.brand}><Span>Brand:</Span><Link>No Brand</Link><Span>|</Span><Link>More Products from Brand</Link></Flex>

<Box className={classes.darazsales}></Box>

</Box>
<Box width='330px' backgroundColor='#fafafa' className={classes.lastbox}>

<Flex className={classes.info}  ><Span color='gray' fontSize='12px'>Delivery options</Span><IoMdInformationCircleOutline /></Flex>
<Flex justify='space-between' padding='10px 20px'>
<Flex className={classes.add}><IoLocationOutline /><Text>Address</Text></Flex>
<Box className={classes.link}><Link>CHANGE</Link></Box></Flex>
<hr />
<Flex flexDirection='column' gap='30px' padding='10px 20px'>
<Flex justify='space-between'>
  <Flex className={classes.deliver}><CiDeliveryTruck  /><Flex flexDirection='column'><Text>Standard Delivery</Text><Text>Guaranted by 29-Dec</Text></Flex></Flex>
<Text>Rs.150</Text>
</Flex>
<Flex className={classes.cash} gap='12px'>
<FaSackDollar /> <Box><Text>Cash on Delivery Available</Text></Box>
</Flex>
</Flex>
<hr />
<Flex flexDirection='column'>
<Flex className={classes.info}  ><Span color='gray' fontSize='12px'>Return & Warranty</Span><IoMdInformationCircleOutline /></Flex>

<Flex flexDirection='column'
padding='10px 20px' gap='20px'><Flex>
  <Flex className={classes.exchange}> <MdOutlineCurrencyExchange /><Text>14 days easy return</Text></Flex>

</Flex>
<Flex className={classes.cash} gap='12px'>
<IoShieldOutline /> <Box><Text>1 Year Brand Warranty</Text></Box>
</Flex></Flex>
</Flex>
<hr />
<Flex flexDirection='column' padding='10px 30px'>
  <Flex gap='10px'><Box width='100px' height='100px'> <Image width='auto'
  height='auto' maxH='100%' maxW='100%' src={qr} /></Box> <Box  className={classes.note} padding='10px 20px'color='gray' position='relative' backgroundColor='white' width='169px'><Image width='43px' src={darazblu}/><Span fontSize='11px'>Download app to enjoy exclusive discounts!</Span></Box></Flex>
  <Flex><CiMobile2 /><Text>Scan with me</Text>
  </Flex>
</Flex>
</Box>

      </Flex>
 

    </Flex>
</Box>
  )
}

export default Mainpage
