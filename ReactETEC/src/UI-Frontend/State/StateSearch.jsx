import React, { useState } from "react";

const StateSearch = () => {
  // Search input state
  const [search, setSearch] = useState("");

  // User data
  const users = [
    { id: 1, name: "Samith" },
    { id: 2, name: "Dara" },
    { id: 3, name: "Sokha" },
    { id: 4, name: "Feynman" },
    { id: 5, name: "Chan" },
  ];

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Search User</h1>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border border-gray-400 rounded-lg p-2 w-[300px]"
      />
      {/* User List */}
      <div className="mt-5 w-[300px]">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="p-3 mb-2 bg-gray-200 rounded-lg">
              {user.name}
            </div>
          ))
        ) : (
          <p className="text-red-500">User not found</p>
        )}
      </div>
    </div>
  );
};

export default StateSearch;
