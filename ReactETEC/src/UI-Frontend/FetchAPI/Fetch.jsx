import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [value, setData] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/carts";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data.carts);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Cart Data</h1>

      {value.map(cart => (
        <div key={cart.id} className="border rounded-lg p-5 mb-6 shadow">
          <h2 className="text-2xl font-bold">Cart ID: {cart.id}</h2>

          <p>User ID: {cart.userId}</p>
          <p>Total: ${cart.total}</p>
          <p>Discounted Total: ${cart.discountedTotal}</p>
          <p>Total Products: {cart.totalProducts}</p>
          <p>Total Quantity: {cart.totalQuantity}</p>

          <h3 className="text-xl font-bold mt-5 mb-3">Products</h3>

          {cart.products.map(product => (
            <div
              key={product.id}
              className="border rounded p-4 mb-3 bg-gray-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-32 h-32 object-cover rounded"
              />

              <h4 className="font-bold text-lg">{product.title}</h4>

              <p>Product ID: {product.id}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Discounted Price: ${product.discountedPrice}</p>
              <p>Total: ${product.total}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Fetch;
