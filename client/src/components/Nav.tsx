import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <Link to="/"> SSTA </Link>
            <button type="button"> + ADD TODO </button>
        </nav>
    )

}

export default Nav;