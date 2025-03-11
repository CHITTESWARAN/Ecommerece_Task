import React, { useContext } from "react";
import { UserContext } from "../UserContent";

const CartPage = () => {
  const { cart, setcart } = useContext(UserContext);

  const addItem = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setcart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setcart(updatedCart);
  };

  const clearCart = () => {
    setcart([]); 
  };

  return (
    <div className="p-6 mt-32">
    

      {cart.length === 0 ? (
       ""
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => addItem(item.id)}
                    className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-800 font-medium">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
