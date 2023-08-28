'use client';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Pivot as Hamburger } from 'hamburger-react'
import logo from '../images/taboroutlineblack.png';
export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    const toggleNav = () => {
        setShowLinks(!showLinks);
    }

    return (
        <>
            <header className='primary-header'>

                <nav className='west-side'>
                    <ul id={showLinks ? "show-links" : ""} className='primary-navigation flex'>
                        <li className='shown'>
                            <NavLink to={"/"} onClick={() => setShowLinks(false)}>
                                HOME
                            </NavLink>
                        </li>
                        <li className='shown'>
                            <a href='https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland' target='_blank' rel='noReferrer' >
                                BOOK
                            </a>
                        </li>
                        <li>
                            <NavLink to={"/about"} onClick={toggleNav}>
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <a href='https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland' target='_blank' rel='noReferrer' >
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <NavLink to={"/reviews"} onClick={() => setShowLinks(false)}>
                                REVIEWS
                            </NavLink>
                        </li>
                    </ul>
                </nav>


                <NavLink to={"/"}>
                    <h4 className='logo'>
                        <img src={logo} alt='Tabor Logo' height='40em' />
                        <div>
                            BARBER SHOP
                        </div>
                    </h4>
                </NavLink>



                <button onClick={toggleNav} className='mobile-nav-toggle' aria-controls='primary-navigation' data-visible="false" aria-expanded={showLinks}>
                    <Hamburger toggled={showLinks} size={26} color="#141414" />
                    <span className='sr-only'>Menu</span>
                </button>

                <div className='east-side'>
                    <a href='https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland' id={'book'} target='_blank' rel='noReferrer' >
                        <strong>BOOK <span className='hidden'>APPOINTMENT</span></strong>
                    </a>
                </div>
                <div className={showLinks ? "blur" : ""}></div>
            </header>
            <div className='nav-margin'>
            </div>
        </>
    )
}
