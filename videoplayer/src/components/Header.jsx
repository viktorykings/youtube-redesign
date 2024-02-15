import { Search } from "./header/Search";
import { HeaderBtns } from "./header/HeaderBtn";
import {btnImg} from '../data/btnImg'
import logo from '../assets/Black.svg';
import '../styles/header.scss'


export const Header = () => {
    console.log(btnImg)
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
      <HeaderBtns />
    </header>
  );
};
