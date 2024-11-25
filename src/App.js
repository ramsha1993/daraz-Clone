import { div } from 'framer-motion/client';
import './App.css';
import Nav from './Components/layout/Nav';
import { ChakraProvider } from '@chakra-ui/react';
import Banner from './Components/home/Banner';
import Home from './Components/home/Home';
import '@fontsource/roboto'; // Defaults to weight 400
import Products from './Components/home/Products';
import Categories from './Components/home/Categories';
import Footer from './Components/Footer/Footer';
function App() {
  return (

  <div className='app'>
<Nav />
<Home />
<Products />
<Categories />
<Footer />
  </div>

  
  )
  
  
  ;
}

export default App;
