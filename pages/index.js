import Header from "../components/includes/Header";
import MusicCard from "../components/includes/MusicCard";
import AlbumCard from "../components/includes/AlbumCard";
import PlayingCard from "../components/includes/PlayingCard";
import React, { Component } from "react";
import axios from "axios";
export default class index extends Component {
  static async getInitialProps() {
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
      },
    };
    let trackData;
    let albumData;
    let artistData;
    try {
      const response = await axios.request(options);
      const responseAlbum = await axios.request(optionsAlbum);
      const responseArtist = await axios.request(optionsArtist);
      trackData = response.data;
      albumData = responseAlbum.data;
      artistData = responseArtist.data;
    } catch (error) {
      console.log(error);
    }
    return { trackData, albumData, artistData };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var arr = this.props.artistData.data.slice(0, 3);
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
      var progressContainer = document.getElementById("progressContainer");
      var progress = document.getElementById("progress");
      var currentElem = document.getElementById("currentTime");
      var endTime = document.getElementById("endTime");
      let music = document.getElementById("music-player-main-audio");
      music.addEventListener("timeupdate", updateProgressBar);

      function updateProgressBar(e) {
        if (isPlaying) {
          const { duration, currentTime } = e.srcElement;
          // console.log(duration, currentTime);
          const progressPercentage = (currentTime / duration) * 100;
          progress.style.width = `${progressPercentage}%`;

          var durationMinute = Math.floor(duration / 60);
          var durationSeconds = Math.floor(duration % 60);
          if (durationSeconds) {
            endTime.innerHTML = `${durationMinute}:${durationSeconds}`;
          }

          var currentMinute = Math.floor(currentTime / 60);
          var currentSeconds = Math.floor(currentTime % 60);
          if (currentSeconds) {
            currentElem.innerHTML = `${currentMinute}:${currentSeconds}`;
          }
        }
      }
    };

    let songIndex = 0;
    const next = () => {
      if (songIndex >= this.props.trackData.data.length) {
        songIndex = 0;
      }
      displayPlayingCard(this.props.trackData.data[songIndex++]);
    };

    const prev = () => {
      if (songIndex <= 0) {
        songIndex = this.props.trackData.data.length - 1;
      }
      displayPlayingCard(this.props.trackData.data[songIndex--]);
    };

    let isPlaying = false;
    const playAudioController = () => {
      isPlaying = true;
      document.getElementById(
        "playPause"
      ).innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' className="music-player-main-items-controls-next" viewBox='0 0 512 512'><title>Pause</title><path d='M224 432h-80V80h80zM368 432h-80V80h80z'/></svg>`;
      document.getElementById("music-player-main-audio").play();
    };

    const pauseAudioController = () => {
      isPlaying = false;
      document.getElementById("playPause").innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      className="music-player-main-items-controls-play"
      viewBox="0 0 512 512"
      fill='#2D758A'
    >
      <title>Play Circle</title>
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z" />
    </svg>`;
      document.getElementById("music-player-main-audio").pause();
    };
    const play = () => {
      isPlaying ? pauseAudioController() : playAudioController();
    };
    const closeCard = () => {
      document.getElementById("music-player-main").style.visibility = "hidden";
    };

    // var progressContainer = document.getElementById("progressContainer");
    // var progress = document.getElementById("progress");
    // let music = document.getElementById("music-player-main-audio");

    // music.addEventListener("timeupdate", updateProgressBar);

    // function updateProgressBar(e) {
    //   if (isPlaying) {
    //     console.log(e);
    //   }
    // }
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
              {this.props.trackData.data.map((data) => (
                <MusicCard
                  onclick={() => displayPlayingCard(data)}
                  imageCover={data.album.cover}
                  trackTitle={data.title}
                  duration={data.duration}
                  artist={data.artist.name}
                />
              ))}
              {/* {console.log(this.props.trackData.data)} */}
            </div>
          </div>

          <div className="main__layout-main-top-album">
            <h3 className="main__layout-main-top-music-title">Top Album</h3>
            <div className="main__layout-main-top-album-container">
              {this.props.albumData.data.map((data) => (
                <AlbumCard
                  albumTitle={data.title}
                  albumArtist={data.artist.name}
                  albumImage={data.cover_medium}
                  // albumYear={data.year}
                />
              ))}
            </div>
          </div>

          <PlayingCard
            onclose={() => closeCard()}
            playAudio={() => play()}
            next={() => next()}
            prev={() => prev()}
            // pauseAudio={() => pauseAudioController()}
          />
        </main>
      </>
    );
  }
}
