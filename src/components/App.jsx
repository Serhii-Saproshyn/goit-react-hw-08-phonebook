import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';
import Register from 'pages/Register/Register';
import LogIn from 'pages/LogIn/LogIn';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
        {/* <Route path="contacts" element={<ContactsPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
