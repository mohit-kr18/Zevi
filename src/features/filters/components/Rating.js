import classes from './Rating.module.css'
// import onestar from '../../../assets/onestar.jpg'
// import twostar from '../../../assets/twostar.jpg'
// import threestar from '../../../assets/threestar.jpg'
// import fourstar from '../../../assets/fourstar.jpg'
import fivestar from '../../../assets/fivestar.svg'


const Rating = () => {
    return (
      <div className={classes.rating}>
        <div className={classes.star}>
          <input type="checkbox" />
          <label>
            <img src={fivestar} alt="five star" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" />
          <label>
            <img src={fivestar} alt="four star" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" />
          <label>
            <img src={fivestar} alt="three star" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" />
          <label>
            <img src={fivestar} alt="two star" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" />
          <label>
            <img src={fivestar} alt="one star" />
          </label>
        </div>
      </div>
    );
}

export default Rating