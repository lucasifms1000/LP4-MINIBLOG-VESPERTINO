import {NavLink} from 'react-router-dom';

import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <NavLink to="/" className={style.brand}>Mini <spam>Blog</spam></NavLink>
            <ul className={style.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? style.active : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? style.active : '')}>About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;