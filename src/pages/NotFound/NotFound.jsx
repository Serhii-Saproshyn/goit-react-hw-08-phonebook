const { Link } = require('react-router-dom');

const NotFound = () => {
  return (
    <>
      <p>Page not found...</p>{' '}
      <Link to="/"> Click here to go to the home page </Link>
    </>
  );
};

export default NotFound;
