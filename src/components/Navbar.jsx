import {NavLink} from 'react-router-dom';

import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <NavLink to="/" className={style.brand}>Mini <spam>Blog</spam></NavLink>
            <ul className={style.links_list}>
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