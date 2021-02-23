import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';
import Carousel from './Carousel';
import slides from './Carousel/slides/slides';

ReactDOM.render(
  <Carousel 
    slides={slides} 
    slidesCount={1} 
    />,
  document.getElementById('root')
);