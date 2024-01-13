import React from 'react'
import SidebarRow from './SidebarRow'
import { Home, WhatshotSharp, AccountBoxOutlined,HistorySharp,SlideshowOutlined,QueryBuilder,MusicNote,SportsEsports,Newspaper,EmojiEvents,AccountCircleOutlined , SettingsBrightnessOutlined} from '@mui/icons-material'
import { SubscriptionsOutlined } from '@mui/icons-material'
import { useTheme } from '../utils/ThemeContext'


export default function Sidebar() {

  const {theme, toggleTheme} = useTheme();

  return (
    <aside className='sidebar'>
        <SidebarRow Icon={Home} title="Home"/>
        <SidebarRow Icon={WhatshotSharp} title="Trending"/>
        <SidebarRow Icon={SubscriptionsOutlined} title="Subscriptions"/>
        <hr />
        <SidebarRow Icon={AccountBoxOutlined} title="Your Channel"/>
        <SidebarRow Icon={HistorySharp} title="History"/>
        <SidebarRow Icon={SlideshowOutlined} title="Your Videos"/>
        <SidebarRow Icon={QueryBuilder} title="Watch Later"/>
        <div onClick={toggleTheme}>
        <SidebarRow Icon={SettingsBrightnessOutlined} title={`${theme==='light'?'Dark':'Light'} mode`}/>
        </div>

        <div className="loginBtnContSide">
          <p>Sign in to like videos, comment,<br/> and subscribe.</p>
          <button className="loginBtnSide"><AccountCircleOutlined className='loginBtnAccountIcon'/><span>Sign in</span></button>
        </div>

        <hr />
        <h3 className='sidebar_main_title'>Explore</h3>
        <SidebarRow Icon={MusicNote} title="Music"/>
        <SidebarRow Icon={SportsEsports} title="Gaming"/>
        <SidebarRow Icon={Newspaper} title="News"/>
        <SidebarRow Icon={EmojiEvents} title="Sports"/>
        <SidebarRow Icon={SportsEsports} title="Gaming"/>
        <SidebarRow Icon={Newspaper} title="News"/>
        <SidebarRow Icon={EmojiEvents} title="Sports"/>
        <SidebarRow Icon={SportsEsports} title="Gaming"/>
        <SidebarRow Icon={Newspaper} title="News"/>
        <SidebarRow Icon={EmojiEvents} title="Sports"/>
        <SidebarRow Icon={SportsEsports} title="Gaming"/>
        <SidebarRow Icon={Newspaper} title="News"/>
        <SidebarRow Icon={EmojiEvents} title="Sports"/>
        <SidebarRow Icon={SportsEsports} title="Gaming"/>
        <SidebarRow Icon={Newspaper} title="News"/>
        <SidebarRow Icon={EmojiEvents} title="Sports"/>
    </aside>
  )
}
