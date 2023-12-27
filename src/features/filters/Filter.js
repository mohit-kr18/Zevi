import classes from './Filter.module.css'
import dropDown from '../../assets/dropDown.svg'
import BrandFilter from './components/BrandFilter';
import PriceFilter from './components/PriceFilter';
import Rating from './components/Rating';

const Filter = () => {
    return (
      <div className={classes.filters}>
        <div className={classes.brand_section}>
          <div className={classes.brand_heading}>
            <h4>BRAND</h4>
            <img src={dropDown} alt="drop down" />
          </div>
          <BrandFilter />
        </div>
        <hr style={{ color: "#cccccc" }} />
        <div className={classes.price_section}>
          <div className={classes.price_heading}>
            <h4>PRICE RANGE</h4>
            <img src={dropDown} alt="drop down" />
          </div>
          <PriceFilter />
        </div>
        <hr style={{ color: "#cccccc" }} />
        <div className={classes.rating_section}>
          <div className={classes.rating_heading}>
            <h4>RATINGS</h4>
            <img src={dropDown} alt="drop down" />
          </div>
          <Rating />
        </div>
      </div>
    );
}

export default Filter