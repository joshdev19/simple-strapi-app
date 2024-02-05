import { Link } from "react-router-dom"
import { AttributeTypes } from "../types/types"

const Card = ( { id, attributes }: AttributeTypes ) => {
  
  return (
    <Link to={`/update/${id}`}>
      <p className="title"> { attributes?.title } </p>
      <p className="description"> { attributes?.description.substring(0, 23) } ... </p>
    </Link>
  )

}

export default Card