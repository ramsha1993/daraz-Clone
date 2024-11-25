import React from 'react'
import { Grid } from '@chakra-ui/react';
import { GridItem } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react"
import image1 from '../../assets/img-1.jpg'
import image2 from '../../assets/img-2.jpg'
import image3 from '../../assets/img-3.png'
import { Span } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import image4 from '../../assets/img-4.jpg'
import image5 from '../../assets/img-5.jpg'
import image6 from '../../assets/img-6.jpg'
import flash from '../../assets/flashsale.webp'
import { Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import products from '../.././data.json'
import classes from './Products.module.css'
const Products = () => {
  return (
    <Box   className={classes.products}  padding='9px 32px' >
      <h1>Flash Sale</h1>
      <Box className={classes.flashsale} height='4.8vw'>
<Image src={flash} maxHeight='100%' maxWidth='100%' height='auto'
width='auto'/>

      </Box>
      <p className={classes.para}>On Sale Now</p>
        <Grid templateColumns="repeat(6, 1fr)" h='300px'>
  {products.filter((elem)=>(elem.id<7)).map((elem,index)=>(

    <Box className={classes.resprod}>
    <GridItem key={index} className={classes.just}>
<Image src={elem.image} />
 <Box><Text fontSize='17px' fontWeight='500' className={classes.para2}>{elem.description}</Text>
<Flex color='#d6520b'> <Span  fontSize='22px'>Rs.</Span><Span fontSize='22px'>{elem.price}</Span></Flex>
<Flex ><Box textDecoration='line-through'  fontSize='12px' font-weight='500' color='gray'><Span>Rs.</Span> <Span>{elem.price*2}</Span></Box><Span fontSize='13px' font-weight='500' >-77%</Span></Flex>

 </Box>
</GridItem>
</Box>
))}
        </Grid>
    </Box>
  );
};

export default Products;