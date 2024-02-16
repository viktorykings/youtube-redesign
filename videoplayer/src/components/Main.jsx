import { VideoPlayer } from "../components/VideoPlayer";
import { Description } from "../components/Description";
import '../styles/main.scss';
import { NextVideos } from "./NextVideos";

export const Main = () => {
  return (
    <section className="main-container">
      <div className="main">
        <VideoPlayer />
        <Description />
      </div>
      <NextVideos />
    </section>
  );
};
