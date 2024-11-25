import React from 'react'
import Banner from './Banner'
import { Grid, GridItem } from "@chakra-ui/react"
import daraz from '../../assets/daraz_top.webp'
import { Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import classes from './Home.module.css'
import Products from './Products'
const Home = () => {
  return (
    <Box className={classes.home}>
    <Banner/>
    <Box className={classes.daraz_Top} bgImage={`url(${daraz})` }     minWidth='1188px' backgroundPositionX='50%' margin='0% auto' backgroundRepeat='no-repeat' backgroundSize='1920px' width='100%' overflowY='hidden'>
    <Box height='171px' 
    ></Box>


    </Box>
    </Box>
  )
}

export default Home