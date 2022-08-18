import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function AddContact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { addContactHandler } = props;
  const navigation = useNavigate();

  function addContact(event) {
    event.preventDefault();
    if (!name || !email) {
      alert('Please Enter values first as fields are mandatory to fill!!!');
      return;
    }

    addContactHandler({ name, email });
    setName('');
    setEmail('');
    navigation('../');
  }
  return (
    <div className='container-fluid'>
      <h2>Add Contact</h2>
      <form onSubmit={addContact}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
