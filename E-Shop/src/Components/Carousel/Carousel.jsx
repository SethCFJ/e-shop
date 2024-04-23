import React from "react";
import styles from "./Carousel.module.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carousel}>
      <BsArrowLeftCircleFill onClick={prevSlide} className={styles.arrowLeft} />
      {data.map((item, i) => {
        return (
          <div
            className={slide === i ? styles.container : styles.hidden}
            key={item.id}
          >
            <Link to={`/products/${item.id}`}>
              <img className={styles.img} src={item.imageLink} />
            </Link>
            <div className={styles.text}>
              <h1 className={styles.text__name}>{item.name}</h1>

              <h3 className={styles.text__price}>Price: ${item.price}</h3>
            </div>
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={styles.arrowRight}
      />
      <span className={styles.indicators}>
        {data.map((_, i) => {
          return (
            <button
              key={i}
              className={
                slide === i
                  ? styles.indicators__buttons
                  : styles.indicators__buttons__inactive
              }
              onClick={() => setSlide(i)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
