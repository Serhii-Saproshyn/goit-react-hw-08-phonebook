import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { Watch } from 'react-loader-spinner';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const token = useSelector(state => state.auth.token);
  // const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <>
      <header className={css.headerLayout}>
        {/* {isLoading && (
          <div className={css.loader}>
            <Watch
              height="80"
              width="80"
              radius="48"
              color="#ff6f00"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )} */}
        <Navigation />
        {token && <UserMenu />}
      </header>
      <Suspense fallback={<p>loading</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
