import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <Link to="/"> SSTA </Link>
            <Link to="/add" className="add"> + ADD TODO </Link>
        </nav>
    )

}

export default Nav;