import { API_VENUE_URL } from "../shared/url/url.js";
import { authFetch } from "../shared/authFetch/authFetch.js";

const method = "put";

export async function updateVenue(postData) {
  if (!postData.id) {
    alert("Update requres an ID");
  }
  const updateThis = `${API_VENUE_URL}/${postData.id}`;
  const response = await authFetch(updateThis, {
    method,
    body: JSON.stringify(postData),
  });
  return await response.json();
}