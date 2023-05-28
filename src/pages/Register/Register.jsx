import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import css from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    </>
  );
};

export default Register;
