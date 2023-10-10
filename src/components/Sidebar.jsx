import React from 'react'
import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsGrid3X2GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'
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
                <a href=''>
                    <BsCart3 className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsGrid1X2Fill className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsFillArchiveFill className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsGrid3X2GapFill className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsPeopleFill className='icon'/>Dashboard
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar