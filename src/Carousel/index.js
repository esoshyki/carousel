import React, { useRef, useEffect, useState } from "react";
import classes from './style.module.sass';
import leftArrow from '../assets/icons/leftArrow.png';
import rightArrow from '../assets/icons/rightArrow.png';
import getChunks from './lib/array.chunk';
import Info from './info';

const transition = '1s ease-out';
const Carousel = ({
  slidesCount = 1,
  direction= "row",
  slides
  }) => {

  const containerNode = useRef(null);
  const slidesNode = useRef();
  const chunkNode = useRef();
  const startTouch = useRef();
  const isMouseDown = useRef(false);

  const [_slideWidth, setSlideWidth] = useState("100%");
  const [_slideHeight, setSlideHeight] = useState("100%");
  const [currentChunk, setCurrentChunk] = useState(0);
  const [chunksCount, setChunksCount] = useState(Math.round(slides.length / slidesCount))
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
    setLeft(left - width);
    setDisable(true);
    setTimeout(() => {
      setCurrentChunk(currentChunk + 1)
    }, 1050)
  };

  const slideToRight = () => {
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

  /* CHUNK. 
  
  I tried to implement an assignment about multiple slides on a page using chunks.
  The idea was that with every change of Carousel state in part of slides, 
  we get three chunks of slides depending on the slides count, that we get from 
  prop's parameter, and which tells us, how many slides we must show on out page 
  together.

  We get previous chunk, current and next. This way I have implemented an infinite carousel loop,
  and it allows you to keep in DOM only three parts on slides in potentially huge carousel
  of slides.

  It's seems to me, that a haven't understand you correctly. 
  If anything, write me, I'll try do to this as You need

*/

  const Chunk = ({chunk, _ref}) => {
    return (
      <div 
        className={classes.chunk}
        ref={_ref || null}
        style={{
          width: width,
          height: height,
          flexDirection: direction
        }}>
        {chunk && chunk.map((Slide, key) => {
 
          return <Slide key={key}/>
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

  const startSwipe = e => {
    if (e.type === "mousedown") {
      isMouseDown.current = true;
    };
    slidesNode.current.style.transition = null;
    const x = e.type === "touchstart" ? e.changedTouches[0].pageX : e.pageX;
    startTouch.current = x;
  };

  const moveSwipe = (e) => {
    if (e.type === "mousemove" && !isMouseDown.current) {
      return
    };
    const x = e.type === "touchmove" ? e.changedTouches[0].pageX : e.pageX;
    const distance = x - startTouch.current;
    const changeSlideWidth = containerNode.current.offsetWidth / 3;
    if (Math.abs(distance) > changeSlideWidth ) {
      slidesNode.current.style.transition = transition;
      isMouseDown.current = false;
      if (distance < 0) {
        slideToLeft()
      } else {
        slideToRight()
      }
    }
    slidesNode.current.style.left = `${left + distance}px`;
  };

  const endSwipe = e => {
    if (e.type === "mouseup") {
      isMouseDown.current = false;
    };
    slidesNode.current.style.transition = transition;
    slidesNode.current.style.left = `${left}px`;
  };

  const setSelectedChunk = (idx) => {
    slidesNode.current.style.transition = transition;
    slidesNode.current.classList.add("disapear");
    setTimeout(() => {
      setCurrentChunk(idx);
      slidesNode.current.classList.remove("disapear");
      slidesNode.current.classList.add("appear");
      setTimeout(() => {
        slidesNode.current.classList.remove("appear")
      })
    }, 500);

  };

  return (
    <div 
      className={classes.root} 
      ref={containerNode}
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

      <div className={classes.info}>
        <Info 
          chunks={chunksCount} 
          currentChunk={currentChunk} 
          setChunk={setSelectedChunk}/>
      </div>

      <div className={classes.carousel}
        ref={slidesNode}
        onTransitionEnd={transitionEnd}
        onTouchStart={startSwipe}
        onMouseDown={startSwipe}
        onTouchEnd={endSwipe}
        onTouchMove={moveSwipe}
        onMouseMove={moveSwipe}
        onMouseUp={endSwipe}
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