import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const AlbumGenrePage = ({ albums, OnAddToCart }) => {
  const { albumId } = useParams();
  const [qty, setQty] = useState(1);

  const album = albums.find((a) => a.id === albumId);

  // check if the album is missing
  if (!album) {
    return (
      <div className="detail-error">
        <h2>Album is not found</h2>
        <Link className="btn btn-secondary" to="/">
          Return the Main Page
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <nav className="breadcrumb">
        <Link to="/">Catalog</Link> &gt; <span>{album.name}</span>
      </nav>

      <div className="detail-grid">
        <img src={album.image} alt={album.name} className="detail-img" />

        <div className="detail-info">
          <span className="album-genre">{album.genre}</span>
          <h1 className="detail-title">{album.name}</h1>
          <p className="detail-price">{album.price.toFixed(2)}</p>
          <p className="detail-desc">{album.description}</p>
          <div className="stock-tag">
            {album.stock > 0
              ? `✔️ In Stock (${album.stock} units available)`
              : "Out of Stock"}
          </div>
        </div>

        <div className="detail-actions">
          <div className="qty-input-group">
            <label htmlFor="qty-input-group">Quantity: </label>
            <input
              type="number"
              id="detail-qty"
              min="1"
              max={album.stock}
              value={qty}
              onChange={(e) =>
                setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
              }
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => OnAddToCart(album, qty)}
          >
            Add {qty} to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumGenrePage;
