import React, { useRef, useEffect, useState } from "react";
import classes from './style.module.sass';
import slides from './slides/slides';
import Slide from './slides/Slide';
import leftArrow from '../assets/icons/leftArrow.png';
import rightArrow from '../assets/icons/rightArrow.png';


const Carousel = ({
  slidesCount = 1,
  slidesPadding = 10
  }) => {

  const containerNode = useRef(null);
  const slidesNode = useRef();

  const [_slideWidth, setSlideWidth] = useState("100%");
  const [_slideHeight, setSlideHeight] = useState("100%");
  const [currentSlide, setCurrentSlide] = useState(0);

  const resize = () => {
    const carouselWidth = containerNode.current.offsetWidth;
    const carouselHeight = containerNode.current.offsetHeight;

    setSlideWidth(carouselWidth / slidesCount);
    setSlideHeight(carouselHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resize)
  }, []);

  useEffect(() => {
    const left = currentSlide * _slideWidth;
    slidesNode.current.style.left = `${-left}px`;
  }, [currentSlide])

  useEffect(resize, slidesCount);

  const slideToLeft = () => {
    if (currentSlide + slidesCount < slides.length) {
      setCurrentSlide(currentSlide + slidesCount)
    };
  };

  const slideToRight = () => {
    if (currentSlide - slidesCount >= 0) {
      setCurrentSlide(currentSlide - slidesCount)
    };
  };

  return (
    <div className={classes.root} ref={containerNode}>

      <div className={classes.carousel} 
        ref={slidesNode}
        style={{
        left: 0
      }}>

        <div className={classes.controls}>
          <div 
            className={classes.leftArrow} 
            style={{backgroundImage: `url(${leftArrow})`}}
            onClick={slideToRight}
            />
          <div 
            className={classes.rightArrow} 
            style={{backgroundImage: `url(${rightArrow})`}}
            onClick={slideToLeft}
            />
        </div>

        {slides && slides.map((slide, key) => {
          const { title, description, link, background } = slide;
          return <Slide 
                  title={title} 
                  description={description}
                  link={link}
                  background={background}
                  key={key}
                  width={_slideWidth}
                  height={_slideHeight}
                  padding={slidesPadding}
                  />})}
      </div>
    </div>
  )
}

export default Carousel