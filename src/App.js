import './App.css';
import { Route, Routes } from "react-router-dom";
import FrontPage from './Components/FrontPage/FrontPage'


function App() {
  return (
    <div className="App">
      <h1 className='pageTitle'>New New York Times</h1>
      <p>Literally More News Than is Fit to Print</p>
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
      </Routes>
    </div>
  );
}

export default App;
