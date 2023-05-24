import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const { useState } = require('react');

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          User Name
          <input name="name" value={name} onChange={onChange} />
        </label>
        <label>
          Email
          <input name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password
          <input name="password" value={password} onChange={onChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Register;
