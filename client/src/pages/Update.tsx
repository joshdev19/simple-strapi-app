import { useEffect, useState } from "react"
import { PropTypes } from "../types/types"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Update = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [ values, setValues ] = useState<PropTypes>(
    {
      title: '',
      description: ''
    }
  )
  
  useEffect(() => {

    const fetchData = async () => {

      try {
        
        const request = await axios.get(`todos/${id}`);

        const response = await request.data;

        setValues( response?.data.attributes )

      } catch (error) {
        
        toast.error("Failed to fetch the data")

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
        
      const request = await axios.put(`todos/${id}`, { data: values } );

      const response = await request.data;

      if (response?.data) {
        toast.success("Updated Successfully");
        navigate('/')
      }

    } catch (error) {
      
      toast.error("Failed to update the todo")

    }

  }

  const deleteHandler = async () => {

    try {
        
      const request = await axios.delete(`todos/${id}`);

      const response = await request.data;

      if (response?.data) {
        toast.success("Deleted Successfully");
        navigate('/')
      }

    } catch (error) {
      
      toast.error("Failed to delete the todo")

    }

  }

  return (
    <div className="wrapper">
      <Nav/>
      <div className="form-wrapper">
        <form>
          <h2> Update Todo </h2>
          <input type="text" name="title" onChange={ controlledInputs } placeholder="Title..." value={ values?.title } />
          <textarea name="description" onChange={ controlledInputs } placeholder="Description..." value={ values?.description } ></textarea>
          <button type="button" onClick={ updateHandler }> Update </button>
          <button type="button" onClick={ deleteHandler }> DELETE TODO </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Update