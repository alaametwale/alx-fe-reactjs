import { useState } from "react";
import {
  fetchUserData,
  advancedUserSearch,
} from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");

  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setResults([]);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async () => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      let query = username;
      if (location) query += `+location:${location}`;
      if (repos) query += `+repos:>=${repos}`;

      const data = await advancedUserSearch(query);
      setResults(data);
    } catch {
      setError("Error performing advanced search");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
      {/* Basic Search */}
      <form onSubmit={handleBasicSearch} className="space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 w-full">
          Basic Search
        </button>
      </form>

      {/* Advanced Search */}
      <div className="mt-6 space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Minimum Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
        />

        <button
          onClick={handleAdvancedSearch}
          className="bg-green-600 text-white px-4 py-2 w-full"
        >
          Advanced Search
        </button>
      </div>

      {/* States */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* Basic Result */}
      {user && (
        <div className="mt-6 border p-4 rounded">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-24 rounded-full"
          />
          <h2 className="text-xl font-bold mt-2">{user.name}</h2>
          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-600 underline"
          >
            Visit Profile
          </a>
        </div>
      )}

      {/* Advanced Results */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {results.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <img
              src={item.avatar_url}
              alt=""
              className="w-16 rounded-full"
            />
            <a
              href={item.html_url}
              target="_blank"
              className="block text-blue-600 mt-2"
            >
              {item.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
