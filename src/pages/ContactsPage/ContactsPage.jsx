import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
  const error = useSelector(state => state.auth.error);
  const getMessageError = () => {
    switch (error.response.status) {
      case 401:
        return 'Please login again';
      case 500:
        return 'Sorry, there is a problem with the server, please try again later';

      default:
        return error.message;
    }
  };
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      {error && <p>{getMessageError()}</p>}
    </>
  );
};

export default ContactsPage;
