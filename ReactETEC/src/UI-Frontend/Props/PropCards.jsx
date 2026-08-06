import React from "react";

const PropCards = ({ title, price, decs, image, rate, category }) => {
  return (
    <div className="w-[350px] h-sc overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[290px] object-cover"
        />
        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          Rate {rate}
        </span>
      </div>
      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-amber-600 font-semibold">{category}</p>

        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        <p className="text-gray-500 mt-2 line-clamp-2">{decs}</p>

        <div className="flex justify-between items-center mt-5">
          <p className="text-2xl font-bold text-amber-600">${price}</p>

          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default PropCards;