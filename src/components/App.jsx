import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';
import Register from 'pages/Register/Register';
import LogIn from 'pages/LogIn/LogIn';
import NotFound from 'pages/NotFound/NotFound';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshToken } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute/PrivateRoure';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(refreshToken());
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={<PublicRoute elem={<Register />} to="/contacts" />}
        />
        <Route
          path="login"
          element={<PublicRoute elem={<LogIn />} to="/contacts" />}
        />

        <Route
          path="contacts"
          element={<PrivateRoute elem={<ContactsPage />} to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
