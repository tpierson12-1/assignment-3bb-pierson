import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import AlbumGenrePage from "./pages/AlbumGenrePage";
import CatalogAlbum from "./pages/CatalogAlbum";
import CheckoutAlbum from "./pages/CheckoutAlbum";
import { ALBUMS } from "./data/albums";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isOpenCart, setIsCartOpen] = useState(false);

  // add event handler to albums to the cart
  const handleAddToCart = (album, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === album.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === album.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevCart, { ...album, quantity }];
    });
    setIsCartOpen(true);
  };

  // update the albums in the cart
  const handleUpdateQuantity = (albumId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === albumId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  // remove albums from the cart
  const handleRemoveFromCart = (albumId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== albumId));
  };

  // clear the albums from the cart
  const handleClearCart = () => {
    setCart([]);
  };

  // subtotal of the albums in the cart
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      <NavBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <CatalogAlbum albums={ALBUMS} onAddToCart={handleAddToCart} />
            }
          />

          <Route
            path="/album/:albumId"
            element={
              <AlbumGenrePage albums={ALBUMS} OnAddToCart={handleAddToCart} />
            }
          />

          <Route
            path="/checkout"
            element={
              <CheckoutAlbum cart={cart} onClearCart={handleClearCart} />
            }
          />
        </Routes>
      </main>

      <CartDrawer
        cart={cart}
        isOpen={isOpenCart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
