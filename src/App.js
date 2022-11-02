import './App.css';
import { Route, Routes } from "react-router-dom";
import FrontPage from './Components/FrontPage/FrontPage'
import SideBar from './Components/SideBar/SideBar';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchBar />  
      <h1 className='pageTitle'>New New York Times</h1>
      <p>Literally More News Than is Fit to Print</p>
      <hr></hr>
      <div className='mainContent'>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<FrontPage frontPage={true}/>} />
          <Route path="/:id" element={<FrontPage />} />
          <Route path="/Search/:id" element={<SearchResults />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
