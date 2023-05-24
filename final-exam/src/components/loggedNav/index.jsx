import { Link } from "react-router-dom"
import * as L from './index.styled'



function Nav(){
  const Logout = () =>{
    localStorage.clear()
  }
    return (
      <nav>
        <L.LoggedList>
       <L.LoggedLiWrapper><Link>Create Venue</Link></L.LoggedLiWrapper>
       <L.LoggedLiWrapper><Link>Update Avatar</Link></L.LoggedLiWrapper>
       <L.LoggedLiWrapper><Link onClick={Logout}>Logout</Link></L.LoggedLiWrapper>
        </L.LoggedList>
      </nav>
    )
    }
export default Nav