import React from "react";
import { Link } from "react-router-dom";
import { Masonry } from "masonic";
import classes from "./Photo.module.css";

const Photo = (props) => {
  return (
    <Masonry
      items={props.images}
      columnWidth={360}
      rowGutter={20}
      render={MasonryCard}
    />
  );
};

const MasonryCard = ({ data: { id, src } }) => {
  return (
    <div className={classes["cover"]} key={id}>
      <Link to={`/photos/${id}`}>
        <img src={src} alt="Fetched from Picsum.photos API" />
      </Link>
    </div>
  );
};

export default Photo;
