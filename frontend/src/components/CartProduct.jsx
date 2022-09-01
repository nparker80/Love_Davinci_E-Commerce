import "./CartProduct.scss";
import { Link } from 'react-router-dom';

const CartProduct = (item, qtyChangeHandler) => {
  return (
    <div className="cartproduct">
      <div className="cartproduct__image">
        <img src={item.imageURL} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartproduct__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartproduct__price">${item.price}</p>
      <select className="cartproduct__select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
        {[...Array(item.inventory).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>{x + 1}</option>
        ))}
      </select>
      <button className="cartproduct__delete">
        <i className="fas fa-trash"></i>
      </button>
    </div>)
}

export default CartProduct