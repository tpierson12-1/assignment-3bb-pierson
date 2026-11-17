import React, { useState } from "react";
import AlbumCard from "../components/AlbumCard";

function CatalogAlbum({ albums, onAddToCart }) {
  const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  // check if the data ever goes missing
  const validAlbums = albums || [];

  const filterAlbums =
    selectedGenre === "All"
      ? validAlbums
      : validAlbums.filter((a) => a.genre === selectedGenre);

  return (
    <div className="catalog-container">
      <header className="catalog-hero">
        <h1>Crafted Unique Albums</h1>
        <p>Made by very talented artists.</p>
      </header>

      <div className="filter-bar">
        {genres.map((cat) => {
          <button
            key={cat}
            className={`filter-pill ${selectedGenre === cat ? "active" : ""}`}
            onClick={() => setSelectedGenre(cat)}
          >
            {cat}
          </button>;
        })}
      </div>

      <div className="album-grid">
        {filterAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default CatalogAlbum;
