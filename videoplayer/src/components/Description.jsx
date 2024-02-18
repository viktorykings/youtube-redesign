import userPic from '../assets/food-user.png'
import '../styles/description.scss'


export const Description = () => {
    return (<div className='description'>
        <div className="info">
            <img src={userPic} alt="" />
            <div>
                <p className="title">Food & Drink</p>
                <p className='subtitle mobile-subscribe'>245K subscribed</p>
                <p className="subtitle">Published on 14 Jun 2019</p>
                <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                <p className="show-more">Show more</p>
            </div>
        </div>
        <button className="subscribe-btn">Subscribe 2.3m</button>
        <button className='subscribe-mobile-btn'> Subscribe</button>
    </div>)
}