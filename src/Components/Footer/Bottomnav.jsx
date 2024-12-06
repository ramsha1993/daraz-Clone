import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box,Span } from '@chakra-ui/react'
import classes from './Bottomnav.module.css'
import darazcart from '../../assets/downloadcart.png'
import daraznav from '../../assets/downloadnav.png'
import darazaccount from '../../assets/download.png'
import daraz from '../../assets/navdaraz.png'
const Bottomnav = () => {
  return (
<Flex className={classes.flexbottom} width='100%'><Box className={classes.navbottom}><Box width="8vw" height='6.4vw'><Image width='auto' height="auto " maxWidth="100%" maxHeight="100%" 
 src={daraz} /></Box><Span>Home</Span></Box><Box className={classes.navbottom}><Box width="8vw" height='6.4vw'><Image  width='auto' height="auto " maxWidth="100%" maxHeight="100%"  src={daraznav} /></Box><Span>Categories</Span></Box>
<Box className={classes.navbottom}><Box width="8vw" height='6.4vw'> <Image  width='auto' height="auto " maxWidth="100%" maxHeight="100%"    src={darazcart}/></Box><Span>Cart</Span></Box>
<Box className={classes.navbottom}><Box width="8vw" height='6.4vw'> <Image  width='auto' height="auto " maxWidth="100%" maxHeight="100%"   src={darazaccount} /></Box><Span>Account</Span></Box></Flex>
  )
}

export default Bottomnav;