import React from 'react'
import { TuneOutlined } from '@mui/icons-material'
import ChannelRow from '../components/ChannelRow'
import VideoRow from '../components/VideoRow'

export default function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage_filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
            image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            channel="Kill Coding"
            verified
            subs="660K"
            noOfVideos={382}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
            />
            <hr />


            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a FREE one hour training... check this out!"
            timestamp="59 seconds ago"
            channel="Kill Coding"
            title="🔴 ULTIMATE Coding Challenge | React JS | HTML | CSS | React JS | HTML | CSS"
            image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a FREE one hour training... check this out!"
            timestamp="59 seconds ago"
            channel="Kill Coding"
            title="🔴 ULTIMATE Coding Challenge | React JS | HTML | CSS | React JS | HTML | CSS"
            image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a FREE one hour training... check this out!"
            timestamp="59 seconds ago"
            channel="Kill Coding"
            title="🔴 ULTIMATE Coding Challenge | React JS | HTML | CSS | React JS | HTML | CSS"
            image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a FREE one hour training... check this out!"
            timestamp="59 seconds ago"
            channel="Kill Coding"
            title="🔴 ULTIMATE Coding Challenge | React JS | HTML | CSS | React JS | HTML | CSS"
            image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a FREE one hour training... check this out!"
            timestamp="59 seconds ago"
            channel="Kill Coding"
            title="🔴 ULTIMATE Coding Challenge | React JS | HTML | CSS | React JS | HTML | CSS"
            image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />
            <VideoRow
            views="1.4M"
            subs="659K"
            description="Do you want a FREE one hour training... check this out!"
            timestamp="59 seconds ago"
            channel="Kill Coding"
            title="🔴 ULTIMATE Coding Challenge | React JS | HTML | CSS | React JS | HTML | CSS"
            image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
            />

        </div>
    )
}
