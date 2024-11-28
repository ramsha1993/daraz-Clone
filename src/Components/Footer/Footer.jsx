import React from 'react'
import {Span,Box, Flex,List,Text,Image} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import classes from './Footer.module.css'
import darazsmalllogo from '../../assets/daraz small.png'
import appstore from '../../assets/app store.png'
import googleplay from '../../assets/googleplay.png'
import appgallery from '../../assets/appgallery.png'
import visa from '../../assets/visa.png'
import cashon from '../../assets/xashon.png'
import master from '../../assets/master.png'
import easy from '../../assets/easy.png'
import darazwall from '../../assets/darazwall.png'
import jazz from '../../assets/jazzcas.png'
import union from '../../assets/union.png'
import hbl from '../../assets/HBL.png'
import easymonth from '../../assets/easymonth.png'
import Pci from '../../assets/pci.png'
import Footerend from './Footerend'

const Footer = () => {
  return (
    <Box>
   <Flex className={classes.footermain}>
    <Box className={classes.custom}><h1 >Customer Care</h1>
    <List.Root  listStyle="none" fontSize='13px' >
  <List.Item ><Link color='#0f136d'> Help Center</Link></List.Item>
  <List.Item><Link color='#0f136d'> How to Buy</Link></List.Item>
  <List.Item><Link color='#0f136d'> Corporate & Bulk Purchasing</Link></List.Item>
  <List.Item><Link color='#0f136d'> Returns & Refunds</Link></List.Item>
  <List.Item><Link color='#0f136d'> Daraz Shop</Link></List.Item>
  <List.Item><Link color='#0f136d'> Contact Us </Link></List.Item>
  <List.Item><Link color='#0f136d'>
Purchase Protection</Link>
</List.Item>
  <List.Item >
    <Link color='#0f136d'>Daraz Pick up Points</Link>

  </List.Item>
</List.Root  >
   </Box><Box className={classes.Darazz}><h1>Daraz</h1><List.Root fontSize='13px'  listStyle="none">
    <List.Item><Link color='#0f136d'> Daraz </Link></List.Item>
    <List.Item><Link color='#0f136d'> About Us </Link></List.Item>
    <List.Item><Link color='#0f136d'> Digital Payments </Link></List.Item>
    <List.Item><Link color='#0f136d'> Daraz Donates </Link></List.Item>
    <List.Item><Link color='#0f136d'> Daraz Blog</Link></List.Item>
    <List.Item><Link color='#0f136d'> Terms & Conditions</Link></List.Item>
    <List.Item><Link color='#0f136d'> Privacy Policy</Link></List.Item>
    <List.Item><Link color='#0f136d'> NTN Number : 4012118-6</Link></List.Item>
    <List.Item><Link color='#0f136d'> STRN Number : 1700401211818</Link></List.Item>
    <List.Item><Link color='#0f136d'> Online Shopping App</Link> </List.Item>
    <List.Item><Link color='#0f136d'> Online Grocery Shopping</Link></List.Item>
    <List.Item><Link color='#0f136d'> Daraz Exclusive</Link></List.Item>
    <List.Item><Link color='#0f136d'> Daraz University</Link></List.Item>
    <List.Item><Link color='#0f136d'> Sell on Daraz</Link></List.Item><List.Item><Link color='#0f136d'>Join Daraz Affiliate Program</Link></List.Item></List.Root></Box>
   <Flex gap='20px'><Box><Image height='42px' width='42px' src='https://img.lazcdn.com/us/domino/e07f9602-da7e-4d31-9c4f-df69a2e95325_PK-60-60.png' /></Box>
   <Box   className={classes.happy
    }  >
   <Text>Happy Shopping</Text>
   <Text >Download App</Text></Box></Flex>
   <Box className={classes.darazapps}><Flex gap='10px' ><Box marginBottom='10px'> <Image src={appstore} /></Box>
   <Box><Image src={googleplay} /></Box></Flex>
   <Image src={appgallery} /></Box></Flex>
   <Box className={classes.darazpaymentbox}>
    <Flex gap='60px' className={classes.darazpayment}>
    
    <Box className={classes.payment}>

    <h1>Payment Methods</h1>
<Flex marginBottom='10px'><Span><Image height='28px'width='100%' src={cashon} /></Span><Span><Image height='28px'width='100%' src={visa} /></Span><Span><Image height='28px'width='100%' src={master} /></Span><Span><Image  height='28px'width='100%' src={easy} /></Span><Span><Image  height='28px'width='100%' src={darazwall} /></Span><Span><Image height='28px'width='100%' src={jazz} /></Span></Flex>
<Flex><Span><Image  height='28px'width='100%' src={union} /></Span><Span><Image  height='28px'width='100%'src={hbl} /></Span><Span><Image height='28px' width='100%' src={easymonth} /></Span></Flex>
</Box><Box className={classes.verify}><h1>Verified by</h1><Box><Image src={Pci} /></Box></Box></Flex></Box>
<Box className={classes.darazdescription}>
  <Box className={classes.first} width='25%'>
   <Box> <h1>How Daraz Transformed Online Shopping in Pakistan</h1><Text marginBottom='10px'>How Daraz Transformed Online Shopping in Pakistan</Text></Box>
   <Box marginBottom='10px'><Text>Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.</Text></Box><Box><h1>What Makes Us Different from Other Online Shopping Platforms?</h1><b>Select from the Largest Online Marketplace in Pakistan</b><Text>With over 15 million products to select from, Daraz offers its customers the most comprehensive listing of products in the country. Whether you’re looking for electronics, apparel, appliances, or groceries – there is something for everyone.</Text></Box><Box><b>Hassle Free Delivery</b><Text>Online shopping is only as good as its execution and Daraz promises hassle free delivery right from the moment you order to when your package is dropped at your door. We cater to both major and smaller cities alike, and give you the choice to track your package as it makes its way to you so you always know your order status. If you are unsatisfied with any aspect of your order, we have a simple 7-day return or exchange policy.</Text>
   
   </Box>
   
   
   <Box><b>Payment Options to Suit Every Style
   </b><Text>You can choose to pay through a credit/debit card, opt for cash on delivery or even go for EMI (easy monthly instalments). You can also</Text></Box>
   
   </Box>
   <Box className={classes.second} width='25%'>
    <Text>avail exclusive offers by downloading Daraz Wallet – a closed loop digital wallet that offers you a secure, easy way to make payments. We also have easypaisa & jazzcash payment method for our customers' ease</Text>
  <Box marginBottom='10px'><b>Shop from Verified Vendors</b>
  <Text>Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Daraz Marketplace and Daraz Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!

  </Text></Box>
  <Box marginBottom='10px'><b>Shop Around the World with Daraz Global Collection</b>
  <Text>International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Daraz website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.
    </Text></Box>
    <Box marginBottom='10px'><b>Avail Exclusive Discounts, Offers, and Promotions</b>
    <Text>Online shopping with Daraz means you get the chance to avail exclusive online-only promotional packages as well as discount vouchers from our vendors when you shop from their pages. Our flash sales give you customized product offers all curated with the help of our advanced AI technology so you always have deals you’ll actually be interested in!
      </Text></Box>
      <Box marginBottom='10px'><b>Buy Value, not Just Goods with Daraz Care</b>
      <Text>Daraz does not just cater online shopping in Pakistan but also aims to simplify the way you give back to society. With charities spanning across sectors of education, health care, environmental preservation, and shelters, you can choose to make a big difference with a few, simple clicks
        </Text></Box>
        <Box marginBottom='10px'><b>Simplify Corporate Purchases
        </b>
        <Text>Who says corporate purchases need to be a complicated affair? When you opt for Daraz Corporate, you get an efficient and transparent solution for your business’ bulk purchasing needs. We’re proud to be working with some of the most prestigious organizations in Pakistan across a number of different industries.
          </Text></Box>

   </Box>
<Box className={classes.third} width='25%' ><h1>Top Categories & Brands</h1> <Box marginBottom='10px'><Text>MOBILE PHONES IN PAKISTAN</Text>
<Link>Apple iPhones</Link> ,<Link>Honor Mobiles </Link>,<Link>Huawei Mobiles</Link>,<Link>Tecno Mobiles </Link>,
<Link>Redmi Mobiles</Link>,<Link> Xiaomi Mi Mobiles</Link>
,<Link> Nokia Mobiles </Link>,<Link>OnePlus Mobiles </Link>
,<Link> Oppo Mobile Phones </Link>,<Link>Realme Mobiles </Link>
,<Link>Samsung Mobile Phones</Link>,<Link>Vivo Mobile Phones </Link>,
<Link> Mobile Accessories </Link>,<Link>Smart Watches</Link>

</Box>
<Box marginBottom='10px'>
  <h4>LATEST LAPTOPS</h4><Link> Dell Laptops</Link>
,<Link> HP Laptops</Link>,<Link>Lenovo Laptops </Link>
,<Link> Mouse</Link>,<Link>Gaming Graphic Cards </Link>,
<Link>lenovo ideapad 3</Link>,<Link> Macbook Pro 13 </Link>
,<Link>Hp Probook 650 G2</Link>


</Box>
<Box marginBottom='10px'><h4>LED TV</h4>
<Link>Changhong Led Tv </Link>,<Link> LG Led Tv </Link>,<Link> LG Led Tv</Link>,
<Link>Samsung Led Tv </Link>,<Link>Sony Led Tv</Link>,<Link>TCL LED TVs</Link>
</Box>
<Box><h4>
HOME APPLIANCES
</h4>
<Link>Microwave oven </Link>,<Link> Geyser</Link>,<Link>Heater </Link>
,<Link> Refrigerators </Link>,<Link>Deep Freezers </Link>,
<Link> Generators </Link>,<Link> Water Dispensers</Link>,
<Link> Fans </Link>,<Link>, Room Cooler</Link>,<Link> Table Fans</Link>
,<Link>Wall Fans</Link>,<Link> Exhaust Fans </Link>,<Link>
Window Ac </Link>,<Link>Solar Panel</Link>,<Link>Washing Machine</Link>


</Box>
<Box marginBottom='10px'>
  <h4>DSLR CAMERAS</h4>
<Link>Camera Tripods</Link>,<Link>Drones</Link>,
<Link> IP & CCTV Cameras </Link>,<Link>Nikon D7000</Link>
,<Link>Nikon D7000</Link>,<Link> Canon 1200D</Link>,<Link>
Fujifilm Instax Mini 11</Link>,<Link> Canon M100</Link>


</Box>
<Box marginBottom='10px'>
<h4>HEALTH & BEAUTY</h4>
<Link>sunisa foundation</Link>,<Link>Biofad </Link>,
<Link>janssen facial kit</Link>,<Link>Glutathione Injection</Link>
,<Link>Glutathione Cream</Link>,<Link>
Sauvage </Link>,<Link>Glutathione Tablets</Link>,
<Link> Glutathione Soap</Link>,<Link>Infrared Thermometers</Link>
,<Link>N95 Mask</Link>
</Box>
<Box marginBottom='10px'>
<h4>TRENDING</h4>
<Link>June Shopping Expo 2023</Link>,<Link> Azaadi Sale 2022</Link>
,<Link>Shopping Expo</Link>,<Link>11 11 Sale</Link>,
<Link>12.12 Sale </Link>,<Link> Live Cricket Streaming</Link>,
<Link>Online Bills </Link>,<Link>Core I5 Laptop </Link>,
<Link> Gtx 1060 </Link>,<Link>  Samsung A32  </Link>,<Link>Samsung A51</Link>
,<Link>Samsung A52 </Link>,<Link>Samsung A71</Link>,<Link>Samsung A72 </Link>
,<Link>Samsung M31 </Link>,<Link> Samsung S20</Link>,
<Link> Samsung S20 Ultra 5G </Link>,<Link>Samsung S21 </Link>,
<Link>Samsung S21 </Link>,<Link> Samsung S21 Ultra</Link>,
<Link> Samsung Z Flip</Link>,<Link> Tecno Camon 17 </Link>,<Link>
Tecno Spark 6</Link>,<Link> Vivo V20 </Link>,
<Link>Poco X3 Pro</Link>
,<Link>Vivo V21</Link>
,<Link>Vivo V21E</Link>
,<Link>Vivo X70 Pro</Link>
,<Link>Vivo Y12</Link>
,<Link>Vivo Y12S</Link>
,<Link>Vivo Y1S</Link>
,<Link>Vivo Y20</Link>
,<Link>Vivo Y51</Link>
,<Link>Vivo Y51S</Link>
,<Link>Oppo F19 Pro</Link>
,<Link>Oppo Reno 6</Link>
,<Link>Xiaomi Poco F3</Link>
,<Link>Xiaomi Poco M3</Link>
,<Link>Xiaomi Poco X3</Link>
,<Link>Xiaomi Poco X3 GT</Link>
,<Link>Xiaomi Redmi 9C</Link>
,<Link>Xiaomi Redmi Note 10 Pro</Link>
,<Link>Sharp Aquos R2</Link>

</Box>

<Box marginBottom='5px'><h4>SHOP WORLDWIDE WITH LAZADA</h4>
<Link>Singapore</Link>
,<Link>Malaysia</Link>
,<Link>Philippines</Link>
,<Link>Indonesia</Link>
,<Link>Vietnam</Link>
,<Link>Thailand</Link>

</Box>
 



</Box>
<Box  className={classes.fouth} width='25%'>
  <Box v><h4>WOMEN'S FASHION</h4><Link>Al-Karam Studio</Link>
<Link>Warda</Link>
,<Link>Salitex</Link>
,<Link>Bonanza Satrangi</Link>
,<Link>Edenrobe</Link>
,<Link>Firdous</Link>
,<Link>Junaid Jamshed</Link>
,<Link>Limelight</Link>
,<Link>Sana Safinaz</Link>
,<Link>Mahru</Link>
,<Link>Pushup Bra</Link>
,<Link>Women Undergarments</Link>
</Box>
<Box marginBottom='10px'><h4>MEN'S FASHION</h4>
<Link>Men's Shirts</Link>
,<Link>Men's T-Shirts</Link>
</Box>
<Box marginBottom='10px'><h4>ONLINE GROCERY STORE</h4>
<Link>Oil & Ghee</Link>
,<Link>Basmati Rice</Link>
,<Link>Dried Fruits</Link>
,<Link>Chocolates</Link>
,<Link>Mattresses</Link>

</Box>
<Box marginBottom='10px'><h4>ONLINE BOOK STORE</h4>
<Link>English Books</Link>
,<Link>Islamic Books</Link>
,<Link>History Books</Link>
,<Link>English Literature Books</Link>
,<Link>Kids Urdu Stories</Link>
,<Link>Pride & Prejudice</Link>
,<Link>Harry Potter Story Books</Link>
,<Link>Namal Novel</Link>
,<Link>Nimra Ahmed Novels</Link>
</Box>
<Box marginBottom='10px'><h4>USED CARS FOR SALE</h4>
<Link>Suzuki Wagon R</Link>
,<Link>KIA Sportage</Link>
,<Link>Honda City</Link>
,<Link>Toyota Prado</Link>
,<Link>Suzuki Alto</Link>
,<Link>Suzuki Cultus</Link>
,<Link>Honda Civic</Link>
,<Link>Honda 1210</Link>
,<Link>Honda 70</Link>
,<Link>Yamaha YBR 125</Link>
,<Link>Hi Speed 150</Link>
,<Link>Hi Speed Freedom 200</Link>
,<Link>Metro 70</Link>
,<Link>Super Power 125</Link>
,<Link>Monster JMS 3500 Electric Bike</Link>
,<Link>Super Power 70</Link>
,<Link>Car Accessories</Link>

</Box>
<Box marginBottom='10px'><h4>AIR CONDITIONERS</h4>
<Link>Kenwood Ac</Link>
,<Link>Haier Ac</Link>
,<Link>Gree Ac</Link>
,<Link>Dawlance Ac</Link>
,<Link>Orient Ac</Link>
,<Link>Ecostar Ac</Link>
,<Link>Inverex Solar Ac</Link>
,<Link>Pel Ac</Link>


</Box>
<Box marginBottom='10px'><h4>TOP MOBILE PHONES
</h4>
<Link>Nokia G20</Link>
,<Link>Redmi 9</Link>
,<Link>Realme 7 Pro</Link>
,<Link>Realme C15</Link>
,<Link>Realme C21</Link>
,<Link>Vivo Y20s</Link>
,<Link>Realme C11 Price in Pakistan</Link>
,<Link>Itel Vision 1 Pro Price in Pakistan</Link>
,<Link>Samsung Galaxy A02 Price in Pakistan</Link>
,<Link>Infinix Hot 10</Link>
,<Link>Infinix Hot 8</Link>
,<Link>Infinix Hot 9</Link>
,<Link>Infinix Note 10 Pro</Link>
,<Link>Infinix Note 7</Link>
,<Link>Infinix Note 8</Link>
,<Link>Infinix Zero 8</Link>
,<Link>Infinix Smart 5</Link>
,<Link>iPhone 11</Link>
,<Link>iPhone 12</Link>
,<Link>iPhone 12 Pro Max</Link>
,<Link>iPhone 12 Pro</Link>
,<Link>iPhone 6</Link>
,<Link>Itel A25</Link>
,<Link>Mi 10T</Link>
,<Link>Nokia 105</Link>
,<Link>Oppo A15</Link>
,<Link>Oppo A15S</Link>
,<Link>Oppo A53</Link>
,<Link>Oppo A54</Link>
,<Link>Infinix Zero X Pro</Link>
,<Link>Infinix Zero X Neo</Link>
,<Link>Oppo F19</Link>
,<Link>Oppo Reno 5</Link>
,<Link>Oppo Reno 5 Pro</Link>
,<Link>Xiaomi Poco M3 Pro</Link>
,<Link>Realme 6 Pro</Link>
,<Link>Realme 8</Link>
,<Link>Realme Narzo 30A</Link>
,<Link>Samsung A02S</Link>
,<Link>Samsung A11</Link>
,<Link>Samsung A12</Link>
,<Link>Samsung A31</Link>
,<Link>Vivo Y33s</Link>
,<Link>Infinix Note 11</Link>
,<Link>Tecno Spark 6 Go</Link>
,<Link>Samsung A52s</Link>
,<Link>Samsung Tab A7 Lite</Link>
,<Link>Oppo Reno 6 Pro</Link>

</Box>
<Box marginBottom='5px'><h4>MEDICINE</h4>
<Link>Surbex Z</Link>
,<Link>Tea Tree Oil</Link>
,<Link>Hydrozole Cream</Link>
,<Link>Biotin Tablets</Link>
,<Link>Evion Capsule</Link>
,<Link>Lactogen 1</Link>
,<Link>Minoxidil</Link>
,<Link>Clobevate Cream</Link>
,<Link>Centrum Silver</Link>
,<Link>Maxdif Cream</Link>
,<Link>Dermovate Cream</Link>
,<Link>CAC 1000</Link>
,<Link>Panadol Migraine</Link>
</Box>
  </Box></Box>
<Footerend />
</Box>
  )
}

export default Footer;













