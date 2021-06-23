import React, { useEffect, useState } from "react";
import Header from "../components/includes/Header";
import MusicCard from "../components/includes/MusicCard";
import PlayingCard from "../components/includes/PlayingCard";
import AlbumCard from "../components/includes/AlbumCard";
import axios from "axios";
import millify from "millify";
import Link from "next/link";

const Search = ({ trackData, songData, albumData }) => {
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
      {trackData.length !== 0 ? (
        <Header>
          <h3 className="main__layout-header-text">
            What is your taste of music?
          </h3>
          <div className="song__main-header">
            <img
              src={trackData[0].picture_medium}
              className="song__main-header-image"
            />
            <div className="song__main-texts">
              <h2 className="song__main-texts-h2">{trackData[0].name}</h2>
              <h4 className="song__main-texts-h4">
                {millify(trackData[0].nb_fan, {
                  precision: 2,
                  lowercase: false,
                }) + " fans"}
              </h4>
              <Link href={`/artist_single?user_id=${trackData[0].id}`}>
                <button className="song__main-texts-button">PLAY</button>
              </Link>
            </div>
          </div>
        </Header>
      ) : (
        <Header>
          <h3 className="main__layout-header-text">Sorry! No match found</h3>
          <div className="song__main-header"></div>
        </Header>
      )}
      <main className="main__layout-main">
        <div className="main__layout-main-top-music">
          <h3 className="main__layout-main-top-music-title">
            {trackData.length !== 0 ? "Top Music" : ""}
          </h3>
          <div className="main__layout-main-top-container">
            {songData.slice(15, songData.length).map((data) => (
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
          <h3 className="main__layout-main-top-music-title">
            {trackData.length !== 0 ? "Top Album" : ""}
          </h3>
          <div className="main__layout-main-top-album-container">
            {albumData.map((data) => (
              <AlbumCard
                albumTitle={data.title}
                albumArtist={data.artist.name}
                albumImage={data.cover_medium}
              />
            ))}
          </div>
        </div>
        <PlayingCard trackData={songData} />
      </main>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const search_query = ctx.query.search_query;
  const options = {
    method: "GET",
    url: `https://api.deezer.com/search/artist?q=${search_query}`,
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const songsOptions = {
    method: "GET",
    url: `https://api.deezer.com/search/track?q=${search_query}`,
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const albumOptions = {
    method: "GET",
    url: `https://api.deezer.com/search/album?q=${search_query}`,
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  const songsResponse = await axios.request(songsOptions);
  const albumResponse = await axios.request(albumOptions);

  const trackData = await response.data;
  const songData = await songsResponse.data;
  const albumData = await albumResponse.data;

  return {
    props: {
      trackData: trackData.data,
      songData: songData.data,
      albumData: albumData.data,
    },
  };
}

export default Search;
