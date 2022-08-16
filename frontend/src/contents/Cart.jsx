import "./Cart.scss";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  return <div className="cartscreen">
    <div className="cartscreen__left">
      <h2>Shopping Cart</h2>
      <CartProduct />
    </div>
    <div className="cartscreen__right">
      <div className="cartscreen__info">
        <p>Subtotal (0) items</p>
        <p>$14.99</p>
      </div>
      <div>
        <button>Proceed to Checkout</button>
      </div>

    </div>
  </ div>
}

export default Cart