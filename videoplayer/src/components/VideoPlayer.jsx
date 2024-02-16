import icon1 from '../assets/videoplayer/like.svg';
import icon2 from '../assets/videoplayer/dislike.svg';
import icon3 from '../assets/videoplayer/share.svg';
import icon4 from '../assets/videoplayer/More.svg';
import video from '../assets/videoplayer/Cover.png';
import '../styles/videoplayer.scss'

export const VideoPlayer = () => {
  return (
    <div className='video-player'>
      <img src={video} alt="" />
      <p className="title">Dude You Re Getting A Telescope</p>
      <div className="info">
        <p className="subtitle">123k views</p>
        <div className="btns">
          <button><img src={icon1} alt="" />123k</button>
          <button><img src={icon2} alt="" />435k</button>
          <button><img src={icon3} alt="" />Share</button>
          <button><img src={icon4} alt="" /></button>
        </div>
      </div>
    </div>
  );
};
