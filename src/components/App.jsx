import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import Register from 'pages/Register/Register';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          {/* <Route element={<Login />} /> */}
          {/* <Route path="contacts" element={<ContactsPage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
