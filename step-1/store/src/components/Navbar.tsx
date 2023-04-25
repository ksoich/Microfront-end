import logo from '../assets/logo.svg';
import shoppingCart from '../assets/cart-shopping-solid.svg';

import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className="bg-blue-900 px-12 relative flex flex-wrap items-center justify-between py-4">
      <Link to="/">
        <img src={logo} alt="store" className="h-10" />
      </Link>
      <ul className="align-items-center">
        <li className="nav-item ml-5">
          <Link to="/Product" className="nav-link text-mainWhite text-lg font-medium uppercase text-white pl-4">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/Cart" className="ml-auto">
        <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-lg focus:outline-none hover:bg-gray-700 flex flex-wrap">
          <img src={shoppingCart} alt="shopping cart" className="h-6 pr-2 m-auto" />
          <h4 className="text-lg">My Cart</h4>
        </button>
      </Link>
    </nav>
  );
};
