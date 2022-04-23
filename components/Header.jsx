import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import logo from "../public/page-image/logo.png";
import Fade from "react-reveal/Fade";


const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const navList = [
    { name: t.home, slug: "" },
    { name: t.about, slug: "about" },
  
    { name: t.album, slug: "album" },
    { name: t.recipe, slug: "recipe" },
    { name: t.blog, slug: "blog" },
    { name: t.contact, slug: "contact" }
  ];
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  function addHidden() {
    var myCanvas = document.getElementById("navbarSupportedContent");

    myCanvas.classList.remove("show");
  }
  return (
    <Fade>
    <header className="header-wrapper">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-lg-flex d-md-flex"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item-image">
              <Link href="/">
                <a onClick={addHidden}>
                  <img src={logo.src} className="logo" alt="logo" />
                </a>
              </Link>
            </li>
            {navList.map((list) => {
              return (
                <li className="nav-item " key={`${list.slug}`}>
                  <Link href={`/${list.slug}`} >
                    <a
                      onClick={addHidden}
                      className={
                        router.asPath === `/${list.slug}`
                          ? "nav-link active"
                          : "nav-link "
                      }
                    >
                      {list.name}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="select-language"
              >
                <option value="en">English</option>
                <option value="vie">Tiếng Việt</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </Fade>
  );
};

export default Header;
