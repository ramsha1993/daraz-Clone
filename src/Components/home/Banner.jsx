import React from 'react'
import classes from './Banner.module.css'
import banner1 from '../../assets/banner2.webp'
import banner2 from '../../assets/banner3.webp'
import banner3 from '../../assets/banner4.webp'
import banner4 from '../../assets/banner5.webp'
import banner5 from '../../assets/banner6.webp'
import banner6 from '../../assets/banner7.webp'
import banner7 from '../../assets/banner8.webp'
import banner8 from '../../assets/banner1.webp'
import prev from '../../assets/prev (2).png'
import next from '../../assets/next (2).png'
import Slider from "react-slick";
import small from '../../assets/small-logo.webp'
import folder from '../../assets/folders.png'
import appleStore from '../../assets/apple store.png'
import {Span} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Grid,GridItem } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css";
import { Flex } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import "slick-carousel/slick/slick-theme.css";
import googlePlay from '../../assets/googly.png'
import mob1 from '../../assets/mob-1.webp'
import mob2 from '../../assets/mob-2.webp'
import mob3 from '../../assets/mob-3.webp'
import mob4 from '../../assets/mob-4.webp'
import mob5 from '../../assets/mob-5.webp'
import mob6 from '../../assets/mob-6.webp'
import mid from '../../assets/mid-ban.webp'
const BannerStack=[banner1,banner2,banner3,banner5
  ,banner6
  ,banner7
  ,banner8]
const Banner = () => {
  var settings = {

    dots: true,
    infinite: true,
    // variableWidth:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true,
  autoplaySpeed:2000
  };
const content={
  backgroundImage:'url(https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png)',
  backgroundRepeat:'no-repeat',

  backgroundSize: '100% auto',
  // width:'200px',
  height:'187px',
  borderRadius:'6px'
}
  return (
    <div>
        <div className={classes.both}>
          <div className={classes.bannerm}>
        <Slider {...settings} >
          {BannerStack.map((elem,index)=>(
<div key={index} className={classes.banner}><img src={elem} alt="" />        </div>))} 
{/* <div style={previous}></div> */}
        {/* <div style={nextban}></div> */}
        </Slider>
        </div>
        
        
        <div className={classes.sidebanner}>
          <div className={classes.module}><div className={classes.small}>
            <img src={small} alt="" /></div><span>TRY DARAZ APP</span></div>    
            
  <div style={content}>
 <div className={classes.score}><div className={classes.star}><img src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01cAMOjU1zqQJZU8EbT_!!6000000006765-2-tps-19-18.png_80x80q80.png_.webp" alt="" /></div><span>4.8 Rated</span></div><div className={classes.download}><span>Download the App now</span></div>
 <div className={classes.freeshipping}><img src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png_.webp" alt="" /><span>
  Free Shipping</span></div>
  <div className={classes.voucher}><img src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png_.webp" alt="" /> <span>Exclusive Vouchers</span></div></div>
  <Flex gap= "2" alignItems='center'>
 <Box>
  <img src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01jHjmpl1pxcRVgFrYS_!!6000000005427-0-tps-150-150.jpg_360x360q80.jpg_.webp" alt="" />
 </Box>


<Box   height ='60px'
    display=' flex'
    flexDirection='column'
    gap= '9px'
    >
 <Box
  bgImage={`url(${appleStore})`}
  bgSize="100% auto"
  height="24px"
  width="83px"
>
</Box>
  <Box  bgImage={`url(${googlePlay})`}
  bgSize="100% auto"
  height="24px"
  width="83px"
  ></Box>
</Box>
 
</Flex>
<span style={{fontSize:'11px',paddingLeft:'6px'}}>Download the App Now!</span></div>

    </div>
    
    <Box className={classes.icons} marginBottom='45px'>
      <Grid templateColumns="repeat(4 ,1fr)" padding='0px 30px' fontSize='13px' gap='27px' >
        <GridItem width='16.4vw'>

   <Box><Image src={mob6} height='12vw' width='12vw' /></Box><Span fontSize='2.6vw'>Earn Coins</Span>         
   </GridItem>
         <GridItem width='16.4vw'>

    <Box>
      <Image src={mob2} height='12vw' width='12vw' /></Box><Box><Span fontSize='2.6vw'>Buy Any3</Span></Box>
      </GridItem>

<GridItem width='16.4vw'>
  <Box><Image src={mob3} height='12vw' width='12vw' /></Box><Span fontSize='2.6vw'>Free Delivery</Span>
  </GridItem>
<GridItem width='16.4vw'>
  <Box><Image src={mob4} height='12vw' width='12vw' /></Box><Span fontSize='2.6vw'>Buy More save More</Span>
  </GridItem>
  <GridItem width='16.4vw'>
<Box><Image src={mob5} height='12vw' width='12vw' /></Box><Span fontSize='2.6vw'>New Arrivals</Span>
</GridItem>
<GridItem width='16.4vw'>
<Box><Image src={mob1} height='12vw' width='12vw' /></Box><Span fontSize='2.6vw'>Games & Fun</Span>
</GridItem>
          </Grid>
   
    </Box>
    <Box className={classes.midban} >
<Box className={classes.midimg}> <Image width='92%' height='100%'src={mid} /></Box>
    </Box>
    </div>
  )
}

export default Banner;