import React from 'react';

function HeroPricing() {
    return ( 
       
        <div className='container mt-5 p-5'>

          <div className='row p-5' style={{justifyContent:"center" , marginRight:"200px"}}>
               
               <div className='offset-3 text-center'> 
                  
                  <h1>Charges</h1> 
               
               <p>List of all charges and taxes</p>


               </div>
               
          </div>

        

          <div className='row mt-5'>

            <div className='col-4 text-center' style={{padding:"20px"}} >
                 <img src='Media\Images\pricing0.svg'/>
                  <h1>Free equity delivery</h1> 
               
               <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

            </div>

            <div className='col-4 text-center' style={{padding:"20px"}} >
                 <img src='Media\Images\pricing0.svg'/>
                  <h1>Intraday and F&O trades</h1> 
               
               <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

            </div>

            <div className='col-4 text-center' style={{padding:"20px"}}  >
                 <img src='Media\Images\pricing0.svg'/>
                  <h1>Free direct MF</h1> 
               
               <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

            </div>

          </div>


         
    </div>

     );
}

export default HeroPricing;