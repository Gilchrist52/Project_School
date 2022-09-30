import './styles/style_dashboad.css';
import Header from './Header';
import Menu from './Menu';
import { NavLink } from 'react-router-dom'
import Switch from 'react-js-switch';
import React, { useState } from "react";

function Dashboard() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = useState(true);
  const [isSwitchOn2, setIsSwitchOn2] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  const switch_onChange_handle1 = () => {
    setIsSwitchOn1(!isSwitchOn1);
  };
  const switch_onChange_handle2 = () => {
    setIsSwitchOn2(!isSwitchOn2);
  };
  return (
    <div className="dash">
      <div>
        <Header />
      </div>
      <div className="dash_row">
        <div className="dashboard_row_memu">
          <Menu />
        </div>
        <div className="dashboard_row_body">
          <div className="container_body">
            {/* ******Menu_list_Start****** */}
            <div className="container_body_menu">
              <div className="body_menu">
                <NavLink className="container_menu_list_active" to='/Generale'>
                  <p className='menu_list_active'>Generale</p>
                </NavLink>
                <NavLink className="container_menu_list" to='/Theme'>
                  <p className='menu_list'>Theme</p>
                </NavLink>
                <NavLink className="container_menu_list" to='/Course'>
                  <p className='menu_list'>Course</p>
                </NavLink>
                <NavLink className="container_menu_list_location" to='/Location'>
                  <p className='menu_list'>Location</p>
                </NavLink>
              </div>
              <NavLink className="body_menu_edit" to='/Edit'>
                <p className='header_edit'>Save</p>
              </NavLink>
            </div>
            {/* ******Menu_list_End****** */}

            {/* **********Basic_Information_Start**************** */}
            <div className="container_basic_info">
              <div className="container_basic_inf_left">
                <h3 className="basic_info_header_title">Basic Information</h3>
                <NavLink className='container_edit' to='/Edit'>
                  <p className='edit'>Edit</p>
                </NavLink>
              </div>
              <div className='container_basic_info_right'>
                <div className='container_info'>
                  <div className='info_permission_left'>
                    <div className='info'>
                      <p className='part_info_type'>Organization name</p>
                      <p className='part_info'>Eneam</p>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Platform name</p>
                      <p className='part_info'>Enamtutor</p>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Platform link</p>
                      <p className='part_info'>eneam.class.com</p>
                    </div>
                  </div>
                  <div className='info_permision_right'>
                    <div className='info'>
                      <p className='part_info_type'>Primary email</p>
                      <p className='part_info'>mainadmin@enaem.edu</p>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Primary phone number</p>
                      <p className='part_info'>+229(323)324-2424</p>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Address</p>
                      <p className='part_info'>Cotonou,Benin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* **********Basic_Information_End**************** */}

            {/* **********Permissions_Start**************** */}
            <div className="container_basic_inf_Permission">
              <div className="container_basic_inf_left">
                <h3 className="basic_info_header_title">Permission</h3>
                <NavLink className='container_edit' to='/Edit'>
                  <p className='edit'>Edit</p>
                </NavLink>
              </div>
              <div className='container_basic_info_right'>
                <div className='container_info'>
                  <div className='info_permission_left'>
                    <div className='info'>
                      <p className='part_info_type'>Status</p>
                      <div className='part_info_permissions'>
                        <p className='part_info'>Authorized</p>
                        <input type="checkbox" className="checkbox" checked />
                      </div>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Platform under construction</p>
                      <div className='part_info_permissions'>
                        <small className='part_info_small'>
                          *Allow only admins to access the platform
                        </small>
                        <Switch
                          size={50}
                          value={isSwitchOn}
                          onChange={switch_onChange_handle}
                          backgroundColor={{ on: '#60D280', off: '#C2C9D1' }}
                          borderColor={{ on: '#60D280', off: '#C2C9D1' }}
                        />
                      </div>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Under construction message</p>
                      <small className='part_info'>
                        The platform is under maintenance please come back on Monday 12pm
                      </small>
                    </div>
                  </div>
                  <div className='info_permision_right'>
                    <div className='info'>
                      <p className='part_info_type'>Student portal</p>
                      <div className='part_info_permissions'>
                        <small className='part_info_checked'>
                          *Allow students access to the tutoring portal
                        </small>
                        <Switch
                          size={50}
                          value={isSwitchOn1}
                          onChange={switch_onChange_handle1}
                          backgroundColor={{ on: '#60D280', off: '#C2C9D1' }}
                          borderColor={{ on: '#60D280', off: '#C2C9D1' }}
                        />
                      </div>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Tutor portal</p>
                      <div className='part_info_permissions'>
                        <small className='part_info_checked'>
                          *Allow tutors access to the tutoring portal
                        </small>
                        <Switch
                          size={50}
                          value={isSwitchOn2}
                          onChange={switch_onChange_handle2}
                          backgroundColor={{ on: '#60D280', off: '#C2C9D1' }}
                          borderColor={{ on: '#60D280', off: '#C2C9D1' }}
                        />
                      </div>
                    </div>
                    <div className='info'>
                      <p className='part_info_type'>Organization type</p>
                      <p className='part_info'>School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* **********Permissions_End**************** */}
            <div className="end">
              <NavLink className="body_menu_edit" to='/Save'>
                <p className='header_edit'>Save</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
