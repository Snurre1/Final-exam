import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Frontpage from './components/frontpage';
import Register from './components/register';
import Login from './components/login';
import SingleVenue from './components/venues/singleVenue';
import {SearchBar} from './components/venues/searchVenue';
import CreateAVenue from './components/venues/createVenue';
import CreateABooking from './components/bookings/createBooking';


function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Frontpage />} />
          <Route path="/home/snurre/React/src/components/register/index.jsx" element={<Register />} />
          <Route path="/home/snurre/React/src/components/login/index.jsx" element={<Login />} />
          <Route path="/:id" element={<SingleVenue />} />
          <Route path="/home/snurre/React/src/components/venues/createVenue/index.jsx" element={<CreateAVenue />} />
          <Route path="/home/snurre/React/src/components/venues/searchVenue/index.jsx" element={<SearchBar />} />
          <Route path="/home/snurre/React/src/components/bookings/createBooking/index.jsx" element={<CreateABooking/>}/>
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
      
  );
}

export default App;

