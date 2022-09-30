import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import picture2 from '../../assets/picture/picture2.png'
import '../../App.css';
import '../Dashboard/styles/styleHeader.css'

function Header() {
    return (
        <div>
            <div className="dashboard_header_container">
                <div className="dashboard_header_left">
                    <div className="container_selectList">
                        <div className="icon_location">
                            <TiLocation color='#130F26' style={{ fontSize: 20 }} />
                        </div>
                        <select name="cars" className='select_list' form="carform">
                            <option value="Indianapolis">Indianapolis</option>
                            <option value="Indianapolis">Indianapolis</option>
                            <option value="Indianapolis">Indianapolis</option>
                            <option value="Indianapolis">Indianapolis</option>
                        </select>
                    </div>
                </div>
                <div className="dashboard_header_right">
                    <div className="container_profil">
                        <div className="dropdown">
                            <AiOutlineDown color='black' style={{ fontSize: 20 }} />
                        </div>
                        <div className="profil">
                            <img src={picture2} className="logo_profil" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;