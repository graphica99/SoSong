import React from "react";
import Header from "../components/includes/Header";
import axios from "axios";
import Link from "next/link";

const Album = ({ albumData }) => {
  return (
    <>
      <Header>
        <h3 className="main__layout-header-text">Get the best Albums</h3>
        <div className="song__main-header">
          <img
            src={albumData[0].cover_medium}
            className="song__main-header-image"
          />
          <div className="song__main-texts">
            <h4 className="song__main-texts-h4">{albumData[0].title}</h4>
            <h2 className="song__main-texts-h2">{albumData[0].artist.name}</h2>
            <Link href={`/album_songs?album_id=${albumData[0].id}`}>
              <button className="song__main-texts-button">PLAY</button>
            </Link>
          </div>
        </div>
      </Header>
      <main className="main__layout-main">
        <div className="main__layout-main-top-music">
          <h3 className="main__layout-main-top-music-title">Top Artist</h3>
          <div className="main__layout-main-top-container-grid">
            {albumData.slice(1, albumData.length).map((data) => (
              <Link href={`/album_songs?album_id=${data.id}`}>
                <div className="main__layout-main-top-album-card">
                  <img
                    className="main__layout-main-top-album-card-image"
                    src={data.cover_medium}
                  />
                  <h3 className="main__layout-main-top-album-card-title">
                    {data.title}
                  </h3>
                  <h4 className="main__layout-main-top-album-card-artist-title">
                    {data.artist.name}
                  </h4>
                  <h5 className="main__layout-main-top-album-card-year"></h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

// const options = {
//   method: "GET",
//   url: "https://api.deezer.com/chart/0/albums",
//   headers: {
//     "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
//     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//   },
// };

// Album.getInitialProps = async (ctx) => {
//   const response = await axios.request(options);
//   const albumData = await response.data;
//   return { albumData: albumData.data };
// };

export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://api.deezer.com/chart/0/albums",
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  const albumData = await response.data;
  return { props: { albumData: albumData.data } };
}

export default Album;
