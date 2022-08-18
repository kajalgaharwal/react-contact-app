import React from 'react';
import user from '../images/user.png';

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className='container contact-boxes'>
      <div className='d-flex flex-column contact-box'>
        <div className='header contact-data'>
          <img
            src={user}
            style={{ width: '34px', height: '30px', paddingRight: '10px' }}
            alt=''
          />
          {name}
        </div>
        <div className='contact-data'>
          {email}
          <i
            class='fa-solid fa-trash-can trash'
            onClick={() => props.clickHander(id)}></i>
        </div>
      </div>
    </div>
  );
}
