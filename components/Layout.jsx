import React, { useState, useEffect } from "react";
import Header from "./Header";
import Fade from "react-reveal/Fade";

function Layout({ children }) {
  useEffect(() => {}, []);
  return (
    <div className="page-wrapper">
      <Fade duration={1500} delay={100}>
        <div className="glass">
          <div className="row">
            <div className=" header-wrappercol-lg-3 col-md-3 mobile-nav">
              <Header />
            </div>

            <main className="col-lg-9 col-md-9 main">{children}</main>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Layout;
