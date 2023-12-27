import classes from './SearchBar.module.css'
import search from '../assets/search.svg'


const SearchBar = () => {
  
    return (
        <div className={classes.SearchBar}>
                <div className={classes.SearchBar_wrapper}> 
                    <input type="text" className={classes.input_field} placeholder='Search'/>
                     <img src={search} className={classes.search_icon} alt="search" />
                </div>
        </div>
    );
}

export default SearchBar;