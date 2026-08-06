import React, { useState } from "react";

const StateCard = () => {
  // Set the value
  const [count, setCount] = useState(0);
  return (
    // Main contain
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="container w-[1000px] h-[400px] bg-pink-200 p-3">
        <div className="image-contain flex gap-3 relative">
          <span className="price absolute left-[142px]  bg-amber-300 p-1 font-bold rounded-b-2xl text-green-700">
            $15.00
          </span>
          <span className="price absolute bg-gray-500 p-1 top-0 font-bold rounded-b-2xl text-white rotate-320 rounded-t-3xl shadow-2xl">
            x{count}
          </span>
          <img
            src="https://i.pinimg.com/736x/19/e1/2f/19e12f85fe8f8fc02b801dddd17d960f.jpg"
            alt=""
            className="image w-[200px] h-[230px] shadow-xl  "
          />

          {/* Desc */}
          <div className=" w-[200px] text-justify">
            {/* Title */}
            <h1 className=" text-3xl font-bold text-gray-700">Latte</h1>
            <p className=" font-extrabold text-gray-500">
              A latte (short for caffè latte) is a popular coffee drink made
              with one or two shots of espresso and a large amount of steamed
              milk, topped with a thin layer of milk foam.
            </p>
            <div className=""></div>
          </div>
        </div>
        <div className=" flex gap-3 mt-2">
          <button className="buy p-2 bg-gray-600 rounded-b-full rounded-t-3xl text-white font-bold hover:bg-gray-500 duration-700 cursor-pointer hover:p-1 "
          onClick={ ()=> setCount(count+1)}
          >
            Order
          </button>
          <div className="display-total w-[130px] bg-gray-600 rounded-l-2xl rounded-r-full text-white text flex p-1 font-bold items-center">
                <span>
                    Total: ${15*count}
                </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCard;
