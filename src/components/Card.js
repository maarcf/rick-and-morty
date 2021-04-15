import './Card.css';

const Card = ({ imgUrl, name, gender, status, species }) => {
  return(
    <article className="card">
      <div className="card-img">
        <img src={imgUrl} alt={name}/>
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{gender} - {status}</p>
      </div>
    </article>
  )
}

export default Card;