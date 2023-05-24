import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <Suspense fallback={<p>loading</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
