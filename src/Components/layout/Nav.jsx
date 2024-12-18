import React from 'react'
import { useNavigate } from "react-router";
import { Link } from '@chakra-ui/react';
import classes from './Nav.module.css';
import logo from '../../assets/3b870cb043c7f8a9741cbf66329e294e.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import darazapp from '../../assets/daraz app.png'
import darazbackground from '../../assets/daraz_background.webp'
import { Button } from '@chakra-ui/react';
import { Span } from '@chakra-ui/react';
import Search from '../../assets/search.png'
import search, { includeitem } from '../../store/search';
import { useDispatch } from 'react-redux';



const Nav = () =>  {
const navigate=useNavigate()
const dispatch=useDispatch();

function navigatehome(){
    return navigate('/')
}
let k;
function event(e){
     k=e.target.value;
    console.log(k)
dispatch(includeitem(k))
}

    function searchnavigate(e){
        if(e.key == 'Enter'){
            navigate('/product');
        }
    }
    return(
 <div className={classes.nav}>
<div className={classes.menu}>
    <h4><Link>SAVE MORE ON SHOPAHOLIC</Link></h4>
    <h4><Link>SELL ON SHOPAHOLIC</Link></h4>
    <h4><Link>HELP AND SUPPORT</Link></h4>
    <h4><Link>LOGIN</Link></h4>
<h4>SIGN UP</h4>

</div>
<Box  className={classes.downloaddaraz}>
<Image  width='100%' objectFit='cover'  objectPosition='center' src={darazapp} />
</Box>
<Box className={classes.background}  bgImage={`url(${darazbackground})`} >
<Box className={classes.allbox}><Span bgImage={`url(${Search})`} bgSize='100% 100%'></Span>
<Box className={classes.inputtwo}><input type="text" placeholder='Search in Daraz' />
<Button>Search</Button>
</Box>
</Box>
</Box>
<div className={classes.navmain}>
    <div className={classes.log} onClick={navigatehome}>
    <img src={logo} alt="" />

</div>
<div className={classes.inca}>
<div className={classes.input}>
    <input type="text" placeholder='Search in Daraz' onChange={event} onKeyUp={searchnavigate} />
</div>
<div className={classes.cart}>  
       <button>
        <FontAwesomeIcon icon={faCartShopping} style={{ height: '23px' ,color:'white'}}/> </button>
</div> </div></div></div>
)
}
export default Nav;