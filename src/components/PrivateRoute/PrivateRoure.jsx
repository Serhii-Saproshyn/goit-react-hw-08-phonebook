import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ elem, to = '/' }) => {
  const token = useSelector(state => state.auth.token);
  if (token) {
    return elem;
  }
  return <Navigate to={to} />;
};

export default PrivateRoute;
