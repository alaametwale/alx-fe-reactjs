import axios from "axios";

const BASE_URL = "https://api.github.com";

// Basic search
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// Advanced search
export const advancedUserSearch = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/users?q=${query}`
  );
  return response.data.items;
};
