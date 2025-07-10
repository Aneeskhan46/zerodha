import React from "react";

import {NavLink} from "react-router-dom"

import { useState } from "react";

const Menu = () => {

  const [isprofile,setprofile] = useState(false)


  const handleprofile = (index)=>{
    setprofile(!isprofile)
  }

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus" >

        
        <ul>
          <li>
            <NavLink to="/" style={{textDecoration:"None"}} className={((e)=>{return e.isActive ? "menu_selected" : "menu"})}>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
             <NavLink to="/orders" style={{textDecoration:"None"}} className={((e)=>{return e.isActive ? "menu_selected" : "menu"})}>
               <p>Orders</p>
            </NavLink>
          </li>
          <li>
             <NavLink to="/holdings" style={{textDecoration:"None"}} className={((e)=>{return e.isActive ? "menu_selected" : "menu"})}>
                 <p>Holdings</p>
             </NavLink>
          </li>
          <li>
             <NavLink to="/positions" style={{textDecoration:"None"}} className={((e)=>{return e.isActive ? "menu_selected" : "menu"})}>
                <p>Positions</p>
              </NavLink>
          </li>
          <li>
             <NavLink to="/funds" style={{textDecoration:"None"}} className={((e)=>{return e.isActive ? "menu_selected" : "menu"})}>
                 <p>Funds</p>
            </NavLink>
          </li>
          <li>
             <NavLink to="/apps" style={{textDecoration:"None"}} className={((e)=>{return e.isActive ? "menu_selected" : "menu"})}>
                <p>Apps</p>
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
