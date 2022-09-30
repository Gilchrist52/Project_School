import React from 'react';
import layer from '../../assets/picture/Layer.png'
import picture1 from '../../assets/picture/picture1.png'
import picture2 from '../../assets/picture/component.png'
import '../../App.css';
import { AiOutlineDown } from "react-icons/ai";
import { NavLink } from 'react-router-dom'

function Homescreen() {
  return (
    <div className="App">
      {/* *********Header_Start*************** */}
      <div className="container_header">
        <div className="header_icon">
          <img src={layer} alt="logo" />
        </div>
        <div className="container_profil">
          <div className="dropdown">
            <AiOutlineDown color='#FFFFFF' style={{ fontSize: 20 }} />
          </div>
          <div className="profil">
            <img src={picture1} className="logo_profil" alt="logo" />
          </div>
        </div>
      </div>
      {/* *********Header_End*************** */}

      {/* *********Time_Start*************** */}
      <div className='container_time'>
        <div className='container_time_txt'>
          <p className='time_txt'>9:03</p>
        </div>
        <div className='container_time_morning'>
          <p className='time__morning_txt'>Good morning, Alex</p>
        </div>
      </div>
      {/* *********Time_End*************** */}

      {/* *********Container_area_Button_Start*************** */}
      <div className='container_area'>
        <div className='container_area_btn'>
          <div className='container_img'>
            <img src={picture2} style={{ marginTop: 40 }} alt="logo" />
          </div>
          <NavLink className='container_btn' to='/Dashboard'>
            <p className='btn_txt'>Go to dashboard</p>
          </NavLink>
        </div>
      </div>
      {/* *********Container_Button_End*************** */}

      {/* *********Number_person_online___Start*************** */}
      <div className='container_number'>
        <div className='container_number_display'>
          <div className='container_number_person'>
            <p className='number_person_txt'>03</p>
            <p className='type_person'>Student(s)</p>
            <p className='status_person'>Waiting</p>
          </div>
          <div className='container_number_person'>
            <p className='number_person_txt'>06</p>
            <p className='type_person'>Tutor(s)</p>
            <p className='status_person'>Online</p>
          </div>
        </div>
      </div>
      {/* *********Number_person_online___End*************** */}

    </div>
  );
}

export default Homescreen;