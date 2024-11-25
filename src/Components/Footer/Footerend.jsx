import React from 'react'
import { Link } from '@chakra-ui/react'
import {Image, Box,Flex } from '@chakra-ui/react'
import pakistan from '../../assets/pakistan.png'
import bangle from '../../assets/bangladesh.png'
import siri from '../../assets/sri.png'
import mayamr from '../../assets/mayamar.png'
import nepal from '../../assets/nepal.png'
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import youtube from '../../assets/you.png'
import web from '../../assets/web.png'
import classes from './Footerend.module.css'

const Footerend = () => {
  return (
<Flex gap='139px' className={classes.h}>
<Box><h4>Daraz International</h4>
<Flex gap='30px' width='554px' fontSize='14px'>
<Flex className={classes.count} gap='10px'><Image height='28px' width='28px' src={pakistan} /><Link >Pakistan</Link></Flex>
<Flex className={classes.count} gap='10px'><Image height='28px' width='28px' src={bangle} /> <Link>Bangladesh</Link></Flex>
<Flex className={classes.count} gap='10px'><Image height='28px' width='28px' src={siri} /> <Link>Srilanka</Link></Flex>
<Flex className={classes.count} gap='10px'><Image height='28px' width='28px' src={mayamr} /> <Link>Mayamar</Link></Flex>
<Flex className={classes.count} gap='10px'><Image height='28px' width='28px' src={nepal} /> <Link>Nepal</Link></Flex></Flex></Box>
<Box width='270px'><h4>Follow Us</h4>
<Flex gap='25px' >
<Image width='28px' height='28px'  src={face} />
<Image width='28px' height='28px' src={insta} />
<Image width='28px' height='28px'  src={youtube} />
<Image width='28px' height='28px' src={web} /></Flex>

</Box>
<Box color='#606060'><h4>© Daraz 2024
                  </h4></Box>
</Flex>
  )
}

export default Footerend