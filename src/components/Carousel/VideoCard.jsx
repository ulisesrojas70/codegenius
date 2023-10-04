import { useState } from "react";
import YouTube from 'react-youtube';

const VideoCard = ({ video }) => {

    const [showVideo, setShowVideo] = useState(false);

    const handleImageClick = () => {
        setShowVideo(true);
    };

    const opts = {
        height: '158',
        width: '280',
        playerVars: {
        },
    };

    return (
        <>
            {
                showVideo ? (
                    <YouTube
                        videoId={video.link_video}
                        opts={opts}
                        onReady={(event) => event.target.playVideo()}
                    />
                ) :
                (
                    <img
                        src={video.url_img_video}
                        onClick={handleImageClick}
                        style={{ cursor: 'pointer', width: '280px', height: '158', borderRadius: '10px' }}
                    />
                )
            }
        </>
    )
}

export default VideoCard;