import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import './navbar.css';
import  logo  from '../../assets/a.jpeg';

const Menu = () => (
    <>
                <p><a href='#home'>Home</a></p>
                <p><a href='#project'>projects</a></p>
                <p><a href='#about'>About Us</a></p>
                <p><a href='#idea'>ideas</a></p>
    </>
)
const Navbar = () => {
    const [togglemenu , setTogglemenu] = useState(false);
    
    return(
        <>
            <div className='ss__navbar'>
                <div className='ss__navbar-tag'>
                <img src={logo} alt='logo'/>
                <Menu/> 
                </div>
                <div className='ss__navbar-sign'>
                    <p>sign in</p>
                    <button type='button'>sign up</button>
                </div>
                <div className='ss_navbar-smallscreen' >
                        < CgMenuGridO  className='ss_navbar-icon' onClick={() => setTogglemenu(true)}/>
                    { togglemenu && 
                                <div className='ss_navbar-smallscreen-over flex__center slide_bottom'  >
                                    <IoMdClose className='ss_navbar-iconclose' onClick={() => setTogglemenu(false)}/>
                                <div className='ss_navbar-smalllink'>      
                                    <p><a href='#home'>Home</a></p>
                                    <p><a href='#project'>projects</a></p>
                                    <p><a href='#about'>About Us</a></p>
                                    <p><a href='#idea'>ideas</a></p>
                                    <div className='ss__navbar-sign-small'>
                                        <p>sign in</p>
                                        <button type='button'>sign up</button>
                                    </div>
                                </div>
                                </div> 
                    }
                </div>
            </div>
        </>
    )

}

export default Navbar;