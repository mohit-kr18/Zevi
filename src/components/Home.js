import TrendingModal from '../trending/TrendingModal';
import Header from './Header';
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.home}>
           <Header />
           <TrendingModal />
        </div>
    )
}

export default Home;