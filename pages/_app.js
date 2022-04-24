import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import { Layout } from "../components";
import NoSsr from "../components/NoSsr";
import "../styles/landing-page.scss";
import "../styles/header.scss";
import "../styles/about.scss";
import "../styles/album.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <NoSsr>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NoSsr>
  );
}

export default MyApp;
