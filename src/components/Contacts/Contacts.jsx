import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setfilterContacts, setIsLoading } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import {
  getContactsThunk,
  deleteContactsThunk,
} from 'redux/contacts/contacts.thunk';
import css from './Contacts.module.css';
import { Watch } from 'react-loader-spinner';
import { refreshToken } from 'redux/auth/operations';

export const Contacts = () => {
  const contactLoading = useSelector(setIsLoading);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContactsThunk(id));
  const filterContacts = useSelector(setfilterContacts);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(refreshToken());
      dispatch(getContactsThunk());
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <ul className={css.contactsList}>
        {contactLoading ? (
          <div>
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
        ) : (
          filterContacts.map(({ name, id, number }) => {
            return (
              <li className={css.contactsItem} key={id}>
                {name}: {number}
                <button
                  className={css.deleteBtn}
                  key={id}
                  type="button"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
