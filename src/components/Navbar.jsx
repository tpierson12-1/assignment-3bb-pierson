import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-logo" to="/">
          {" "}
          ⚫ Vinyl Valut
        </Link>
      </div>
      <nav className="nav-bar">
        <Link className="nav-link" to="/">
          {" "}
          Catalog{" "}
        </Link>
        <button
          type="button"
          className="btn-cart-badge"
          onClick={onOpenCart}
          aria-label={`Your cart with ${cartCount} albums`}
        >
          🛒 My Cart
          {cartCount > 0 && <span className="badge-pill">{cartCount}</span>}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
