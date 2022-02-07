import React from 'react';
import { MdLocationCity, MdEmail } from 'react-icons/md';
import Button from './Button';

const UserCard = ({ user }) => {

    return (
      <div className="user-card"> 
        <p><img src={user.avatar} alt={user.name} /> </p>
        <p>{user.name?.toUpperCase()} {user.surname?.toUpperCase()}</p>
        <p>{user.description}</p>
        <div className='user-card-icon'>
          <MdLocationCity  size={30}  /><p>{user.city}, {user.country}</p>
        </div>
        <div className='user-card-icon'>
          <MdEmail  size={25}  /><p>{user.email}</p>
        </div>
        <div className="btns-container">
          <Button text='Check details' />
          <Button text='Edit profile' />
        </div>
      </div>
    )
}

export default UserCard;


