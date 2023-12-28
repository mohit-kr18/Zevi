import Header from './Header';
import classes from './Home.module.css'
import SearchBar from './SeachBar';

const Home = () => {
    return (
        <div className={classes.home}>
           <Header />
           <SearchBar />
        </div>
    )
}

export default Home;