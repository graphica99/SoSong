import React, { Component } from "react";
export default class AlbumCard extends Component {
  render() {
    return (
      <div className="main__layout-main-top-album-card">
        <img
          className="main__layout-main-top-album-card-image"
          src={this.props.albumImage}
        />
        <h3 className="main__layout-main-top-album-card-title">
          {this.props.albumTitle}
        </h3>
        <h4 className="main__layout-main-top-album-card-artist-title">
          {this.props.albumArtist}
        </h4>
        <h5 className="main__layout-main-top-album-card-year">
          {this.props.albumYear}
        </h5>
      </div>
    );
  }
}
