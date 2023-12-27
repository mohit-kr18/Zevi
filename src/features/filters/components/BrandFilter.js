import classes from './BrandFilter.module.css'

const BrandFilter = () => {
    return (
      <div className={classes.brand}>
            <div className={classes.brand_item}>
                <input type="checkbox" />
                <label>Mango</label>
            </div>
            <div className={classes.brand_item}>
                <input type="checkbox" />
                <label>H&M</label>
            </div>
      </div>
    )
}

export default BrandFilter;