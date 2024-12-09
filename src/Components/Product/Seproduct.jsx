import React from 'react'
import { Grid,Box,Flex,Span,Text ,Image,GridItem} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Seproduct.module.css'
import products from '../.././data.json'
import { useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
import mall from '../../assets/mall.png'
import Mainpage from './Mainpage'
const Seproduct = () => {
    const product=useSelector(state=>(state.search))
const navigate=useNavigate();
    
    function main(){
        return navigate('/mainp')
    }
    return (
<Box className={classes.Se}>
<Grid templateColumns='repeat(4, 1fr)' templateRows='400px 400px 400px'>
    {products.filter(elem=>(elem.name.toLowerCase().startsWith(product))).map((elem,index)=>{
        return(
    <GridItem key={index} width='17vw' height='24vw' className={classes.prodbox} onClick={main}>
<Box   height='190px'>
<Image src={elem.image} height='100%' width='100%'/></Box>
<Box className={classes.box}>
<Flex className={classes.text}><Link><i className={classes.iconimg} ></i>{elem.description}</Link></Flex>
<Text color='#f57224' fontSize='18px'>Rs.{elem.price}</Text>
<Flex align='center' justify='space-between'><Span fontSize='12px'>{elem.stock} sold</Span><Span><Flex color='orange' align='center'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />()</Flex></Span> <Span fontSize='12px'>Sindh</Span></Flex></Box>
    </GridItem>)})}</Grid>
</Box>
        )}
export default Seproduct;