import { API_BOOKINGS_URL } from "../shared/url/url.js";
import { authFetch } from "../shared/authFetch/authFetch.js";



export async function Booking(postData) {
  const response = await authFetch(API_BOOKINGS_URL, {
    method: "post",
    body: JSON.stringify(postData),
  });
  return await response.json();
}