import { VideoPlayer } from "../components/VideoPlayer";
import { Description } from "../components/Description";
import '../styles/main.scss';

export const Main = () => {
  return (
    <section className="main-container">
      <div className="main">
        <VideoPlayer />
        <Description />
      </div>
      <aside>

      </aside>
    </section>
  );
};
