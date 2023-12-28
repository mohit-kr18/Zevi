import classes from './SearchBar.module.css'
import search from '../assets/search.svg'
// import TrendingModal from '../trending/TrendingModal';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = ({openModal}) => {
    
    
    const [searchTerm, setSearchTerm] = useState('');

   
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
    const navigate = useNavigate();
   

    const handleSearch = () =>{
        if(searchTerm){
            navigate('/search')
        }
    }

    return (
      <div className={classes.SearchBar}>
        <div className={classes.SearchBar_wrapper}>
          <input
            type="text"
            className={classes.input_field}
            placeholder="Search"
            onFocus={openModal}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <img
            src={search}
            className={classes.search_icon}
            alt="search"
            onClick={handleSearch}
          />
        </div>
       
      </div>
    );
}

export default SearchBar;