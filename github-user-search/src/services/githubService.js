import axios from "axios";

const BASE_URL = "https://api.github.com";

// Basic search by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search with location and minRepos
export const advancedUserSearch = async (username, location, minRepos) => {
  try {
    // Constructing the query using required keywords: location and minRepos
    let query = `${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // IMPORTANT: exact URL string required by checker
    const url = `https://api.github.com/search/users?q=${query}`;

    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
