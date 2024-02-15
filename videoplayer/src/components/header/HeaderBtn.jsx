import icon1 from '../../assets/phone-18.svg';
import icon2 from '../../assets/header-icons-2.svg';
import icon3 from '../../assets/header-icons-3.svg';
import icon4 from '../../assets/user.png';
import './header.scss'

export const HeaderBtns = () => {
  return (
    <div className="header-icons">
      <button>
        <img src={icon1} alt="" />
      </button>
      <button>
        <img src={icon2} alt="" />
      </button>
      <button>
        <img src={icon3} alt="" />
      </button>
      <button>
        <img src={icon4} alt="" />
      </button>
    </div>
  );
};
