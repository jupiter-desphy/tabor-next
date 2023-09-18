'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { NavLink } from 'react-router-dom';
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
                            <Link href={"/"} onClick={() => setShowLinks(false)}>
                                HOME
                            </Link>
                        </li>
                        <li className='shown'>
                            <a href='https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland' target='_blank' rel='noReferrer' >
                                BOOK
                            </a>
                        </li>
                        <li>
                            <Link href='../pages/about' onClick={toggleNav}>
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <a href='https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland' target='_blank' rel='noReferrer' >
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <Link href='../pages/reviews' onClick={() => setShowLinks(false)}>
                                REVIEWS
                            </Link>
                        </li>
                    </ul>
                </nav>


                <Link href={"/"}>
                    <h4 className='logo'>
                        <Image 
                            src={logo}
                            alt='Tabor Logo'
                            width={4319}
                            height={1695}
                            placeholder='blur'
                            style={{
                                width: '6em',
                                height: '2.35em'
                            }}
                        />
                        {/* <img src={logo} alt='Tabor Logo' height='40em' /> */}
                        <div>
                            BARBER SHOP
                        </div>
                    </h4>
                </Link>



                <button onClick={toggleNav} className='mobile-nav-toggle' aria-controls='primary-navigation' data-visible="false" aria-expanded={showLinks} >
                    <Hamburger toggled={showLinks} size={26} color="#141414"  />
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
