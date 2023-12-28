import SearchBar from '../../components/SeachBar'
import Filter from '../filters/Filter'
import Product from '../products/Product'
import classes from './SearchResult.module.css'
import zevilogo from "../../assets/zevilogo.png";

const SearchResult = () => {
    return (
        <div className={classes.search_result_wrapper}>
            <div className={classes.search_header}>
                <div className={classes.search}>
                    <SearchBar />
                </div>
                <div className={classes.logo}>
                    <img src={zevilogo} alt="zevi log" className={classes.logo} />
                </div>    
            </div>
            <div className={classes.search_result}>
                <h1 className={classes.heading}>Search Results</h1>
                <div className={classes.filter_products}>
                    <div className={classes.filter}>
                      <Filter />
                    </div>
                    <div className={classes.product}>
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult