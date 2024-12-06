import React from 'react'
import { Grid,Box,Flex,Span,Text ,Image,GridItem} from '@chakra-ui/react'
import classes from './Seproduct.module.css'
import products from '../.././data.json'
import { useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
import mall from '../../assets/mall.png'
const Seproduct = () => {
    const product=useSelector(state=>(state.search))
  return (

<Box className={classes.Se}>
<Grid templateColumns='repeat(3, 1fr)' templateRows='400px 400px 400px'>
    {products.filter(elem=>(elem.name.toLowerCase().startsWith(product))).map((elem,index)=>{
        return(
    <GridItem key={index} width='24vw' height='24vw'>
<Box   height='233px'>
<Image src={elem.image} height='auto' width='auto' maxW='100%' maxH='100%' /></Box>
<Flex ><Box width='40px' height='16px' background={`url(${mall})`} backgroundRepeat='no-repeat' backgroundSize='100% 100%'></Box><Text className={classes.desc}>{elem.description}</Text></Flex>
<Text color='#f57224' fontSize='18px'>Rs.{elem.price}</Text>
<Flex align='center' justify='space-between'><Span fontSize='12px'>{elem.stock} sold</Span><Span><Flex color='orange' align='center'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />()</Flex></Span> <Span fontSize='12px'>Sindh</Span></Flex>
    </GridItem>)})}</Grid>
</Box>
        )}
export default Seproduct;