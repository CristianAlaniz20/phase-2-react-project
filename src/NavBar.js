import { NavLink } from'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to='/' className="nav-link">Home</NavLink>
            <NavLink to='/ball' className="nav-link">Balls</NavLink>
            <NavLink to='/add-ball' className="nav-link">Add Ball</NavLink>
        </nav>
    )
}

export default NavBar;