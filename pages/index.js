import Header from "../components/includes/Header";
import MusicCard from "../components/includes/MusicCard";
import AlbumCard from "../components/includes/AlbumCard";
import PlayingCard from "../components/includes/PlayingCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Index = ({ trackData, albumData, artistData }) => {
  var arr = artistData.slice(0, 3);
  var index = [1, 0, 2];
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes[index[i]] = arr[i];
  }

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
        <h3 className="main__layout-header-text">Top Artist</h3>
        <div className="main__layout-header-images">
          {arrRes.map((data, i) => (
            <div
              className={
                i === 1
                  ? "main__layout-header-image-container main__layout-header-image-focused"
                  : "main__layout-header-image-container"
              }
            >
              {/* {console.log(data)} */}
              <img
                src={data.picture_medium}
                className="main__layout-header-image"
              />
              <div className="main__layout-header-image-overlay">
                <span className="main__layout-header-image-overlay-text">
                  {data.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Header>
      <main className="main__layout-main">
        <div className="main__layout-main-top-music">
          <h3 className="main__layout-main-top-music-title">Top music</h3>
          <div className="main__layout-main-top-container">
            {trackData.map((data, i) => {
              return (
                <MusicCard
                  id={data.id}
                  onclick={() => displayPlayingCard(data)}
                  imageCover={data.album.cover}
                  trackTitle={data.title}
                  duration={data.duration}
                  artist={data.artist.name}
                />
              );
            })}
          </div>
        </div>

        <div className="main__layout-main-top-album">
          <h3 className="main__layout-main-top-music-title">Top Album</h3>
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

        <PlayingCard trackData={trackData} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://api.deezer.com/chart/0/tracks",
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const optionsAlbum = {
    method: "GET",
    url: "https://api.deezer.com/chart/0/albums",
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const optionsArtist = {
    method: "GET",
    url: "https://api.deezer.com/chart/0/artists",
    headers: {
      "x-rapidapi-key": "f96d3895f5msha2b8b703677b70ep1418a5jsn25b4d8e370f3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  };
  const response = await axios.request(options);
  const responseAlbum = await axios.request(optionsAlbum);
  const responseArtist = await axios.request(optionsArtist);
  let trackData = response.data;
  let albumData = responseAlbum.data;
  let artistData = responseArtist.data;
  return {
    props: {
      trackData: trackData.data,
      albumData: albumData.data,
      artistData: artistData.data,
    },
  };
}
export default Index;
