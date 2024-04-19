import { Products } from "../../src/products";
import { ShopContext } from "../../src/context/shop-context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const contextValue = useContext(ShopContext);
  const totalAmount = contextValue!.getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (contextValue!.cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/thankyou")}> Checkout </button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;
