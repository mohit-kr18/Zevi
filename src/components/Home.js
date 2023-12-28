
import classes from './Home.module.css'
import SearchBar from './SeachBar';
import zevilogo from "../assets/zevilogo.png";
import { useState } from 'react';
import TrendingModal from '../trending/TrendingModal';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const pathname = window.location.pathname;

    const openModal = () => {
    setShowModal((prev) => !prev);
    };


    return (
      <>
        <div className={classes.home}>
          <div className={classes.logo}>
            <img src={zevilogo} alt="zevi log" className={classes.logo} />
          </div>
          <div className={classes.search_wrapper}>
              <SearchBar openModal={openModal} />
              {showModal && pathname === "/" && <TrendingModal />}
          </div>
        </div>
      </>
    );
}

export default Home;