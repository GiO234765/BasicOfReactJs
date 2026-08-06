import { useState } from "react";

function StateCall() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <div className="">
        <h1 className=" p-2 ml-16 bg-">{count}</h1>
        <div className=" gap-3 flex">
          <button
            onClick={() => setCount(count + 1)}
            className=" border p-2 rounded-3xl">
            Increase
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className=" border p-2 rounded-3xl">
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
export default StateCall;
