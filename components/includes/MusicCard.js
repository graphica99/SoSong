import React from "react";
import axios from "axios";

export default function MusicCard(props) {
  return (
    <div className="main__layout-main-top-music-card main__layout-main-top-music-card">
      <div className="main__layout-main-top-music-card-icons">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            className="main__layout-main-top-music-card-icons-icon"
          >
            <polygon points="496 496 16 496 16 16 48 16 48 464 496 464 496 496" />
            <path d="M192,432H80V208H192Z" />
            <path d="M336,432H224V160H336Z" />
            <path d="M479.64,432h-112V96h112Z" />
          </svg>
        </span>
        <span>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="main__layout-main-top-music-card-icons-icon"
          >
            <path
              fill-rule="evenodd"
              d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
            />
          </svg>
        </span>
      </div>
      <div className="main__layout-main-top-music-card-trackinfo">
        <div className="main__layout-main-top-music-card-img">
          <img
            src={props.imageCover}
            className="main__layout-main-top-music-card-image"
          />
        </div>
        <div className="main__layout-main-top-music-card-title">
          <h4>{props.trackTitle}</h4>
          <h5>{props.artist}</h5>
        </div>
      </div>
      <div className="main__layout-main-top-music-card-time">
        <span>{props.duration}</span>
      </div>
    </div>
  );
}
