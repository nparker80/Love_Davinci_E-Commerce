import './Product.scss';
const Product = () => {
  return <div className="productscreen">
    <div className="productscreen__left">
      <div className="left__image">
        <img src="https://images.unsplash.com/photo-1535294435445-d7249524ef2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwdG95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="product name" />
      </div>
      <div className="left__info">
        <p className="left__name">Dog Bone</p>
        <p>Price: $14.99</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorem corrupti soluta optio quasi perspiciatis!</p>
      </div>
    </div>
    <div className="productscreen__right">
      <div className="right__info">
        <p>
          Price: <span>$14.99</span>
        </p>
        <p>Status: <span>In Stock</span></p>
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
  </div>
}

export default Product