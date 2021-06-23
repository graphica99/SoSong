import React, { useEffect } from "react";

export default function PlayingCard(props) {
  let trackData = props.trackData;
  let isPlaying = false;
  let songIndex = 0;
  useEffect(() => {
    if (typeof window === "object") {
      var progressContainer = document.getElementById("progressContainer");
      var progress = document.getElementById("progress");
      var currentElem = document.getElementById("currentTime");
      var endTime = document.getElementById("endTime");
      let music = document.getElementById("music-player-main-audio");
      // isPlaying ? music.addEventListener("timeupdate", updateProgressBar) : "";
      music.addEventListener("timeupdate", updateProgressBar);
    }

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
  }, [props]);

  const displayPlayingCard = (data) => {
    document.getElementById("music-player-main").style.visibility = "visible";
    document.getElementById("music-player-main-items-h5").innerHTML =
      data.title;
    document.getElementById("music-player-main-items-h4").innerHTML =
      data.artist.name;
    document.getElementById("music-player-main-img").src = data.album.cover;
    document.getElementById("music-player-main-audio").src = data.preview;
  };

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
    fill='var(--play-color)'
  >
    <title>Play Circle</title>
    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z" />
  </svg>`;
    document.getElementById("music-player-main-audio").pause();
  };

  const play = () => {
    isPlaying ? pauseAudioController() : playAudioController();
  };

  const next = () => {
    if (songIndex >= trackData.length) {
      songIndex = 0;
    }
    displayPlayingCard(trackData[songIndex++]);
  };

  const prev = () => {
    if (songIndex <= 0) {
      songIndex = trackData.length - 1;
    }
    displayPlayingCard(trackData[songIndex--]);
  };

  const closeCard = () => {
    document.getElementById("music-player-main").style.visibility = "hidden";
  };

  return (
    <div className="music-player-main" id="music-player-main">
      <div className="music-player-main-image">
        <img
          src="/images/sarkodie.jpg"
          className="music-player-main-img"
          id="music-player-main-img"
        />
      </div>
      <div className="music-player-main-items">
        <h5
          className="music-player-main-items-h5"
          id="music-player-main-items-h5"
        ></h5>
        <h4
          className="music-player-main-items-h4"
          id="music-player-main-items-h4"
        ></h4>
        <div className="music-player-main-items-controls">
          <span onClick={() => prev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="music-player-main-items-controls-prev"
              viewBox="0 0 512 512"
            >
              <title>Play Skip Back</title>
              <path d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z" />
            </svg>
          </span>
          <span id="playPause" onClick={() => play()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="music-player-main-items-controls-play"
              viewBox="0 0 512 512"
              //   onClick={props.playAudio}
            >
              <title>Play Circle</title>
              <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z" />
            </svg>
          </span>
          <span onClick={() => next()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="music-player-main-items-controls-next"
              viewBox="0 0 512 512"
            >
              <title>Play Skip Forward</title>
              <path d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="music-player-main-items-controls-volume"
              viewBox="0 0 512 512"
            >
              <title>Volume High</title>
              <path
                d="M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160"
                fill="none"
                stroke="currentColor"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path d="M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z" />
            </svg>
          </span>
        </div>
        <div className="music-player-main-items-controls-progressMain">
          <audio src={props.audio} id="music-player-main-audio"></audio>
          <span
            className="music-player-main-items-controls-start"
            id="currentTime"
          >
            0:00
          </span>
          <div
            className="music-player-main-items-controls-progress"
            id="progressContainer"
          >
            <div
              className="music-player-main-items-controls-progressSub"
              id="progress"
            ></div>
          </div>
          <span className="music-player-main-items-controls-end" id="endTime">
            0:00
          </span>
        </div>
      </div>
      <span onClick={() => closeCard()} className="music-player-main-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="music-player-main-close-icon"
        >
          <title>Close</title>
          <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
        </svg>
      </span>
    </div>
  );
}
