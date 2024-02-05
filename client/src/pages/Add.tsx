import { useState } from "react"
import { PropTypes } from "../types/types"
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Add = () => {

  const navigate = useNavigate();

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
      
      const request = await axios.post('todos', { data: values } );

      const response = await request.data;

      if (response?.data) {
        toast.success("Added Successfully");
        navigate('/')
      }

    } catch (error) {
      
      toast.error("Failed to add the todo")

    }

  }

  return (
    <div className="wrapper">
      <Nav/>
      <div className="form-wrapper">
        <form>
          <h2> Add New Todo </h2>
          <input type="text" name="title" onChange={ controlledInputs } placeholder="Title..." value={ values?.title } />
          <textarea name="description" onChange={ controlledInputs } placeholder="Description..." value={ values?.description } ></textarea>
          <button type="button" onClick={ addHandler }> ADD </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Add