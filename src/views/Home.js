import React, { useState } from 'react';
import { AvatarGenerator } from 'random-avatar-generator';
import { Link } from 'react-router-dom';

import Form from '../components/Form'
import UserCard from '../components/UserCard';

let id = 0;
const initialForm = [
  { 
    name: "", 
    surname: "",
    email: "",
    city: "", 
    country: "",
    description: "", 
    avatar: ""
  }
]

function Home() {

  const [users, setUsers] = useState([])
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm( {...form, [name]:value } )
  }  

  const handleSubmit = (e) => {
    e.preventDefault();

    const generator = new AvatarGenerator();
    let avatar = generator.generateRandomAvatar();

    const newUser = {id: ++id, avatar: avatar, ...form}
    setUsers(users.concat(newUser))

    setForm(form)
  }
  console.log('users', users);

  return (
    <div>
      <h1>Barcelona Digital Talent</h1>
      <Link to={`/`}>
        <button>Link</button>
      </Link>
      <Form 
        form={form} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}   
      />

      <div className="users-container">
        { !users.length ? 
          <p>Enter a new user</p>
          :
          users.map((user) => {
            return <UserCard key={user.id} user={user} />
          })
        }
      </div>

    </div>
  );
}

export default Home;
