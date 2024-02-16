export const Item = ({title, author, views, img}) => {
    return(
        <div className="item">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p className="subtitle">
          <span>{views}</span>
          <span>{author}</span>
        </p>
      </div>
    )
}