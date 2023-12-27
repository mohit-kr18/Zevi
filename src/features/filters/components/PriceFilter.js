import classes from './PriceFilter.module.css'

const PriceFilter = () => {
    return (
        <div className={classes.price}>
            <div className={classes.price_range}>
                <input type="checkbox" />
                <label>Under 500</label>
            </div>
            <div className={classes.price_range}>
                <input type="checkbox" />
                <label>1000 to 3000</label>
            </div>
        </div>
    )
}

export default PriceFilter;