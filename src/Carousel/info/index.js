import React from 'react';
import classes from './style.module.sass';
import dash from '../../assets/images/dash.png';

const Info = ({chunks, currentChunk}) => {

  return (
    <div className={classes.root}>
      {chunks && new Array(chunks).fill(0).map((_, idx) => {
        return <div className={idx === currentChunk % chunks ? classes.selectedChunk : classes.simpleChunk} />
      })}
    </div>
  )
};

export default Info;