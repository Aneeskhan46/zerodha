import React from 'react';

import Heroproduct from './Heroproduct';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';


function Product() {
    return ( 
       
        <div>
           <Heroproduct/>
           <Leftsection Image='Media\Images\kite.png'  Title="Kite" Para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."/>


           <Rightsection  Image='Media\Images\console.png'  Title="Console" Para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."/>


            <Leftsection Image='Media\Images\coin.png'  Title="Coin" Para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."/>


           <Rightsection  Image='Media\Images\kiteconnect.png'  Title="Kite Connect API" Para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."/>


            <Leftsection Image='Media\Images\varsity.png'  Title="Varsity mobile" Para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>

        </div>
     );
}

export default Product;