/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import LoginSignup from "./LoginSignup";
import PaymentForm from "./PaymentForm";
import ProductSearch from "./ProductSearch";
import RegisterForm from "./RegisterForm";
import ProductList from "./ProductList";
import CheckoutForm from "./CheckoutForm";
const clothesData = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Jeans",
    price: 50,
    image:
      "https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Shorts",
    price: "20",
    image:
      "https://images.unsplash.com/photo-1612913334025-bedf136f8715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNob3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Nike",
    price: "30",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Heels",
    price: "20",
    image:
      "https://images.unsplash.com/photo-1590099033615-be195f8d575c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "UnderGarments",
    price: "100",
    image:
      "https://plus.unsplash.com/premium_photo-1683120861720-e5babc80c6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVuZGVyZ2FybWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  // Add more clothes data here
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (clothes) => {
    setCart([...cart, clothes]);
  };

  const removeFromCart = (clothes) => {
    const updatedCart = cart.filter((item) => item.id !== clothes.id);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Clothes Store</h1>
      <div className="grid grid-cols-3 gap-4">
        {clothesData.map((clothes) => (
          <div key={clothes.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={clothes.image}
              alt={clothes.name}
              className="w-full h-50 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{clothes.name}</h2>
            <p className="text-gray-600">${clothes.price}</p>
            <button
              onClick={() => addToCart(clothes)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {cart.map((clothes) => (
            <li key={clothes.id} className="flex items-center">
              <img
                src={clothes.image}
                alt={clothes.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{clothes.name}</h3>
                <p className="text-gray-600">${clothes.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(clothes)}
                className="ml-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <LoginSignup />
      <PaymentForm />
      <ProductSearch />
      <RegisterForm/>
      <ProductList/>
      <CheckoutForm/>
    </div>
  );
};

export default App;
