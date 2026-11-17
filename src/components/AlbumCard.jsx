import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album, onAddToCart }) => {
  // check if the album is being displayed in the cart
  if (!album) return null;

  return (
    <article className="album-card">
      <Link className="album-img-link" to={`/album/${album.id}`}>
        <img
          className="album-image"
          src={album.image}
          alt={album.name}
          loading="lazy"
        />
      </Link>

      <div className="album-body">
        <span className="album-catergory">{album.category}</span>
        <h3 className="album-title">
          <Link to={`/album/${album.id}`}>{album.name}</Link>
        </h3>
        <p className="album-price">
          $
          {typeof album.price === "number"
            ? album.price.toFixed(2)
            : "Contact Customer Service"}
        </p>
        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={() => onAddToCart(album)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default AlbumCard;
