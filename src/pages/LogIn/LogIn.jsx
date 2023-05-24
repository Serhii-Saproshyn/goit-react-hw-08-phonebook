import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password
          <input name="password" value={password} onChange={onChange} />
        </label>
        <button type="submit">SignIn</button>
      </form>
    </>
  );
};

export default LogIn;
