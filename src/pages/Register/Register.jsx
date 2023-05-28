import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import css from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(register(newUser));
    setName('');
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
          User Name
          <input type="text" name="name" value={name} onChange={onChange} />
        </label>
        <label>
          Email
          <input
            id="passwordInput"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
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
        <button type="submit">SignUp</button>
      </form>
      {error && <p>{getMessageError()}</p>}
    </>
  );
};

export default Register;
