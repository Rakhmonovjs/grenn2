import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import search from '../../assets/search.png'
import Login from '../../assets/Login.png'
import korzina from '../../assets/korzina.png'

import "./Navbar.scss"

const Navbar = () => {

    const [activeTitle, setActiveTitle] = useState(1);


    const navBar = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Shop", path: "/shop" },
        { id: 3, title: "Plant Care", path: "/plant-care" },
        { id: 4, title: "Blogs", path: "/blogs" },
      ];
    

  return (
    <div className='navbar'>
        <nav>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div className="nav__link">
                <ul>
                    {navBar.map((item) => (
                    <li
                        className={`${activeTitle === item.id ? "activeTitle" : ""}`}
                        onClick={() => setActiveTitle(item.id)}
                    >
                        {item.title}
                    </li>
                    ))}
                </ul>
            </div>
            <div className="buttons">
                <img src={search} alt="" />
                <img src={korzina} alt="#" />
                <button>
                    <img src={Login} alt="" />
                    Login
                </button>
                        
             </div>
             
        </nav>
    </div>
  )
}

export default Navbar