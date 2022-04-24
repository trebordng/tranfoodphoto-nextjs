import React from "react";
import Image from "next/image";

const DisplayImage = (props) => {
  return (
    <figure className={props.outerClass}>
      <Image
        alt={props.alt}
        src={props.src}
        layout="fill"
        objectFit="cover"
        className="image-border"
        quality={80}
      />
      <figcaption className="image-text">{props.name}</figcaption>

      <div className="image-hover"></div>
    </figure>
  );
};

export default DisplayImage;
