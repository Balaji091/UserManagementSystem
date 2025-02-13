import React, { useState, useEffect, useCallback } from "react";

const UserDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      setIsLoading(true);
      fetch(`http://localhost:5000/api/search?username=${debouncedQuery}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.user ? [data.user] : []);
        })
        .catch((error) => console.error("Error searching users:", error))
        .finally(() => setIsLoading(false));
    } else {
      setSearchResults([]);
    }
  }, [debouncedQuery]);

  const handleUserClick = async (userId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
        credentials: "include",
      });
      const data = await response.json();
      setSelectedUser(data.user);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">User Details</h2>
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search by username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">🔍</span>
      </div>
      {/* Loading Spinner */}
      {isLoading && <div className="text-center">⏳ Loading...</div>}
      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="mb-4 bg-gray-100 p-3 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Search Results</h3>
          <ul>
            {searchResults.map((user) => (
              <li
                key={user._id}
                onClick={() => handleUserClick(user._id)}
                className="p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-200 transition"
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Selected User Details */}
      {selectedUser && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Selected User Details</h3>
          <div className="space-y-2">
            {Object.entries(selectedUser).map(([key, value]) => {
              if (["password", "_id", "__v"].includes(key)) return null;
              return (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 font-medium capitalize">{key}:</span>
                  <span className="text-gray-800">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
