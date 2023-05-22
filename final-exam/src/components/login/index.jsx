import React from 'react';
import * as L from "../login/index.styled"
import { login } from '../../auth/login';



function Login() {

    
    React.useEffect(() => {
    const form = document.querySelector("#loginForm");
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
  
    login(profile);
 

    });
 }, []);
      return (
      <div>  
        <L.registerStraight> 
          <h1>Login</h1>
        </L.registerStraight>
        <L.widthForm>
          <form id="loginForm">
            <label>E-mail</label>
            <input type="text" name="email" placeholder='E-mail'/>
            <label>Password</label>
            <input type="password" name="password" placeholder='Password'/>
            <L.buttonStyling type='submit'>Submit</L.buttonStyling>
          </form>
        </L.widthForm>   
      </div> 
    );
}

export default Login;