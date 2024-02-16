import { navLinks } from "../data/data";
import { LinkItem } from "./footer/LinkItem";
import '../styles/footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          {navLinks.map((el) => (
            <LinkItem
              title={el.title}
              img={el.img}
              className={el.className}
              key={el.id}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
};
