import React from 'react';


function Leftsection({Image,Title,Para}) {
    return ( 

        <div className='container'style={{marginTop:"200px"}} >

            <div className='row '>

                <div className='col-6'>
                     <img src={Image}/>
                </div>

                <div className='col-1'>

                </div>

                 <div className='col-5 text-center ' style={{ paddingTop:"130px"}}>
                       
                       <h2>{Title}</h2>

                       <p>{Para}</p>

                </div>

            </div>

        </div>
     );
}

export default Leftsection;