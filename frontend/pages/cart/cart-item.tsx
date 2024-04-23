import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../src/context/shop-context";
import "./cart-item.css";

interface CartItemProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImage: string;
  };
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, productName, price, productImage } = props.data;
  const contextValue = useContext(ShopContext);

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={productImage} alt="Product Image" />
      </div>
      <div className="name">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="countHandler">
        <button
          onClick={() => contextValue!.removeFromCart(id)}
          className="minus"
        >
          -
        </button>
        <input
          type="number"
          value={contextValue!.cartItems[id] || 1}
          onChange={(e) =>
            contextValue!.updateCartItemCount(Number(e.target.value), id)
          }
        />
        <button onClick={() => contextValue!.addToCart(id)} className="plus">
          {" "}
          +
        </button>
      </div>
    </div>
  );
};
