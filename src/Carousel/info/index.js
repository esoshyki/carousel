import React from 'react';
import classes from './style.module.sass';
import dash from '../../assets/images/dash.png';

const Info = ({chunks, currentChunk, setChunk}) => {

  return (
    <div className={classes.root}>
      {chunks && new Array(chunks).fill(0).map((_, idx) => {
        return <div 
                className={idx === currentChunk % chunks ? classes.selectedChunk : classes.simpleChunk} 
                onClick={() => setChunk(idx)}
                />
      })}
    </div>
  )
};

export default Info;