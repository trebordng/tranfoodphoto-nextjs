import React from "react";
import Image from "next/image";

const DisplayImage = (props) => {
  return (
    <div className={props.outerClass}>
      <Image
        alt={props.name}
        src={props.src}
        layout="fill"
        objectFit="cover"
        className="image-border"
        quality={80}
      />
      <div className="image-text">{props.name}</div>

      <div className="image-hover"></div>
    </div>
  );
};

export default DisplayImage;
