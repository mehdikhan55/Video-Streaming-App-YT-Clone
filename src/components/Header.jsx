import React from 'react'
import { MenuOutlined,SearchOutlined, VideoCallOutlined,AppsOutlined,NotificationsOutlined, MicOutlined, Mic} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import {logo} from '../assets/index.js'


export default function Header() {
    return (
        <header className='header'>
            <div className="header-left">
                <MenuOutlined className='menu_icon icon' />
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className="header_middle">
            <div className="search_input">
                <input type="text" placeholder="Search" />
                <SearchOutlined className='icon search_icon' />
            </div>
            <MicOutlined className='icon' />
            </div>
            
            <div className="header_icons">
                <VideoCallOutlined className='icon' />
                <NotificationsOutlined className='icon'/>
                <Avatar />
            </div>
        </header>


    )
}
