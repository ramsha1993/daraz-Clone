import React from 'react'
import { Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import classes from './Categories.module.css'
import { Image } from '@chakra-ui/react'
import prod from '../.././data.json'
import { Text } from '@chakra-ui/react'
import { image } from 'framer-motion/client'
import { Span } from '@chakra-ui/react'
const Categories = () => {
const data=[{id:1,image:'https://img.drz.lazcdn.com/static/pk/p/989928971444ffe65f62a2f6123ca641.png_170x170q80.png',text:'Mobile Phones'},{id:2,image:'https://img.drz.lazcdn.com/g/kf/S01dee5ef12ec4dec82008e02f724c17bC.jpg_200x200q80.jpg_.webp',text:'Furniture'},{id:3,image:'https://img.drz.lazcdn.com/static/pk/p/78b32d8e7e28ce546309aa2acabe1c94.jpg_200x200q80.jpg_.webp',text:'Electronics'},{id:4,image:"https://img.drz.lazcdn.com/static/pk/p/81250c5dddd020a66824bd6aa2e52f9a.jpg_200x200q80.jpg_.webp",text:'Home Decor'},{id:5,image:"https://img.drz.lazcdn.com/static/pk/p/74fd7f293cb9d53e3f24582084b60507.jpg_200x200q80.jpg_.webp",text:'Health & Beauty'},{id:6,image:"https://img.drz.lazcdn.com/static/pk/p/70b454c00f809ea2d64878c6d7922bab.jpg_200x200q80.jpg_.webp",text:'Head phone'}]
  return (
    <Box className={classes.categories} padding='35px' >
        <h1>Categories</h1>
        <Grid templateColumns="repeat(6, 1fr)">
{data.map((elem,index)=>(
            <GridItem key={index} marginTop='22px' padding='25px'>
<Image src={elem.image}  height='80px'width='80px' />
<Text>{elem.text}</Text>
            </GridItem>
   )    )}       </Grid>

<h1>Just for you</h1>
<Box className={classes.just} >
   <Grid  templateColumns="repeat(6, 1fr)" templateRows="300px 300px">
    {prod.filter((elem)=>(elem.id>39)).map((elem,index)=>
       <GridItem key={index}  width='180px'>
       <Box height='160px'><Image src={elem.image} height='100%'/></Box>
        <Box><Text fontSize='14px' fontWeight='500' className={classes.para2}>{elem.description}</Text>
       <Flex color='#d6520b'> <Span  fontSize='22px'>Rs.</Span><Span fontSize='22px'>{elem.price}</Span></Flex>
       <Flex ><Box textDecoration='line-through'  fontSize='12px' font-weight='500' color='gray'><Span>Rs.</Span> <Span>{elem.price*2}</Span></Box><Span fontSize='13px' font-weight='500' >-77%</Span></Flex>
       
        </Box>
       </GridItem>)}
   </Grid>
</Box>
 
    </Box>
    )
}

export default Categories