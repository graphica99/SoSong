import React from "react";

export default function AlbumCard() {
  return (
    <div className="main__layout-main-top-album-card">
      <img
        className="main__layout-main-top-album-card-image"
        src="/images/header-background.jpg"
      />
      <h3 className="main__layout-main-top-album-card-title">NO PRESSURE</h3>
      <h4 className="main__layout-main-top-album-card-artist-title">
        Sarkodie
      </h4>
      <h5 className="main__layout-main-top-album-card-year">2021</h5>
    </div>
  );
}
