import ReactPlayer from 'react-player'

import './index.css'

const videoUrl = 'https://www.youtube.com/watch?v=zuVV9Y55gvc'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url={videoUrl} />
    </div>
  </div>
)

export default VideoPlayer
