import Header from "../components/includes/Header";
import MusicCard from "../components/includes/MusicCard";
import AlbumCard from "../components/includes/AlbumCard";
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

  render() {
    return (
      <>
        <Header>
          <h3 className="main__layout-header-text">Top Artist</h3>
          <div className="main__layout-header-images">
            {this.props.artistData.data.slice(0, 3).map((data) => (
              <div className="main__layout-header-image-container">
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

              {/* {console.log(this.props.albumData.data)} */}
              {/* <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard /> */}
            </div>
          </div>
        </main>
      </>
    );
  }
}
