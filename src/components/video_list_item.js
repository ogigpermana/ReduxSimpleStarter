import React from 'react';
import WordLimit from 'react-word-limit';

const VideolistItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <div onClick={() => onVideoSelect(video)} className="single-right-grids">
            <div className="col-md-4 single-right-grid-left">
                <img src={imgUrl} style={sizeThumb}/> 
            </div>
            <div className="col-md-8 single-right-grid-right">
                <a className="title"><WordLimit limit={15}> {video.snippet.title}</WordLimit></a>
            </div>
            <div className="clearfix"> </div>
        </div> 
            
);
}
const sizeThumb = {
    width: 98.97,
    height: 55.66,
}
export default VideolistItem;