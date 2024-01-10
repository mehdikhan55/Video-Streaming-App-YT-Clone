import { Avatar } from '@mui/material';
import React from 'react'
import { VerifiedOutlined } from '@mui/icons-material';

export default function ChannelRow(props) {

    const {image, channel, verified, subs, noOfVideos, description} = props;

  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo' alt={channel} src={image} />
        <div className="channelRow_text">
            <h4>{channel} {verified && <VerifiedOutlined/>}</h4>
            <p>
                {subs} subscribers • {noOfVideos} videos
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}
