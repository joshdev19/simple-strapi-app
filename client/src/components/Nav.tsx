import { Link, useLocation } from "react-router-dom";

const Nav = () => {

    const location = useLocation();
    const pathName = location.pathname;
    const isAddPage = pathName.includes('/add')

    return (
        <nav style={ isAddPage ? { padding: "1.1em 1.5em" } : { padding: "none" } }>
            <Link to="/"> SSTA </Link>
            {
                !pathName.includes('/add') && <Link to="/add" className="add"> + ADD TODO </Link>
            }
        </nav>
    )

}

export default Nav;