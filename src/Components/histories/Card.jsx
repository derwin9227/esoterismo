// eslint-disable-next-line react/prop-types
const Card = ( { user, img } ) => {
  return (
    <div className="card">
        <img src={img} alt="sol" />
        <p>
          {user}
        </p>
    </div>
  )
}

export default Card