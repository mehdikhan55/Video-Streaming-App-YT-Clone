import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function RecommendationCard(props) {
    const { image, title, channel, views, timestamp, channelImage } = props;
  return (
    <Link to="/video/test" style={{textDecoration:"none", color:"black"}}>
        <div className='recommendationCard'>
            <img src={image} alt="" className='recom_thumbnail_img'/>
            <div className="recom_info">
                <div className="recom_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
        </Link>
  )
}
