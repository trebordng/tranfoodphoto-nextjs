import React, { useState, useEffect } from "react";
import Header from "./Header";
import Fade from "react-reveal/Fade";

function Layout({ children }) {
  useEffect(() => {}, []);
  return (
    <div className="page-wrapper">
      <Fade duration={1000} delay={1000}>
        <div className="glass">
          <div className="row">
            <div className=" header-wrappercol-lg-3 col-md-3 mobile-nav">
              <Header />
            </div>

            <section className="col-lg-9 col-md-9 main">{children}</section>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Layout;
