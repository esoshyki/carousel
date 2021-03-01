import React from 'react';
import classes from './style.module.sass';
import background from '../../../assets/images/spices.jpg';

const Spices = () => <div className={classes.root} style={{
  background: `url(${background})`,
}}>
  <h5 className={classes.title}>Spices</h5>
  <p className={classes.description}>The Spice House has spent over 60 years curating a global network of premium spice growers to offer unrivaled quality, selection, and freshness. Over this time, the spices in this collection represent the spices our customers return to over and over again. If there's one spice you should buy from the Spice House, make it our spicy and sweet Saigon cinnamon. After that, try our expertly-crafted proprietary spice blends like Back of the Yards, Lake Shore Drive, and Gateway to the North which have become indispensable kitchen essentials for nearly all of our customers.</p>
  <div className={classes.linkContainer}>
    <a className={classes.link} href="/">
      Get more info...
    </a>
  </div>
</div>

export default Spices;