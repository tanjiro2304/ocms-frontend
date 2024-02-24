import React from 'react'
import { useState } from 'react';
import '../css/menubar.css';
import { useNavigate } from 'react-router-dom';
const Menubar = () => {

    const [activeMenuItem, setActiveMenuItem] = useState('Home');

    const navigate = useNavigate();

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
        if (menuItem === 'Home') {
            navigate('/')
        }
        else if (menuItem === 'Contact') {
            navigate('/contactus')
        }
        else if (menuItem === 'About') {
            navigate('/about')
        }
    };


    const onHomeClick = () => {
        navigate('/home')
    }


    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul className="menu-bar">
                        <li
                            className={activeMenuItem === 'Home' ? 'active' : ''}
                            onClick={() => handleMenuItemClick('Home')}
                        >
                            Home
                        </li>
                        <li
                            className={activeMenuItem === 'About' ? 'active' : ''}
                            onClick={() => handleMenuItemClick('About')}
                        >
                            About
                        </li>
                        <li
                            className={activeMenuItem === 'Contact' ? 'active' : ''}
                            onClick={() => handleMenuItemClick('Contact')}
                        >
                            Contact
                        </li>
                    </ul>
                </nav>
            </header>


        </div>
    )
}

export default Menubar