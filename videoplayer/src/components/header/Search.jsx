import icon from '../../assets/search-icon.svg';
export const Search = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="Search" />
      <img src={icon} alt="" />
    </div>
  );
};
