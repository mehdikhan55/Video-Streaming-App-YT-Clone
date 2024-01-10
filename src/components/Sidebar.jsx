import React from 'react'
import SidebarRow from './SidebarRow'
import { Home, WhatshotSharp, AccountBoxOutlined,HistorySharp,SlideshowOutlined,QueryBuilder,MusicNote,SportsEsports,Newspaper,EmojiEvents } from '@mui/icons-material'
import { SubscriptionsOutlined } from '@mui/icons-material'


export default function Sidebar() {
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
