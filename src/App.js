import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import UserCard from './components/UserCard';

let id = 0;
const initialForm = [
  { 
    name: "", 
    surname: "",
    email: "",
    city: "", 
    country: "",
    description: ""
  }
]

function App() {

  const [users, setUsers] = useState([])
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm( {...form, [name]:value } )
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {id: ++id, ...form}
    setUsers(users.concat(newUser))
    setForm(initialForm)
  }

  return (
    <div>
      <h1>Barcelona Digital Talent</h1>
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

export default App;