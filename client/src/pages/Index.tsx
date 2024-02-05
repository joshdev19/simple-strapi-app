import Card from "../components/Card"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

const Index = () => {
  return (
    <div className="wrapper">
      <Nav/>
      <div className="cards-wrapper">
        <Card id="1" title="test title" description="some description"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Index