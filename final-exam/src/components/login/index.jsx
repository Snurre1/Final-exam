import React from 'react';
import * as L from "../login/index.styled"




function Login() {
      return (
      <div>  
        <L.registerStraight> 
          <h1>Login</h1>
        </L.registerStraight>
        <L.widthForm>
          <form>
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