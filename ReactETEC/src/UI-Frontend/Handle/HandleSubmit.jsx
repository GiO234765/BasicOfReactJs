import React, { useState } from "react";

const HandleSubmit = () => {
  const [name, setName] = useState("");
  const [reName, setRename] = useState("");
  const submit = e => {
    e.preventDefault();

    console.log("Submitted!");
    console.log(name);
    setRename(name);
  };

  return (
    <div className="w-full h-screen bg-pink-200 flex flex-col items-center justify-center">
      <form onSubmit={submit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border px-3 py-2"
          placeholder="Enter your name"
        />

        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>

      <h1 className="mt-4 text-2xl">My name is {reName}</h1>
    </div>
  );
};

export default HandleSubmit;
