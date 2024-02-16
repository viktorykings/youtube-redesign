import { Item } from "./nextVideos/Item";
import { videos } from "../data/data";
import "../styles/nextVideos.scss";

export const NextVideos = () => {
  return (
    <aside className="next-videos">
      <div className="heading">
        <span>Next</span>
        <div className="label">
          <span>Autoplay</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {videos.map((el) => (
        <Item
          key={el.id}
          title={el.title}
          author={el.author}
          views={el.views}
          img={el.img}
        />
      ))}
    </aside>
  );
};
