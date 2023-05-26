import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as R from "../register/index.styled"
import { registerPerson } from '../../auth/register';
import { useNavigate } from 'react-router-dom';


const schema = yup
  .object({
    name: yup.string().min(1, 'Your full name should be at least 1 character.').max(20).required("Please enter your full name"),
    email: yup.string().email().matches("stud.noroff.no").required(),
    password: yup.string().min(8,"your password must be at least 8 characters.").required(),
    avatar: yup.string(),
    venueManager: yup.bool()
  })
  .required();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const [isChecked, setIsChecked] = useState(false);
  function toggle(value){
    return !value;
  }
  const navigate = useNavigate();

  function handleClick(event) {

    navigate('/');
  }
 
  React.useEffect(() => {
    
        const form = document.querySelector("#registerForm");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          let name = form.name.value
          let email = form.email.value
          let password = form.password.value
          let avatar = form.avatar.value
          let MyVenue = form.venueManager.value
          let venueManager = Boolean(MyVenue)
          const profile = {name, email, password, avatar, venueManager}
          registerPerson(profile);
    });
  }, []);
    return (
      <div>  
        <R.registerStraight> 
          <h1>Register</h1>
          </R.registerStraight>
        <R.widthForm>
          <form id='registerForm'onSubmit={handleSubmit(handleClick)}>
            <label>Full Name</label>
            <input type="text" name="name" placeholder='Full Name' {...register('name')} />
            <p>{errors.name?.message}</p>
            <label>E-mail</label>
            <input type="text" name="email" placeholder='E-mail' {...register('email')} />
            <p>{errors.email?.message}</p>
            <label>Password</label>
            <input type="password" name="password" placeholder='Password' {...register('password')} />
            <p>{errors.password?.message}</p>
            <label>Avatar</label>
            <input type="url" name="avatar" placeholder='AvatarURL' {...register('avatar')} />
            <p>{errors.avatar?.message}</p>
            <label>Venue Manager</label>
            <div>
            <label>Yes</label>
            <input type="checkbox" value={true} name='venueManager' checked={isChecked} onChange={ () => setIsChecked(toggle)} />
            </div>
            <R.buttonStyling type='submit'>Submit</R.buttonStyling>
          </form>
        </R.widthForm>   
      </div> 
    );
}

export default Register;