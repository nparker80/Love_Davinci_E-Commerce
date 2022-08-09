import './Product.scss'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div className="product">
      <img src="https://images.unsplash.com/photo-1535294435445-d7249524ef2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwdG95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="product name" />
      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos corrupti nobis, sunt laborum minus laudantium porro fugit sapiente iusto culpa mollitia labore esse maxime est! Voluptates delectus nobis nihil distinctio.
        </p>
        <p className="info__price">$14.99</p>
        <Link to={`/product/${1111}`} className="product__button">View</Link>
      </div>
    </div>
  )
}

export default Product