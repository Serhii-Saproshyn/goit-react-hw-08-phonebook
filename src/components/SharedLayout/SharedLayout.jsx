import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const SharedLayout = () => {
  return (
    <header>
      <Navigation />
      <UserMenu />
    </header>
  );
};

export default SharedLayout;
