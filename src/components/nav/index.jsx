
import { NavLink } from 'react-router-dom';
import * as N from "./index.styled"




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
            <NavLink to="/home/snurre/React/src/components/register/index.jsx">Register</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/home/snurre/React/src/components/login/index.jsx">Login</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/home/snurre/React/src/components/venues/createVenue/index.jsx">Create Venue</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/home/snurre/React/src/components/bookings/createBooking/index.jsx">Create Booking</NavLink>
          </N.LiWrapper>
          <N.LiWrapper>
            <NavLink to="/"onClick={Logout}>Logout</NavLink>
            </N.LiWrapper>
        </N.List>
      </nav>
    );
    }
export default NavBar