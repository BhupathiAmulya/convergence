import React from 'react'
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarb.css'

function Navbarb() {
  return (
    <div>
   <div>
       <Navbar >
      
          <Navbar.Brand href="#home">
           <img className="image mx-3" src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674060410/CONV_Logo_2_rbvzbq.png" alt="" width="90px" height="60px"></img>
          </Navbar.Brand>
          
          <Nav className="ms-auto gap-4 mx-4">
            <NavLink to="/Home" className=' links fs-5 ' >Home</NavLink>
            <NavLink to="/Hackathons" className=' links fs-5' >Hackathons</NavLink>
            <NavLink to="/Contests" className=' links fs-5' >Contests</NavLink>
            <NavLink to="/Workshops" className='  links fs-5' >Workshops</NavLink>
            <NavLink to="/Robotics" className='  links fs-5' >Robotics</NavLink>
           
            <NavLink to="/OtherEvents" className='  links fs-5' >OtherEvents</NavLink>

            
         
            
          </Nav>
       
      </Navbar>
    </div>
 </div>
  )
}

export default Navbarb;