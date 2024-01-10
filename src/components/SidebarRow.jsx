import React from 'react'

export default function SidebarRow({title,Icon}) {
  return (
    <div className='sidebar_row'>
        <Icon className="sidebar_icon"/>
        <h2 className='sidebar_title'>{title}</h2>
    </div>
  )
}
