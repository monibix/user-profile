import React from 'react';

const Form = ({ form, handleChange, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
        <label htmlFor="name">Surname</label>
        <input type="text" name="surname" value={form.surname} onChange={handleChange} required />
        <label htmlFor="name">Email</label>
        <input type="text" name="email" value={form.email} onChange={handleChange} required />
        <label htmlFor="name">City</label>
        <input type="text" name="city" value={form.city} onChange={handleChange} />
        <label htmlFor="name">Country</label>
        <input type="text" name="country" value={form.country} onChange={handleChange} />
        <label htmlFor="name">Description</label>
        <textarea type="text" name="description" value={form.description} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
}

export default Form;