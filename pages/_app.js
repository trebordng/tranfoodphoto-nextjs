import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import { Layout } from "../components";
import "../styles/landing-page.scss";
import "../styles/header.scss";
import "../styles/about.scss";
import "../styles/album.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
   
      <Layout>
        <Component {...pageProps} />
      </Layout>
   
  );
}

export default MyApp;
