import React, { useState, useEffect } from 'react';
import { CloseSharp } from 'react-ionicons';
import './NavBar.css';

const NavBar = () => {
    const [isHeaderActive, setIsHeaderActive] = useState(false)
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsHeaderActive(true);
            }
            else {
                setIsHeaderActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleNavbar = () => {
        setIsActive(!isActive);
    }

    const closeNavbar = () => {
        setIsActive(false);
    }

    return (
        <header className={isHeaderActive ? "header active" : "header"} >
            <div className='container'>
                <a className='logo' href='#'>
                    <img src="/images/logo.jpg" alt="logo" />
                </a>
                <nav className={isActive ? "navbar active" : "navbar"}>
                    <button className="nav-close-btn" aria-label="close menu" onClick={closeNavbar}>
                        <CloseSharp
                            color={'#ffffff'}
                            title={'Close'}
                            height="30px"
                            width="30px"
                            name="close-sharp"
                            aria-hidden="true"
                            role="img"
                            className="md hydrated"
                        />
                    </button>

                    <ul className="navbar-list">

                        <li>
                            <a href="#home" className="navbar-link" onClick={closeNavbar}>Home</a>
                        </li>

                        <li>
                            <a href="#about" className="navbar-link" onClick={closeNavbar}>About Us</a>
                        </li>

                        <li>
                            <a href="#class" className="navbar-link" onClick={closeNavbar}>Classes</a>
                        </li>

                        <li>
                            <a href="#blog" className="navbar-link" onClick={closeNavbar}>Blog</a>
                        </li>

                        <li>
                            <a href="#" className="navbar-link" onClick={closeNavbar}>Contact Us</a>
                        </li>

                    </ul>

                </nav>
                <a className='btn btn-secondary'>
                    Join Now
                </a>
                <button className="nav-open-btn" aria-label="open menu" onClick={toggleNavbar}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </header>
    );
}

export default NavBar;