import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import SideBar from "../includes/SideBar";
//? main layout contains things like the header, footer , nav etc;

export default class MainLayout extends Component {
  render() {
    return (
      <body>
        <div className="main__layout">
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Allura&family=Mr+Dafoe&display=swap"
              rel="stylesheet"
            />
          </Head>
          <SideBar />
          {this.props.children}
        </div>
      </body>
    );
  }
}
