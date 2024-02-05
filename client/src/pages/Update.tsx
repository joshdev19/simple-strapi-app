import { useEffect, useState } from "react"
import { PropTypes } from "../types/types"
import { useParams } from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Update = () => {

  const { id } = useParams();

  const [ values, setValues ] = useState<PropTypes>(
    {
      title: '',
      description: ''
    }
  )
  
  useEffect(() => {

    const fetchData = async () => {

      try {
        
        const request = await axios.put('');

        const response = await request.data;


      } catch (error) {
        
        console.log(error)

      }

    }

    fetchData();

  }, [ id, setValues])

  const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    
    const name: string = e.target.name;
    const value: string = e.target.value;

    setValues( p => ( { ...p, [name]: value } ) )

  }

  const updateHandler = async () => {

    try {
      
    } catch (error) {
      
    }

  }

  return (
    <div className="wrapper">
      <Nav/>
      <div className="form-wrapper">
        <form>
          <h2> Update Todo </h2>
          <input type="text" name="" onChange={ controlledInputs } placeholder="Title..." value={ values?.title } />
          <textarea name="description" onChange={ controlledInputs } placeholder="Description..." value={ values?.description } ></textarea>
          <button type="button" onClick={ updateHandler }> ADD </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Update