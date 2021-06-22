import React from "react";
import Header from "../components/includes/Header";
import MusicCard from "../components/includes/MusicCard";
import PlayingCard from "../components/includes/PlayingCard";
import GenreCard from "../components/includes/AlbumCard";
import axios from "axios";
const Songs = ({ trackData, genreData }) => {
  const displayPlayingCard = (data) => {
    document.getElementById("music-player-main").style.visibility = "visible";
    document.getElementById("music-player-main-items-h5").innerHTML =
      data.title;
    document.getElementById("music-player-main-items-h4").innerHTML =
      data.artist.name;
    document.getElementById("music-player-main-img").src = data.album.cover;
    document.getElementById("music-player-main-audio").src = data.preview;
  };
  return (
    <>
      <Header>
        <h3 className="main__layout-header-text">
          What is your taste of music?
        </h3>
        <div className="song__main-header">
          <img
            src={trackData[0].album.cover_medium}
            className="song__main-header-image"
          />
          <div className="song__main-texts">
            <h4 className="song__main-texts-h4">{trackData[0].title}</h4>
            <h2 className="song__main-texts-h2">{trackData[0].artist.name}</h2>
            <button
              className="song__main-texts-button"
              onClick={() => displayPlayingCard(trackData[0])}
            >
              PLAY
            </button>
          </div>
        </div>
      </Header>
      <main className="main__layout-main">
        <div className="main__layout-main-top-music">
          <h3 className="main__layout-main-top-music-title">Top music</h3>
          <div className="main__layout-main-top-container">
            {trackData.map((data) => (
              <MusicCard
                onclick={() => displayPlayingCard(data)}
                imageCover={data.album.cover}
                trackTitle={data.title}
                duration={data.duration}
                artist={data.artist.name}
              />
            ))}
          </div>
        </div>

        <div className="main__layout-main-top-album">
          <h3 className="main__layout-main-top-music-title">Genre</h3>
          <div className="main__layout-main-top-album-container">
            {genreData.map((data) => (
              <GenreCard
                albumTitle={data.name}
                albumArtist={data.name}
                albumImage={data.picture_medium}
              />
            ))}
          </div>
        </div>

        <PlayingCard trackData={trackData} />
      </main>
    </>
  );
};

const options = {
  method: "GET",
  url: "https://api.deezer.com/chart/0/tracks",
  headers: {
    "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const genreOptions = {
  method: "GET",
  url: "https://api.deezer.com/genre",
  headers: {
    "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
Songs.getInitialProps = async (ctx) => {
  const response = await axios.request(options);
  const trackData = await response.data;
  const genreResponse = await axios.request(genreOptions);
  const genreData = await genreResponse.data;
  return { trackData: trackData.data, genreData: genreData.data };
};

export default Songs;
