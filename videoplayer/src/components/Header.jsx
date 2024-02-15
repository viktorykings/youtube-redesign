import { Search } from "./header/Search";
import { HeaderBtn } from "./header/HeaderBtn";
export const Header = (btnImg) => {
  return (
    <header class="header">
      <div class="header-btns">
        <button class="burger-menu">
          <span></span>
        </button>
        <div class="logo">
          <img src="./assets/Black.svg" alt="" />
        </div>
      </div>
        <Search />
      <div class="header-icons">
        {/* {btnImg.map(el => <HeaderBtn src={el} />)} */}
      </div>
    </header>
  );
};
