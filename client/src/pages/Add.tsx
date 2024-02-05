import { useState } from "react"
import { PropTypes } from "../types/types"
import axios from "axios";
import { toast } from "react-toastify";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Add = () => {

  const [ values, setValues ] = useState<PropTypes>(
    {
      title: '',
      description: ''
    }
  )

  const controlledInputs = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    
    const name: string = e.target.name;
    const value: string = e.target.value;

    setValues( p => ( { ...p, [name]: value } ) )

  }

  const addHandler = async () => {

    try {
      
      const request = await axios.post('');

      const response = await request.data;

      console.log(response)

    } catch (error) {
      
      console.log(error)

    }

  }

  return (
    <div className="wrapper">
      <Nav/>
      <div className="form-wrapper">
        <form>
          <h2> Add New Todo </h2>
          <input type="text" name="" onChange={ controlledInputs } placeholder="Title..." value={ values?.title } />
          <textarea name="description" onChange={ controlledInputs } placeholder="Description..." value={ values?.description } ></textarea>
          <button type="button" onClick={ addHandler }> ADD </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Add