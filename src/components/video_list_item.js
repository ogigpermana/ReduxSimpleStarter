import React from 'react';
const VideolistItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <div className="single-right-grids">
            <div className="col-md-4 single-right-grid-left">
                <img onClick={() => onVideoSelect(video)}  src={imgUrl} style={sizeThumb}/> 
            </div>
            <div className="col-md-8 single-right-grid-right">
                <a onClick={() => onVideoSelect(video)}   className="title">{video.snippet.title.substring(MIN_LENGTH, MAX_LENGTH)}...</a>
            </div>
            <div className="clearfix"> </div>
        </div> 
            
);
};
const MAX_LENGTH = 20;
const MIN_LENGTH = 0;
const sizeThumb = {
    width: 98.97,
    height: 55.66,
};
export default VideolistItem;