import React, { useState } from 'react'
import { MenuOutlined,SearchOutlined, VideoCallOutlined,AppsOutlined,NotificationsOutlined, MicOutlined, Mic} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import {logo} from '../assets/index.js'
import { Link } from 'react-router-dom'


export default function Header() {

    const [inputSearch, setInputSearch] = useState('')


    return (
        <header className='header'>
            <div className="header-left">
                <MenuOutlined className='menu_icon icon' />
                <Link to="/">
                <img className='logo' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="header_middle">
            <div className="search_input">
                <input value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} type="text" placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                <SearchOutlined className='icon search_icon' />
                </Link>
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
