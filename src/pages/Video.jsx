import React from 'react'
import { ThumbUpOutlined, ThumbDownOffAltOutlined, ReplyOutlined, AddTaskOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import Comments from '../components/Comments'
import RecommendationCard from '../components/RecommendationCard'

export default function Video() {
  return (
    <div className='video_page_container'>

      <div className="video_page_content">
        <div className="video_wrapper">
          <iframe width="100%" height="490" src="https://www.youtube.com/embed/Znd64YGsLHU?si=oqVwesqPbZvK27z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h1 className="video_title">Survival Craft 2 Crazy Experience!!</h1>
        <div className="video_details">
          <span className='video_info'>8,948,154 views • May 05, 2023</span>
          <div className="btns">
            <div className="btn"><ThumbUpOutlined />123</div>
            <div className="btn"><ThumbDownOffAltOutlined />Dislike</div>
            <div className="btn"><ReplyOutlined />Share</div>
            <div className="btn"><AddTaskOutlined />Save</div>
          </div>
        </div>
        <hr />
        <div className="video_page_channel">
          <div className="channel_info">
            <Avatar src="https://www.youtube.com/embed/Znd64YGsLHU?si=oqVwesqPbZvK27z0" alt="channel" />
            <div className="channel_details">
              <span className="channel_name">Kill Coding</span>
              <span className="channel_counter">249K subscribers</span>
              <p className="vid_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, autem fuga eligendi quia dicta magnam perferendis id, neque doloremque officia reprehenderit, tempore itaque.
              </p>
            </div>
          </div>
          <button className="subscribe">Subscribe</button>
        </div>
        <hr />
        <Comments/>
      </div>


      <div className="recommendations">

        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <RecommendationCard
        title="ULTIMATE Survival 30 Days!" 
        channel="Sonny Sangha" 
        views="2.3M Views" 
        timestamp="3 days ago" 
        channelImage="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


         </div>
    </div>
  )
}
