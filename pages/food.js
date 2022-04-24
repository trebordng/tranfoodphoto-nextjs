import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import { getFoodImages } from "../services";
import {AlbumSubpage} from "../components";

const Food = ({ images }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  return <AlbumSubpage title={t.food} array={images} />;
};
export async function getStaticProps() {
  const images = (await getFoodImages()) || [];

  return {
    props: { images },
  };
}
export default Food;
