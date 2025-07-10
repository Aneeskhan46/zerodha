import React from 'react';
//link importing 


import { NavLink} from 'react-router-dom';



  function Navbar() {
    return ( 
   
     <nav class="navbar navbar-expand-lg border-bottom sticky-top bg-white " style={{height:"75px"}}  >
 
    <NavLink class="navbar" style={{marginLeft:"120px"}} to="/">
        <img src='Media\Images\logo.svg' style={{width:"150px"}}/>
    </NavLink>
   
    <div class="collapse navbar-collapse " id="navbarSupportedContent"  style={{  marginLeft:"200px" , display:"flex" , flexDirection:"row-reverse" , justifyContent:"space-around"}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item mr-5">
          <NavLink style={{textDecoration:"None" ,fontWeight:"bold" }} className={((e)=>{return e.isActive ? "blink" : ""})} class="nav-link active" aria-current="page" to="/Signup">Sign Up</NavLink>
        </li>

        <li class="nav-item mr-5">
          <NavLink  style={{textDecoration:"None" ,fontWeight:"bold"}} className={((e)=>{return e.isActive ? "blink" : ""})} class="nav-link active" aria-current="page" to="/About">About</NavLink>
        </li>

        <li class="nav-item mr-5">
          <NavLink style={{textDecoration:"None" ,fontWeight:"bold"}} className={((e)=>{return e.isActive ? "blink" : ""})} class="nav-link active" aria-current="page" to="/Product">Product</NavLink>
        </li>

        <li class="nav-item mr-5">
          <NavLink style={{textDecoration:"None"  ,fontWeight:"bold"}} className={((e)=>{return e.isActive ? "blink" : ""})} class="nav-link active" aria-current="page" to="/Price">Pricing</NavLink>
        </li>

        <li class="nav-item mr-45">
          <NavLink  style={{textDecoration:"None" ,fontWeight:"bold"}} className={((e)=>{return e.isActive ? "blink" : ""})} class="nav-link active" aria-current="page" to="/Support">support</NavLink>
        </li>
       
      </ul>
     
    </div>
  
</nav>
);
  }
  
  export default Navbar;