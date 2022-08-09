import './Home.scss';
import Product from "../components/Product";

const Home = () => {
  return <div className="home">
    <h2 className="home__title">Latest Products</h2>
    <div className="home__products">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />

    </div>
  </div>
};

export default Home