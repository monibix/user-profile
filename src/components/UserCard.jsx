import React from 'react';

const UserCard = ({ user }) => {

    return (
      <div className="user-card"> 
        <p>Image: <img src={user.avatar} alt={user.name} /> </p>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Surname: {user.surname}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.city}</p>
        <p>Country: {user.country}</p>
        <p>Description: {user.description}</p>
      </div>
    )
}

export default UserCard;


