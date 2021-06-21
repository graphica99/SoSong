import React from "react";

export default function PlayingCard(props) {
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
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="music-player-main-items-controls-prev"
              viewBox="0 0 512 512"
            >
              <title>Play Skip Back</title>
              <path d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="music-player-main-items-controls-play"
              viewBox="0 0 512 512"
            >
              <title>Play Circle</title>
              <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z" />
            </svg>
          </span>
          <span>
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
          <span className="music-player-main-items-controls-start">0:00</span>
          <div className="music-player-main-items-controls-progress">
            <div className="music-player-main-items-controls-progressSub"></div>
          </div>
          <span className="music-player-main-items-controls-end">2:00</span>
        </div>
      </div>
      <span className="music-player-main-close" onClick={props.onclose}>
        X
      </span>
    </div>
  );
}
