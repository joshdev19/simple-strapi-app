import { useEffect, useState } from "react"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import axios from "axios"
import { DataTypes, PropTypes } from "../types/types"

const Index = () => {

  const [ todos, setTodos ] = useState<DataTypes<PropTypes>[]>();

  useEffect(() => {

    const fetchData = async () => {

      try {
        
        const request = await axios.get('todos');

        const response = await request.data;

        setTodos( response?.data )

      } catch (error) {
        
        console.log(error)

      }

    }

    fetchData();

  }, [ setTodos])

  return (
    <div className="wrapper">
      <Nav/>
      <div className="cards-wrapper">
        {
          todos && todos.map( t => <Card key={ t?.data.id } { ...t?.data } /> )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Index