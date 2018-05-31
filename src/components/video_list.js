import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) =>{
        return (
            <VideoListItem
            onVideoSelect={props.onVideoSelect} 
            key={video.etag} 
            video={video}/>
        );
    });

    return (
        <div className="col-md-4 single-right">
        <h3>Up Next</h3>
            <div className="single-grid-right">
                {videoItems}
            </div>
        </div>
    );
}

export default VideoList;