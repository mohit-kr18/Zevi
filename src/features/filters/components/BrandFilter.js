import { useDispatch, useSelector } from 'react-redux';
import classes from './BrandFilter.module.css'
import { toggleBrand, toggleFilters } from '../../../app/Slices/filterItemSlice';
import { useEffect } from 'react';

const BrandFilter = () => {
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.filterItem.brand);
//   console.log(brand);

  const price = useSelector((state) => state.filterItem.price);
  // console.log(price)

  const rating = useSelector((state) => state.filterItem.rating);
  // console.log(rating)

  useEffect(() => {
    dispatch(toggleFilters({brands, price, rating}))
  }, [brands, price, rating]);

  const handleBrand = (e) => {
    dispatch(toggleBrand(e.target.nextSibling.innerHTML));
  };

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