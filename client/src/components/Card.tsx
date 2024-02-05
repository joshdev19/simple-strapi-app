import { Link } from "react-router-dom"
import { PropTypes } from "../types/types"

const Card = ( { id, title, description }: PropTypes ) => {
  
  return (
    <Link to={`/update/${id}`}>
      <p className="title"> { title } </p>
      <p className="description"> { description } </p>
    </Link>
  )

}

export default Card