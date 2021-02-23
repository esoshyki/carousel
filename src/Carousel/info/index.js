import React from 'react';
import classes from './style.module.sass';

const Info = ({chunks, currentChunk, setChunk}) => {

  const chunksCount = chunks > 5 ? 5 : chunks;
  const last = chunks - 1;

  const half = Math.floor(chunks / 2);

  let start = 0;
  let current = 0;

  if (currentChunk + half > last ) {
    current = currentChunk;
    start = chunks - chunksCount;
  } else if (currentChunk - half < 0) {
    current = currentChunk;
    start = 0;
  } else {
    start = currentChunk - half;
    current = start + half
  }

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