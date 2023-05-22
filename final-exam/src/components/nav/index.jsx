import { NavLink } from 'react-router-dom';
import * as N from "./index.styled"

const NavBar = () => {
  
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
        </N.List>
      </nav>
    );
    }
export default NavBar