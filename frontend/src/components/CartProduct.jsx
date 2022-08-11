import './CartProduct.scss';
import { Link } from 'react-router-dom';

const CartProduct = () => {
  return (
    <div className="cartproduct">
      <div className="cartproduct__image">
        <img src="https://images.unsplash.com/photo-1535294435445-d7249524ef2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwdG95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="purchased product" />
      </div>
      <Link to={`/product/${111}`} className="cartproduct__name">
        <p>Product Name</p>
      </Link>
      <p className="cartproduct__price">$14.99</p>
      <select className="cartproduct__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartproduct__delete">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartProduct