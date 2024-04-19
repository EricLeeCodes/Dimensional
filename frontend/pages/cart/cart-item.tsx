import { useContext } from "react";
import { ShopContext } from "../../src/context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const contextValue = useContext(ShopContext);

  return (
    <div>
      <img src={productImage} />
      <div className="description"></div>
      <p>
        <b>{productName}</b>
      </p>
      <p> ${price}</p>
      <div className="countHandler">
        <button onClick={() => contextValue!.removeFromCart(id)}> - </button>
        <input
          value={contextValue!.cartItems[id]}
          onChange={(e) =>
            contextValue!.updateCartItemCount(Number(e.target.value), id)
          }
        />
        <button onClick={() => contextValue!.addToCart(id)}> + </button>
      </div>
    </div>
  );
};
