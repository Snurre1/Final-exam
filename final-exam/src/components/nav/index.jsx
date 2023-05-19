import { Link } from 'react-router-dom';
import * as N from "./index.styled"

function Nav() {
    return (
      <nav>
        <N.List>
          <N.LiWrapper>
            <Link to="/">Home</Link>
          </N.LiWrapper>
          <N.LiWrapper>
            <Link to="/home/snurre/React/final-exam/src/components/register/index.jsx">Register</Link>
          </N.LiWrapper>
          <N.LiWrapper>
            <Link to="/home/snurre/React/final-exam/src/components/login/index.jsx">Login</Link>
          </N.LiWrapper>
        </N.List>
      </nav>
    );
  }
export default Nav  