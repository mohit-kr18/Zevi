import classes from './Rating.module.css'
import onestar from '../../../assets/onestar.jpg'
import twostar from '../../../assets/twostar.jpg'
import threestar from '../../../assets/threestar.jpg'
import fourstar from '../../../assets/fourstar.jpg'
import fivestar from '../../../assets/fivestar.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleRating } from '../../../app/Slices/filterItemSlice'


const Rating = () => {

    const dispatch = useDispatch();
    const rating = useSelector((state) => state.filterItem.rating);
    // console.log(rating)

    const handleRating = (e) => {
        // dispatch(toggleRating(e.target.nextSibling.innerHTML));
        const altValue = e.target.nextSibling.querySelector("img").alt;
        dispatch(toggleRating(altValue));
    }

    return (
      <div className={classes.rating}>
        <div className={classes.star}>
          <input type="checkbox" onClick={handleRating}/>
          <label>
            <img src={fivestar} alt="5" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" onClick={handleRating}/>
          <label>
            <img src={onestar} alt="4" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" onClick={handleRating}/>
          <label>
            <img src={threestar} alt="3" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" onClick={handleRating}/>
          <label>
            <img src={twostar} alt="2" />
          </label>
        </div>
        <div className={classes.star}>
          <input type="checkbox" onClick={handleRating}/>
          <label>
            <img src={fourstar} alt="1" />
          </label>
        </div>
      </div>
    );
}

export default Rating