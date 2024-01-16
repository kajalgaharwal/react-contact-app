import './App.css';
// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import { AddContact } from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContacts] = React.useState([]);

  const addContactHandler = contact => {
    setContacts([...contacts, { id: nanoid(), ...contact }]);
  };

  const removeContactHandler = id => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path='/add'
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          {/* recieving data from child to parent when we click on add button,data is send from child (add contact)to parent(app) */}
        </Routes>
      </Router>

      {/*contactList===> sending data parent to child to display data on screen which app gets from their child component(add contact) */}
    </div>
  );
}

export default App;
