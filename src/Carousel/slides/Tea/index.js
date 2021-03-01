import React from 'react';
import classes from './style.module.sass';
import background from '../../../assets/images/tea.jpg';

const Tea = () => <div className={classes.root} style={{
  background: `url(${background})`,
}}>
  <h5 className={classes.title}>Tea</h5>
  <p className={classes.description}>Imagine the perfect tea. Its unique bouquet is rich in shades, the infusion is deep and bright, the aroma is subtle and expressive.</p>
  <div className={classes.linkContainer}>
    <a className={classes.link} href="/">
      Get more info...
    </a>
  </div>
</div>;

export default Tea;