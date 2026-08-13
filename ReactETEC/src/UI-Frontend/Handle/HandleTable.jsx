import React, { useState } from "react";

const HandleTable = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
  });

  const [users, setUsers] = useState([]);

  // Search state
  const [search, setSearch] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill in Name, Email and Phone");
      return;
    }

    setUsers([
      ...users,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    // Clear form
    setForm({
      name: "",
      email: "",
      phone: "",
      gender: "",
      age: "",
    });
  };

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Filter users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.phone.toLowerCase().includes(search.toLowerCase()) ||
    user.gender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h1 className="text-2xl font-bold mb-6">
            Customer Registration
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="012 345 678"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block mb-1 font-medium">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="20"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1 font-medium">
                Gender
              </label>

              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            {/* Submit */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Add Customer
              </button>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">

          {/* Table Header */}
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <h2 className="text-xl font-bold">
              Customer List
            </h2>

            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer..."
              className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-80"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left p-3">#</th>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Gender</th>
                  <th className="text-left p-3">Age</th>
                  <th className="text-left p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center p-6 text-gray-500"
                    >
                      {search
                        ? "No customer found"
                        : "No customers yet"}
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, index) => (
                    <tr
                      key={user.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="p-3">
                        {index + 1}
                      </td>

                      <td className="p-3">
                        {user.name}
                      </td>

                      <td className="p-3">
                        {user.email}
                      </td>

                      <td className="p-3">
                        {user.phone}
                      </td>

                      <td className="p-3">
                        {user.gender}
                      </td>

                      <td className="p-3">
                        {user.age}
                      </td>

                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleTable;