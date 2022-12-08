import React, { useState, useEffect } from "react";
import Photo from "../../components/Photo/Photo";
import classes from "./Home.module.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMoreImages = async () => {
      const url = `https://picsum.photos/v2/list?page=${page}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Response Error");
      const data = await response.json();
      const newImages = data.map((image) => {
        const width = 360;
        const height = Math.floor(image.height / (image.width / 360));
        const src = `https://picsum.photos/id/${image.id}/${width}/${height}`;
        return {
          id: image.id,
          width,
          height,
          src,
        };
      });
      setImages((prev) => [...prev, ...newImages]);
    };
    loadMoreImages().catch((error) => console.log(error));
  }, [page]);

  const loadMoreHandler = () => setPage((prev) => prev + 1);

  return (
    <section>
      <Photo images={images} />
      <button className={classes["load-more-btn"]} onClick={loadMoreHandler}>
        Load More
      </button>
    </section>
  );
};

export default Home;
