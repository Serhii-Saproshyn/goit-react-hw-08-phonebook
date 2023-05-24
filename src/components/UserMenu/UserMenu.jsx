import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  // const user = useSelector();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className={css.userMenu}>
        <p>{}</p>
        <button type="button" onClick={onClick}>
          LogOut
        </button>
      </div>
    </>
  );
};

export default UserMenu;
