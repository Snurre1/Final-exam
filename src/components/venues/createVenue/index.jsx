import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { CreateVenue } from "../../../auth/createvenue";
import * as C from "./index.styled"

const schema = yup
  .object({
    name: yup.string().min(1, 'Your full name should be at least 1 character.').max(20).required("Please enter your full name"),
    description: yup.string().required(),
    price: yup.number().min(1,"Your price must be at least 0.").required(),
    media: yup.string(),
    maxGuests: yup.number().min(1,"Need to be at least 1 guest").required()
  })
  .required();

function CreateAVenue(){
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
    const form = document.getElementById("createVenue");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let name = form.name.value
      let description = form.description.value
      let myPrice = form.price.value
      let media = form.media.value
      let myGuest = form.maxGuests.value
      let price = parseInt(myPrice)
      let maxGuests = parseInt(myGuest)
      const venue = {name, description, price, media, maxGuests}
      CreateVenue(venue);
      
    });
}, []);
    return ( 
        <div><C.registerStraight> 
            <h1>Make a Venue</h1>
            </C.registerStraight> 
            <C.widthForm>
            <form id='createVenue' onSubmit={handleSubmit(handleClick)}>
                <label>Name of Venue</label>
                <input type="text" name="name" className='venueName' placeholder='Name of Venue'{...register('name')}/>
                <p>{errors.name?.message}</p>
                <label>Description</label>
                <textarea type="text" name="description" className='description' placeholder='Description'{...register('description')}  />
                <p>{errors.description?.message}</p>
                <label>Price</label>
                <input data-type='number' type='number' className='price' name="price" placeholder='Price'{...register('price')}/>
                <p>{errors.price?.message}</p>
                <label>Images</label>
                <input type="url" name="media" placeholder='Image URL' className='image'{...register('media')}/>
                <p>{errors.media?.message}</p>
                <label>Amount of guests</label>
                <input data-type='number' type='number' name='maxGuests'  placeholder="Guests"{...register('maxGuests')}/>
                <p>{errors.rating?.message}</p>
                <C.buttonStyling type='submit'>Submit</C.buttonStyling>
            </form>
            </C.widthForm>
        </div> 
    )
}

export default CreateAVenue