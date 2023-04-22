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
                <div className='ss_navbar-smallscreen' onClick={() => setTogglemenu(true)}>
                        < CgMenuGridO  className='ss_navbar-icon'/>
                    { togglemenu && 
                                <div className='ss_navbar-smallscreen-over' onClick={() => setTogglemenu(false)}>
                                    <IoMdClose className='ss_navbar-iconclose'/>
                                    <Menu/>
                                    <div className='ss__navbar-sign-small'>
                                        <p>sign in</p>
                                        <button type='button'>sign up</button>
                                    </div>
                                </div> 
                    }
                </div>
            </div>
        </>
    )

}

export default Navbar;