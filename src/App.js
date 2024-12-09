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
import Bottomnav from './Components/Footer/Bottomnav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sproduct from './Components/Product/Sproduct';
import '@fontsource/roboto'; // Import all weights
import { Provider } from 'react-redux';
import Mainpage from './Components/Product/Mainpage';
import store from './store/store';
function App() {
  return (
    <div className='app'>
<Provider store={store}>
<Router>
<Nav />

<Routes>
  
<Route path='/' element={<><Home />
<Products />
<Categories />

<Bottomnav /> </>} />
  <Route path='/product' element={<Sproduct/>}/>
<Route path='/mainp' element={<Mainpage />}/>
</Routes>
<Footer />
  </Router>
</Provider>
  </div>

  
  )
  
  
  ;
}

export default App;
