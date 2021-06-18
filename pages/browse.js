import React from "react";
import Logo from "../public/svgs/play-sharp.svg";
import Link from "next/link";
export default function browse() {
  return (
    <div className="main__layout">
      <nav className="main__layout-sidebar">
        <div className="main__layout-nav">
          <span className="main__layout-sidebar--logo u-mb-small">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="main__layout-svg-logo"
            >
              <title>ionicons-v5-c</title>
              <path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" />
            </svg>
          </span>
          <ul className="main__layout-nav-container">
            <li className="main__layout-nav-item active">
              <Link href="/browse">
                <a href="">Browse</a>
              </Link>
            </li>
            <li className="main__layout-nav-item">
              <Link href="/browse">
                <a href="">Radio</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="main__layout-header-4">MY MUSIC</h4>
          <ul className="main__layout-main-mymusic-nav">
            <li className="main__layout-main-mymusic-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className="main__layout-svg"
              >
                <title>ionicons-v5-i</title>
                <circle cx="256" cy="256" r="32" />
                <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,336a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,336Z" />
              </svg>
              <a href="#">Songs</a>
            </li>
            <li className="main__layout-main-mymusic-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className="main__layout-svg"
              >
                <title>ionicons-v5-a</title>
                <rect x="128" y="64" width="256" height="32" />
                <rect x="96" y="112" width="320" height="32" />
                <path d="M464,448H48V160H464Z" />
              </svg>
              <a href="#">Album</a>
            </li>
            <li className="main__layout-main-mymusic-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className="main__layout-svg"
              >
                <title>ionicons-v5-j</title>
                <path d="M256,256A112,112,0,1,0,144,144,112,112,0,0,0,256,256Zm0,32c-69.42,0-208,42.88-208,128v64H464V416C464,330.88,325.42,288,256,288Z" />
              </svg>
              <a href="#">Artist</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="main__layout-header">Header</header>
      <main className="main__layout-main">Main</main>
    </div>
  );
}
