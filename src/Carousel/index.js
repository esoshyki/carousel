import React, { useRef, useEffect, useState } from "react";
import classes from './style.module.sass';
import slides from './slides/slides';
import Slide from './slides/Slide';
import leftArrow from '../assets/icons/leftArrow.png';
import rightArrow from '../assets/icons/rightArrow.png';
import getChunks from './lib/array.chunk';

const transition = '1s ease-out';
let touchx = 0;

const Carousel = ({
  slidesCount = 1,
  slidesPadding = 10
  }) => {

  const containerNode = useRef(null);
  const slidesNode = useRef();
  const chunkNode = useRef();

  const [_slideWidth, setSlideWidth] = useState("100%");
  const [_slideHeight, setSlideHeight] = useState("100%");
  const [currentChunk, setCurrentChunk] = useState(0);
  const [chunks, setChunks] = useState(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [disable, setDisable] = useState(false);

  const resize = () => {
    const containerWidth = containerNode.current.offsetWidth;
    const containerHeight = containerNode.current.offsetHeight;
    setLeft(-containerWidth);
    setWidth(containerWidth);
    setHeight(containerHeight);
    setSlideWidth(containerWidth / slidesCount);
    setSlideHeight(containerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
  }, []);


  useEffect(() => {
    const chunks = getChunks({
      array: slides, 
      size: slidesCount,
      current: currentChunk
    });
    setChunks(chunks);
    setLeft(-width);
  }, [currentChunk])

  useEffect(resize, [slidesCount]);

  const slideToLeft = () => {
    console.log('slide to left')
    setLeft(left - width);
    setDisable(true);
    setTimeout(() => {
      setCurrentChunk(currentChunk + 1)
    }, 1050)
  };

  const slideToRight = () => {
    console.log('slide to right')
    setLeft(left + width);
    setDisable(true);
    setTimeout(() => {
      const newChunk = currentChunk - 1;
      if (newChunk >= 0) {
        setCurrentChunk(newChunk)
      } else {
        const maxChunks = Math.round(slides.length / slidesCount);
        setCurrentChunk(maxChunks - 1)
      }
    }, 1050)
  };

  const Chunk = ({chunk, _ref}) => {
    return (
      <div 
        className={classes.chunk}
        ref={_ref || null}
        style={{
          color: "red",
          width: width,
          height: height
        }}>
        {chunk && chunk.map((slide, key) => {
          const { title, description, link, background, Content } = slide;
  
          return <Slide 
            title={title} 
            description={description}
            link={link}
            background={background}
            key={key}
            width={_slideWidth}
            height={_slideHeight}
            padding={slidesPadding}
            Content={Content}
            />
        })}
      </div>
    )
  };

  const transitionEnd = () => {
    slidesNode.current.style.transition = null;
    setDisable(false);
    setTimeout(() => {
      slidesNode.current.style.transition = transition;
      setDisable(false);   
    }, 100)
  };

  const onTouchStart = e => {
    console.log(touchx)
    const x = e.changedTouches[0].pageX;
    touchx = x;
  };

  const onTouchMove = e => {
    console.log('touchmove')
    const x = e.changedTouches[0].pageX;
    const distance = x - touchx;
    slidesNode.current.style.left = `${left + distance}px`;
  };

  const onTouchEnd = e => {
    slidesNode.current.style.left = `${left}px`;
    console.log('touchend')
    touchx = 0;
  }

  return (
    <div 
      className={classes.root} 
      ref={containerNode}
      onTouchStartCapture={onTouchStart}
      onTouchMoveCapture={onTouchMove}
      onTouchEnd={onTouchEnd}
      >
      
      <div className={classes.controls}>
        <div 
          className={classes.leftArrow} 
          style={{backgroundImage: `url(${leftArrow})`}}
          onClick={disable ? null : slideToRight}
          />
        <div 
          className={classes.rightArrow} 
          style={{backgroundImage: `url(${rightArrow})`}}
          onClick={disable ? null : slideToLeft}
          />
      </div>

      <div className={classes.carousel} 
        ref={slidesNode}
        onTransitionEnd={transitionEnd}
        style={{
        left: left,
        transition: transition
      }}>

        {chunks && <Chunk chunk={chunks.prev}/>}
        {chunks && <Chunk chunk={chunks.cur} _ref={chunkNode}/>}
        {chunks && <Chunk chunk={chunks.next}/>}
      </div>
    </div>
  )
}

export default Carousel