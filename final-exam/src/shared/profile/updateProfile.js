import { API_PROFILE_URL } from "../url/url.js";
import {authFetch} from "../authFetch/authFetch.js"

const method = "put";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileURL = `${API_PROFILE_URL}/${profileData.name}`;
  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });
  return await response.json();
}