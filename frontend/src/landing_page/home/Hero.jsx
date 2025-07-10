import React from 'react';


function Hero() {
   
   return ( 
    <div className='container p-5 mt-5 '  >
         
        <div className='row '  style={{  display:"flex", justifyContent:"center" , textAlign:"center"}}>
            <div>
                <img src='Media\Images\homeHero.png' style={{width:"700px" , height:"300px"}} />
            </div>
            
            <div className='mt-5'>
                  <h1>Invest in everything</h1> 
                  <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                  <button className='btn-primary col-4 p-2 mt-2' style={{fontWeight:"bold", borderRadius:"10px"}}>Sign up for Free</button>
            </div>
           
         </div>



    </div>
    
    );
}

export default Hero;