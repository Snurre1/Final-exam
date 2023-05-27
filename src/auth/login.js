import * as storage from "../shared/storage/index.js";
import { API_LOGIN_URL } from "../shared/url/url.js";
const method = "post";

export async function loginPerson(profile) {
  const body = JSON.stringify(profile);
  const response = await fetch(API_LOGIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);
}