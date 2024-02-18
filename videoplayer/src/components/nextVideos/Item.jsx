export const Item = ({title, author, views, img}) => {
    return(
        <div className="item">
          <div className="img-container">
          <img src={img} alt="" />
          <div className="timer"><span>8:00</span></div>
          </div>
        <h3>{title}</h3>
        <p className="subtitle">
          <span>{views}</span>
          <span>{author}</span>
        </p>
      </div>
    )
}