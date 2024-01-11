import { Avatar } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function VideoCard(props) {

    const { image, title, channel, views, timestamp, channelImage } = props;

    return (
        <Link to="/video/test" style={{textDecoration:"none", color:"black"}}>
        <div className='videoCard'>
            <img src={image} alt="" className='thumbnail_img'/>
            <div className="video_info">
                <Avatar className='videoCard_avatar' alt={channel} src={channelImage} />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}
