import React from 'react';
import * as L from "./index.styled"
import { loginPerson } from '../../auth/login';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form'
import * as yup from 'yup';
const schema = yup
  .object({
    email: yup.string().email().matches("stud.noroff.no").required(),
    password: yup.string().min(8,"your password must be at least 8 characters.").required(),
  })
  .required();

function LoginPeople() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  function handleClick(event) {

    navigate('/');
  }
    
    React.useEffect(() => {
    const form = document.querySelector("#loginForm");
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    loginPerson(profile);

    });
 }, []);
      return (
      <div>  
        <L.registerStraight> 
          <h1>Login</h1>
        </L.registerStraight>
        <L.widthForm>
          <form onSubmit={handleSubmit(handleClick)} id="loginForm" >
            <label>E-mail</label>
            <input type="text" name="email" placeholder='E-mail'{...register('email')}/>
            <p>{errors.email?.message}</p>
            <label>Password</label>
            <input type="password" name="password" placeholder='Password'{...register('password')}/>
            <p>{errors.password?.message}</p>
             <L.buttonStyling type='submit'>Submit</L.buttonStyling>
             </form>  
        </L.widthForm> 
      </div> 
    );
}

export default LoginPeople;