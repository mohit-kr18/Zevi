import classes from './Header.module.css'
import zevilogo from '../assets/zevilogo.png'
// import SearchBar from './SeachBar';

const Header = () => {
    return (
      <div className={classes.header}>
            {/* <SearchBar />    */}
        <img src={zevilogo} alt="zevi log" className={classes.logo}/>
      </div>
    );
}

export default Header