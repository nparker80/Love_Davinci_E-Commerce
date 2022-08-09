import './Sidebar.scss';
import { Link } from 'react-router-dom';
const Sidebar = ({ show, Click }) => {
  const sidebarClass = ["sidebar"];

  if (show) {
    sidebarClass.push("show");
  }

  return < div className={sidebarClass.join(" ")}>
    <ul className="sidebar__links" onClick={Click}>

      <li>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span>
            Cart <span className="sidebar__cartbadge">0</span>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">Shop</Link>
      </li>
    </ul>
  </div >;
};

export default Sidebar