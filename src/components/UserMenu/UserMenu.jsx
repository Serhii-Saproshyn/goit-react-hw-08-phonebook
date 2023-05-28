import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className={css.userMenu}>
        <p>{email}</p>
        <button type="button" onClick={onClick}>
          LogOut
        </button>
      </div>
    </>
  );
};

export default UserMenu;
