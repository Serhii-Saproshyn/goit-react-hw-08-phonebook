import { NavLink, Link } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link className={css.navItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <NavLink className={css.navItem} to="/contacts">
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navItem} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navItem} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
