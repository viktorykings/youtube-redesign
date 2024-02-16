import { HeaderBtns } from "./header/HeaderBtn";
import { Search } from "./header/Search";
import logo from '../assets/Black.svg';
import dots from '../assets/dots.png';
import '../styles/header.scss'


export const Header = () => {
  return (
    <header className="header">
      <div className="header-btns">
        <button className="burger-menu">
          <span></span>
        </button>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <Search />
      <button className="options"><img src={dots} alt="" /></button>
      <HeaderBtns />
    </header>
  );
};
