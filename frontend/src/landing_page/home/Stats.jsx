import React from 'react';


function Stats() {
    return (
     <div className='container p-4' style={{marginTop:"100px" , }}>
         
      <div className='row' >

          <div className='col-6 mt-5  ' style={{ textAlign:"left", }}  >
              
            <h2>TRUST WITH CONFIDENCE</h2>
           
           <br></br>
            <h3>Customer first always</h3>
            <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase..</p>

            <h3>Varsity mobile</h3>
            <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices..</p>

            <h3>Kite Connect API</h3>
            <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
          </div>

          <div className='col-1'>

          </div>

           <div className='col-5'  >
                <img src='Media\Images\ecosystem.png' style={{width:"550px"}}/>
          </div>
      </div>
        
        
      
    </div> 
    
);
}

export default Stats;