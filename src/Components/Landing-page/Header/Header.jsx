import React from 'react';
import Appbar from '../Appbar/Appbar';
import "./Header.css"


function Header() {
    

    return (
        <div className='header'>
            <Appbar/>
            <div className='headerBody'>
                <h2>WhatsApp Business Blog</h2>
                <p>Get the latest news and more from WhatsApp Business.</p>
            </div>
        </div>
    )
}

export default Header;
