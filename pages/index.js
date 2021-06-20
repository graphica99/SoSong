import React from "react";
import Header from "../components/includes/Header";
import MusicCard from "../components/includes/MusicCard";
import AlbumCard from "../components/includes/AlbumCard";
export default function Index() {
  return (
    <>
      <Header>
        <h3 className="main__layout-header-text">Top Artist</h3>
        <div className="main__layout-header-images">
          <div className="main__layout-header-image-container">
            <img
              src="/images/sarkodie.jpg"
              className="main__layout-header-image"
            />
            <div className="main__layout-header-image-overlay">
              <span className="main__layout-header-image-overlay-text">
                Sarkodie
              </span>
            </div>
          </div>
          <div className="main__layout-header-image-container">
            <img
              src="/images/kwesi-arthur.jpg"
              className="main__layout-header-image main__layout-header-image-focused"
            />
            <div className="main__layout-header-image-overlay">
              <span className="main__layout-header-image-overlay-text">
                Kwesi Arthur
              </span>
            </div>
          </div>
          <div className="main__layout-header-image-container">
            <img
              src="/images/stoneboy.jpg"
              className="main__layout-header-image"
            />
            <div className="main__layout-header-image-overlay">
              <span className="main__layout-header-image-overlay-text">
                Stoneboy
              </span>
            </div>
          </div>
        </div>
      </Header>
      <main className="main__layout-main">
        <div className="main__layout-main-top-music">
          <h3 className="main__layout-main-top-music-title">Top music</h3>
          <div className="main__layout-main-top-container">
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </div>
        </div>

        <div className="main__layout-main-top-album">
          <h3 className="main__layout-main-top-music-title">Top Album</h3>
          <div className="main__layout-main-top-album-container">
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </div>
        </div>
      </main>
    </>
  );
}
