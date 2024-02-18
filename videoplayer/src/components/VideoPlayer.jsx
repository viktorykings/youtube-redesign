import icon1 from "../assets/videoplayer/like.svg";
import icon2 from "../assets/videoplayer/dislike.svg";
import icon3 from "../assets/videoplayer/share.svg";
import icon4 from "../assets/videoplayer/More.svg";
import video from "../assets/videoplayer/Cover.png";
import pause from "../assets/videoplayer/pause.svg";
import next from "../assets/videoplayer/next.svg";
import volume from "../assets/videoplayer/volume.svg";
import subtitles from "../assets/videoplayer/subtitles.svg";
import settings from "../assets/videoplayer/settings.svg";
import size from "../assets/videoplayer/size.svg";
import fullScreen from "../assets/videoplayer/fullScreen.svg";

import "../styles/videoplayer.scss";

export const VideoPlayer = () => {
  return (
    <div className="video-player">
      <div className="video-container">
        <img src={video} alt="" />
        <div className="video-controls">
          <div className="times">
            <p>1:32</p>
            <p>19:00</p>
          </div>
          <div className="progress-bar">
          </div>
          <div className="controls">
            <div className="left-controls">
              <button>
                <img src={pause} alt="" />
              </button>
              <button>
                <img src={next} alt="" />
              </button>
              <button>
                <img src={volume} alt="" />
              </button>
            </div>
            <div className="right-controls">
              <button>
                <img src={subtitles} alt="" />
              </button>
              <button>
                <img src={settings} alt="" />
              </button>
              <button>
                <img src={size} alt="" />
              </button>
              <button>
                <img src={fullScreen} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="title">Dude You Re Getting A Telescope</p>
      <div className="info">
        <p className="subtitle">123k views</p>
        <div className="btns">
          <button>
            <img src={icon1} alt="" />
            123k
          </button>
          <button>
            <img src={icon2} alt="" />
            435k
          </button>
          <button>
            <img src={icon3} alt="" />
            Share
          </button>
          <button>
            <img src={icon4} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
