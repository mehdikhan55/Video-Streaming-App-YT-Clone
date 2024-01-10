import React from 'react'

export default function VideoRow(props) {

    const {views,subs,description,timestamp,channel,title,image }=props;

  return (
    <div className='videoRow'>
      <img src={image}alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className='videoRow_headline'>
            <span className='videoRow_subs'>

            {channel} • <span className='videoRow_subsNumber'>{subs}  </span>Subcribers 
            </span>
            
            {views} views • {timestamp}
            
        </p>
        <p className='videoRow_description'>{description}</p>
      </div>
    </div>
  )
}
