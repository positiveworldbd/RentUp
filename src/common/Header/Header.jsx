import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../data/Nav.json';
<<<<<<< HEAD
import Logo from "../../assets/images/logo.png";
=======
import Logo from './Logo/Logo';
>>>>>>> alt-history

const Header = () => {

    const [navList, setNavList] = useState(false);

    function handleClick(){
        setNavList(!navList);
    }


  return (
    <>
        <header>
            <div className="container flex">
<<<<<<< HEAD
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
=======
                <Logo />
>>>>>>> alt-history
                <nav className="nav">
                    <ul className={navList ? "small" : "flex"}>
                        {Nav.map((list, index) =>(
                            <li key={index}>
                                <Link to={list.path}>{list.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="button flex">
                    <h4>
                        <span>2</span> My List
                    </h4>
                    <button className="btn">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign In
                    </button>
                </div>
                <div className="toggle" onClick={handleClick}>
                     {navList ? <i class="fa-solid fa-times"></i> : <i class="fa-solid fa-bars"></i>}
                </div>
            </div>
        </header>
    </>
  )
}

export default Header