import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../../src/products";
import { ShopContext } from "../../src/context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";

function Cart() {
  const contextValue = useContext(ShopContext);
  const totalAmount = contextValue?.getTotalCartAmount() || 0;
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {totalAmount > 0 ? (
          Products.map((product) => {
            const quantity = contextValue?.cartItems[product.id] || 0;
            if (quantity > 0) {
              return <CartItem key={product.id} data={product} quantity={quantity} />;
            }
            return null;
          })
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      {totalAmount > 0 && (
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/thankyou")}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
