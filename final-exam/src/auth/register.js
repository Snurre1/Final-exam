import { API_REGISTER_URL } from "../shared/url/url.js";
const method = "post";

export async function registerPerson(profile) {
  const body = JSON.stringify(profile);
  const response = await fetch(API_REGISTER_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  const result = await response.json();
}