import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import * as B from "./index.styled"
import { Booking } from '../../../auth/booking';
const schema = yup
  .object({
    datefrom: yup.string().required("choose from what date you want to stay"),
    dateto: yup.string().required("choose from what day you want to leave"),
    guests: yup.number().min(1,"Your amount of guests must be at least 1.").required(),
    venue: yup.string().required()
  })
  .required();

function CreateABooking(){
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
    const form = document.getElementById("MyBooking")
        form.addEventListener("submit", (event) => {
      event.preventDefault();
      let dateFrom = form.dateFrom.value
      let dateTo = form.dateTo.value
      let guests = form.guest.value
      let venueId = form.venueId.value
      const booking = {dateFrom, dateTo, guests, venueId}
      Booking(booking)
      
    });
}, []);
    return ( 
        <div>
            <B.registerStraight>
            <h1>Make a Booking</h1>
            </B.registerStraight>  
            <B.widthForm>
                <form id="MyBooking" onSubmit={handleSubmit()}>
                    <label>From</label>
                    <input name="dateFrom" type="date"   {...register('datefrom')}/>
                    <p>{errors.dateFrom?.message}</p>
                    <label>To</label>
                    <input name="dateTo" type="date" {...register('dateto')}  />
                    <p>{errors.dateTo?.message}</p>
                    <label>Guests</label>
                    <input data-type='number' type='number' name="guest" placeholder='Amount of guests'{...register('guests')}/>
                    <p>{errors.guests?.message}</p>
                    <label>Id</label>
                    <input type='text' name="venueId" placeholder='Id of venue'{...register('venue')}/>
                    <p>{errors.venue?.message}</p>
                <B.buttonStyling type='submit'>Submit</B.buttonStyling>
            </form>
            </B.widthForm>
        </div>
    )
}

export default CreateABooking