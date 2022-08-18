import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
export default function ContactList(props) {
  const deleteConactHandler = id => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map(contact => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className='container-fluid my-4'>
      <h3>Contact list</h3>
      <span>
        <Link to='/add'>
          <button type='submit' className='btn btn-success'>
            Add Contact
          </button>
        </Link>
      </span>

      {renderContactList}
    </div>
  );
}
