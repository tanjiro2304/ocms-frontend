import React from 'react'
import { useState } from 'react';
import '../css/menubar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const Menubar = () => {

    const [activeMenuItem, setActiveMenuItem] = useState('Home');


    // const handleMenuItemClick = (menuItem) => {
    //     setActiveMenuItem(menuItem);
    //     if (menuItem === 'Home') {
    //         navigate('/',{replace:true})
    //     }
    //     else if (menuItem === 'Contact') {
    //         navigate('/contactus',{replace:true})
    //     }
    //     else if (menuItem === 'About') {
    //         navigate('/about',{replace:true})
    //     }
    // };


    const token = localStorage.getItem('token')

    // const onLoginClick = () => {
    //     navigate('/login',{replace:true})
    // }

    const onLogoutClick = () => {
        localStorage.clear();
    }

    const option = () => {
        console.log(token);
        if (token === null || token === undefined) {
            return (
                <li 
                    className='login'
                // onClick={() => handleMenuItemClick('Contact')}
                >
                    
                </li>
            )
        } else {
            return (
                <li
                    className='logout'
                    onClick={onLogoutClick}
                >
                     Logout
                </li>
            )
        }
    }






    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul className="menu-bar">
                        <li
                            className={activeMenuItem === 'Home' ? 'active' : ''}
                        // onClick={() => handleMenuItemClick('Home')}
                        >
                            Home
                        </li>
                        <li
                            className={activeMenuItem === 'About' ? 'active' : ''}
                        // onClick={() => handleMenuItemClick('About')}
                        >
                            About
                        </li>
                        {option()}
                    </ul>
                </nav>


            </header>


        </div>
    )
}

export default Menubar