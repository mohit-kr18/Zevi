import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SearchResult from './features/searchResult/SearchResult';


function App() {
  return (
    <div className="App">
     {/* <Home />
    <SearchResult /> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
