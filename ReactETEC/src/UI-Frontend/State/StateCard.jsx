```jsx
import React, { useState } from "react";

const StateCard = () => {
  // State
  const [count, setCount] = useState(0);

  // Fixed price
  const price = 15;

  // Total price
  const total = price * count;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[300px] p-5 bg-white rounded-2xl shadow-lg">

        {/* Price and quantity */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-gray-700">
            ${price}.00
          </span>

          <span className="text-xl font-bold text-gray-500">
            x{count}
          </span>
        </div>

        {/* Description */}
        <div className="w-[250px] text-justify">
          <h1 className="text-3xl font-bold text-gray-700">
            Latte
          </h1>

          <p className="font-extrabold text-gray-500">
            A latte (short for caffè latte) is a popular coffee drink
            made with one or two shots of espresso and a large amount
            of steamed milk, topped with a thin layer of milk foam.
          </p>
        </div>

        {/* Order and Total */}
        <div className="flex gap-3 mt-4">
          <button
            className="p-2 bg-gray-600 rounded-b-full rounded-t-3xl
                       text-white font-bold hover:bg-gray-500
                       duration-700 cursor-pointer"
            onClick={() => setCount(count + 1)}
          >
            Order
          </button>

          <div
            className="w-[130px] bg-gray-600 rounded-l-2xl rounded-r-full
                       text-white flex p-2 font-bold items-center"
          >
            <span>
              Total: ${total}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StateCard;
```;
