// Write your code here.
import './index.css'

const CardItem = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails
  return (
    <li className={`${className} each-card`}>
      <h1 className="each-title">{title}</h1>
      <p className="each-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
