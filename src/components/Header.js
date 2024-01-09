import React from 'react'
import { MenuOutlined,SearchOutlined, VideoCallOutlined,AppsOutlined,NotificationsOutlined} from '@mui/icons-material'
import { Avatar } from '@mui/material'


export default function Header() {
    return (
        <header className='header'>
            <div className="header-left">
                <MenuOutlined />
                <img src="../../public/5296522_youtube_youtube logo_icon.svg" alt="logo" />
            </div>
            <div className="header_input">
                <input type="text" placeholder="Search" />
                <SearchOutlined />
            </div>
            <div className="header_icons">
                <VideoCallOutlined />
                <AppsOutlined />
                <NotificationsOutlined />
                <Avatar/>
            </div>
        </header>
    )
}
