import React from "react";
import Header from "../components/includes/Header";
import axios from "axios";
import Link from "next/link";
const Artist = ({ artistData }) => {
  return (
    <>
      <Header>
        <h3 className="main__layout-header-text">Listen to the best</h3>
        <div className="song__main-header">
          <img
            src={artistData[0].picture_medium}
            className="song__main-header-image"
          />
          <div className="song__main-texts">
            <h4 className="song__main-texts-h4">{`#${artistData[0].position}`}</h4>
            <h2 className="song__main-texts-h2">{artistData[0].name}</h2>
            <Link href={`/artist_single?user_id=${artistData[0].id}`}>
              <button
                className="song__main-texts-button"
                //   onClick={() => displayPlayingCard(artistData[0])}
              >
                PLAY
              </button>
            </Link>
          </div>
        </div>
      </Header>
      <main className="main__layout-main">
        <div className="main__layout-main-top-music">
          <h3 className="main__layout-main-top-music-title">Top Albums</h3>
          <div className="main__layout-main-top-container-grid">
            {artistData.slice(1, artistData.length).map((data) => (
              <Link href={`/artist_single?user_id=${data.id}`}>
                <div className="main__layout-main-top-album-card">
                  <img
                    className="main__layout-main-top-album-card-image"
                    src={data.picture_medium}
                  />
                  <h3 className="main__layout-main-top-album-card-title">
                    {data.name}
                  </h3>
                  <h4 className="main__layout-main-top-album-card-artist-title">
                    {`#${data.position}`}
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
//   url: "https://api.deezer.com/chart/0/artists",
//   headers: {
//     "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
//     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//   },
// };

// Artist.getInitialProps = async (ctx) => {
//   const response = await axios.request(options);
//   const artistData = await response.data;
//   return { artistData: artistData.data };
// };

export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://api.deezer.com/chart/0/artists",
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  const artistData = await response.data;
  return { props: { artistData: artistData.data } };
}

export default Artist;
