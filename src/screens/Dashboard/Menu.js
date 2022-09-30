import React from 'react';
import { NavLink } from 'react-router-dom'
import { AiFillHome, AiTwotoneSetting, AiTwotonePieChart } from "react-icons/ai";
import { FaUsers, FaUserPlus, FaWallet } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import './styles/style_menu.css'

function Menu() {
    return (
        <div className='menu_global'>
            <label for="toggle">☰</label>
            <input type="checkbox" className="toggle" id="toggle" />
            <div className='container_menu'>
                <div className='container_menu_principal'>
                    <NavLink className='container_button' to='/Home'>
                        <p className='container_icon'>
                            <AiFillHome color='black' />
                        </p>
                        <p className='container_text_menu'>
                            Home
                        </p>
                    </NavLink>
                    <NavLink className='container_button' to='/Members'>
                        <div className='container_icon'>
                            <FaUsers color='black' />
                        </div>
                        <p className='container_text_menu'>
                            Members
                            <div className='alert'>
                                <alert className='alert_badge'>1</alert>
                            </div>
                        </p>
                    </NavLink>
                    <NavLink className='container_button' to='/Requests'>
                        <div className='container_icon'>
                            <FaUserPlus color='black' />
                        </div>
                        <p className='container_text_menu'>
                            Requests
                        </p>
                    </NavLink>
                    <NavLink className='container_button' to='/Analytics'>
                        <div className='container_icon'>
                            <AiTwotonePieChart color='black' />
                        </div>
                        <p className='container_text_menu'>
                            Analytics
                        </p>
                    </NavLink>
                    <NavLink className='container_button' to='/Billing'>
                        <div className='container_icon'>
                            <FaWallet color='black' />
                        </div>
                        <p className='container_text_menu'>
                            Billing
                        </p>
                    </NavLink>
                    <NavLink className='container_button_active' to='/Dashboard'>
                        <div className='container_icon'>
                            <AiTwotoneSetting color='#FFFFFF' />
                        </div>
                        <p className='container_text_menu'>
                            Setting
                        </p>
                    </NavLink>
                </div>
                <div className='container_menu_out'>
                    <NavLink className='container_main_portal' to='/'>
                        <div className='container_icon'>
                            <BiLogOut color='black' />
                        </div>
                        <p className='container_text_menu'>
                            Exit to main portal
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Menu;