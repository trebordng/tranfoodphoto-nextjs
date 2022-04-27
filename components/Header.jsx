import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import logo from "../public/page-image/logo.png";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const navList = [
    { name: t.home, slug: "" },
    { name: t.about, slug: "about" },
    { name: t.recipe, slug: "recipe" },
    { name: t.blog, slug: "blog" },
    { name: t.contact, slug: "contact" },
  ];
  const albumList = [
    { name: t.food, slug: "food" },
    { name: t.drink, slug: "drink" },
    { name: t.lifestyle, slug: "lifestyle" },
    { name: t.action, slug: "action" },
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
                  <div className="logo">
                    <Image
                      alt="logo"
                      src={logo.src}
                      layout="fill"
                      objectFit="cover"
                      quality={80}
                    />
                  </div>
                </a>
              </Link>
            </li>
            {navList.map((list) => {
              return (
                <li
                  className={
                    router.asPath === `/${list.slug}`
                      ? "nav-item active"
                      : "nav-item"
                  }
                  key={`${list.name}`}
                >
                  <Link href={`/${list.slug}`}>
                    <a onClick={addHidden}>{list.name}</a>
                  </Link>
                </li>
              );
            })}
            <li
              className={
                router.asPath === `/album`
                  ? "nav-item btn-group active dropup"
                  : "nav-item btn-group dropup"
              }
            >
              <Link href="/album">
                <a
                  onClick={addHidden}
                  className={router.asPath === `/album` ? "sub-active" : ""}
                >
                  <span type="button">{t.album}</span>
                </a>
              </Link>

              <div
                type="button"
                className="dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></div>

              <div className="dropdown-menu">
                {albumList.map((list) => {
                  return (
                    <Link href={`/${list.slug}`} key={`/${list.name}`}>
                      <a
                        onClick={addHidden}
                        className={
                          router.asPath === `/${list.slug}`
                            ? "active dropdown-item"
                            : "dropdown-item"
                        }
                      >
                        {list.name}
                      </a>
                    </Link>
                  );
                })}
                <Link href="https://tranphotographicart.com/">
                <a
                  className="dropdown-item"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t.art}
                </a>
              </Link>
              </div>
              
            </li>
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
  );
};

export default Header;
