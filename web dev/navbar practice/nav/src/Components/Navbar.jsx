
import { Link } from "react-router-dom"
import logo from "../assets/dslogo.jpg"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
        const[extendNav,setExtendNav] =useState(false);

    return (
    <div className="h-12 w-full bg-black flex flex-col text-white">
        <div className="inner h-12 w-full flex">
            <div className="left basis-9/12 flex items-center pl-10">
                <Link to="/" className="text-xl mx-4 hidden md:block">Home</Link>
                <Link to="/Products" className="text-xl mx-4 hidden md:block">Products</Link>
                <Link to="/Contact" className="text-xl mx-4 hidden md:block">Contact Us</Link>
                <Link to="/About" className="text-xl mx-4 hidden md:block">About Us</Link>
               <div className="md:hidden " onClick={()=>{
                setExtendNav(!extendNav);
              }}>

              {extendNav ? <IoMdClose/> :<FaBars />}
               </div>
            </div>
            <div className="right flex basis-3/12 justify-end pr-10 items-center">
                <img src={logo} className="h-12 w-6"/>
                <h1 className="text-xl mx-1 ">IVYANSHU</h1>
            </div>
        </div>
        { extendNav &&(
        <div className="extend md:hidden flex flex-col items-center bg-black ">
                <Link to="/" className="text-xl mx-4 my-3 mt-6">Home</Link>
                <Link to="/Products" className="text-xl mx-4 my-3 ">Products</Link>
                <Link to="/Contact" className="text-xl mx-4 my-3">Contact Us</Link>
                <Link to="/About" className="text-xl mx-4 my-3 mb-6">About Us</Link>
        </div>)
}
    </div>
  )
}

export default Navbar
