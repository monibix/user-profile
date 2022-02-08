import React from 'react';
import { Route, Router, Routes, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import UserDetails from './views/UserDetails';

const App = () => {

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:userId" element={<UserDetails />} />

        {/* <Home />
      </Route> */}
      {/* <Route exact path="/:userId">
        <UserDetails />
      </Route> */}
      </Routes>

    </>
  )
}

export default App;