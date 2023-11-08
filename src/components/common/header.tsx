import { CartIcon, Logo } from "assets/icons";
import AuthIcon from "assets/icons/auth";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </ul>

        <div className="nav_btns">
          <div className="nav_cart">
            <NavLink to="/cart">
              Cart
              <span className="cart-container">
                <CartIcon />
                <span className="cart-value">0</span>
              </span>
            </NavLink>
          </div>

          <button className="nav_auth_btn">
            Login
            <AuthIcon />
          </button>
        </div>
      </nav>
    </div>
  );
}
