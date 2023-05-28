import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ elem, to = '/' }) => {
  const token = useSelector(state => state.auth.token);
  if (!token) {
    return elem;
  }
  return <Navigate to={to} />;
};

export default PublicRoute;
