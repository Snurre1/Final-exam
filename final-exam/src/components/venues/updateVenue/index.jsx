import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { updateVenue } from "../../../auth/update";
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

function UpdateThisVenue(){
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
    const form = document.querySelector("#createVenue");
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
      updateVenue(venue);
    });
}, []);
    return ( 
        <div><C.registerStraight> 
            <h1>Make a Venue</h1></C.registerStraight> 
            <C.widthForm>
            <form id='createVenue' onSubmit={handleSubmit(handleClick)}>
                <label>Name of Venue</label>
                <input type="text" name="name" placeholder='Name of Venue'{...register('name')}/>
                <p>{errors.name?.message}</p>
                <label>Description</label>
                <textarea type="text" name="description" placeholder='Description'{...register('description')}  />
                <p>{errors.description?.message}</p>
                <label>Price</label>
                <input data-type='number' type='number' name="price" placeholder='Price'{...register('price')}/>
                <p>{errors.price?.message}</p>
                <label>Images</label>
                <input type="url" name="media" placeholder='Image URL'{...register('media')}/>
                <p>{errors.media?.message}</p>
                <label>Amount of guests</label>
                <input data-type='number' type='number' name='maxGuests' placeholder="number of guests"{...register('maxGuests')}/>
                <p>{errors.maxGuests?.message}</p>
                <C.buttonStyling type='submit'>Submit</C.buttonStyling>
            </form>
            </C.widthForm>
        </div> 
    )
}

export default UpdateThisVenue