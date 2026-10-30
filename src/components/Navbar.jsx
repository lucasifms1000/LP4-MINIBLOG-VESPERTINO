import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Mini <spam>Blog</spam></NavLink>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;