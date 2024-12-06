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
import arrow from '../../assets/arrow.webp'
import fire from '../../assets/fire.png'
import classes from './Products.module.css'
const Products = () => {
  return (
    <Box   className={classes.products}   >
      <h1>Flash Sale</h1>
      <Box className={classes.flashsale} height='4.8vw'>
<Image src={flash} maxHeight='100%' maxWidth='100%' height='auto'
width='auto'/>

      </Box>
      <p className={classes.para}>On Sale Now</p>
        <Grid className={classes.grid}>
  {products.filter((elem)=>(elem.id<7)).map((elem,index)=>(


    <GridItem key={index} className={classes.just}>
<Box className={classes.size}>
<Box className={classes.imagee}>
<p>SAVE</p>
<Span>78%</Span>
</Box>
<Image src={elem.image} borderRadius='6px' />
 <Box className={classes.paragraph}> <Text fontSize='17px' fontWeight='500' className={classes.para2}>{elem.description}</Text>
<Flex color='#d6520b'> <Span  fontSize='22px'>Rs.</Span><Span fontSize='22px'>{elem.price}</Span></Flex>
<Flex ><Box textDecoration='line-through'  fontSize='12px' font-weight='500' color='gray'><Span>Rs.</Span> <Span>{elem.price*2}</Span></Box><Span fontSize='13px' font-weight='500' >-77%</Span></Flex>
</Box>
<Box className={classes.resparagraph}>
<Flex fontWeight='700' alignItems='end' color='#fe4960'> <Span  fontSize='3vw' fontWeight='700'>Rs.</Span><Span fontSize='4vw' fontWeight='700'>{elem.price}</Span></Flex>
<Box className={classes.linethrough}><Span>Rs.</Span> <Span>{elem.price*2}</Span></Box>
<Flex className={classes.sub}>
  <Box className={classes.fire} background={`url(${fire})`} backgroundPosition='50%' backgroundSize='contain'  backgroundRepeat='no-repeat'></Box>
<Flex className={classes.sp}>
<Span>{elem.id*1}</Span><Span>Stock left</Span></Flex>
</Flex>

</Box>
</Box>
</GridItem>

))}
        </Grid>
    </Box>
  );
};

export default Products;