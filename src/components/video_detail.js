import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="col-sm-8 single-left">
            <div className="song">
                <div className="song-info">
                    <h3>{ video.snippet.title }</h3>
                </div>
                <div className="video-grid">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
            </div>
            <div className="song-grid-right">
                <div className="share">
                    <h5>Share this</h5>
                    <ul>
                    <li><a className="icon fb-icon">Facebook</a></li>
                    <li><a className="icon dribbble-icon">Dribbble</a></li>
                    <li><a className="icon twitter-icon">Twitter</a></li>
                    <li><a className="icon pinterest-icon">Pinterest</a></li>
                    <li><a className="icon whatsapp-icon">Whatsapp</a></li>
                    <li><a className="icon like">Like</a></li>
                    <li><a className="icon comment-icon">Comments</a></li>
                    <li className="view">200 Views</li>
                    </ul>
                </div>
            </div>
            <div className="clearfix"> </div>
            <div className="published">
                { video.snippet.description }
            </div>
        </div>          
    );
}

export default VideoDetail;