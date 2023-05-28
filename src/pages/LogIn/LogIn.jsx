import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import css from './Login.module.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const thisUser = {
      email,
      password,
    };
    dispatch(logIn(thisUser));
    setEmail('');
    setPassword('');
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getMessageError = () => {
    switch (error.response.status) {
      case 400:
        return 'There is no account with such data yet';
      case 500:
        return 'Sorry, there is a problem with the server, please try again later';

      default:
        return error.message;
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={onChange}
          />
          <button
            className={css.eye}
            type="button"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <HiEye className={css.eyeOn} />
            ) : (
              <HiEyeOff className={css.eyeOff} />
            )}
          </button>
        </label>
        <button type="submit">SignIn</button>
      </form>
      {error && <p>{getMessageError()}</p>}
    </>
  );
};

export default LogIn;
