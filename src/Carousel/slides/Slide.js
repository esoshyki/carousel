import React from 'react'
import classes from './slide.module.sass';

const Slide = ({
  background,
  title,
  description,
  link,
  width,
  height,
  padding
}) => {
  console.log(width)
  return (
    <div className={classes.root} style={{
      background: background,
      width, height, paddingLeft: padding, paddingRight: padding
    }}>
      <h5 className={classes.title}>{title}</h5>
      <p className={classes.description}>{description}</p>
      <div className={classes.linkContainer}>
        <a className={classes.link} href={link.href}>
          {link.label}
        </a>
      </div>
    </div>
  )
};

export default Slide