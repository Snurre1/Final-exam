import { API_VENUE_URL } from "../shared/url/url.js";
import { authFetch } from "../shared/authFetch/authFetch.js";

const method = "post";

export async function CreateVenue(postData) {
  const response = await authFetch(API_VENUE_URL, {
    method,
    body: JSON.stringify(postData),
  });
  return await response.json();
}