import './App.css';
import { Route, Routes } from "react-router-dom";
import FrontPage from './Components/FrontPage/FrontPage'
import SideBar from './Components/SideBar/SideBar';


function App() {
  return (
    <div className="App">
      <h1 className='pageTitle'>New New York Times</h1>
      <p>Literally More News Than is Fit to Print</p>
      <div className='mainContent'>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<FrontPage frontPage={true}/>} />
          <Route path="/:id" element={<FrontPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
