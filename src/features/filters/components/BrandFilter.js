import { useDispatch, useSelector } from 'react-redux';
import classes from './BrandFilter.module.css'
import { toggleBrand } from '../../../app/Slices/filterItemSlice';

const BrandFilter = () => {

    const dispatch = useDispatch();

    const brand = useSelector((state) => state.filterItem.brand);
    console.log(brand)

    const handleBrand = (e) => {
        dispatch(toggleBrand(e.target.nextSibling.innerHTML));
    }    

    return (
      <div className={classes.brand}>
        <div className={classes.brand_item}>
          <input type="checkbox" onClick={handleBrand} />
          <label>Mango</label>
        </div>
        <div className={classes.brand_item}>
          <input type="checkbox" onClick={handleBrand} />
          <label>H and M</label>
        </div>
      </div>
    );
}

export default BrandFilter;