export const LinkItem = ({title, img, className}) => {
    return(
        <li className={className ? className : ''}>
        <a href="#">
          <img src={img} alt="" />
          {title}
        </a>
      </li>
    )
}