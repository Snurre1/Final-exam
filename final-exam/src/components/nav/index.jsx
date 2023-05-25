
import { NavLink } from 'react-router-dom';
import * as N from "./index.styled"
import { useState } from 'react';




function NavBar() {
  const Logout = () =>{
    localStorage.clear()
  }
    return (
      <nav>
        <N.List>
          <N.LiWrapper>
            <NavLink to="/">Home</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/home/snurre/React/final-exam/src/components/register/index.jsx">Register</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/home/snurre/React/final-exam/src/components/login/index.jsx">Login</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/home/snurre/React/final-exam/src/components/createVenue/index.jsx">Create Venue</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/home/snurre/React/final-exam/src/components/updateAvatar/index.jsx">Update Avatar</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/"onClick={Logout}>Logout</NavLink>
            </N.LiWrapper>
        </N.List>
      </nav>
    );
    }
export default NavBar