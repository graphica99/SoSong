import React, { useState, useEffect } from "react";
import Head from "next/head";
//? main layout contains things like the header, footer , nav etc;
const MainLayout = (props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Mr+Dafoe&display=swap"
          rel="stylesheet"
        />
      </Head>
      {props.children}
    </>
  );
};

export default MainLayout;
