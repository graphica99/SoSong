import React from "react";
import App, { Container } from "next/app";
import MainLayout from "../components/layouts/MainLayout";
import NProgress from "nprogress";
import Router from "next/router";
import "../styles/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    if (typeof window === "object") {
      var spinner = document.getElementById("main__layout-show-spinner");
    }
    Router.events.on("routeChangeStart", (url) => {
      // alert("my spinner");
      spinner.style.display = "flex";
      console.log(`Loading: ${url}`);
      NProgress.start();
    });
    Router.events.on(
      "routeChangeComplete",
      () => (spinner.style.display = "none")
    );
    Router.events.on(
      "routeChangeError",
      () => (spinner.style.display = "none")
    );

    const { Component, pageProps } = this.props;
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default MyApp;
