import React from 'react';
import classes from './style.module.sass';
import background from '../../../assets/images/coffee.jpg';

const Coffie = () => <div className={classes.root} style={{
  background: `url(${background})`,
}}>
  <h5 className={classes.title}>Coffie</h5>
  <p className={classes.description}>Our products a widely known all over the World</p>
  <div className={classes.linkContainer}>
    <a className={classes.link} href="/">
      Get more info...
    </a>
  </div>
</div>

export default Coffie