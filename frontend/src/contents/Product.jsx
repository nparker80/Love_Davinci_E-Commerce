import './Product.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../redux/actions/itemActions';
import { addToCart } from '../redux/actions/cartActions';

const Product = ({ history }) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id))
    }
  }, [dispatch, product, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };


  return <div className="productscreen">
    {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
      <>
        <div className="productscreen__left">
          <div className="left__image">
            <img src={product.imageURL} alt={product.name} />
          </div>
          <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>
              Price: <span>${product.price}</span>
            </p>
            <p>Status: <span>{product.inventory > 0 ? "In Stock" : "Out of Stock"}</span></p>
            <p>Qty <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select></p>
            <p>
              <button type="button">Add to Cart</button>
            </p>
          </div>
        </div>
      </>
    )}
  </div>

}

export default Product