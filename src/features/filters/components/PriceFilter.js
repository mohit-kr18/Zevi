import { useDispatch,  } from 'react-redux';
import { togglePrice } from '../../../app/Slices/filterItemSlice';
import classes from './PriceFilter.module.css'

const PriceFilter = () => {

    const dispatch = useDispatch();

   

    const handlePrice = (e) => {
        dispatch(togglePrice(e.target.nextSibling.innerHTML));
    }

    return (
        <div className={classes.price}>
            <div className={classes.price_range}>
                <input type="checkbox" onClick={handlePrice}/>
                <label>Under 500</label>
            </div>
            <div className={classes.price_range}>
                <input type="checkbox" onClick={handlePrice}/>
                <label>1000 to 3000</label>
            </div>
        </div>
    )
}

export default PriceFilter;