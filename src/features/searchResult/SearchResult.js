import Filter from '../filters/Filter'
import Product from '../products/Product'
import classes from './SearchResult.module.css'

const SearchResult = () => {
    return (
        <div className={classes.search_result}>
            <h1 className={classes.heading}>Search Results</h1>
            <div className={classes.filter_products}>
                <Filter />
                <Product />
            </div>
        </div>
    )
}

export default SearchResult