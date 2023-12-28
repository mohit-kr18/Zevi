import Header from '../../components/Header'
import SearchBar from '../../components/SeachBar'
import Filter from '../filters/Filter'
import Product from '../products/Product'
import classes from './SearchResult.module.css'

const SearchResult = () => {
    return (
        <div className={classes.search_result_wrapper}>
            <div className={classes.search_header}>
                <SearchBar />
                <Header />
            </div>
            <div className={classes.search_result}>
                <h1 className={classes.heading}>Search Results</h1>
                <div className={classes.filter_products}>
                    <Filter />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default SearchResult