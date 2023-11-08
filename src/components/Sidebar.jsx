import React from 'react'
import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsGrid3X2GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'

import { Link } from 'react-router-dom'

function Sidebar({opneSidebarToggle,OpenSideBar}) {
  return (
    <aside id='sidebar' className={opneSidebarToggle ? "sidebar-responsive":""}>
        <div className='sidebar-title' >
            <div className='sidebar-brand'>
                <BsCart3 className='icon'/>Admin Panel
            </div>
            <span className='icon close_icon' onClick={OpenSideBar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/" onClick={OpenSideBar}>
                    <BsCart3 className='icon'/><span>Dashboard</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/academic" onClick={OpenSideBar}>
                    <BsGrid1X2Fill className='icon'/><span>Academic</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/projects" onClick={OpenSideBar}>
                    <BsFillArchiveFill className='icon'/><span>Projects</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/skills" onClick={OpenSideBar}>
                    <BsGrid3X2GapFill className='icon'/><span>Skills Experience</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/learningTeck" onClick={OpenSideBar}>
                    <BsPeopleFill className='icon'/><span>Learning Tech</span>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar